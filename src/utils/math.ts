/**
 * 生成安全随机数
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（包含）
 * @param {boolean} isFloat 是否带小数
 * @returns {number} 范围内随机数
 * @example
 * const rand = random(0, 5)
 */
export const random = (min = 0, max = 100, isFloat = false) => {
  const array = new Uint32Array(1);
  const maxUint = 0xffffffff;
  const randomNumber = crypto.getRandomValues(array)[0] / maxUint;
  const randomRangeValue = (max - min + 1) * randomNumber + min;
  return isFloat ? randomRangeValue : Math.floor(randomRangeValue);
};

export const public1 = {
  a: 1,
  b: 2,
  '🤔': '1',
  class: 1,
  public: 1,
  1: 1,
  private: 1,
  static: 1,
  boolean: 2,
  'a-b': 1,
};
public1['a'];

const { a, b } = public1;
console.log(a, b);
