export type AceModuleId = string | [string, string];

export interface AceModuleConfig {
	loadModule?: (
		moduleId: AceModuleId,
		onLoad?: (module?: unknown) => void,
	) => void;
}

interface AceModuleSource {
	content: string;
	sourceUrl: string;
}

interface InstallAceModuleLoaderOptions {
	config: AceModuleConfig;
	fallbackLoadModule?: AceModuleConfig["loadModule"];
	requireModule: (moduleName: string) => unknown;
	loadSource: (
		moduleName: string,
		moduleType?: string,
	) => Promise<AceModuleSource>;
	evaluateSource: (content: string, sourceUrl: string) => void;
	onError: (moduleName: string, error: unknown) => void;
}

const MODULE_DEPENDENCIES: Record<string, [string, string][]> = {
	"ace/mode/hlsl": [["mode", "ace/mode/c_cpp"]],
};

const pendingModuleLoads = new Map<string, Promise<unknown>>();

function getLoadedModule(
	requireModule: (moduleName: string) => unknown,
	moduleName: string,
) {
	try {
		return requireModule(moduleName);
	} catch {
		return undefined;
	}
}

function loadModuleDependency(
	config: AceModuleConfig,
	moduleId: [string, string],
): Promise<unknown> {
	return new Promise((resolve, reject) => {
		if (!config.loadModule) {
			reject(new Error(`Ace loader is unavailable for ${moduleId[1]}`));
			return;
		}

		config.loadModule(moduleId, (loadedModule) => {
			if (loadedModule) {
				resolve(loadedModule);
				return;
			}
			reject(new Error(`Failed to load Ace dependency ${moduleId[1]}`));
		});
	});
}

export function installAceModuleLoader({
	config,
	fallbackLoadModule,
	requireModule,
	loadSource,
	evaluateSource,
	onError,
}: InstallAceModuleLoaderOptions): void {
	config.loadModule = (moduleId, onLoad) => {
		const moduleName = typeof moduleId === "string" ? moduleId : moduleId[1];
		const moduleType =
			typeof moduleId === "string" ? undefined : moduleId[0];

		if (!moduleName.startsWith("ace/") || moduleType === "worker") {
			fallbackLoadModule?.(moduleId, onLoad);
			return;
		}

		const loadedModule = getLoadedModule(requireModule, moduleName);
		if (loadedModule) {
			onLoad?.(loadedModule);
			return;
		}

		const cacheKey = `${moduleType ?? "module"}:${moduleName}`;
		const pending =
			pendingModuleLoads.get(cacheKey) ??
			(async () => {
				for (const dependency of MODULE_DEPENDENCIES[moduleName] ?? []) {
					if (!getLoadedModule(requireModule, dependency[1])) {
						await loadModuleDependency(config, dependency);
					}
				}

				const { content, sourceUrl } = await loadSource(
					moduleName,
					moduleType,
				);
				evaluateSource(content, sourceUrl);

				const evaluatedModule = getLoadedModule(
					requireModule,
					moduleName,
				);
				if (!evaluatedModule) {
					throw new Error(
						`Ace module did not register after evaluation: ${moduleName}`,
					);
				}
				return evaluatedModule;
			})().finally(() => {
				pendingModuleLoads.delete(cacheKey);
			});

		pendingModuleLoads.set(cacheKey, pending);
		pending
			.then((module) => onLoad?.(module))
			.catch((error) => {
				onError(moduleName, error);
				onLoad?.(undefined);
			});
	};
}
