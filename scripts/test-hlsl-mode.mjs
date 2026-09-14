import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { pathToFileURL } from "node:url";
import ts from "typescript";

const projectRoot = path.resolve(import.meta.dirname, "..");

async function importTypeScriptModule(relativePath) {
	const filePath = path.join(projectRoot, relativePath);
	const source = await fs.promises.readFile(filePath, "utf8");
	const output = ts.transpileModule(source, {
		compilerOptions: {
			module: ts.ModuleKind.ESNext,
			target: ts.ScriptTarget.ES2020,
		},
		fileName: filePath,
	}).outputText;
	return import(
		`data:text/javascript;base64,${Buffer.from(output).toString("base64")}`
	);
}

const aceModule = await import(
	pathToFileURL(
		path.join(
			projectRoot,
			"node_modules",
			"ace-builds",
			"src-noconflict",
			"ace.js",
		),
	)
);
const ace = aceModule.default;
globalThis.ace = ace;

const modeSourcePath = path.join(projectRoot, "src", "ace", "mode-hlsl.js");
const modeSource = await fs.promises.readFile(modeSourcePath, "utf8");
const cppModeSourcePath = path.join(
	projectRoot,
	"node_modules",
	"ace-builds",
	"src-noconflict",
	"mode-c_cpp.js",
);
const cppModeSource = await fs.promises.readFile(cppModeSourcePath, "utf8");
const { installAceModuleLoader } = await importTypeScriptModule(
	"src/service/AceModuleLoader.ts",
);
assert.equal(ace.require("ace/mode/c_cpp"), undefined);
const loadedSources = [];
const loaderErrors = [];
const originalLoadModule = ace.config.loadModule.bind(ace.config);
installAceModuleLoader({
	config: ace.config,
	fallbackLoadModule: originalLoadModule,
	requireModule: ace.require,
	loadSource: async (moduleName) => {
		loadedSources.push(moduleName);
		if (moduleName === "ace/mode/c_cpp") {
			return {
				content: cppModeSource,
				sourceUrl: cppModeSourcePath,
			};
		}
		if (moduleName === "ace/mode/hlsl") {
			return {
				content: modeSource,
				sourceUrl: modeSourcePath,
			};
		}
		throw new Error(`Unexpected module request: ${moduleName}`);
	},
	evaluateSource: (content, sourceUrl) => {
		vm.runInThisContext(content, { filename: sourceUrl });
	},
	onError: (moduleName, error) => {
		loaderErrors.push({ moduleName, error });
	},
});

let hlslLoadCallbacks = 0;
const hlslModule = await new Promise((resolve, reject) => {
	ace.config.loadModule(["mode", "ace/mode/hlsl"], (loadedModule) => {
		hlslLoadCallbacks++;
		if (loadedModule) {
			resolve(loadedModule);
			return;
		}
		reject(new Error("HLSL mode loader returned no module"));
	});
});
await new Promise((resolve) => setImmediate(resolve));

assert.equal(typeof hlslModule.Mode, "function");
assert.deepEqual(loadedSources, ["ace/mode/c_cpp", "ace/mode/hlsl"]);
assert.deepEqual(loaderErrors, []);
assert.equal(hlslLoadCallbacks, 1);
const mode = new hlslModule.Mode();
const cppMode = new (ace.require("ace/mode/c_cpp").Mode)();
assert.equal(mode.$id, "ace/mode/hlsl");
assert.equal(mode.lineCommentStart, "//");
assert.deepEqual(mode.blockComment, { start: "/*", end: "*/" });
assert.equal(typeof mode.foldingRules.getFoldWidgetRange, "function");
assert.equal(mode.$behaviour, cppMode.$behaviour);
assert.equal(mode.getNextLineIndent("start", "if (enabled) {", "\t"), "\t");

function tokenType(source, value) {
	const tokenized = mode.getTokenizer().getLineTokens(source, "start");
	const token = tokenized.tokens.find((candidate) => candidate.value === value);
	assert.ok(token, `Expected token ${JSON.stringify(value)} in ${source}`);
	return token.type;
}

function tokenizeLines(lines) {
	let state = "start";
	return lines.map((line) => {
		const tokenized = mode.getTokenizer().getLineTokens(line, state);
		state = tokenized.state;
		return tokenized.tokens;
	});
}

