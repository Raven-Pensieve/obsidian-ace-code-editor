# Obsidian Import Code 功能整合方案

> 基于 [obsidian-import-code](https://github.com/yu4n2h1/obsidian-import-code) 的思路分析，为 obsidian-ace-code-editor 制定的新功能整合计划。
>
> 日期：2026-06-11

---

## 一、两个插件定位对比

| 维度         | obsidian-import-code             | obsidian-ace-code-editor (我们)            |
| ------------ | -------------------------------- | ------------------------------------------ |
| **渲染引擎** | Obsidian 内置 `MarkdownRenderer` | **Ace Editor**（更强大）                   |
| **嵌入方式** | 拦截 `.internal-embed` DOM       | `registerEmbed` API（官方推荐）            |
| **阅读模式** | `MarkdownPostProcessor`          | `registerEmbed` 自动支持                   |
| **实时预览** | CodeMirror `ViewPlugin`          | 已部分支持 `registerMarkdownPostProcessor` |
| **行范围**   | `@10-30` / `#5-10`               | `#L10-L20`（GitHub 风格，仅此格式）        |
| **语法高亮** | 依赖 Obsidian 内置               | Ace 200+ 语言模式                          |
| **远程代码** | GitHub/GitLab/Gitea/WebDAV       | 无                                         |
| **符号提取** | `@函数名` 提取函数/类            | 无                                         |
| **行高亮**   | `#5-10` 高亮行                   | 无                                         |

---

## 二、可借鉴的核心思路

import-code 的思路中，以下 **4 个功能**最有价值且与我们插件互补：

### 2.1 符号提取（`@` 语法） — ⭐ 高价值

import-code 的做法：解析 `![[file.ts@myFunction]]`，通过大括号匹配 / 缩进分析提取函数体。**Ace Editor 本身有语法分析能力**，可以做得更好。

### 2.2 行高亮（`#` 语法与 `@` 组合） — ⭐ 高价值

import-code 的做法：`![[file.ts@myFunction#L5-L10]]` 组合使用。Ace Editor 原生支持 `setAnnotations` / 行标记（markers），可以做得比 HTML `<span>` 方案更优雅。

### 2.3 自动刷新 — ⭐ 中高价值

import-code 监听 `vault.on("modify")`，用 300ms 防抖重新渲染嵌入。我们的 `CodeEmbedView` 目前是静态的，不刷新。

### 2.4 远程代码嵌入 — ⭐ 中价值（复杂度高）

import-code 支持多平台远程源别名（GitHub / GitLab / Gitea / WebDAV / Generic URL）。功能强大但实现复杂，可以分阶段引入。

---

## 三、完整解决方案

### 阶段一：语法增强（符号提取 + 行高亮）

#### 3.1.1 扩展链接解析语法

**当前语法**：`![[file.ts#L10-L20]]`

**扩展为**：

| 语法                             | 含义                             |
| -------------------------------- | -------------------------------- |
| `![[file.ts]]`                   | 嵌入整个文件（现有）             |
| `![[file.ts#L10-L20]]`           | 嵌入指定行范围（现有）           |
| `![[file.ts@myFunction]]`        | **新增** — 提取指定函数/类       |
| `![[file.ts@myFunction#L5-L10]]` | **新增** — 符号提取 + 行高亮组合 |

**实现文件**：扩展 `src/utils/LineRange.ts`

```typescript
// src/utils/LineRange.ts — 新增接口和函数

export interface ParsedEmbedLink {
    filePath: string;
    symbolName: string;        // @后面的符号名，如 "myFunction"
    range: LineRange | null;   // #L10-L20 行范围
}

/**
 * 解析嵌入链接
 * 
 * 支持的格式：
 *   file.ts
 *   file.ts#L10-L20
 *   file.ts@myFunction
 *   file.ts@myFunction#L5-L10
 */
export function parseEmbedLink(linktext: string): ParsedEmbedLink {
    let filePath = linktext;
    let symbolName = "";
    let range: LineRange | null = null;

    // 步骤1: 解析 # 部分（行范围），取最后一个 #
    const hashIndex = filePath.lastIndexOf("#");
    if (hashIndex !== -1) {
        const afterHash = filePath.substring(hashIndex + 1);
        const parsedRange = parseLineRange(afterHash);
        if (parsedRange) {
            range = parsedRange;
            filePath = filePath.substring(0, hashIndex);
        }
    }

    // 步骤2: 解析 @ 部分（符号名）
    // @ 后面仅接受标识符（字母/数字/下划线），纯数字行范围使用 #L 语法
    const atIndex = filePath.lastIndexOf("@");
    if (atIndex !== -1 && atIndex !== filePath.length - 1) {
        const candidate = filePath.substring(atIndex + 1);
        // 仅当 @ 后是合法标识符时才视为符号提取，否则忽略
        if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(candidate)) {
            symbolName = candidate;
            filePath = filePath.substring(0, atIndex);
        }
    }

    return { filePath, symbolName, range };
}
```

#### 3.1.2 符号提取引擎

**新建文件**：`src/utils/SymbolExtractor.ts`

```typescript
// src/utils/SymbolExtractor.ts

/**
 * 符号提取 — 从源码中提取指定函数/类/方法的代码
 *
 * 支持两类语言：
 * - 大括号语言（JS/TS/Java/C/Go/Rust）：基于大括号匹配
 * - 缩进语言（Python/Ruby/YAML）：基于缩进层级分析
 */

export interface ExtractionResult {
    code: string;
    startLine: number;  // 1-based
    endLine: number;
}

// 基于缩进的语言
const INDENT_LANGUAGES = new Set([
    "python", "ruby", "yaml", "coffee", "toml", "nim",
]);

/**
 * 从源码中提取指定符号（函数/类/方法）的代码
 */
export function extractSymbol(
    content: string,
    symbolName: string,
    language: string
): ExtractionResult | null {
    const lines = content.split("\n");

    if (INDENT_LANGUAGES.has(language)) {
        return extractByIndent(lines, symbolName);
    }
    return extractByBraces(lines, symbolName);
}

/**
 * 大括号匹配提取 — 适用于 JS/TS/Java/C/Go/Rust/C# 等
 *
 * 策略：
 * 1. 按优先级匹配多种声明模式（function/class/const/let/var/pub fn 等）
 * 2. 找到声明行后，向后查找第一个 {
 * 3. 从该 { 开始做大括号深度计数，直到匹配到闭合 }
 */
function extractByBraces(lines: string[], symbolName: string): ExtractionResult | null {
    const escaped = escapeRegex(symbolName);

    // 按优先级排列的匹配模式
    const patterns = [
        // 标准 function/class 声明
        new RegExp(`\\b(function|class|interface|type|enum|struct|impl|mod)\\s+${escaped}\\b`),
        // Rust / Go 风格
        new RegExp(`\\b(pub\\s+)?(fn|async\\s+fn)\\s+${escaped}\\b`),
        // 变量赋值函数
        new RegExp(`\\b(const|let|var)\\s+${escaped}\\s*[:=]\\s*(async\\s+)?function|\\(|{|=>`),
        // 方法声明（class 内部）
        new RegExp(`\\b(abstract\\s+)?(public|private|protected|static|async)?\\s*${escaped}\\s*\\(`),
        // 通用匹配（最低优先级）
        new RegExp(`\\b${escaped}\\b`),
    ];

    // 查找符号定义行
    let startLine = -1;
    for (const pattern of patterns) {
        for (let i = 0; i < lines.length; i++) {
            if (pattern.test(lines[i])) {
                startLine = i;
                break;
            }
        }
        if (startLine !== -1) break;
    }

    if (startLine === -1) return null;

    // 向后查找第一个 {
    let braceStartLine = startLine;
    let foundOpenBrace = false;
    for (let i = startLine; i < Math.min(lines.length, startLine + 5); i++) {
        if (lines[i].includes("{")) {
            braceStartLine = i;
            foundOpenBrace = true;
            break;
        }
    }

    if (!foundOpenBrace) {
        // 无大括号 — 可能是单行定义、箭头函数或 type 别名
        let endLine = startLine;
        for (let i = startLine + 1; i < lines.length; i++) {
            const trimmed = lines[i].trim();
            // 遇到空行或新的声明关键字则停止
            if (trimmed === "" || /^\s*(function|class|const|let|var|export|import|pub|fn|def)\b/.test(lines[i])) {
                break;
            }
            endLine = i;
        }
        return {
            code: lines.slice(startLine, endLine + 1).join("\n"),
            startLine: startLine + 1,
            endLine: endLine + 1,
        };
    }

    // 大括号深度计数
    let depth = 0;
    for (let i = braceStartLine; i < lines.length; i++) {
        for (const ch of lines[i]) {
            if (ch === "{") depth++;
            else if (ch === "}") depth--;
            if (depth === 0 && ch === "}") {
                return {
                    code: lines.slice(startLine, i + 1).join("\n"),
                    startLine: startLine + 1,
                    endLine: i + 1,
                };
            }
        }
    }

    // 未找到匹配的闭合括号
    return null;
}

/**
 * 缩进匹配提取 — 适用于 Python/Ruby/YAML
 *
 * 策略：
 * 1. 找到 def/class 符号声明行
 * 2. 记录声明行的缩进级别
 * 3. 向下扩展直到遇到同级或更低缩进的非空行
 */
function extractByIndent(lines: string[], symbolName: string): ExtractionResult | null {
    const escaped = escapeRegex(symbolName);

    const patterns = [
        new RegExp(`\\b(async\\s+)?def\\s+${escaped}\\s*\\(`),
        new RegExp(`\\bclass\\s+${escaped}\\b`),
        new RegExp(`\\b${escaped}\\s*[:=]`),
    ];

    let startLine = -1;
    for (const pattern of patterns) {
        for (let i = 0; i < lines.length; i++) {
            if (pattern.test(lines[i])) {
                startLine = i;
                break;
            }
        }
        if (startLine !== -1) break;
    }

    if (startLine === -1) return null;

    // 获取声明行的缩进级别
    const defIndent = lines[startLine].match(/^(\s*)/)?.[1].length ?? 0;

    // 向下查找，遇到同级或更低缩进的非空行则停止
    let endLine = startLine;
    for (let i = startLine + 1; i < lines.length; i++) {
        const trimmed = lines[i].trim();
        if (trimmed === "") {
            endLine = i;
            continue;
        }
        const currentIndent = lines[i].match(/^(\s*)/)?.[1].length ?? 0;
        if (currentIndent <= defIndent) break;
        endLine = i;
    }

    return {
        code: lines.slice(startLine, endLine + 1).join("\n"),
        startLine: startLine + 1,
        endLine: endLine + 1,
    };
}

function escapeRegex(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
```

#### 3.1.3 修改 CodeEmbedView 支持符号提取和行高亮

**修改文件**：`src/view/CodeEmbedView.tsx`

**关键变更点**：

1. **扩展 `CodeEmbedContainerProps` 接口**

```typescript
interface CodeEmbedContainerProps {
    plugin: AceCodeEditorPlugin;
    file: TFile;
    range?: LineRange;
    symbolName?: string;       // 新增：符号名
    highlightLines?: number[]; // 新增：需要高亮的行号（1-based）
}
```

2. **在 `initializeEditor` 中处理符号提取逻辑**

```typescript
useEffect(() => {
    const initializeEditor = async () => {
        if (editorRef.current) {
            let data = await plugin.app.vault.read(file);
            aceServiceRef.current = new AceService();
            aceEditorRef.current = aceServiceRef.current.createEditor(editorRef.current);
            aceEditorRef.current.setReadOnly(true);
            aceServiceRef.current.configureEditor(settings, file.extension);

            let displayData = data;
            let lineOffset = 0;

            // 符号提取
            if (symbolName) {
                const lang = await getLanguageMode(file.extension);
                const result = extractSymbol(data, symbolName, lang);
                if (result) {
                    displayData = result.code;
                    lineOffset = result.startLine - 1;
                }
            }

            // 行范围（来自 #L 格式）
            if (range) {
                displayData = extractLineRange(displayData, range);
            }

            aceServiceRef.current.setValue(displayData);

            // 行高亮 — 使用 Ace Editor markers
            if (highlightLines && highlightLines.length > 0) {
                const session = aceEditorRef.current.getSession();
                const AceRange = ace.require("ace/range").Range;
                for (const lineNum of highlightLines) {
                    session.addMarker(
                        new AceRange(lineNum - 1, 0, lineNum - 1, 1),
                        "ace_highlight_line",
                        "fullLine",
                        false
                    );
                }
            }

            // 设置编辑器高度
            const contentLines = displayData.split("\n").length;
            const editorHeight = Math.min(
                contentLines * (settings.fontSize + 4) + 20,
                settings.embedMaxHeight,
            );
            editorRef.current.style.height = `${editorHeight}px`;

            const languageMode = await getLanguageMode(file.extension);
            setLang(languageMode);
        }
    };

    initializeEditor();

    return () => {
        if (aceServiceRef.current) {
            aceServiceRef.current.destroy();
            aceServiceRef.current = null;
            aceEditorRef.current = null;
        }
    };
}, []);
```

3. **修改 `CodeEmbedView` 类的解析逻辑**

```typescript
export class CodeEmbedView extends AcePluginComponent implements Embed {
    private contentEl: HTMLElement;
    private root: Root | null = null;
    private file: TFile;
    private subpath: string;
    private range: LineRange | null = null;
    private symbolName: string = "";          // 新增
    private highlightLines: number[] = [];    // 新增

    constructor(
        plugin: AceCodeEditorPlugin,
        containerEl: HTMLElement,
        file: TFile,
        subpath: string,
    ) {
        super(plugin);
        this.contentEl = containerEl;
        this.file = file;
        this.subpath = subpath;

        // 解析 subpath 中的符号和行范围
        if (subpath) {
            const parsed = parseEmbedLink(subpath);
            this.range = parsed.range;
            this.symbolName = parsed.symbolName;
        }
    }

    async loadFile(): Promise<void> {
        if (this.root) {
            this.root.render(
                createElement(CodeEmbedContainer, {
                    plugin: this.plugin,
                    file: this.file,
                    range: this.range || undefined,
                    symbolName: this.symbolName || undefined,
                    highlightLines: this.highlightLines.length > 0 ? this.highlightLines : undefined,
                }),
            );
        }
    }
    // ... onunload 不变
}
```

#### 3.1.4 修改主入口解析逻辑

**修改文件**：`src/main.ts`

**`registerMarkdownPostProcessor` 需要支持 `@` 语法**：

```typescript
private registerMarkdownProcessor() {
    this.registerMarkdownPostProcessor((element, context) => {
        const links = element.querySelectorAll("a.internal-link");

        links.forEach((link: HTMLAnchorElement) => {
            const href = link.getAttribute("href");
            if (!href) return;

            // 使用新的统一解析器
            const parsed = parseEmbedLink(href);

            // 检查文件扩展名
            const extension = parsed.filePath.split(".").pop()?.toLowerCase();
            if (!extension || !this.settings.supportExtensions.includes(extension)) {
                return;
            }

            const file = this.app.vault.getAbstractFileByPath(parsed.filePath);
            if (!(file instanceof TFile)) return;

            // 构建完整的 subpath
            let subpath = "";
            if (parsed.symbolName) subpath += `@${parsed.symbolName}`;
            if (parsed.range) subpath += `#L${parsed.range.startLine}-L${parsed.range.endLine}`;

            const embedContainer = createDiv();
            embedContainer.addClass("ace-embed-container");

            const embedView = new CodeEmbedView(
                this,
                embedContainer,
                file,
                subpath,
            );

            link.replaceWith(embedContainer);
            embedView.onload();
        });
    });
}
```

**`registerEmbed` 的调用保持不变**，因为 Obsidian 的 embed 系统会自动传递 `subpath`（即 `#` 后面的部分），但需要在 `CodeEmbedView` 中增强对 `subpath` 的解析以支持 `@` 语法。

