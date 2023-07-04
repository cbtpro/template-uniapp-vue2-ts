const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const TransformPages = require('uni-read-pages')
const { webpack } = new TransformPages()

const vConsolePlugin = require('vconsole-webpack-plugin');

// const UploadAssets2Qiniu = require('./upload-assets-to-qiniu');
const UploadAssets2ALiOSS = require('./upload-assets-to-ali-oss');
const { projectname } = require('./project.config.json');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const isApp = process.env.UNI_PLATFORM === 'app-plus';

const STATIC_CND_URL = process.env.VUE_APP_STATIC_CDN_URL;

printEnvProfileInfo();

/**
 *
 * @returns 根据环境构建BundleAnalyzerPlugin配置
 */
 const buildBundleAnalyzerPluginConfig = () => {
  const UNI_PLATFORMS = ['h5', 'mp-weixin'];
  const platformIndex = UNI_PLATFORMS.indexOf(process.env.UNI_PLATFORM);
  const enableBundleAnalyzer = platformIndex >= 0;
  return {
    analyzerMode: enableBundleAnalyzer ? 'server' : 'disabled',
    analyzerHost: '127.0.0.1',
    analyzerPort: 'auto',
    openAnalyzer: true,
    logLevel: 'info',
  }
};

const buildUploadAssetsToQiniuConfig = () => {
  const accessKey = process.env.VUE_APP_QINIU_ACCESS_KEY;
  const secretKey = process.env.VUE_APP_QINIU_SECRET_KEY;
  const bucket = process.env.VUE_APP_QINIU_BUCKET;
  const path = 'src/assets';
  return {
    accessKey,
    secretKey,
    bucket,
    path,
  };
};

const buildUploadAssetsToALiOssConfig = () => {
  const region = process.env.VUE_APP_ALI_OSS_REGION;
  const accessKeyId = process.env.VUE_APP_ALI_OSS_ACCESS_KEY_ID;
  const accessKeySecret = process.env.VUE_APP_ALI_OSS_ACCESS_KEY_SECRET;
  const bucket = process.env.VUE_APP_ALI_OSS_BUCKET;
  return {
    region,
    accessKeyId,
    accessKeySecret,
    bucket,
  };
};
module.exports = {
  // publicPath: './', // uniapp不支持，需参考https://uniapp.dcloud.net.cn/collocation/manifest.html#h5-router
  lintOnSave: !isProd,
  transpileDependencies: ['uview-ui', 'luch-request', '@dcloudio/uni-ui', 'z-paging'],
  chainWebpack: (config) => {
    if (!isDev || process.env.UNI_PLATFORM !== 'h5' || 'app-plus') {
      config.module
        .rule('vue')
        .use('vue-loader')
        .end()
        .use('customLoader')
        .loader(path.resolve(__dirname, './custom-loader.js'))
        .end();
    }
    if (!isDev || process.env.UNI_PLATFORM !== 'h5' || 'app-plus') {
      config.module
        .rule('images')
        .test(/\.(jpg|jpeg|png|gif)$/)
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
			disableHostCheck: true,
      overlay: {
        warnings: false,
        errors: true
      },
		},
    plugins: [
      new webpack.DefinePlugin({
        PROJECT_NAME: JSON.stringify(projectname),
      }),
      new webpack.DefinePlugin({
				ROUTES: webpack.DefinePlugin.runtimeValue(() => {
					const tfPages = new TransformPages({
						includes: ['path', 'aliasPath', 'name', 'meta']
					});
					return JSON.stringify(tfPages.routes)
				}, true )
			}),
      new vConsolePlugin({
        filter: [],  // 需要过滤的入口文件
        enable: process.env.UNI_PLATFORM === 'h5' && !isProd // 发布代码前记得改回 false
      }),
      /**
       * 新增依赖后,请务必关注这个插件的分析结果,做好分包/同构/懒加载等设计
       * @see https://www.npmjs.com/package/webpack-bundle-analyzer
       */
      // new BundleAnalyzerPlugin(buildBundleAnalyzerPluginConfig()),
      // new UploadAssets2Qiniu(buildUploadAssetsToQiniuConfig()),
      !isDev ? new UploadAssets2ALiOSS(buildUploadAssetsToALiOssConfig()) : undefined,
    ].filter(plugin => plugin),
  },
};

/**
 * 打印编译h环境和配置信息
 */
function printEnvProfileInfo () {
  const envProfile = process.env.VUE_APP_ENV_PROFILE;
  if (envProfile) {
    console.debug(`当前生效env文件 ${envProfile}`);
  } else {
    console.error(`请在正确的.env.${process.env.NODE_ENV}文件中配置VUE_APP_ENV_PROFILE`);
  }
};
