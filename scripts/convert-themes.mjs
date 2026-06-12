/**
 * .tmTheme → Ace Editor 主题转换脚本
 *
 * 将 assets/tmthemes/ 目录下的 .tmTheme 文件自动转换为 Ace 主题模块，
 * 输出到 src/service/themes/ 目录，并自动更新 AceThemes.ts 中的主题列表。
 *
 * 用法: node scripts/convert-themes.mjs [主题名...]
 *   不带参数时转换 assets/tmthemes/ 下所有 .tmTheme 文件
 *   带参数时只转换指定的主题（如: node scripts/convert-themes.mjs rose-pine zenburn）
 *
 * 基于 Ace 官方 tool/tmtheme.js 的转换逻辑，使用 plist 包解析 .tmTheme，
 * 并复用官方的 extractStyles / parseStyles / fillTemplate 等核心函数。
 * https://github.com/ajaxorg/ace/blob/master/tool/tmtheme.js
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parsePlist } from "plist";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const TM_THEMES_DIR = path.join(ROOT, "assets", "tmthemes");
const OUTPUT_DIR = path.join(ROOT, "src", "service", "themes");
const ACE_THEMES_FILE = path.join(ROOT, "src", "service", "AceThemes.ts");

// ============================================================
// 黑名单：不需要转换的 .tmTheme 文件名（不含路径）
// 添加后运行 convert-themes.mjs 不会处理这些文件
// ============================================================
const BLACKLIST = new Set([
	// 与 ace-builds 官方主题重复，无需自行转换
	// Light Themes
	"Clouds.tmTheme", // -> clouds
	"Dawn.tmTheme", // -> dawn
	"GitHub.tmTheme", // -> github
	"iPlastic.tmTheme", // -> iplastic
	"Solarized (light).tmTheme", // -> solarized-light
	"Tomorrow.tmTheme", // -> tomorrow

	// Dark Themes
	"Clouds Midnight.tmTheme", // -> clouds-midnight
	"Cobalt.tmTheme", // -> cobalt
	"Merbivore.tmTheme", // -> merbivore
	"Merbivore Soft.tmTheme", // -> merbivore-soft
	"Monokai.tmTheme", // -> monokai
	"Solarized (dark).tmTheme", // -> solarized-dark
	"Tomorrow Night.tmTheme", // -> tomorrow-night
	"Tomorrow-Night-Blue.tmTheme", // -> tomorrow-night-blue
	"Tomorrow-Night-Bright.tmTheme", // -> tomorrow-night-bright
	"Tomorrow-Night-Eighties.tmTheme", // -> tomorrow-night-eighties
	"Tomorrow-Night.tmTheme", // -> tomorrow-night
	"Twilight.tmTheme", // -> twilight
	"Vibrant Ink.tmTheme", // -> vibrant-ink
	"idleFingers.tmTheme", // -> idle_fingers
	"monoindustrial.tmTheme", // -> mono_industrial
	"Pastels on Dark.tmTheme", // -> pastel_on_dark
]);

// ============================================================
// 以下核心函数来自 Ace 官方 tool/tmtheme.js
// https://github.com/ajaxorg/ace/blob/master/tool/tmtheme.js
// ============================================================

const supportedScopes = {
	keyword: "keyword",
	"keyword.operator": "keyword.operator",
	"keyword.other.unit": "keyword.other.unit",
	constant: "constant",
	"constant.language": "constant.language",
	"constant.library": "constant.library",
	"constant.numeric": "constant.numeric",
	"constant.character": "constant.character",
	"constant.character.escape": "constant.character.escape",
	"constant.character.entity": "constant.character.entity",
	"constant.other": "constant.other",
	support: "support",
	"support.function": "support.function",
	"support.function.dom": "support.function.dom",
	"support.function.firebug": "support.firebug",
	"support.function.constant": "support.function.constant",
	"support.constant": "support.constant",
	"support.constant.property-value": "support.constant.property-value",
	"support.class": "support.class",
	"support.type": "support.type",
	"support.other": "support.other",
	function: "function",
	"function.buildin": "function.buildin",
	storage: "storage",
	"storage.type": "storage.type",
	invalid: "invalid",
	"invalid.illegal": "invalid.illegal",
	"invalid.deprecated": "invalid.deprecated",
	string: "string",
	"string.regexp": "string.regexp",
	comment: "comment",
	"comment.documentation": "comment.doc",
	"comment.documentation.tag": "comment.doc.tag",
	variable: "variable",
	"variable.language": "variable.language",
	"variable.parameter": "variable.parameter",
	meta: "meta",
	"meta.tag.sgml.doctype": "xml-pe",
	"meta.tag": "meta.tag",
	"meta.selector": "meta.selector",
	"entity.other.attribute-name": "entity.other.attribute-name",
	"entity.name.function": "entity.name.function",
	"entity.name": "entity.name",
	"entity.name.tag": "entity.name.tag",
	"markup.heading": "markup.heading",
	"markup.heading.1": "markup.heading.1",
	"markup.heading.2": "markup.heading.2",
	"markup.heading.3": "markup.heading.3",
	"markup.heading.4": "markup.heading.4",
	"markup.heading.5": "markup.heading.5",
	"markup.heading.6": "markup.heading.6",
	"markup.list": "markup.list",
	"collab.user1": "collab.user1",
};

const fallbackScopes = {
	keyword: "meta",
	"support.type": "storage.type",
	variable: "entity.name.function",
};

const defaultGlobals = {
	printMargin: "#e8e8e8",
	background: "#ffffff",
	foreground: "#000000",
	gutter: "#f0f0f0",
	selection: "rgb(181, 213, 255)",
	step: "rgb(198, 219, 174)",
	bracket: "rgb(192, 192, 192)",
	active_line: "rgba(0, 0, 0, 0.07)",
	cursor: "#000000",
	invisible: "rgb(191, 191, 191)",
	fold: "#6b72e6",
};

// 官方 CSS 模板 (来自 tool/templates/theme.css)
const cssTemplate = `
.%cssClass% .ace_gutter {
  background: %gutterBg%;
  color: %gutterFg%;
}

.%cssClass% .ace_print-margin {
  width: 1px;
  background: %printMargin%;
}

.%cssClass% {
  background-color: %background%;
  color: %foreground%;
}

.%cssClass% .ace_cursor {
  color: %cursor%;
}

.%cssClass% .ace_marker-layer .ace_selection {
  background: %selection%;
}

.%cssClass%.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px %background%;
  border-radius: 2px;
}

.%cssClass% .ace_marker-layer .ace_step {
  background: %step%;
}

.%cssClass% .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid %bracket%;
}

.%cssClass% .ace_marker-layer .ace_active-line {
  background: %active_line%;
}

.%cssClass% .ace_gutter-active-line {
  background-color: %active_line%;
}

.%cssClass% .ace_marker-layer .ace_selected-word {
  %selected_word_highlight%;
}

.%cssClass% .ace_fold {
    background-color: %fold%;
    border-color: %foreground%;
}
`;

// ============================================================
// 官方颜色解析与样式提取函数
// ============================================================

function parseColor(color) {
	if (!color || !color.length) return null;
	if (color.length === 4) color = color.replace(/[a-fA-F\d]/g, "$&$&");
	if (color.length === 7) return color;
	else {
		if (!color.match(/^#(..)(..)(..)(..)$/))
			console.error("can't parse color", color);
		const rgba = color
			.match(/^#(..)(..)(..)(..)$/)
			.slice(1)
			.map(function (c) {
				return parseInt(c, 16);
			});
		rgba[3] = (rgba[3] / 0xff).toPrecision(2);
		return "rgba(" + rgba.join(", ") + ")";
	}
}

function parseStyles(styles) {
	const css = [];
	const fontStyle = styles.fontStyle || "";
	if (fontStyle.indexOf("underline") !== -1) {
		css.push("text-decoration:underline;");
	}
	if (fontStyle.indexOf("italic") !== -1) {
		css.push("font-style:italic;");
	}
	if (fontStyle.indexOf("bold") !== -1) {
		css.push("font-weight:bold;");
	}
	if (styles.foreground) {
		css.push("color:" + parseColor(styles.foreground) + ";");
	}
	if (styles.background) {
		css.push("background-color:" + parseColor(styles.background) + ";");
	}
	return css.join("\n");
}

function rgbColor(color) {
	if (typeof color === "object") return color;
	if (color[0] === "#")
		return color
			.match(/^#(..)(..)(..)/)
			.slice(1)
			.map(function (c) {
				return parseInt(c, 16);
			});
	else
		return color
			.match(/\(([^,]+),([^,]+),([^,]+)/)
			.slice(1)
			.map(function (c) {
				return parseInt(c, 10);
			});
}

function luma(color) {
	const rgb = rgbColor(color);
	return (0.21 * rgb[0] + 0.72 * rgb[1] + 0.07 * rgb[2]) / 255;
}

function mix(c1, c2, a1, a2) {
	c1 = rgbColor(c1);
	c2 = rgbColor(c2);
	if (a2 === undefined) a2 = 1 - a1;
	return (
		"rgb(" +
		[
			Math.round(a1 * c1[0] + a2 * c2[0]),
			Math.round(a1 * c1[1] + a2 * c2[1]),
			Math.round(a1 * c1[2] + a2 * c2[2]),
		].join(", ") +
		")"
	);
}

function extractStyles(theme) {
	const globalSettings = theme.settings[0].settings;

	const colors = {
		printMargin: defaultGlobals.printMargin,
		background:
			parseColor(globalSettings.background) || defaultGlobals.background,
		foreground:
			parseColor(globalSettings.foreground) || defaultGlobals.foreground,
		gutter: defaultGlobals.gutter,
		selection:
			parseColor(globalSettings.selection) || defaultGlobals.selection,
		step: defaultGlobals.step,
		bracket:
			parseColor(globalSettings.invisibles) || defaultGlobals.bracket,
		active_line:
			parseColor(globalSettings.lineHighlight) ||
			defaultGlobals.active_line,
		cursor: parseColor(globalSettings.caret) || defaultGlobals.cursor,
		invisible:
			"color: " +
			(parseColor(globalSettings.invisibles) ||
				defaultGlobals.invisible) +
			";",
	};

	for (let i = 1; i < theme.settings.length; i++) {
		const element = theme.settings[i];
		if (!element.scope || !element.settings) continue;
		const scopes = element.scope.split(/\s*[|,]\s*/g);
		for (let j = 0; j < scopes.length; j++) {
			const scope = scopes[j];
			const style = parseStyles(element.settings);
			const aceScope = supportedScopes[scope];
			if (aceScope) {
				colors[aceScope] = style;
			}
		}
	}

	for (const i in fallbackScopes) {
		if (!colors[i]) colors[i] = colors[fallbackScopes[i]];
	}

	if (!colors.fold) {
		const foldSource = colors["entity.name.function"] || colors.keyword;
		if (foldSource) {
			colors.fold = foldSource.match(/\:([^;]+)/)[1];
		} else {
			colors.fold = defaultGlobals.fold;
		}
	}

	colors.gutterBg = colors.background;
	colors.gutterFg = mix(colors.foreground, colors.background, 0.5);

	if (!colors.selected_word_highlight)
		colors.selected_word_highlight =
			"border: 1px solid " + colors.selection;

	colors.isDark = (luma(colors.background) < 0.5) + "";

	return colors;
}

