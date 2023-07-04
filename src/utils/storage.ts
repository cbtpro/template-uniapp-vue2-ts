/**
 * 缓存工具类
 */

export const storageHelper = {
  name: '本地存储',
  /**
   * 同步缓存对象
   * @param k 缓存key
   * @param v 缓存值
   * @param expired 过期时间，不设置为永久缓存
   */
  setItemSync(k: string, v: unknown, expired?: number) {
    if (expired !== undefined && expired >= 0) {
      const expiredKey = `${k}__expires__`;
      const exp = Date.now() + 1000 * 60 * expired;
      uni.setStorageSync(expiredKey, exp + '');
    }

    uni.setStorageSync(k, v);
  },
  getItemSync<T>(k: string) {
    const expiredKey = `${k}__expires__`;
    let expired = uni.getStorageSync(expiredKey);
    try {
      expired = expired ? parseFloat(expired) : Number.MAX_SAFE_INTEGER;
    } catch (e) {
      if (expired) {
        expired = Date.now() - 1000;
      }
    }
    if (expired) {
      if (expired > Date.now()) {
        return uni.getStorageSync(k) as T;
      }
    }
    // 过期
    uni.removeStorageSync(k);
    uni.removeStorageSync(expiredKey);
    return null;
  },
  removeItem(k: string) {
    const expiredKey = `${k}__expires__`;
    uni.removeStorage({
      key: expiredKey,
    });
    return new Promise((resolve, reject) => {
      uni.removeStorage({
        key: k,
        success() {
          resolve(undefined);
          console.debug(`移除缓存${k}成功。`);
        },
        fail() {
          reject();
          console.error(`移除缓存${k}失败。`);
        },
        complete() {
          console.debug(`移除缓存${k} complete。`);
        },
      });
    });
  },
  removeItemSync(k: string) {
    uni.removeStorageSync(k);
  },
  removeAll() {
    return uni.clearStorage();
  },
};
