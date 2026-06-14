import { useSettings } from "@src/hooks/useSettings";
import AceCodeEditorPlugin from "@src/main";
import { getLanguageMode } from "@src/service/AceLanguages";
import { AceService } from "@src/service/AceService";
import { LineRange } from "@src/type/types";
import { parseLineRange } from "@src/utils/LineRange";
import { ExternalLink } from "lucide-react";
import { MarkdownRenderChild } from "obsidian";
import { createElement, useEffect, useMemo, useRef, useState } from "react";
import { createRoot, type Root } from "react-dom/client";

// ─── 远程嵌入容器 Props ───

interface RemoteEmbedContainerProps {
	plugin: AceCodeEditorPlugin;
	content: string;
	extension: string;
	range?: LineRange;
	sourceUrl: string;
}

const RemoteEmbedContainer: React.FC<RemoteEmbedContainerProps> = ({
	plugin,
	content,
	extension,
	range,
	sourceUrl,
}) => {
	const editorRef = useRef<HTMLDivElement>(null);
	const aceServiceRef = useRef<AceService | null>(null);
	const [lang, setLang] = useState<string>();

	const { settings } = useSettings(plugin);

	// 只在挂载时初始化一次编辑器，settings 变更不应导致重建
	useEffect(() => {
		if (!editorRef.current) return;

		const initialize = async () => {
			aceServiceRef.current = new AceService();
			if (!editorRef.current) return;
			const editor = aceServiceRef.current.createEditor(
				editorRef.current,
			);
			editor.setReadOnly(true);
			void aceServiceRef.current.configureEditor(settings, extension);

			if (range) {
				aceServiceRef.current.setValueWithLineRange(content, range);
			} else {
				aceServiceRef.current.setValue(content);
			}

			const contentLines = range
				? range.endLine - range.startLine + 1
				: content.split("\n").length;

			const editorHeight = Math.min(
				contentLines * (settings.fontSize + 4) + 20,
				settings.embedMaxHeight,
			);
			editorRef.current.style.height = `${editorHeight}px`;

			const languageMode = await getLanguageMode(extension);
			setLang(languageMode);
		};

		void initialize();

		return () => {
			aceServiceRef.current?.destroy();
			aceServiceRef.current = null;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps -- editor instance is intentionally created once per mount
	}, []);

	const displayLabel = useMemo(() => {
		if (range) {
			return range.startLine === range.endLine
				? `${lang} (Line ${range.startLine})`
				: `${lang} (Lines ${range.startLine}-${range.endLine})`;
		}
		return lang;
	}, [lang, range]);

	const handleOpenUrl = () => {
		window.open(sourceUrl, "_blank");
	};

	const fileName = useMemo(() => {
		return sourceUrl.split("/").pop() || sourceUrl;
	}, [sourceUrl]);

	return (
		<>
			<div className="ace-embed-header">
				<div className="ace-embed-title ace-embed-remote-title">
					{fileName}
				</div>
				<div className="ace-embed-header-right">
					<div className="ace-embed-language-label">
						{displayLabel}
					</div>
					<div className="ace-embed-link" onClick={handleOpenUrl}>
						<ExternalLink size={16} />
					</div>
				</div>
			</div>
			<div className="ace-embed-content">
				<div ref={editorRef} className="ace-embed-editor"></div>
			</div>
		</>
	);
};

// ─── 加载状态组件 ───

const LoadingView: React.FC = () => {
	return (
		<div className="ace-embed-loading">
			<span>Loading remote code...</span>
		</div>
	);
};

// ─── 错误状态组件 ───

const ErrorView: React.FC<{ error: string }> = ({ error }) => {
	return (
		<div className="ace-embed-error">
			<span>Failed to load remote code</span>
			<span className="ace-embed-error-msg">{error}</span>
		</div>
	);
};

// ─── RemoteEmbedView 类（Component 子类） ───

export interface RemoteEmbedLoadResult {
	content: string;
	extension: string;
	sourceUrl: string;
}

export class RemoteEmbedView extends MarkdownRenderChild {
	plugin: AceCodeEditorPlugin;
	private root: Root | null = null;
	private range: LineRange | null = null;
	private loadResult: RemoteEmbedLoadResult | null = null;
	private subpath: string;

	constructor(
		plugin: AceCodeEditorPlugin,
		containerEl: HTMLElement,
		private loadFn: () => Promise<RemoteEmbedLoadResult>,
		subpath: string,
	) {
		super(containerEl);
		this.plugin = plugin;
		this.subpath = subpath;

		if (subpath) {
			const parsed = parseLineRange(subpath);
			if (parsed) this.range = parsed;
		}
	}

	async onload() {
		super.onload();
		this.containerEl.addClass("ace-embed-view");
		this.containerEl.addClass("ace-embed-remote-view");

		this.root = createRoot(this.containerEl);

		// 先渲染 loading
		this.root.render(createElement(LoadingView, {}));

		// 异步加载远程内容
		try {
			this.loadResult = await this.loadFn();
			// 异步操作后检查组件是否仍然存活，避免在已卸载的 root 上渲染
			if (!this.root) return;
			this.renderContent();
		} catch (err) {
			if (!this.root) return;
			const errorMsg = err instanceof Error ? err.message : String(err);
			this.root.render(createElement(ErrorView, { error: errorMsg }));
		}
	}

	private renderContent(): void {
		if (!this.root || !this.loadResult) return;

		this.root.render(
			createElement(RemoteEmbedContainer, {
				plugin: this.plugin,
				content: this.loadResult.content,
				extension: this.loadResult.extension,
				range: this.range || undefined,
				sourceUrl: this.loadResult.sourceUrl,
			}),
		);
	}

	onunload(): void {
		if (this.root) {
			this.root.unmount();
			this.root = null;
		}
		super.onunload();
	}
}
