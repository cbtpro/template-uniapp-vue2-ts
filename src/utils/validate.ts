export function isValidUsername(str = '') {
  const valid_map = ['admin', 'editor'];
  return valid_map.indexOf(str.trim()) >= 0;
}

/* 合法uri*/
export function validateURL(textVal: string) {
  const emailRegex = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  return emailRegex.test(textVal);
}

/**
 * 手机号码
 * @param {*} s
 */
export function isMobile(mobile: string) {
  const mobileRegex = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
  return mobileRegex.test(mobile);
}

/**
 * 电话号码
 * @param {*} s
 */
export function isPhone(phone: string) {
  return /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/.test(phone);
}

/**
 * URL地址
 * @param {*} s
 */
export function isURL(url: string) {
  return /^http[s]?:\/\/.*/.test(url);
}

/**
 * 是小写字母
 * @param str 字符串
 * @returns Boolean
 */
export function isLowerCase(str: string) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}
/**
 * 是大写字母
 * @param str 字符串
 * @returns Boolean
 */
export function isUpperCase(str: string) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/**
 * 只包含字母
 * @param str 字符
 * @returns boolean
 */
export function isAlphabets(str: string) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}
/**
 * 是合法邮箱
 * @param email
 * @returns {boolean}
 */
export function isEmail(email = '') {
  const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/**
 * 判断身份证号码
 */
export function isIdCard(idCard: string) {
  const list = [];
  let result = true;
  let msg = '';
  const city = {
    '11': '北京',
    '12': '天津',
    '13': '河北',
    '14': '山西',
    '15': '内蒙古',
    '21': '辽宁',
    '22': '吉林',
    '23': '黑龙江 ',
    '31': '上海',
    '32': '江苏',
    '33': '浙江',
    '34': '安徽',
    '35': '福建',
    '36': '江西',
    '37': '山东',
    '41': '河南',
    '42': '湖北 ',
    '43': '湖南',
    '44': '广东',
    '45': '广西',
    '46': '海南',
    '50': '重庆',
    '51': '四川',
    '52': '贵州',
    '53': '云南',
    '54': '西藏 ',
    '61': '陕西',
    '62': '甘肃',
    '63': '青海',
    '64': '宁夏',
    '65': '新疆',
    '71': '台湾',
    '81': '香港',
    '82': '澳门',
    '83': '台湾',
  };
  if (!isNull(idCard)) {
    if (idCard.length === 18) {
      const cityId = idCard.substring(0, 2);
      if (!idCard || !/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(idCard)) {
        msg = '证件号码格式错误';
      } else if (cityId in city) {
        //18位身份证需要验证最后一位校验位
        const codes = idCard.split('').map((v) => Number.parseInt(v, 10));
        //∑(ai×Wi)(mod 11)
        //加权因子
        const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        //校验位
        const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2, 'x'];
        let sum = 0;
        let ai = 0;
        let wi = 0;
        for (let i = 0; i < 17; i++) {
          ai = codes[i];
          wi = factor[i];
          sum += ai * wi;
        }
        if (parity[sum % 11] !== codes[17]) {
          msg = '证件号码校验位错误';
        } else {
          result = false;
        }
      } else {
        msg = '地址编码错误';
      }
    } else {
      msg = '证件号码长度不为18位';
    }
  } else {
    msg = '证件号码不能为空';
  }
  list.push(result);
  list.push(msg);
  return list;
}

/**
 * 是整数
 */
export function isInteger(num: string) {
  const integerRegex = /^-?[1-9]\d*$/;
  return integerRegex.test(num);
}
/**
 * 是小数
 */
export function isDecimal(num: string) {
  const decimalRegex = /^\d+\.\d+$/;
  return decimalRegex.test(num);
}
/**
 * 判断是否为空
 */
export function isNull(val: unknown) {
  if (typeof val === 'boolean') {
    return false;
  }
  if (typeof val === 'number') {
    return false;
  }
  if (val instanceof Array) {
    if (val.length === 0) return true;
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true;
  } else {
    if (
      val === 'null'
      || val === null
      || val === 'undefined'
      || val === undefined
      || val === ''
    )
      return true;
    return false;
  }
  return false;
}
