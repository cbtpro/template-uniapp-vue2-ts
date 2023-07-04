/** 开发模式 */
export const isDev = process.env.NODE_ENV === 'development';
/** 生产模式 */
export const isProd = process.env.NODE_ENV === 'production';

/**
 * 平台
 */
export const platform = process.env.UNI_PLATFORM as string;

/**
 * 是H5平台
 */
export const isH5 = platform === 'h5';

/**
 * 是微信小程序平台
 */
export const isMpWeixin = platform === 'mp-weixin';

/**
 * 是app平台
 */
export const isApp = platform === 'app-plus';
