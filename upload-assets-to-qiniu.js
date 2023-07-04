const path = require('path');
const fs = require('fs');
const qiniu = require('qiniu');

const pluginName = 'UploadAssetsToQiniu';

class UploadAssets2Qiniu {
  constructor(options) {
    const { accessKey, secretKey, bucket } = options;
    if (!accessKey) {
      throw new Error(
        '必须提供七牛存储VUE_APP_QINIU_ACCESS_KEY用于小程序请求图片'
      );
    }
    if (!secretKey) {
      throw new Error(
        '必须提供七牛存储VUE_APP_QINIU_SECRET_KEY用于小程序请求图片'
      );
    }
    if (!bucket) {
      throw new Error('必须提供七牛存储VUE_APP_QINIU_BUCKET用于小程序请求图片');
    }
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

    const dirs = [];
    const pathName = 'src/assets/';
    fs.readdir(pathName, function (err, files) {
      (function iterator(i) {
        if (i === files.length) {
          console.log(dirs);
          return;
        }
        fs.stat(path.join(pathName, files[i]), function (err, data) {
          if (data.isFile()) {
            dirs.push(files[i]);
          }
          iterator(i + 1);
        });
      })(0);
    });

    const keyToOverwrite = '/Pure.jpg';
    const policyOptions = {
      scope: bucket + ':' + keyToOverwrite,
    };
    const putPolicy = new qiniu.rs.PutPolicy(policyOptions);
    const uploadToken = putPolicy.uploadToken(mac);

    const localFile = 'src/assets/Pure.jpg';
    const config = new qiniu.conf.Config();
    const formUploader = new qiniu.form_up.FormUploader(config);
    const putExtra = new qiniu.form_up.PutExtra();
    const key = '/Pure.jpg';
    // 文件上传
    formUploader.putFile(
      uploadToken,
      key,
      localFile,
      putExtra,
      function (respErr, respBody, respInfo) {
        if (respErr) {
          throw respErr;
        }
        if (respInfo.statusCode === 200) {
          console.log(respBody);
        } else {
          console.error(respInfo.statusCode);
          console.error(respBody);
        }
      }
    );
  }
  apply(compiler) {
    compiler.hooks.run.tap(
      pluginName,
      function (compilation /* 处理 webpack 内部实例的特定数据。*/, callback) {
        console.log('开始上传七牛存储');
        if (callback) {
          callback();
        }
      }
    );
    compiler.hooks.done.tap('done', function () {
      console.log('上传七牛存储完成!');
    });
  }
}

module.exports = UploadAssets2Qiniu;
