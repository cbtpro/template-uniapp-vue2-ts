/**
 * 对象相关的方法
 */

/**
 * 对对象属性进行排序
 */
export const objectHelper = {
  sort(obj: {
    [x: string]: unknown;
  }) {
    const keys = Object.keys(obj).sort((a, b) => a.localeCompare(b));
    const sortedObj: {
      [x: string]: unknown;
    } = {};
    keys.forEach((key) => {
      sortedObj[key] = obj[key];
    });
    return sortedObj;
  },
};
