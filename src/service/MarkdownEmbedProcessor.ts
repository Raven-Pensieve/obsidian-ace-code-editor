import { MarkdownPostProcessorContext, TFile } from "obsidian";
import { isRemoteUrl, readFromUrl } from "./remote/RemoteManager";
import { RemoteEmbedView } from "../view/RemoteEmbedView";
import { CodeEmbedView } from "../view/CodeEmbedView";
import AceCodeEditorPlugin from "../main";

export class MarkdownEmbedProcessor {
	constructor(private plugin: AceCodeEditorPlugin) {}

	register() {
		this.plugin.registerMarkdownPostProcessor(
			this.process.bind(this),
		);

		// 拦截远程链接的点击，阻止 Obsidian 将其当作本地文件路径解析
		this.plugin.registerDomEvent(
			document.body,
			"click",
			(evt) => {
				const target = evt.target as HTMLElement;
				const link = target.closest(
					"a.internal-link",
				) as HTMLAnchorElement | null;
				if (!link) return;

				const href = link.getAttribute("href");
				if (href && isRemoteUrl(href)) {
					evt.preventDefault();
					evt.stopPropagation();
					window.open(href, "_blank");
				}
			},
			true,
		);
	}

	private process(element: HTMLElement, context: MarkdownPostProcessorContext) {
		this.processLocalLineRangeEmbeds(element, context);
		this.processRemoteEmbeds(element, context);
	}

	/**
	 * 本地文件的行范围嵌入
	 * 处理带有 #L10 或 #L10-L20 语法的双链
	 */
	private processLocalLineRangeEmbeds(
		element: HTMLElement,
		context: MarkdownPostProcessorContext,
	) {
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
				!this.plugin.settings.supportExtensions.includes(extension)
			) {
				return;
			}

			// 获取对应的文件
			const file = this.plugin.app.vault.getAbstractFileByPath(filePath);
			if (!(file instanceof TFile)) return;

			// 创建嵌入视图来替换链接
			const embedContainer = createDiv();
			embedContainer.addClass("ace-embed-container");

			// 创建CodeEmbedView
			const embedView = new CodeEmbedView(
				this.plugin,
				embedContainer,
				file,
				lineRangeMatch[0], // 传递行范围字符串作为subpath
			);

			// 替换原链接
			link.replaceWith(embedContainer);

			// 注册到 markdown 渲染上下文，确保自动清理
			context.addChild(embedView);
		});
	}

	/**
	 * 远程代码嵌入
	 * 处理 .internal-embed 中指向远程 URL 的嵌入
	 */
	private processRemoteEmbeds(
		element: HTMLElement,
		context: MarkdownPostProcessorContext,
	) {
		if (!this.plugin.settings.remoteEmbed?.enabled) return;

		const embeds = element.querySelectorAll(".internal-embed");

		embeds.forEach((embed: HTMLElement) => {
			const src = embed.getAttribute("src");
			if (!src) return;

			// 已处理的跳过
			if (embed.classList.contains("ace-remote-processed")) return;

			// 仅处理远程 URL
			if (!isRemoteUrl(src)) return;

			// 提取 subpath（#L 部分）
			let cleanSrc = src;
			let subpath = "";
			const hashIndex = src.lastIndexOf("#");
			if (hashIndex !== -1) {
				const afterHash = src.substring(hashIndex + 1);
				if (/^L\d+(-L\d+)?$/i.test(afterHash)) {
					subpath = afterHash;
					cleanSrc = src.substring(0, hashIndex);
				}
			}

			embed.classList.add("ace-remote-processed");
			embed.empty();

			// 构建异步加载函数
			const loadFn = async () => {
				const result = await readFromUrl(cleanSrc);
				if (!result.success) {
					throw new Error(
						result.error || "Failed to load remote file",
					);
				}
				return {
					content: result.content!,
					extension: result.extension || "txt",
					sourceUrl: cleanSrc,
				};
			};

			const remoteView = new RemoteEmbedView(
				this.plugin,
				embed,
				loadFn,
				subpath,
			);
			// 注册到 markdown 渲染上下文，确保文档重新渲染时自动清理
			context.addChild(remoteView);
		});
	}
}