function fillTemplate(template, replacements) {
	return template.replace(/%(.+?)%/g, function (str, m) {
		return replacements[m] || "";
	});
}

function hyphenate(str) {
	return str
		.replace(/([A-Z])/g, "-$1")
		.replace(/_/g, "-")
		.toLowerCase();
}

// ============================================================
// 主题转换（基于 Ace 官方 convertTheme 函数）
// ============================================================

function convertTheme(name, tmThemePath) {
	const tmTheme = fs.readFileSync(tmThemePath, "utf8");
	const theme = parsePlist(tmTheme);

	if (!theme.settings || !theme.settings.length) {
		console.error(`  ✗ ${name}: 缺少 settings`);
		return null;
	}

	const styles = extractStyles(theme);
	styles.cssClass = "ace-" + hyphenate(name);

	// 使用官方模板填充
	let css = fillTemplate(cssTemplate, styles);
	// 移除空规则
	css = css.replace(/[^\{\}]+{\s*}/g, "");

	// 添加 scope-specific 颜色（官方逻辑）
	for (const i in supportedScopes) {
		if (!styles[i]) continue;
		css +=
			"." +
			styles.cssClass +
			" " +
			i.replace(/^|\./g, ".ace_") +
			"{" +
			styles[i] +
			"}\n";
	}

	return {
		name: name,
		cssClass: styles.cssClass,
		css: css,
		isDark: styles.isDark === "true",
		displayName: theme.name || name,
		uuid: theme.uuid || "",
	};
}

