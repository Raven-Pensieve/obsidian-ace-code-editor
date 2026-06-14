// Type augmentation for ace-builds to cover internal APIs
// used by theme registration and runtime management.

/** Callback signature for ace.define() factory functions */
interface AceDomModule {
	importCssString(
		cssText: string,
		cssClass: string,
		includeAsStyleTag?: boolean,
	): void;
}

interface AceThemeExports extends Record<string, unknown> {
	isDark: boolean;
	cssClass: string;
	cssText: string;
}

type AceDefineFactory = (
	require: {
		(path: "../lib/dom"): AceDomModule;
		(path: `./${string}-css`): string;
		(path: string): unknown;
	},
	exports: AceThemeExports,
	module: { exports: unknown },
) => void;

/**
 * Internal shape of ace.config with hidden $values property.
 * Used by AceRuntimeManager for custom module loading.
 */
interface AceConfigInternal {
	$values?: {
		loader?: (
			moduleName: string,
			afterLoad: (err: Error | null, module?: unknown) => void,
		) => void;
		[key: string]: unknown;
	};
	loadModule?: (
		moduleId: string | [string, string],
		onLoad?: (module?: unknown) => void,
	) => void;
	moduleUrl?: (name: string, component?: string) => string;
}

declare module "ace-builds" {
	function define(
		moduleName: string,
		deps: string[],
		factory: AceDefineFactory,
	): void;
}
