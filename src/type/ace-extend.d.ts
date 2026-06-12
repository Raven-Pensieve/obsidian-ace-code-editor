// Type augmentation for ace-builds to cover internal APIs
// used by theme registration and runtime management.

/** Callback signature for ace.define() factory functions */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AceDefineFactory = (
	require: (path: string) => any,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	exports: any,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	module: { exports: any },
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
}

declare module "ace-builds" {
	function define(
		moduleName: string,
		deps: string[],
		factory: AceDefineFactory,
	): void;
}
