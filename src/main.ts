import "@styles/styles";
import * as ace from "ace-builds";
import {
	Editor,
	Menu,
	Plugin,
	requestUrl,
	setIcon,
	TFile,
	TFolder,
} from "obsidian";
import { CreateCodeFile } from "./component/modal/CreateCodeFileModal.";
import { EditCodeBlock } from "./component/modal/EditCodeBlockModal";
import { QuickConfigModal } from "./component/suggest/QuickConfigModal";
import { SettingsBus } from "./hooks/useSettings";
import { LL } from "./i18n/i18n";
import SettingsStore from "./settings/SettingsStore";
import AceCodeEditorSettingTab from "./settings/SettingsTab";
import { EmbedCreator } from "./type/obsidian-extend";
import {
	CODE_EDITOR_VIEW_TYPE,
	DEFAULT_CONFIG,
	ICodeBlock,
	ICodeEditorConfig,
	SETTINGS_VIEW_TYPE,
	SNIPPETS_EDITOR_VIEW_TYPE,
} from "./type/types";
import { getCodeBlockAtCursor, updateCodeBlock } from "./utils/CodeBlock";
import { SnippetUtils } from "./utils/SnippetUtils";
import { CodeEditorView } from "./view/CodeEditorView";
import { CodeEmbedView } from "./view/CodeEmbedView";
import { SettingsView } from "./view/SettingsView";
import { SnippetsEditorView } from "./view/SnippetsEditorView";

export default class AceCodeEditorPlugin extends Plugin {
	settings: ICodeEditorConfig;
	statusBar: HTMLElement;
	readonly settingsStore = new SettingsStore(this);
	private snippetsFolder: string = SnippetUtils.getSnippetsFolder(this.app);

	async onload() {
		// 初始化 Ace 动态模块加载路径（语言模式等）
		await this.initAceModeBasePath();

		await this.loadSettings();

		this.registerLeafViews();
		this.registerMarkdownProcessor();

		this.addSettingTab(new AceCodeEditorSettingTab(this.app, this));

		this.registerEventHandlers();
		this.registerCommands();
		this.registerRibbonCommands();
	}

	onunload() {}

	async loadSettings() {
		const savedData = await this.loadData();
		this.settings = this.validateAndMergeSettings(savedData);
		this.saveSettings();
	}

	async saveSettings() {
		await this.saveData(this.settings);
		SettingsBus.publish();
		const leaves = this.app.workspace.getLeavesOfType(
			CODE_EDITOR_VIEW_TYPE,
		);
		leaves.forEach((leaf) => {
			const view = leaf.view;
			if (view instanceof CodeEditorView) {
				view.updateEditorConfig(this.settings);
			}
		});
	}

	private validateAndMergeSettings(savedData: unknown): ICodeEditorConfig {
		let validatedSettings = structuredClone(DEFAULT_CONFIG);

		try {
			if (savedData && typeof savedData === "object") {
				validatedSettings = {
					...validatedSettings,
					...savedData,
				};
			}
		} catch (error) {
			throw new Error("Failed to validate and merge settings" + error);
		}

		return validatedSettings;
	}

	private registerLeafViews() {
		try {
			this.registerView(CODE_EDITOR_VIEW_TYPE, (leaf) => {
				return new CodeEditorView(leaf, this);
			});

			this.registerView(SETTINGS_VIEW_TYPE, (leaf) => {
				return new SettingsView(leaf, this);
			});

			this.registerView(SNIPPETS_EDITOR_VIEW_TYPE, (leaf) => {
				return new SnippetsEditorView(leaf, this);
			});

			this.registerFileExtensions();

			this.registerEmbed(
				this.settings.supportExtensions,
				(ctx, file, subpath) => {
					return new CodeEmbedView(
						this,
						ctx.containerEl,
						file,
						subpath,
					);
				},
			);
		} catch (e) {
			throw new Error("Failed to register code editor view" + e);
		}
	}

