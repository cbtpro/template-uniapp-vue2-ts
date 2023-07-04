const STATIC_CDN_URL = process.env.VUE_APP_STATIC_CDN_URL;
module.exports = function (source) {
  return source.replace(/@\/assets\//g, STATIC_CDN_URL);
};