> **注意**：Obsidian 的 `registerEmbed` 只传递 `#` 后面的内容作为 `subpath`。因此 `@` 语法需要写在 `#` 之前，即 `![[file.ts@fn#L10-L20]]` 中 `subpath` 只会收到 `L10-L20`。
>
> **解决方案**：同时注册 `registerMarkdownPostProcessor` 来处理完整的 `@` 语法（阅读模式），以及 `registerEmbed` 处理 Obsidian 原生嵌入。在 embed 上下文中，`@` 需要写在文件名内（利用 Obsidian 的链接解析机制），或者在 postProcessor 中做二次处理。

#### 3.1.5 行高亮 CSS

**修改文件**：`styles/AceEmbedView.css`

```css
/* Ace 行高亮标记样式 */
.ace_highlight_line {
    background: rgba(255, 255, 0, 0.15);
    position: absolute;
    z-index: 1;
}

/* 深色主题下行高亮 */
.theme-dark .ace_highlight-line {
    background: rgba(255, 200, 50, 0.12);
}
```

---

### 阶段二：自动刷新

#### 3.2.1 在 CodeEmbedView 中监听文件变更

**修改文件**：`src/view/CodeEmbedView.tsx`

在 `CodeEmbedView` 的 `onload` 方法中添加 vault 事件监听：

