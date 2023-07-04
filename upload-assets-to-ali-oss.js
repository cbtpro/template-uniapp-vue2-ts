const path = require('path');
const fs = require('fs');
const OSS = require('ali-oss');

const pluginName = 'UploadAssetsToALiOSS';

class UploadAssets2ALiOSS {
  constructor(options) {
    const { region, accessKeyId, accessKeySecret, bucket } = options;
    if (!region) {
      throw new Error(
        '必须提供阿里云OSS存储VUE_APP_ALI_OSS_REGION用于小程序请求图片'
      );
    }
    if (!accessKeyId) {
      throw new Error(
        '必须提供阿里云OSS存储VUE_APP_ALI_OSS_ACCESS_KEY_ID用于小程序请求图片'
      );
    }
    if (!accessKeySecret) {
      throw new Error(
        '必须提供阿里云OSS存储VUE_APP_ALI_OSS_ACCESS_KEY_SECRET用于小程序请求图片'
      );
    }
    if (!bucket) {
      throw new Error(
        '必须提供阿里云OSS存储VUE_APP_ALI_OSS_BUCKET用于小程序请求图片'
      );
    }
    const client = new OSS({
      // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
      region,
      // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
      accessKeyId,
      accessKeySecret,
      bucket,
    });

    const headers = {
      // 指定该Object被下载时网页的缓存行为。
      // 'Cache-Control': 'no-cache',
      // 指定该Object被下载时的名称。
      // 'Content-Disposition': 'oss_download.txt',
      // 指定该Object被下载时的内容编码格式。
      // 'Content-Encoding': 'UTF-8',
      // 指定过期时间。
      // 'Expires': 'Wed, 08 Jul 2022 16:57:01 GMT',
      // 指定Object的存储类型。
      // 'x-oss-storage-class': 'Standard',
      // 指定Object的访问权限。
      // 'x-oss-object-acl': 'private',
      // 设置Object的标签，可同时设置多个标签。
      // 'x-oss-tagging': 'Tag1=1&Tag2=2',
      // 指定CopyObject操作时是否覆盖同名目标Object。此处设置为true，表示禁止覆盖同名Object。
      // 'x-oss-forbid-overwrite': 'true',
    };

    function readFileList(dir, filesList = []) {
      const files = fs.readdirSync(dir);
      files.forEach((item) => {
        var fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          readFileList(path.join(dir, item), filesList); //递归读取文件
        } else {
          filesList.push(fullPath);
        }
      });
      return filesList;
    }
    const filesList = [];
    const assetPath = 'src/assets/';
    readFileList(assetPath, filesList);

    async function put(key, localPath) {
      try {
        // 填写OSS文件完整路径和本地文件的完整路径。OSS文件完整路径中不能包含Bucket名称。
        // 如果本地文件的完整路径中未指定本地路径，则默认从示例程序所属项目对应本地路径中上传文件。
        const result = await client.put(key, localPath, {
          headers,
        });
        const { url } = result;
        console.log(localPath, '上传成功!');
        console.log(url);
      } catch (e) {
        console.log(e);
      }
    }

    filesList.forEach((path) => {
      const key = path.substring(assetPath.length);
      console.log(key);
      put(key, path);
    });
  }
  apply(compiler) {
    compiler.hooks.run.tap(
      pluginName,
      function (compilation /* 处理 webpack 内部实例的特定数据。*/, callback) {
        console.log('开始上传阿里云OSS存储');
        if (callback) {
          callback();
        }
      }
    );
    compiler.hooks.done.tap('done', function () {
      console.log('上传阿里云OSS存储完成!');
    });
  }
}

module.exports = UploadAssets2ALiOSS;
