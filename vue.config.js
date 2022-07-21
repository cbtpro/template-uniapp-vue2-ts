const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
const STATIC_CND_URL = process.env.VUE_APP_STATIC_CDN_URL;

module.exports = {
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
};