```typescript
async onload() {
    super.onload();
    this.contentEl.addClass("ace-embed-view");

    if (this.range) {
        this.contentEl.addClass("line-range");
    }

    this.root = createRoot(this.contentEl);
    await this.loadFile();

    // 新增：监听文件变更，自动刷新嵌入内容
    this.registerEvent(
        this.plugin.app.vault.on("modify", (abstractFile) => {
            if (abstractFile instanceof TFile && abstractFile.path === this.file.path) {
                this.loadFile();
            }
        })
    );
}
```

这样当嵌入的源文件被修改时，嵌入视图会自动重新加载最新内容。

> **注意**：`registerEvent` 在 `Component` 基类上，`AcePluginComponent` 继承自 `Component`，所以可以直接使用。事件监听会在 `onunload` 时自动清理。

---

### 阶段三：远程代码嵌入

#### 3.3.1 设计原则

1. **不侵入现有本地嵌入流程** — 远程嵌入是独立路径，`registerEmbed`（本地文件）和远程嵌入（MarkdownPostProcessor）互不干扰
2. **渐进式加载** — 远程内容异步获取，先显示 loading 状态，加载完成或失败后再更新 UI
3. **配置可选** — 远程功能默认关闭，用户主动开启后生效；别名系统可选，直接 URL 始终可用
4. **复用现有组件** — 远程内容获取后复用 `AceService` 渲染，只是数据源从 `vault.read()` 变为 HTTP 响应

