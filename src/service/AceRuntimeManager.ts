import * as ace from "ace-builds";
import { App, PluginManifest, requestUrl } from "obsidian";

export class AceRuntimeManager {
	/** Ace 版本号（用于 CDN URL） */
	static readonly ACE_VERSION = "1.44.0";
	static readonly ACE_CDN = `https://cdn.jsdelivr.net/npm/ace-builds@${AceRuntimeManager.ACE_VERSION}/src-noconflict`;

	private readonly app: App;
	private readonly pluginId: string;

	constructor(app: App, manifest: PluginManifest) {
		this.app = app;
		this.pluginId = manifest.id;
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

	/**
	 * 检查本地运行时文件是否完整
	 * 检测标记: mode-javascript.js + worker-javascript.js + snippets/javascript.js + keybinding-vim.js
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
				))
			);
		} catch {
			return false;
		}
	}

	/**
	 * 初始化 Ace 运行时加载器
	 * - 有本地包 → 注册自定义 loader 从 vault 读取文件
	 * - 没有 → 用 jsDelivr CDN
	 */
	async initAceModeBasePath() {
		const localExists = await this.checkAceModesExist();
		if (localExists) {
			// 注册自定义模块加载器：绕过 ace.config.set() 的 key 校验，直接写内部存储
			const aceConfig = ace.config as any;
			aceConfig.$values = aceConfig.$values || {};
			aceConfig.$values.loader = async (
				moduleName: string,
				afterLoad: (err: Error | null, module?: unknown) => void,
			) => {
				try {
					const parts = moduleName.split("/");
					if (parts[0] !== "ace") {
						afterLoad(null, undefined);
						return;
					}
					const type = parts[1];
					const name = parts.slice(2).join("-");
					let filePath: string;
					if (type === "worker") {
						filePath = `${this.aceWorkersDir}/${type}-${name}.js`;
					} else {
						filePath = `${this.aceModesDir}/${type === "keyboard" ? "keybinding" : type}-${name}.js`;
					}
					const content = await this.app.vault.adapter.read(filePath);
					const script = document.createElement("script");
					script.textContent = content;
					document.head.appendChild(script);
					afterLoad(null, undefined);
				} catch (e) {
					console.warn(`Ace 模块加载失败: ${moduleName}`, e);
					afterLoad(null, undefined);
				}
			};
			console.log("Ace 运行时: 使用本地包");
		} else {
			ace.config.set("modePath", AceRuntimeManager.ACE_CDN);
			ace.config.set("workerPath", AceRuntimeManager.ACE_CDN);
			ace.config.set("basePath", AceRuntimeManager.ACE_CDN);
			console.log("Ace 运行时: 使用 CDN（可在设置中下载到本地）");
		}
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
		const srcNoconflict = (tree.files ?? []).find(
			(f: any) => f.type === "directory" && f.name === "src-noconflict",
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
							(f: any) =>
								f.type === "file" && f.name.endsWith(".js"),
						)
						.map((f: any) => f.name);
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

		return { modes, workers, keybindings, snippetFiles };
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

		// 下载完成后不再需要设置 modePath，自定义 loader 会从 vault 读取
		console.log("Ace 运行时: 本地包下载完成");
	}
}