// ============================================================
// 输出为 TypeScript 模块（适配 Obsidian 插件打包）
// ============================================================

function generateThemeModule(name, css, isDark, cssClass) {
	const escapedCss = css
		.replace(/\\/g, "\\\\")
		.replace(/`/g, "\\`")
		.replace(/\$/g, "\\$");

	return `import * as ace from "ace-builds";

const cssText = \`${escapedCss}\`;

ace.define("ace/theme/${name}-css", ["require", "exports", "module"], function (require, exports, module) {
\tmodule.exports = cssText;
});

ace.define("ace/theme/${name}", ["require", "exports", "module", "ace/theme/${name}-css", "ace/lib/dom"], function (require, exports, module) {
\texports.isDark = ${isDark};
\texports.cssClass = "${cssClass}";
\texports.cssText = require("./${name}-css");
\tconst dom = require("../lib/dom");
\tdom.importCssString(exports.cssText, exports.cssClass, false);
});
`;
}

// ============================================================
// AceThemes.ts 自动更新
// ============================================================

/**
 * 获取黑名单对应的主题标识名集合
 */
function getBlacklistedNames() {
	const names = new Set();
	for (const fileName of BLACKLIST) {
		const name = themeNameFromFileName(fileName);
		if (name) names.add(name);
	}
	return names;
}

/**
 * 清理黑名单主题文件
 */
function cleanupBlacklistedThemeFiles() {
	const blacklistedNames = getBlacklistedNames();
	if (blacklistedNames.size === 0) return;

	let removedFiles = 0;
	for (const name of blacklistedNames) {
		const filePath = path.join(OUTPUT_DIR, `${name}.ts`);
		if (fs.existsSync(filePath)) {
			fs.unlinkSync(filePath);
			removedFiles++;
		}
	}
	if (removedFiles > 0) {
		console.log(`🗑 已清理 ${removedFiles} 个黑名单主题文件`);
	}
}

/**
 * 移除文件中所有社区主题列表声明和标记，防止重复
 * 必须在 replaceCommunityLists 之前调用
 */
function removeAllCommunityLists(content) {
	const listMarker =
		"// === 社区主题列表 (由 convert-themes.mjs 自动生成) ===";
	const listEndMarker = "// === END 社区主题列表 ===";

	// 移除完整的标记块（含开始和结束标记之间的全部内容）
	while (true) {
		const start = content.indexOf(listMarker);
		if (start === -1) break;
		const end = content.indexOf(listEndMarker, start);
		if (end === -1) break;
		content =
			content.substring(0, start) +
			content.substring(end + listEndMarker.length);
	}

	// 移除孤立的结束标记
	content = content.replace(/\/\/ === END 社区主题列表 ===\n?/g, "");

	// 移除孤立的社区列表声明
	content = content.replace(
		/export const AceCommunityLightThemesList = \[[\s\S]*?\] as const;\n?/g,
		"",
	);
	content = content.replace(
		/export const AceCommunityDarkThemesList = \[[\s\S]*?\] as const;\n?/g,
		"",
	);

	// 清理多余空行
	content = content.replace(/\n{3,}/g, "\n\n");

	return content;
}

function updateAceThemes(convertedThemes) {
	let content = fs.readFileSync(ACE_THEMES_FILE, "utf8");

	// === 先移除所有社区主题列表声明，防止重复 ===
	content = removeAllCommunityLists(content);

	// === 添加 import 语句 ===
	// 收集所有已有的主题文件，排除黑名单
	const blacklistedNames = getBlacklistedNames();
	const allThemeFiles = fs.existsSync(OUTPUT_DIR)
		? fs.readdirSync(OUTPUT_DIR).filter((f) => {
				if (!f.endsWith(".ts")) return false;
				const name = f.replace(/\.ts$/, "");
				return !blacklistedNames.has(name);
			})
		: [];

	const allImports = allThemeFiles.map(
		(f) => `import "./themes/${f.replace(/\.ts$/, "")}";`,
	);
	const importLines = allImports.join("\n");
	const marker = "// === 社区主题 (由 convert-themes.mjs 自动生成) ===";
	const endMarker = "// === END 社区主题 ===";

	const firstExportIndex = content.indexOf("export const");
	if (firstExportIndex === -1) return;

	let before = content.substring(0, firstExportIndex);
	const after = content.substring(firstExportIndex);

	const importBlock = `\n${marker}\n${importLines}\n${endMarker}\n\n`;

	if (before.includes(marker)) {
		const markerStart = before.indexOf(marker);
		const markerEndIdx = before.indexOf(endMarker);
		if (markerEndIdx !== -1) {
			before =
				before.substring(0, markerStart) + importBlock.trimEnd() + "\n";
		}
	} else {
		before += importBlock;
	}

	content = before + after;

	// === 完全重建社区主题列表（两个列表放在一起） ===
	const lightThemes = convertedThemes.filter((t) => !t.isDark);
	const darkThemes = convertedThemes.filter((t) => t.isDark);

	content = replaceCommunityLists(
		content,
		lightThemes.map((t) => t.name),
		darkThemes.map((t) => t.name),
	);

	fs.writeFileSync(ACE_THEMES_FILE, content, "utf8");
	console.log(`\n✓ 已更新 AceThemes.ts`);
}

/**
 * 在 AceDarkThemesList 后面完全替换社区主题列表区域
 * 两个列表放在一起，用标记注释包裹
 */
function replaceCommunityLists(content, lightEntries, darkEntries) {
	const darkListStart = content.indexOf("export const AceDarkThemesList = [");
	if (darkListStart === -1) return content;

	// 查找 AceDarkThemesList 的结束位置（"] as const;"）
	const endPattern = "] as const;";
	const darkListEnd = content.indexOf(endPattern, darkListStart);
	if (darkListEnd === -1) return content;

	const insertPos = darkListEnd + endPattern.length;

	const listMarker =
		"// === 社区主题列表 (由 convert-themes.mjs 自动生成) ===";
	const listEndMarker = "// === END 社区主题列表 ===";

	// 检查是否已有社区列表区域（在 AceDarkThemesList 之后）
	const existingMarker = content.indexOf(listMarker, darkListStart);

	if (existingMarker !== -1 && existingMarker > insertPos) {
		// 替换已有区域
		const existingEnd = content.indexOf(listEndMarker, existingMarker);
		if (existingEnd !== -1) {
			const afterBlock = content.substring(
				existingEnd + listEndMarker.length,
			);
			const before = content.substring(0, existingMarker);
			const block = buildCommunityBlock(
				lightEntries,
				darkEntries,
				listMarker,
				listEndMarker,
			);
			return before + "\n" + block + afterBlock;
		}
	}

	// 首次插入：放在 AceDarkThemesList ] as const; 后面
	const before = content.substring(0, insertPos);
	const after = content.substring(insertPos);
	const block =
		"\n\n" +
		buildCommunityBlock(
			lightEntries,
			darkEntries,
			listMarker,
			listEndMarker,
		) +
		"\n";
	return before + block + after;
}

function buildCommunityBlock(
	lightEntries,
	darkEntries,
	listMarker,
	listEndMarker,
) {
	const lightEntriesText =
		lightEntries.length > 0
			? lightEntries.map((e) => `\t"${e}",`).join("\n")
			: "";
	const darkEntriesText =
		darkEntries.length > 0
			? darkEntries.map((e) => `\t"${e}",`).join("\n")
			: "";

	return `${listMarker}
export const AceCommunityLightThemesList = [
${lightEntriesText}
] as const;

export const AceCommunityDarkThemesList = [
${darkEntriesText}
] as const;
${listEndMarker}`;
}

// ============================================================
// 主流程
// ============================================================

/**
 * 从 .tmTheme 文件名提取主题标识名
 * 例如: "Rosé Pine.tmTheme" → "rose-pine", "Clouds Midnight.tmTheme" → "clouds-midnight"
 */
function themeNameFromFileName(fileName) {
	return fileName
		.replace(/\.tmTheme$/, "")
		.replace(/\s+/g, "-")
		.replace(/[^a-zA-Z0-9_-]/g, "")
		.toLowerCase()
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "");
}

