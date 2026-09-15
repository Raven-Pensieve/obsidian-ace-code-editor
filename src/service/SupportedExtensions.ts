export const BUILT_IN_CODE_EXTENSIONS = [
	"hlsl",
	"hlsli",
	"nfx",
	"gim",
	"mtg",
	"mtl",
] as const;

export function mergeSupportedExtensions(
	configuredExtensions: string[],
): string[] {
	return [
		...new Set(["js", ...BUILT_IN_CODE_EXTENSIONS, ...configuredExtensions]),
	];
}
