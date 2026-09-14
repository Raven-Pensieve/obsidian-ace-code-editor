import { LL } from "@src/i18n/i18n";
import * as ace from "ace-builds";
import { App, Modal, Notice, PluginManifest, requestUrl } from "obsidian";
import {
	CUSTOM_ACE_MODE_FILES,
	excludeCustomAceModes,
	getCustomAceModeFile,
	isCustomAceModeModule,
} from "./AceRuntimeAssets";

/** jsDelivr API 返回的文件树节点 */
interface JsDelivrFileNode {
	type: "file" | "directory";
	name: string;
	files?: JsDelivrFileNode[];
	hash?: string;
	time?: string;
	size?: number;
}

export class AceRuntimeManager {
	/** Ace 版本号（用于 CDN URL） */
	static readonly ACE_VERSION = "1.44.0";
	static readonly ACE_CDN = `https://cdn.jsdelivr.net/npm/ace-builds@${AceRuntimeManager.ACE_VERSION}/src-noconflict`;
	private static readonly pendingModuleLoads = new Map<
		string,
		Promise<unknown>
	>();

	private readonly app: App;
	private readonly pluginId: string;
	private onSaveUseLocalAce?: (value: boolean) => Promise<void>;
	private readonly originalLoadModule?: AceConfigInternal["loadModule"];
	private runtimeInstalled = false;
	private runtimePromptOpen = false;

	constructor(app: App, manifest: PluginManifest) {
		this.app = app;
		this.pluginId = manifest.id;
		this.originalLoadModule = (
			ace.config as unknown as AceConfigInternal
		).loadModule?.bind(ace.config);
	}

	/**
	 * 注册持久化回调，用于保存 useLocalAce 状态到 data.json
	 */
	onSaveState(callback: (value: boolean) => Promise<void>) {
		this.onSaveUseLocalAce = callback;
	}

	/**
	 * 目录结构（相对于 vault 根）:
	 *   ace-modes/     → mode-*.js, keybinding-*.js, snippets/*.js
	 *   ace-workers/   → worker-*.js
	 */
	get aceModesDir(): string {
		return `${this.app.vault.configDir}/plugins/${this.pluginId}/ace-modes`;
	}

	get aceWorkersDir(): string {
		return `${this.app.vault.configDir}/plugins/${this.pluginId}/ace-workers`;
	}

	get aceModesUrl(): string {
		return `app://obsidian.md/plugins/${this.pluginId}/ace-modes`;
	}

	get aceWorkersUrl(): string {
		return `app://obsidian.md/plugins/${this.pluginId}/ace-workers`;
	}

	/**
	 * 检查本地运行时文件是否完整
	 * 检测标记: 标准运行时文件 + 仓库维护的自定义 mode
	 */
	async checkAceModesExist(): Promise<boolean> {
		try {
			return (
				(await this.app.vault.adapter.exists(
					`${this.aceModesDir}/mode-javascript.js`,
				)) &&
				(await this.app.vault.adapter.exists(
					`${this.aceWorkersDir}/worker-javascript.js`,
				)) &&
				(await this.app.vault.adapter.exists(
					`${this.aceModesDir}/snippets/javascript.js`,
				)) &&
				(await this.app.vault.adapter.exists(
					`${this.aceModesDir}/keybinding-vscode.js`,
				)) &&
				(await this.app.vault.adapter.exists(
					`${this.aceModesDir}/${CUSTOM_ACE_MODE_FILES[0]}`,
				))
			);
		} catch {
			return false;
		}
	}

	/**
	 * 初始化 Ace 运行时加载器。自定义 mode 始终从插件目录加载，
	 * 其余模块根据配置使用本地运行时或 CDN。
	 */
	async initAceModeBasePath(useLocalAce = true) {
		if (useLocalAce) {
			this.runtimeInstalled = await this.checkAceModesExist();
		}

		if (useLocalAce && this.runtimeInstalled) {
			this.setupLocalLoader();
			await this.onSaveUseLocalAce?.(true);
			console.log("Ace 运行时: 使用本地包");
			return;
		}

		this.setupCdnLoader();
		await this.onSaveUseLocalAce?.(false);
		console.log("Ace 运行时: 使用 CDN");
		if (useLocalAce) {
			console.warn("Ace 运行时: 本地包缺失，已回退 CDN");
			void this.promptInstallRuntime();
		}
	}