function main() {
	console.log("🔄 开始转换 .tmTheme 主题 (使用 Ace 官方转换逻辑)...\n");
	console.log(`📁 输入目录: ${TM_THEMES_DIR}`);
	console.log(`📁 输出目录: ${OUTPUT_DIR}\n`);

	if (!fs.existsSync(TM_THEMES_DIR)) {
		console.error(`✗ 输入目录不存在: ${TM_THEMES_DIR}`);
		process.exit(1);
	}

	// 获取要转换的文件列表
	const userArgs = process.argv.slice(2);
	let tmThemeFiles;

	if (userArgs.length > 0) {
		// 指定主题名，查找对应文件
		tmThemeFiles = [];
		const allFiles = fs
			.readdirSync(TM_THEMES_DIR)
			.filter((f) => f.endsWith(".tmTheme"));
		for (const arg of userArgs) {
			const normalizedName = themeNameFromFileName(arg);
			// 优先精确匹配文件名（去掉 .tmTheme 后缀）
			let match = allFiles.find(
				(f) => f.replace(/\.tmTheme$/, "") === arg,
			);
			// 其次匹配标准化后的名称
			if (!match)
				match = allFiles.find(
					(f) => themeNameFromFileName(f) === normalizedName,
				);
			// 最后模糊匹配
			if (!match)
				match = allFiles.find((f) =>
					f.toLowerCase().includes(arg.toLowerCase()),
				);
			if (match) {
				if (BLACKLIST.has(match)) {
					console.warn(`⊗ 跳过黑名单中的主题: ${match}`);
					continue;
				}
				tmThemeFiles.push(path.join(TM_THEMES_DIR, match));
			} else {
				console.warn(`⚠ 未找到匹配的主题: ${arg}`);
			}
		}
	} else {
		// 转换所有 .tmTheme 文件（排除黑名单）
		tmThemeFiles = fs
			.readdirSync(TM_THEMES_DIR)
			.filter((f) => f.endsWith(".tmTheme") && !BLACKLIST.has(f))
			.map((f) => path.join(TM_THEMES_DIR, f));
	}

	if (tmThemeFiles.length === 0) {
		console.log("⚠ 没有找到需要转换的 .tmTheme 文件");
		// 仍然执行清理（可能需要移除已有的黑名单主题）
		cleanupBlacklistedThemeFiles();
		process.exit(0);
	}

	console.log(`找到 ${tmThemeFiles.length} 个 .tmTheme 文件:\n`);

	// 确保输出目录存在
	if (!fs.existsSync(OUTPUT_DIR)) {
		fs.mkdirSync(OUTPUT_DIR, { recursive: true });
	}

	const convertedThemes = [];
	for (const file of tmThemeFiles) {
		const fileName = path.basename(file);
		const name = themeNameFromFileName(fileName);

		if (!name) {
			console.error(`  ✗ 跳过 ${fileName}: 无法生成主题名`);
			continue;
		}

		try {
			const result = convertTheme(name, file);
			if (!result) continue;

			const moduleContent = generateThemeModule(
				name,
				result.css,
				result.isDark,
				result.cssClass,
			);
			const outputFile = path.join(OUTPUT_DIR, `${name}.ts`);
			fs.writeFileSync(outputFile, moduleContent, "utf8");

			console.log(
				`  ✓ ${result.displayName} → themes/${name}.ts (${result.isDark ? "dark" : "light"})`,
			);

			convertedThemes.push({
				name: name,
				displayName: result.displayName,
				isDark: result.isDark,
				importPath: `./themes/${name}`,
			});
		} catch (e) {
			console.error(`  ✗ ${fileName}: ${e.message}`);
		}
	}

	// 清理黑名单主题文件
	cleanupBlacklistedThemeFiles();

	if (convertedThemes.length > 0) {
		console.log("\n📝 更新 AceThemes.ts...");
		updateAceThemes(convertedThemes);
	}

	console.log(
		`\n✅ 完成！共转换 ${convertedThemes.length} / ${tmThemeFiles.length} 个主题（黑名单排除 ${BLACKLIST.size} 个）`,
	);
}

main();