#### 3.3.2 整体架构

```
用户输入：![[https://...]] 或 ![[alias:path/file.py]]
       │
       ▼
┌─────────────────────────────────────┐
│  registerMarkdownPostProcessor       │  ← 阅读模式入口
│  (拦截远程链接 / 别名链接)           │
└──────────────┬──────────────────────┘
               │
       ┌───────▼────────┐
       │  RemoteEmbedView │  ← 新组件（非 CodeEmbedView）
       │  (异步加载内容)  │
       └───────┬────────┘
               │ fetchRemoteContent()
       ┌───────▼────────┐
       │  RemoteManager   │  ← 统一远程读取入口
       │  ├─ GitHub       │
       │  ├─ GitLab       │
       │  ├─ Gitea        │
       │  ├─ Generic URL  │
       │  └─ 缓存层       │
       └───────┬────────┘
               │ 返回 { content, extension, error }
       ┌───────▼────────────┐
       │  RemoteEmbedContainer │  ← React 组件，复用 AceService 渲染
       └────────────────────┘
```

**关键决策：为什么不用 `registerEmbed` 处理远程？**

Obsidian 的 `registerEmbed` 只能绑定**文件扩展名**，且回调参数是 `TFile`（vault 内的本地文件）。远程 URL 和别名在 vault 中没有对应的 `TFile`，所以无法走 `registerEmbed` 路径。必须通过 `registerMarkdownPostProcessor` 拦截渲染。

#### 3.3.3 新增文件清单

```
src/
├── service/remote/
│   ├── RemoteManager.ts         # 统一远程读取入口 + 缓存
│   └── providers/
│       ├── GitHubProvider.ts    # GitHub Raw CDN
│       ├── GitLabProvider.ts    # GitLab Repository Files API
│       ├── GiteaProvider.ts     # Gitea Repository Files API
│       └── GenericUrlProvider.ts # 任意 URL GET
├── view/
│   └── RemoteEmbedView.tsx      # 远程嵌入视图（类似 CodeEmbedView 但不依赖 TFile）
├── type/
│   └── remote.ts                # 远程相关类型定义
```

#### 3.3.4 类型定义

**新建文件**：`src/type/remote.ts`

```typescript
// src/type/remote.ts

/** 远程服务类型 */
export type RemoteServiceType = "github" | "gitlab" | "gitea" | "generic";

/** 单个远程源配置 */
export interface RemoteSourceConfig {
    url: string;        // 服务基础地址，如 https://github.com
    token?: string;     // 访问令牌（可选，用于私有仓库）
    repo?: string;      // 仓库名 owner/repo（GitHub/GitLab/Gitea 必填）
    branch?: string;    // 分支名，默认 main
    basePath?: string;  // 路径前缀，如 src/utils
}

/** 远程源别名条目 */
export interface RemoteSourceEntry {
    serviceType: RemoteServiceType;
    config: RemoteSourceConfig;
}

/** 远程读取结果 */
export interface RemoteReadResult {
    success: boolean;
    content?: string;
    extension?: string;  // 从 URL 或 Content-Type 推断的文件扩展名
    error?: string;
}

/** 远程嵌入设置（独立于现有配置字段） */
export interface RemoteEmbedSettings {
    enabled: boolean;
    sources: Record<string, RemoteSourceEntry>;
}

export const DEFAULT_REMOTE_SETTINGS: RemoteEmbedSettings = {
    enabled: false,
    sources: {},
};
```