	private setupLocalLoader() {
		this.setupLocalPaths();
		this.installCustomModuleLoader(async (moduleName) => {
			return this.readLocalModule(moduleName);
		});
	}

	private setupLocalPaths() {
		ace.config.set("modePath", this.aceModesUrl);
		ace.config.set("workerPath", this.aceWorkersUrl);
		ace.config.set("basePath", this.aceModesUrl);
	}

	private setupCdnLoader() {
		ace.config.set("modePath", AceRuntimeManager.ACE_CDN);
		ace.config.set("workerPath", AceRuntimeManager.ACE_CDN);
		ace.config.set("basePath", AceRuntimeManager.ACE_CDN);
		this.installCustomModuleLoader(async (moduleName, moduleType) => {
			if (isCustomAceModeModule(moduleName)) {
				return this.readLocalModule(moduleName);
			}

			const sourceUrl = (
				ace.config as unknown as AceConfigInternal
			).moduleUrl?.(moduleName, moduleType);
			if (!sourceUrl) {
				throw new Error(`无法解析 Ace CDN 模块地址: ${moduleName}`);
			}
			const response = await requestUrl({ url: sourceUrl });
			return { content: response.text, sourceUrl };
		});
	}

	private installCustomModuleLoader(
		loadSource: (
			moduleName: string,
			moduleType?: string,
		) => Promise<{ content: string; sourceUrl: string }>,
	) {
		const aceConfig = ace.config as unknown as AceConfigInternal;
		const fallbackLoadModule = this.originalLoadModule;
		aceConfig.loadModule = (moduleId, onLoad) => {
			const moduleName =
				typeof moduleId === "string" ? moduleId : moduleId[1];
			const moduleType =
				typeof moduleId === "string" ? undefined : moduleId[0];

			if (!moduleName.startsWith("ace/") || moduleType === "worker") {
				fallbackLoadModule?.(moduleId, onLoad);
				return;
			}

			const aceRequire = (
				ace as unknown as { require?: (name: string) => unknown }
			).require;
			try {
				const loaded = aceRequire?.(moduleName);
				if (loaded) {
					onLoad?.(loaded);
					return;
				}
			} catch {
				// ignore and continue loading
			}

			const cacheKey = `${moduleType ?? "module"}:${moduleName}`;
			const pending =
				AceRuntimeManager.pendingModuleLoads.get(cacheKey) ??
				(async () => {
					const { content, sourceUrl } = await loadSource(
						moduleName,
						moduleType,
					);
					const script = activeDocument.createElement("script");
					script.textContent = `${content}\n//# sourceURL=${sourceUrl}`;
					activeDocument.head.appendChild(script);
					script.remove();
					return aceRequire?.(moduleName);
				})().finally(() => {
					AceRuntimeManager.pendingModuleLoads.delete(cacheKey);
				});

			AceRuntimeManager.pendingModuleLoads.set(cacheKey, pending);
			pending
				.then((module) => onLoad?.(module))
				.catch((error) => {
					console.warn(`Ace 模块加载失败: ${moduleName}`, error);
					onLoad?.(undefined);
				});
		};
	}

	private async readLocalModule(moduleName: string) {
		const filePath = this.getLocalModuleFilePath(moduleName);
		const content = await this.app.vault.adapter.read(filePath);
		return {
			content,
			sourceUrl: filePath.replace(/\\/g, "/"),
		};
	}

