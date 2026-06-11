import { requestUrl, RequestUrlParam } from "obsidian";
import { RemoteReadResult } from "../../type/remote";

// ─── 简易内存缓存（避免重复请求同一 URL） ───
const cache = new Map<
	string,
	{ content: string; extension: string; timestamp: number }
>();
const CACHE_TTL = 5 * 60 * 1000; // 5 分钟

// ─── 请求去重（防止并发请求同一 URL） ───
const pendingRequests = new Map<string, Promise<RemoteReadResult>>();

// ─── 请求超时 ───
const REQUEST_TIMEOUT = 30_000; // 30 秒

function getFromCache(url: string): RemoteReadResult | null {
	const entry = cache.get(url);
	if (!entry) return null;
	if (Date.now() - entry.timestamp > CACHE_TTL) {
		cache.delete(url);
		return null;
	}
	return {
		success: true,
		content: entry.content,
		extension: entry.extension,
	};
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
 * 从直接 URL 读取文件
 * 自动将 GitHub/GitLab/Gitea blob 页面 URL 转为 raw URL
 */
export async function readFromUrl(url: string): Promise<RemoteReadResult> {
	const normalizedUrl = normalizeRemoteUrl(url);
	const ext = inferExtension(normalizedUrl);
	return await fetchWithCache(normalizedUrl, {}, ext);
}

/**
 * 判断链接文本是否为远程 URL
 */
export function isRemoteUrl(linktext: string): boolean {
	return linktext.startsWith("https://") || linktext.startsWith("http://");
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

// ─── 内部工具 ───

/**
 * 将 GitHub/GitLab/Gitea blob 页面 URL 转为 raw 内容 URL
 *
 * 支持的转换：
 *   github.com/{owner}/{repo}/blob/{branch}/{path}
 *   github.com/{owner}/{repo}/raw/{branch}/{path}
 *   gitlab.com/{owner}/{repo}/-/blob/{branch}/{path}
 *   gitlab.com/{owner}/{repo}/-/raw/{branch}/{path}
 *   gitea.com/{owner}/{repo}/blob/{branch}/{path}
 *   gitea.com/{owner}/{repo}/raw/{branch}/{path}
 */
export function normalizeRemoteUrl(url: string): string {
	// GitHub blob: /blob/ → raw.githubusercontent.com
	const githubBlobMatch = url.match(
		/^https?:\/\/github\.com\/([^/]+\/[^/]+)\/blob\/([^/]+\/.+)$/,
	);
	if (githubBlobMatch) {
		return `https://raw.githubusercontent.com/${githubBlobMatch[1]}/${githubBlobMatch[2]}`;
	}

	// GitHub raw → 统一到 raw.githubusercontent.com
	const githubRawMatch = url.match(
		/^https?:\/\/github\.com\/([^/]+\/[^/]+)\/raw\/([^/]+\/.+)$/,
	);
	if (githubRawMatch) {
		return `https://raw.githubusercontent.com/${githubRawMatch[1]}/${githubRawMatch[2]}`;
	}

	// GitLab blob → raw（仅匹配包含 /-/ 的 GitLab 风格路径）
	const gitlabBlobMatch = url.match(
		/^https?:\/\/([^/]+)\/([^/]+\/[^/]+)\/-\/blob\/([^/]+\/.+)$/,
	);
	if (gitlabBlobMatch) {
		return `https://${gitlabBlobMatch[1]}/${gitlabBlobMatch[2]}/-/raw/${gitlabBlobMatch[3]}`;
	}

	// Gitea blob → raw（排除已被 GitHub 处理的域名）
	const giteaMatch = url.match(
		/^https?:\/\/(?!github\.com|raw\.githubusercontent\.com)([^/]+)\/([^/]+\/[^/]+)\/blob\/([^/]+\/.+)$/,
	);
	if (giteaMatch) {
		return `https://${giteaMatch[1]}/${giteaMatch[2]}/raw/${giteaMatch[3]}`;
	}

	return url;
}

async function fetchWithCache(
	url: string,
	headers: Record<string, string>,
	extension: string,
): Promise<RemoteReadResult> {
	// 1. 检查缓存
	const cached = getFromCache(url);
	if (cached) return cached;

	// 2. 检查是否有正在进行的相同请求（去重）
	const pending = pendingRequests.get(url);
	if (pending) return pending;

	// 3. 发起新请求
	const requestPromise = doFetch(url, headers, extension);
	pendingRequests.set(url, requestPromise);

	try {
		const result = await requestPromise;
		return result;
	} finally {
		pendingRequests.delete(url);
	}
}

async function doFetch(
	url: string,
	headers: Record<string, string>,
	extension: string,
): Promise<RemoteReadResult> {
	try {
		// 使用 AbortController 实现超时
		const controller = new AbortController();
		const timeoutId = window.setTimeout(
			() => controller.abort(),
			REQUEST_TIMEOUT,
		);

		const params: RequestUrlParam = {
			url,
			method: "GET",
			headers,
		};

		const response = await requestUrl(params);
		window.clearTimeout(timeoutId);

		// 检查 HTTP 状态码，只缓存成功响应
		if (response.status >= 400) {
			return {
				success: false,
				error: `HTTP ${response.status}: ${response.text?.substring(0, 200) || "Request failed"}`,
			};
		}

		const content = response.text;
		// 只缓存成功响应，避免 404 等错误被缓存 5 分钟
		setCache(url, content, extension);
		return { success: true, content, extension };
	} catch (err) {
		const isTimeout =
			err instanceof DOMException && err.name === "AbortError";
		return {
			success: false,
			error: isTimeout
				? `Request timed out after ${REQUEST_TIMEOUT / 1000}s`
				: err instanceof Error
					? err.message
					: String(err),
		};
	}
}
