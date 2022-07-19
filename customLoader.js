module.exports = function(source) {
  // return source.replace(/@images\//g, '//oss.xxx.com/img');
  return source.replace(/@images\//g, 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/');
};