	private getLocalModuleFilePath(moduleName: string) {
		const customModeFile = getCustomAceModeFile(moduleName);
		if (customModeFile) {
			return `${this.aceModesDir}/${customModeFile}`;
		}

		const parts = moduleName.split("/");
		const type = parts[1];
		const name = parts.slice(2).join("-");
		if (type === "worker") {
			return `${this.aceWorkersDir}/${type}-${name}.js`;
		}
		if (type === "snippets") {
			return `${this.aceModesDir}/snippets/${name}.js`;
		}
		return `${this.aceModesDir}/${type === "keyboard" ? "keybinding" : type}-${name}.js`;
	}

	/**
	 * 从 CDN 动态列出 ace-builds 中需下载的文件
	 */
	async fetchAceBuildFiles(): Promise<{
		modes: string[];
		workers: string[];
		keybindings: string[];
		snippetFiles: string[];
	}> {
		const apiUrl = `https://data.jsdelivr.com/v1/packages/npm/ace-builds@${AceRuntimeManager.ACE_VERSION}`;
		const resp = await requestUrl({ url: apiUrl });
		const tree = resp.json;

		const modes: string[] = [];
		const workers: string[] = [];
		const keybindings: string[] = [];
		let snippetFiles: string[] = [];

		// 在根文件树中找到 src-noconflict 目录
		const srcNoconflict = ((tree.files ?? []) as JsDelivrFileNode[]).find(
			(f) => f.type === "directory" && f.name === "src-noconflict",
		);
		if (!srcNoconflict?.files) {
			throw new Error("jsDelivr API 返回结构异常: 未找到 src-noconflict");
		}

		for (const entry of srcNoconflict.files) {
			const name: string = entry.name;
			if (entry.type !== "file") {
				if (name === "snippets" && entry.files) {
					snippetFiles = entry.files
						.filter(
							(f) => f.type === "file" && f.name.endsWith(".js"),
						)
						.map((f) => f.name);
				}
				continue;
			}
			if (name.startsWith("mode-") && name.endsWith(".js")) {
				modes.push(name);
			} else if (name.startsWith("worker-") && name.endsWith(".js")) {
				workers.push(name);
			} else if (name.startsWith("keybinding-") && name.endsWith(".js")) {
				keybindings.push(name);
			}
		}

		return {
			modes: excludeCustomAceModes(modes),
			workers,
			keybindings,
			snippetFiles,
		};
	}

	/**
	 * 从 CDN 下载所有 Ace 运行时文件到插件本地目录
	 * 目录结构:
	 *   ace-modes/           ← modePath + basePath
	 *     mode-javascript.js
	 *     snippets/javascript.js
	 *   ace-workers/         ← workerPath
	 *     worker-javascript.js
	 * @param onProgress 进度回调 (已下载数, 总数)
	 */
	async downloadAceModes(
		onProgress?: (current: number, total: number) => void,
	): Promise<void> {
		const { modes, workers, keybindings, snippetFiles } =
			await this.fetchAceBuildFiles();

		const allFiles: { path: string; url: string }[] = [
			// mode-*.js → ace-modes/
			...modes.map((f) => ({
				path: `${this.aceModesDir}/${f}`,
				url: `${AceRuntimeManager.ACE_CDN}/${f}`,
			})),
			// keybinding-*.js → ace-modes/（basePath 会从这里找）
			...keybindings.map((f) => ({
				path: `${this.aceModesDir}/${f}`,
				url: `${AceRuntimeManager.ACE_CDN}/${f}`,
			})),
			// worker-*.js → ace-workers/
			...workers.map((f) => ({
				path: `${this.aceWorkersDir}/${f}`,
				url: `${AceRuntimeManager.ACE_CDN}/${f}`,
			})),
			// snippets/*.js → ace-modes/snippets/
			...snippetFiles.map((f) => ({
				path: `${this.aceModesDir}/snippets/${f}`,
				url: `${AceRuntimeManager.ACE_CDN}/snippets/${f}`,
			})),
		];

		const total = allFiles.length;

		// 创建目录
		for (const dir of [
			this.aceModesDir,
			this.aceWorkersDir,
			`${this.aceModesDir}/snippets`,
		]) {
			try {
				await this.app.vault.createFolder(dir);
			} catch {
				/* 目录可能已存在 */
			}
		}

		for (let i = 0; i < allFiles.length; i++) {
			try {
				const resp = await requestUrl({ url: allFiles[i].url });
				await this.app.vault.adapter.write(allFiles[i].path, resp.text);
			} catch (e) {
				console.warn(`下载失败: ${allFiles[i].url}`, e);
			}
			onProgress?.(i + 1, total);
		}

		const customModeExists = await this.app.vault.adapter.exists(
			`${this.aceModesDir}/${CUSTOM_ACE_MODE_FILES[0]}`,
		);
		if (!customModeExists) {
			throw new Error("插件缺少自定义 Ace HLSL mode 文件");
		}

		this.runtimeInstalled = true;
		this.setupLocalLoader();
		await this.onSaveUseLocalAce?.(true);
		new Notice(LL.setting.about.download_done());
		console.log("Ace 运行时: 本地包下载完成");
	}

