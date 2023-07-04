declare module 'uview-ui';
declare module 'crypto-js';
declare module '@/utils/jsencrypt.js';
declare module '@uni-ui/code-plugs';
declare module '@/toPinyin/toPinyin';
declare module 'sortablejs'

declare const uni: UniNamespace.Uni & {
  $u: typeof uView;
};

/**
 * uni-simple-router获取小程序pages.json中的路由信息
 */
declare const ROUTES = [];

/**
 * 项目名称
 */
declare const PROJECT_NAME = '';
