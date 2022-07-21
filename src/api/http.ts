const request = (options: UniApp.RequestOptions) => {
  return uni.request({
    ...options,
  });
}

export default {
  request,
}