	private registerMarkdownProcessor() {
		// 注册markdown后处理器，用于处理带行范围的双链
		this.registerMarkdownPostProcessor((element, context) => {
			// 查找所有的内部链接
			const links = element.querySelectorAll("a.internal-link");

			links.forEach((link: HTMLAnchorElement) => {
				const href = link.getAttribute("href");
				if (!href) return;

				// 检查是否包含行范围语法 (#L10 或 #L10-L20)
				const lineRangeMatch = href.match(/#L\d+(-L\d+)?$/i);
				if (!lineRangeMatch) return;

				// 获取文件路径（去掉行范围部分）
				const filePath = href.replace(/#L\d+(-L\d+)?$/i, "");

				// 检查文件是否为支持的扩展名
				const extension = filePath.split(".").pop()?.toLowerCase();
				if (
					!extension ||
					!this.settings.supportExtensions.includes(extension)
				) {
					return;
				}

				// 获取对应的文件
				const file = this.app.vault.getAbstractFileByPath(filePath);
				if (!(file instanceof TFile)) return;

				// 创建嵌入视图来替换链接
				const embedContainer = createDiv();
				embedContainer.addClass("ace-embed-container");

				// 创建CodeEmbedView
				const embedView = new CodeEmbedView(
					this,
					embedContainer,
					file,
					lineRangeMatch[0], // 传递行范围字符串作为subpath
				);

				// 替换原链接
				link.replaceWith(embedContainer);

				// 加载嵌入视图
				embedView.onload();
			});
		});
	}

	private registerEventHandlers() {
		this.registerEvent(
			this.app.workspace.on("file-menu", this.handleFileMenu.bind(this)),
		);

		this.registerEvent(
			this.app.workspace.on(
				"editor-menu",
				this.handleEditorMenu.bind(this),
			),
		);
	}

	private registerCommands() {
		this.addCommand({
			id: "createCodeFile",
			name: LL.command.create_code_file(),
			callback: async () => {
				const activeFile = this.app.workspace.getActiveFile();
				const folderPath = activeFile?.parent?.path || "";
				await this.createCodeFile(folderPath, true);
			},
		});

		this.addCommand({
			id: "openCssSnippetView",
			name: LL.command.open_css_snippet_manager(),
			callback: async () => {
				await this.openPluginView(SNIPPETS_EDITOR_VIEW_TYPE);
			},
		});

		this.addCommand({
			id: "openSettingsView",
			name: LL.command.open_settings_view(),
			callback: async () => {
				await this.openPluginView(SETTINGS_VIEW_TYPE);
			},
		});

		this.addCommand({
			id: "quickConfig",
			name: LL.command.quick_config(),
			callback: async () => {
				await this.openQuickConfig();
			},
		});
	}

	private registerRibbonCommands() {
		this.addRibbonIcon(
			this.settings.snippetsManager.icon,
			LL.command.open_css_snippet_manager(),
			async () => {
				await this.openPluginView(SNIPPETS_EDITOR_VIEW_TYPE);
			},
		);

		if (this.settings.snippetsManager.location) {
			this.app.workspace.onLayoutReady(() => {
				window.setTimeout(() => {
					this.statusBar = this.addStatusBarItem();
					this.statusBar.createDiv();
					this.statusBar.addClass("mod-clickable");
					this.statusBar.setAttribute("aria-label-position", "top");
					this.statusBar.setAttribute(
						"aria-label",
						LL.command.open_css_snippet_manager(),
					);
					setIcon(this.statusBar, this.settings.snippetsManager.icon);
					this.statusBar.addEventListener("click", async () => {
						await this.openPluginView(SNIPPETS_EDITOR_VIEW_TYPE);
					});
				}, 500);
			});
		}
	}

	private registerEmbed(extensions: string[], embedCreator: EmbedCreator) {
		this.app.embedRegistry.registerExtensions(extensions, embedCreator);
		this.register(() => {
			return this.app.embedRegistry.unregisterExtensions(extensions);
		});
	}

	private registerFileExtensions(): void {
		const supportedExtensions = this.settings.supportExtensions;

		supportedExtensions.map((ext) => {
			try {
				this.registerExtensions([ext], CODE_EDITOR_VIEW_TYPE);
			} catch (e) {
				console.error(`Failed to register extension ${ext}`, e);
			}
		});
	}

	private handleFileMenu(menu: Menu, file: TFile | TFolder): void {
		if (file instanceof TFolder) {
			menu.addItem((item) => {
				item.setTitle(LL.command.create_code_file())
					.setIcon("code-xml")
					.onClick(() => {
						this.createCodeFile(file.path);
					});
			});
		}

		if (file instanceof TFile) {
			menu.addItem((item) => {
				item.setTitle(LL.command.create_code_file())
					.setIcon("code-xml")
					.onClick(() => {
						this.createCodeFile(file.parent?.path || "");
					});
			});
			menu.addItem((item) => {
				item.setTitle(LL.command.open_in_code_editor())
					.setIcon("code-xml")
					.onClick(async () => {
						await this.openInCodeEditor(file.path, true);
					});
			});
		}
	}

	private handleEditorMenu(menu: Menu, editor: Editor): void {
		menu.addItem((item) => {
			item.setTitle(LL.command.edit_code_block())
				.setIcon("code-xml")
				.onClick(async () => {
					const cursor = editor.getCursor();
					const codeBlock = await getCodeBlockAtCursor(
						editor,
						cursor,
					);
					if (codeBlock) {
						await this.openCodeBlockEditor(codeBlock);
					}
				});
		});
	}

	async createCodeFile(
		folderPath?: string,
		allowFolderSelection: boolean = false,
	): Promise<void> {
		new CreateCodeFile(this, {
			folderPath,
			openInCodeEditor: (path: string, newTab: boolean) =>
				this.openInCodeEditor(path, newTab),
			allowFolderSelection,
		}).open();
	}

	async openSnippetFile(
		file: string,
		newTab: boolean = false,
	): Promise<void> {
		const adapter = this.app.vault.adapter;
		const exists = await adapter.exists(`${this.snippetsFolder}/${file}`);
		if (!exists) {
			return;
		}

		const leaf = this.app.workspace.getLeaf(newTab);
		await leaf.setViewState({
			type: SNIPPETS_EDITOR_VIEW_TYPE,
			state: { file: file },
		});
		this.app.workspace.setActiveLeaf(leaf);
	}

	async openCodeBlockEditor(codeBlock: ICodeBlock): Promise<void> {
		new EditCodeBlock(this, {
			codeBlock,
			onSave: (newCode: string) =>
				updateCodeBlock(
					this.app,
					codeBlock.range,
					newCode,
					codeBlock.indent,
				),
		}).open();
	}

	async openInCodeEditor(
		filePath: string,
		newTab: boolean = false,
	): Promise<void> {
		const leaf = this.app.workspace.getLeaf(newTab);
		await leaf.setViewState({
			type: CODE_EDITOR_VIEW_TYPE,
			state: { file: filePath },
		});
		this.app.workspace.setActiveLeaf(leaf);
	}

	async openQuickConfig(): Promise<void> {
		const modal = new QuickConfigModal(
			this.app,
			this.settings,
			(newSettings) => this.updateSettings(newSettings),
		);
		modal.open();
	}

	public getSettings() {
		return this.settings;
	}

	public async updateSettings(newSettings: Partial<ICodeEditorConfig>) {
		this.settings = {
			...this.settings,
			...newSettings,
		};
		await this.saveSettings();
	}

	public async openPluginView(viewType: string) {
		// 检查是否已经有打开的视图
		const existingLeaves = this.app.workspace.getLeavesOfType(viewType);

		if (existingLeaves.length > 0) {
			// 如果存在，则激活第一个视图
			this.app.workspace.revealLeaf(existingLeaves[0]);
		} else {
			// 如果不存在，则创建新的视图
			const leaf = this.app.workspace.getLeaf("tab");
			await leaf.setViewState({
				type: viewType,
				active: true,
			});

			this.app.workspace.revealLeaf(leaf);
		}
	}

	// ============================================================
	// Ace 运行时文件加载路径管理
	// ============================================================

	/** Ace 版本号（用于 CDN URL） */
	static readonly ACE_VERSION = "1.44.0";
	static readonly ACE_CDN = `https://cdn.jsdelivr.net/npm/ace-builds@${AceCodeEditorPlugin.ACE_VERSION}/src-noconflict`;

	/**
	 * 目录结构（相对于 vault 根）:
	 *   ace-modes/     → mode-*.js, keybinding-*.js, snippets/*.js
	 *   ace-workers/   → worker-*.js
	 */
	get aceModesDir(): string {
		return `${this.app.vault.configDir}/plugins/${this.manifest.id}/ace-modes`;
	}

	get aceWorkersDir(): string {
		return `${this.app.vault.configDir}/plugins/${this.manifest.id}/ace-workers`;
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
			ace.config.set("modePath", AceCodeEditorPlugin.ACE_CDN);
			ace.config.set("workerPath", AceCodeEditorPlugin.ACE_CDN);
			ace.config.set("basePath", AceCodeEditorPlugin.ACE_CDN);
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
		const apiUrl = `https://data.jsdelivr.com/v1/packages/npm/ace-builds@${AceCodeEditorPlugin.ACE_VERSION}`;
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
				url: `${AceCodeEditorPlugin.ACE_CDN}/${f}`,
			})),
			// keybinding-*.js → ace-modes/（basePath 会从这里找）
			...keybindings.map((f) => ({
				path: `${this.aceModesDir}/${f}`,
				url: `${AceCodeEditorPlugin.ACE_CDN}/${f}`,
			})),
			// worker-*.js → ace-workers/
			...workers.map((f) => ({
				path: `${this.aceWorkersDir}/${f}`,
				url: `${AceCodeEditorPlugin.ACE_CDN}/${f}`,
			})),
			// snippets/*.js → ace-modes/snippets/
			...snippetFiles.map((f) => ({
				path: `${this.aceModesDir}/snippets/${f}`,
				url: `${AceCodeEditorPlugin.ACE_CDN}/snippets/${f}`,
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
