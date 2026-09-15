export const CUSTOM_ACE_MODE_FILES = ["mode-hlsl.js"] as const;

const CUSTOM_ACE_MODE_MODULE_FILES: Record<string, string> = {
	"ace/mode/hlsl": "mode-hlsl.js",
	"ace/mode/hlsl_highlight_rules": "mode-hlsl.js",
};

export function isCustomAceModeModule(moduleName: string): boolean {
	return moduleName in CUSTOM_ACE_MODE_MODULE_FILES;
}

export function getCustomAceModeFile(moduleName: string): string | undefined {
	return CUSTOM_ACE_MODE_MODULE_FILES[moduleName];
}

export function excludeCustomAceModes(modes: string[]): string[] {
	const customModes = new Set<string>(CUSTOM_ACE_MODE_FILES);
	return modes.filter((mode) => !customModes.has(mode));
}