**修改文件**：`src/type/types.ts` — 新增远程设置字段

```typescript
// 在 ICodeEditorConfig 末尾新增字段：

export interface ICodeEditorConfig {
    // ... 现有字段保持不变
    remoteEmbed: RemoteEmbedSettings;  // 新增
}

export const DEFAULT_CONFIG: ICodeEditorConfig = {
    // ... 现有默认值保持不变
    remoteEmbed: DEFAULT_REMOTE_SETTINGS,  // 新增
};
```

> **向后兼容**：`validateAndMergeSettings` 使用 `{ ...validatedSettings, ...savedData }` 扩展合并，旧数据没有 `remoteEmbed` 字段时会自动使用 `DEFAULT_REMOTE_SETTINGS`，无需数据迁移。

#### 3.3.5 RemoteManager 核心逻辑

**新建文件**：`src/service/remote/RemoteManager.ts`

```typescript
// src/service/remote/RemoteManager.ts

import { requestUrl, RequestUrlParam } from "obsidian";
import {
    RemoteReadResult,
    RemoteSourceEntry,
} from "../../type/remote";

// ─── 简易内存缓存（避免重复请求同一 URL） ───
const cache = new Map<string, {
    content: string;
    extension: string;
    timestamp: number;
}>();
const CACHE_TTL = 5 * 60 * 1000; // 5 分钟

function getFromCache(url: string): RemoteReadResult | null {
    const entry = cache.get(url);
    if (!entry) return null;
    if (Date.now() - entry.timestamp > CACHE_TTL) {
        cache.delete(url);
        return null;
    }
    return { success: true, content: entry.content, extension: entry.extension };
}

function setCache(url: string, content: string, extension: string): void {
    cache.set(url, { content, extension, timestamp: Date.now() });
}

/**
 * 清除所有缓存（供设置变更时调用）
 */
export function clearRemoteCache(): void {
    cache.clear();
}

// ─── 公共 API ───

/**
 * 从远程源别名读取文件
 */
export async function readFromAlias(
    sources: Record<string, RemoteSourceEntry>,
    alias: string,
    filePath: string,
): Promise<RemoteReadResult> {
    const entry = sources[alias];
    if (!entry) {
        return {
            success: false,
            error: `Remote source alias "${alias}" is not configured.`,
        };
    }

    const url = buildUrl(entry, filePath);
    return await fetchWithCache(url, buildHeaders(entry), inferExtension(filePath));
}

/**
 * 从直接 URL 读取文件
 */
export async function readFromUrl(url: string): Promise<RemoteReadResult> {
    const ext = inferExtension(url);
    return await fetchWithCache(url, {}, ext);
}

/**
 * 判断链接文本是否为远程 URL
 */
export function isRemoteUrl(linktext: string): boolean {
    return linktext.startsWith("https://") || linktext.startsWith("http://");
}

/**
 * 判断链接文本是否为远程别名（alias:path 格式）
 */
export function isAliasPath(linktext: string): boolean {
    const colonIndex = linktext.indexOf(":");
    if (colonIndex === -1) return false;
    const alias = linktext.substring(0, colonIndex);
    // 别名只允许字母数字和下划线，且不以 http 开头
    return /^[A-Za-z_][A-Za-z0-9_]*$/.test(alias) && !linktext.startsWith("http");
}

/**
 * 解析别名路径
 */
export function parseAliasPath(linktext: string): {
    alias: string;
    filePath: string;
} | null {
    if (!isAliasPath(linktext)) return null;
    const colonIndex = linktext.indexOf(":");
    return {
        alias: linktext.substring(0, colonIndex),
        filePath: linktext.substring(colonIndex + 1),
    };
}

// ─── 内部工具 ───

async function fetchWithCache(
    url: string,
    headers: Record<string, string>,
    extension: string,
): Promise<RemoteReadResult> {
    const cached = getFromCache(url);
    if (cached) return cached;

    try {
        const params: RequestUrlParam = {
            url,
            method: "GET",
            headers,
        };
        const response = await requestUrl(params);
        const content = response.text;
        setCache(url, content, extension);
        return { success: true, content, extension };
    } catch (err) {
        return {
            success: false,
            error: err instanceof Error ? err.message : String(err),
        };
    }
}

function buildUrl(entry: RemoteSourceEntry, filePath: string): string {
    const { serviceType, config } = entry;
    const basePath = config.basePath ? `${config.basePath}/` : "";
    const branch = config.branch || "main";

    switch (serviceType) {
        case "github":
            // 使用 raw CDN，比 API contents 更高效、无需 Accept header
            return `https://raw.githubusercontent.com/${config.repo}/${branch}/${basePath}${filePath}`;
        case "gitlab": {
            const encoded = encodeURIComponent(`${basePath}${filePath}`);
            return `${config.url || "https://gitlab.com"}/api/v4/projects/${encodeURIComponent(config.repo!)}/repository/files/${encoded}/raw?ref=${branch}`;
        }
        case "gitea":
            return `${config.url}/api/v1/repos/${config.repo}/raw/${basePath}${filePath}?ref=${branch}`;
        case "generic":
            return `${config.url}/${basePath}${filePath}`;
        default:
            throw new Error(`Unknown service type: ${serviceType}`);
    }
}