	async isRuntimeInstalled() {
		this.runtimeInstalled = await this.checkAceModesExist();
		return this.runtimeInstalled;
	}

	async switchToCdn() {
		this.setupCdnLoader();
		await this.onSaveUseLocalAce?.(false);
	}

	private async promptInstallRuntime() {
		if (this.runtimePromptOpen || this.runtimeInstalled) {
			return;
		}
		this.runtimePromptOpen = true;
		new AceRuntimeInstallModal(
			this.app,
			async (onProgress) => {
				await this.downloadAceModes(onProgress);
			},
			() => {
				this.runtimePromptOpen = false;
			},
		).open();
	}
}

class AceRuntimeInstallModal extends Modal {
	private readonly onDownload: (
		onProgress: (current: number, total: number) => void,
	) => Promise<void>;
	private readonly onModalClose: () => void;
	private statusEl!: HTMLParagraphElement;
	private progressEl!: HTMLProgressElement;
	private downloadButton!: HTMLButtonElement;
	private laterButton!: HTMLButtonElement;

	constructor(
		app: App,
		onDownload: (
			onProgress: (current: number, total: number) => void,
		) => Promise<void>,
		onModalClose: () => void,
	) {
		super(app);
		this.onDownload = onDownload;
		this.onModalClose = onModalClose;
	}

	onOpen() {
		const { contentEl } = this;
		contentEl.empty();
		contentEl.createEl("h2", { text: LL.setting.about.runtime_files() });
		this.statusEl = contentEl.createEl("p", {
			text: LL.setting.about.cdn_loading(),
		});
		this.progressEl = contentEl.createEl("progress", {
			attr: { value: "0", max: "1" },
		});
		this.progressEl.addClass("ace-runtime-install-progress");

		const actions = contentEl.createDiv({
			cls: "ace-runtime-install-actions",
		});

		this.laterButton = actions.createEl("button", {
			text: LL.common.cancel(),
		});
		this.laterButton.onclick = () => this.close();

		this.downloadButton = actions.createEl("button", {
			text: LL.setting.about.download_btn(),
			cls: "mod-cta",
		});
		this.downloadButton.onclick = async () => {
			this.setDownloading(true);
			this.progressEl.show();
			try {
				await this.onDownload((current, total) => {
					this.progressEl.max = total;
					this.progressEl.value = current;
					this.statusEl.setText(
						LL.setting.about.downloading({ current, total }),
					);
				});
				this.close();
			} catch (error) {
				console.error("Ace runtime 下载失败:", error);
				new Notice(String(error));
				this.statusEl.setText(LL.setting.about.cdn_loading());
				this.setDownloading(false);
			}
		};
	}

	onClose() {
		this.onModalClose();
		this.contentEl.empty();
	}

	private setDownloading(downloading: boolean) {
		this.downloadButton.disabled = downloading;
		this.laterButton.disabled = downloading;
	}
}
