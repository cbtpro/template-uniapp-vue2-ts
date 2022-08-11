const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isDev = process.env.NODE_ENV === 'development';
const STATIC_CND_URL = process.env.VUE_APP_STATIC_CDN_URL;


/**
 *
 * @returns 根据环境构建BundleAnalyzerPlugin配置
 */
 const buildBundleAnalyzerPluginConfig = () => {
  const PORTS = new Array(10).fill(undefined).map((v, i) => i + 10000);
  const UNI_PLATFORMS = ['h5', 'mp-weixin'];
  const platformIndex = UNI_PLATFORMS.indexOf(process.env.UNI_PLATFORM);
  const enableBundleAnalyzer = platformIndex >= 0;
  const bundleAnalyzerPort = PORTS[platformIndex];
  return {
    analyzerMode: enableBundleAnalyzer ? 'server' : 'disabled',
    analyzerHost: '127.0.0.1',
    analyzerPort: bundleAnalyzerPort,
    openAnalyzer: true,
    logLevel: 'info',
  }
};

module.exports = {
  transpileDependencies: ['luch-request'],
  transpileDependencies: ['uview-ui'],
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .end()
      .use('customLoader')
      .loader(path.resolve(__dirname, './customLoader.js'))
      .end();
    if (!isDev) {
      config.module
        .rule('images')
        .test(/\.(jpg|png|gif)$/)
        .use('url-loader')
        .loader('url-loader')
        .options({
          limit: 10,
          publicPath: STATIC_CND_URL, // cdn远端的目录
          outputPath: 'img', // 输出本地的目录
          name: '[name].[hash:7].[ext]',
        })
        .end();
    }
  },
  configureWebpack: {
    devServer: {
			disableHostCheck: true
		},
    plugins: [
      /**
       * @see https://www.npmjs.com/package/webpack-bundle-analyzer
       */
      new BundleAnalyzerPlugin(buildBundleAnalyzerPluginConfig()),
    ],
  },
};
