/** 远程读取结果 */
export interface RemoteReadResult {
	success: boolean;
	content?: string;
	extension?: string; // 从 URL 或 Content-Type 推断的文件扩展名
	error?: string;
}

/** 远程嵌入设置 */
export interface RemoteEmbedSettings {
	enabled: boolean;
}

export const DEFAULT_REMOTE_SETTINGS: RemoteEmbedSettings = {
	enabled: false,
};
