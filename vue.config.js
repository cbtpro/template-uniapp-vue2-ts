const path = require('path')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .end()
      .use('customLoader')
      .loader(path.resolve(__dirname, './customLoader.js'))
      .end()
    if (!isDev) {
      config.module
        .rule('images')
        .test(/\.(jpg|png|gif)$/)
        .use('url-loader')
        .loader('url-loader')
        .options({
          limit: 10,
          publicPath: '//oss.xx.com/img', // cdn远端的目录
          outputPath: 'img', // 输出本地的目录
          name: '[name].[hash:7].[ext]',
        })
        .end()
    }
  },
}