assert.match(tokenType("if (enabled) return;", "if"), /^keyword\.control/);
assert.match(tokenType("float4 color;", "float4"), /^storage\.type/);
assert.match(tokenType("Texture2D tex;", "Texture2D"), /^storage\.type/);
assert.match(tokenType("float3 n = normalize(v);", "normalize"), /^support\.function/);
assert.match(tokenType("bool enabled = true;", "true"), /^constant\.language/);
assert.match(tokenType("uint mask = 0xFFu;", "0xFFu"), /^constant\.numeric/);
assert.match(tokenType("uint count = 42u;", "42u"), /^constant\.numeric/);
assert.match(tokenType("float value = 1.25e-3f;", "1.25e-3f"), /^constant\.numeric/);
assert.match(tokenType("half value = .5h;", ".5h"), /^constant\.numeric/);
assert.match(tokenType('string value = "shader";', '"shader"'), /^string/);
assert.match(
	tokenType("float4 main(float2 uv : TEXCOORD0) : SV_Target0", "TEXCOORD0"),
	/^support\.type\.semantic/,
);
assert.match(
	tokenType("float4 main(float2 uv : TEXCOORD0) : SV_Target0", "SV_Target0"),
	/^support\.type\.semantic/,
);
assert.equal(
	tokenType("float ordinaryIdentifier;", "ordinaryIdentifier"),
	"identifier",
);
assert.match(tokenType('// "comment"', '// "comment"'), /^comment/);
assert.match(tokenType('#include "common.hlsli"', "#include"), /^keyword/);
const blockCommentTokens = tokenizeLines(["/* block", "comment */ float value;"]);
assert.ok(blockCommentTokens[0].every((token) => token.type === "comment"));
assert.equal(
	blockCommentTokens[1].find((token) => token.value === "float")?.type,
	"storage.type",
);
const directiveTokens = tokenizeLines(["#define SCALE(x) \\", "((x) * 2)"]);
assert.equal(directiveTokens[1][0].type, "meta.preprocessor");

const { getLanguageMode } = await importTypeScriptModule(
	"src/service/AceLanguages.ts",
);
assert.equal(await getLanguageMode("hlsl"), "hlsl");
assert.equal(await getLanguageMode("hlsli"), "hlsl");
assert.equal(await getLanguageMode("run-hlsl"), "hlsl");
assert.equal(await getLanguageMode("run-hlsli"), "hlsl");

const {
	CUSTOM_ACE_MODE_FILES,
	excludeCustomAceModes,
	getCustomAceModeFile,
	isCustomAceModeModule,
} = await importTypeScriptModule("src/service/AceRuntimeAssets.ts");
assert.deepEqual([...CUSTOM_ACE_MODE_FILES], ["mode-hlsl.js"]);
assert.equal(isCustomAceModeModule("ace/mode/hlsl"), true);
assert.equal(isCustomAceModeModule("ace/mode/hlsl_highlight_rules"), true);
assert.equal(isCustomAceModeModule("ace/mode/glsl"), false);
assert.equal(getCustomAceModeFile("ace/mode/hlsl"), "mode-hlsl.js");
assert.equal(
	getCustomAceModeFile("ace/mode/hlsl_highlight_rules"),
	"mode-hlsl.js",
);
assert.deepEqual(
	excludeCustomAceModes(["mode-c_cpp.js", "mode-hlsl.js"]),
	["mode-c_cpp.js"],
);

const aceServiceSource = await fs.promises.readFile(
	path.join(projectRoot, "src", "service", "AceService.ts"),
	"utf8",
);
assert.match(aceServiceSource, /const aliasStart = "run-"/);

const runtimeManagerSource = await fs.promises.readFile(
	path.join(projectRoot, "src", "service", "AceRuntimeManager.ts"),
	"utf8",
);
const customCdnBranch = runtimeManagerSource.indexOf(
	"if (isCustomAceModeModule(moduleName))",
);
const cdnUrlResolution = runtimeManagerSource.indexOf(
	").moduleUrl?.(moduleName, moduleType)",
);
assert.ok(customCdnBranch >= 0 && customCdnBranch < cdnUrlResolution);

const buildSource = await fs.promises.readFile(
	path.join(projectRoot, "scripts", "esbuild.config.mjs"),
	"utf8",
);
assert.match(buildSource, /copyCustomAceModesPlugin/);
assert.match(buildSource, /path\.join\("src", "ace", fileName\)/);

console.log("HLSL mode validation passed");
