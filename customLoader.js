const STATIC_CND_URL = process.env.VUE_APP_STATIC_CDN_URL;
module.exports = function (source) {
  return source.replace(/@images\//g, STATIC_CND_URL);
};