function buildHeaders(entry: RemoteSourceEntry): Record<string, string> {
    const headers: Record<string, string> = {};

    if (entry.config.token) {
        switch (entry.serviceType) {
            case "github":
                headers["Authorization"] = `token ${entry.config.token}`;
                break;
            case "gitlab":
            case "gitea":
                headers["PRIVATE-TOKEN"] = entry.config.token;
                break;
            default:
                headers["Authorization"] = `Bearer ${entry.config.token}`;
        }
    }

    return headers;
}

/**
 * 从 URL 或文件路径推断扩展名
 */
export function inferExtension(path: string): string {
    const cleanPath = path.split("?")[0].split("#")[0];
    const lastDot = cleanPath.lastIndexOf(".");
    if (lastDot === -1) return "txt";
    return cleanPath.substring(lastDot + 1).toLowerCase();
}
```

#### 3.3.6 RemoteEmbedView 组件

**新建文件**：`src/view/RemoteEmbedView.tsx`

此组件与 `CodeEmbedView` 类似，但不依赖 `TFile`，而是接收远程获取的字符串内容。

```typescript
// src/view/RemoteEmbedView.tsx

import { useSettings } from "@src/hooks/useSettings";
import AceCodeEditorPlugin from "@src/main";
import { getLanguageMode } from "@src/service/AceLanguages";
import { AceService } from "@src/service/AceService";
import { AcePluginComponent } from "@src/type/component";
import { LineRange } from "@src/type/types";
import { parseLineRange } from "@src/utils/LineRange";
import { ExternalLink } from "lucide-react";
import {
    createElement,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { createRoot, Root } from "react-dom/client";

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

    useEffect(() => {
        if (!editorRef.current) return;

        const initialize = async () => {
            aceServiceRef.current = new AceService();
            const editor = aceServiceRef.current.createEditor(editorRef.current);
            editor.setReadOnly(true);
            aceServiceRef.current.configureEditor(settings, extension);

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

        initialize();

        return () => {
            aceServiceRef.current?.destroy();
            aceServiceRef.current = null;
        };
    }, [content, extension, range, settings]);

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

    return (
        <>
            <div className="ace-embed-header">
                <div className="ace-embed-title ace-embed-remote">
                    {sourceUrl.split("/").pop() || sourceUrl}
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

// ─── 加载 / 错误状态组件 ───

const LoadingView: React.FC<{ error?: string }> = ({ error }) => {
    if (error) {
        return (
            <div className="ace-embed-error">
                <span>Failed to load remote code: {error}</span>
            </div>
        );
    }
    return (
        <div className="ace-embed-loading">
            <span>Loading remote code...</span>
        </div>
    );
};

// ─── RemoteEmbedView 类（Component 子类） ───

interface RemoteEmbedLoadResult {
    content: string;
    extension: string;
    sourceUrl: string;
}

export class RemoteEmbedView extends AcePluginComponent {
    private contentEl: HTMLElement;
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
        super(plugin);
        this.contentEl = containerEl;
        this.subpath = subpath;

        if (subpath) {
            const parsed = parseLineRange(subpath);
            if (parsed) this.range = parsed;
        }
    }

    async onload() {
        super.onload();
        this.contentEl.addClass("ace-embed-view");
        this.contentEl.addClass("ace-embed-remote-view");

        this.root = createRoot(this.contentEl);

        // 先渲染 loading
        this.root.render(createElement(LoadingView, {}));

        // 异步加载远程内容
        try {
            this.loadResult = await this.loadFn();
            this.renderContent();
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : String(err);
            this.root.render(createElement(LoadingView, { error: errorMsg }));
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
```

#### 3.3.7 修改 main.ts — 注册远程嵌入处理器

**修改文件**：`src/main.ts`

在 `registerMarkdownProcessor` 中，**保留现有本地嵌入逻辑不变**，在其后追加远程链接检测：

```typescript
private registerMarkdownProcessor() {
    this.registerMarkdownPostProcessor((element, context) => {
        // ─── 现有逻辑：本地文件的行范围嵌入（完全保留） ───
        const links = element.querySelectorAll("a.internal-link");

        links.forEach((link: HTMLAnchorElement) => {
            const href = link.getAttribute("href");
            if (!href) return;

            const lineRangeMatch = href.match(/#L\d+(-L\d+)?$/i);
            if (!lineRangeMatch) return;

            const filePath = href.replace(/#L\d+(-L\d+)?$/i, "");

            const extension = filePath.split(".").pop()?.toLowerCase();
            if (
                !extension ||
                !this.settings.supportExtensions.includes(extension)
            ) {
                return;
            }

            const file = this.app.vault.getAbstractFileByPath(filePath);
            if (!(file instanceof TFile)) return;

            const embedContainer = createDiv();
            embedContainer.addClass("ace-embed-container");

            const embedView = new CodeEmbedView(
                this,
                embedContainer,
                file,
                lineRangeMatch[0],
            );

            link.replaceWith(embedContainer);
            embedView.onload();
        });

        // ─── 新增逻辑：远程代码嵌入 ───
        if (!this.settings.remoteEmbed?.enabled) return;

        const embeds = element.querySelectorAll(".internal-embed");

        embeds.forEach((embed: HTMLElement) => {
            const src = embed.getAttribute("src");
            if (!src) return;

            // 已处理的跳过
            if (embed.classList.contains("ace-remote-processed")) return;

            // 判断是否为远程链接
            const remote = isRemoteUrl(src);
            const aliasParsed = parseAliasPath(src);

            if (!remote && !aliasParsed) return;

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
                if (aliasParsed) {
                    const result = await readFromAlias(
                        this.settings.remoteEmbed.sources,
                        aliasParsed.alias,
                        aliasParsed.filePath,
                    );
                    if (!result.success) {
                        throw new Error(result.error || "Failed to load remote file");
                    }
                    return {
                        content: result.content!,
                        extension: result.extension || inferExtension(aliasParsed.filePath),
                        sourceUrl: cleanSrc,
                    };
                } else {
                    const result = await readFromUrl(cleanSrc);
                    if (!result.success) {
                        throw new Error(result.error || "Failed to load remote file");
                    }
                    return {
                        content: result.content!,
                        extension: result.extension || "txt",
                        sourceUrl: cleanSrc,
                    };
                }
            };

            const remoteView = new RemoteEmbedView(
                this,
                embed,
                loadFn,
                subpath,
            );
            remoteView.onload();

            // 注册到 context 以便 Obsidian 自动管理生命周期
            context.addChild(remoteView);
        });
    });
}
```

**新增导入（main.ts 顶部）**：

```typescript
import {
    isRemoteUrl,
    parseAliasPath,
    readFromAlias,
    readFromUrl,
    inferExtension,
} from "./service/remote/RemoteManager";
import { RemoteEmbedView } from "./view/RemoteEmbedView";
```

> **关键安全保障**：
> 1. `if (!this.settings.remoteEmbed?.enabled) return;` — 功能默认关闭，旧用户完全不受影响
> 2. 远程嵌入只处理 `isRemoteUrl(src) || aliasParsed` 的链接，本地文件路径不会进入此分支
> 3. `embed.classList.contains("ace-remote-processed")` — 防止重复处理
> 4. `context.addChild(remoteView)` — 由 Obsidian 自动管理组件生命周期

#### 3.3.8 设置面板扩展

在设置面板（`AceSettings.tsx`）中新增 **Remote** Tab。使用独立的 Tab，不影响现有设置布局：

```typescript
// AceSettings.tsx — 在现有 Tab 后追加

const [remoteEnabled, setRemoteEnabled] = useState(
    settings.remoteEmbed?.enabled ?? false
);
const [remoteSources, setRemoteSources] = useState(
    settings.remoteEmbed?.sources ?? {}
);

const handleSaveRemoteSettings = useCallback(async () => {
    await plugin.updateSettings({
        remoteEmbed: {
            enabled: remoteEnabled,
            sources: remoteSources,
        },
    });
}, [plugin, remoteEnabled, remoteSources]);

// Tab 导航
<TabNavItem active={activeTab === "remote"} onClick={() => setActiveTab("remote")}>
    {LL.settings.remote_title?.() ?? "Remote Embed"}
</TabNavItem>

// Remote Tab 内容
{activeTab === "remote" && (
    <div className="settings-section">
        <SettingItem
            name="Enable remote code embed"
            description="Allow embedding code from remote URLs and configured remote sources"
        >
            <Toggle
                value={remoteEnabled}
                onChange={async (val) => {
                    setRemoteEnabled(val);
                    await plugin.updateSettings({
                        remoteEmbed: { enabled: val, sources: remoteSources },
                    });
                }}
            />
        </SettingItem>

        {/* 远程源别名列表 */}
        {remoteEnabled && (
            <div className="remote-sources-list">
                <h3>Remote Sources</h3>
                {Object.entries(remoteSources).map(([alias, entry]) => (
                    <RemoteSourceItem
                        key={alias}
                        alias={alias}
                        entry={entry}
                        onUpdate={(newEntry) => {
                            const updated = { ...remoteSources, [alias]: newEntry };
                            setRemoteSources(updated);
                            handleSaveRemoteSettings();
                        }}
                        onDelete={() => {
                            const { [alias]: _, ...rest } = remoteSources;
                            setRemoteSources(rest);
                            handleSaveRemoteSettings();
                        }}
                    />
                ))}
                <button onClick={/* 打开新增远程源 Modal */}>
                    Add Source
                </button>
            </div>
        )}
    </div>
)}
```

#### 3.3.9 CSS 样式扩展

**修改文件**：`styles/AceEmbedView.css`

```css
/* 远程嵌入标记 */
.ace-embed-remote-view .ace-embed-title {
    color: var(--text-accent);
    font-style: italic;
}

.ace-embed-remote::before {
    content: "↗ ";
    opacity: 0.6;
}

/* 加载状态 */
.ace-embed-loading {
    padding: 16px 20px;
    color: var(--text-muted);
    font-family: var(--font-monospace);
    font-size: var(--font-smaller);
    background: var(--background-secondary);
    border-radius: 6px;
    border: 1px dashed var(--background-modifier-border);
    text-align: center;
}

/* 错误状态 */
.ace-embed-error {
    padding: 12px 16px;
    color: var(--text-error);
    background: var(--background-secondary);
    border-radius: 6px;
    border: 1px solid var(--background-modifier-error);
    font-family: var(--font-monospace);
    font-size: var(--font-smaller);
}
```

#### 3.3.10 完整的数据流示意

```
场景1：直接 URL
──────────────
用户写：![[https://raw.githubusercontent.com/user/repo/main/src/utils.ts#L10-L20]]

Obsidian 渲染阅读模式：
  → .internal-embed[src="https://raw.githubusercontent.com/.../utils.ts#L10-L20"]

registerMarkdownPostProcessor 拦截：
  → isRemoteUrl(src) === true
  → cleanSrc = "https://raw.githubusercontent.com/user/repo/main/src/utils.ts"
  → subpath = "L10-L20"
  → RemoteEmbedView(plugin, embed, loadFn, "L10-L20")
       → loadFn: readFromUrl(cleanSrc) → fetchWithCache → requestUrl
       → RemoteEmbedContainer 渲染 Ace Editor（只读）


场景2：别名引用
──────────────
用户写：![[myrepo:src/utils.ts#L10-L20]]

设置中配置：
  myrepo → { serviceType: "github", config: { repo: "user/repo", branch: "main" } }

registerMarkdownPostProcessor 拦截：
  → parseAliasPath("myrepo:src/utils.ts#L10-L20")
       === { alias: "myrepo", filePath: "src/utils.ts" }
  → readFromAlias(sources, "myrepo", "src/utils.ts")
       → buildUrl → "https://raw.githubusercontent.com/user/repo/main/src/utils.ts"
       → fetchWithCache → requestUrl
  → RemoteEmbedContainer 渲染
```

#### 3.3.11 安全注意事项

1. **默认关闭** — `remoteEmbed.enabled` 默认 `false`，用户必须主动开启
2. **仅桌面端** — `requestUrl` 在移动端可能有限制，可在 UI 中提示
3. **Token 存储** — 远程源 Token 存储在 `data.json`（Obsidian 插件数据目录），与 Obsidian 自身的敏感数据处理方式一致
4. **缓存 TTL** — 5 分钟缓存过期，避免无限期使用过时内容
5. **不执行代码** — 所有远程内容以只读 Ace Editor 渲染，不会执行远程代码
6. **URL 校验** — 只允许 `http://` 和 `https://` 协议，防止 `file://` 等本地协议泄露

#### 3.3.12 对现有功能的影响分析

| 现有功能                                   | 影响         | 原因                                                                              |
| ------------------------------------------ | ------------ | --------------------------------------------------------------------------------- |
| `registerEmbed` 本地文件嵌入               | **无影响**   | 远程嵌入完全通过 `registerMarkdownPostProcessor` 独立处理，不触碰 `registerEmbed` |
| `registerMarkdownPostProcessor` 行范围链接 | **无影响**   | 远程检测在本地处理之后执行，`if (!isRemote && !aliasParsed) return` 跳过本地文件  |
| `CodeEmbedView`                            | **无修改**   | 远程嵌入使用新的 `RemoteEmbedView`，不复用也不修改现有类                          |
| `ICodeEditorConfig` 现有字段               | **无影响**   | 新增 `remoteEmbed` 字段，`validateAndMergeSettings` 的扩展合并会自动补全缺失字段  |
| 设置面板                                   | **新增 Tab** | 现有 Tab 不变，远程设置放在独立的 "Remote" Tab 中                                 |
| 主题 / 语言模式                            | **复用**     | 远程嵌入使用相同的 `AceService` + `getLanguageMode`，主题一致                     |

---

## 四、实施优先级

| 优先级 | 功能             | 预估工作量 | 用户价值                    | 依赖关系 |
| ------ | ---------------- | ---------- | --------------------------- | -------- |
| **P0** | 符号提取 `@`     | 2-3 天     | 极高 — 写技术笔记的核心需求 | 阶段一   |
| **P0** | 行高亮 `#L5-L10` | 1 天       | 高 — Ace 原生支持，实现简单 | 阶段一   |
| **P1** | 自动刷新         | 0.5 天     | 高 — 使用体验提升大         | 阶段二   |
| **P1** | 远程代码嵌入     | 3-5 天     | 高 — 远程代码引用需求广泛   | 阶段三   |

**建议顺序**：先完成阶段一 + 阶段二（约 3-5 天），然后实施阶段三。

---

## 五、我们相比 import-code 的关键优势

1. **真正的代码编辑器渲染** — import-code 只能用 `MarkdownRenderer` 做基本高亮，我们有完整的 Ace Editor（代码折叠、语法检查、minimap）
2. **Ace markers 行高亮** — 比 import-code 的 `<span>` HTML hack 更可靠、更美观
3. **行号偏移** — 符号提取后可保留原始文件的行号显示（通过 `firstLineNumber` 配置），import-code 做不到
4. **主题一致性** — 嵌入代码与编辑器使用同一主题，import-code 无法控制
5. **200+ 语言支持** — Ace 的语言模式覆盖远超 Obsidian 内置高亮
6. **远程代码也享受 Ace 渲染** — import-code 对远程代码只能用 MarkdownRenderer，我们对本地和远程代码统一使用 Ace Editor

---

## 六、涉及文件清单

### 新建文件

| 文件                                  | 用途                          |
| ------------------------------------- | ----------------------------- |
| `src/utils/SymbolExtractor.ts`        | 符号提取引擎（阶段一）        |
| `src/type/remote.ts`                  | 远程相关类型定义（阶段三）    |
| `src/service/remote/RemoteManager.ts` | 远程代码读取 + 缓存（阶段三） |
| `src/view/RemoteEmbedView.tsx`        | 远程嵌入视图（阶段三）        |

### 修改文件

| 文件                           | 变更内容                                                      | 阶段  |
| ------------------------------ | ------------------------------------------------------------- | ----- |
| `src/utils/LineRange.ts`       | 新增 `ParsedEmbedLink` 接口、`parseEmbedLink`                 | 一    |
| `src/view/CodeEmbedView.tsx`   | 支持 `symbolName` / `highlightLines`，添加自动刷新            | 一+二 |
| `src/main.ts`                  | 增强 `registerMarkdownPostProcessor` 支持 `@` 语法 + 远程嵌入 | 一+三 |
| `src/type/types.ts`            | 新增 `remoteEmbed` 字段                                       | 三    |
| `styles/AceEmbedView.css`      | 新增行高亮样式 + 远程嵌入样式                                 | 一+三 |
| `src/settings/AceSettings.tsx` | 新增 Remote Tab                                               | 三    |
