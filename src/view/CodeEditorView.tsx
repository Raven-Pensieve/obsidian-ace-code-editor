import type AceCodeEditorPlugin from "@src/main";
import { CODE_EDITOR_VIEW_TYPE } from "@src/type/types";
import { IconName, TFile, WorkspaceLeaf } from "obsidian";
import { AceEditorView } from "./AceEditorView";

export class CodeEditorView extends AceEditorView {
	constructor(leaf: WorkspaceLeaf, plugin: AceCodeEditorPlugin) {
		super(leaf, plugin);
	}

	getEditorContainer(): HTMLElement {
		return this.contentEl;
	}

	async onLoadFile(file: TFile): Promise<void> {
		// 只配置编辑器，不重新初始化
		if (this.aceService.isEditorInitialized()) {
			this.aceService.configureEditor(
				this.config,
				this.getFileExtension(file)
			);
		}

		await super.onLoadFile(file);
	}

	getViewType(): string {
		return CODE_EDITOR_VIEW_TYPE;
	}

	// getContext(file?: TFile) {
	// 	return file?.path ?? this.file?.path;
	// }

	getIcon(): IconName {
		return "code-xml";
	}
}
