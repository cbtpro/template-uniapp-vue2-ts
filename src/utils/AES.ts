import cryptoJs from 'crypto-js';

// 对称加密
const initialKey = 'thisisker'; // 秘钥
const keySize = 128; // 设置数据块长度
const iv = cryptoJs.enc.Utf8.parse('ABCDEF1234123412'); //十六位十六进制数作为密钥偏移量

export default {
  // 填充秘钥
  getKey() {
    const filledKey = Buffer.alloc(keySize / 8);
    const keys = Buffer.from(initialKey);
    if (keys.length < filledKey.length) {
      filledKey.forEach((b, i) => filledKey[i] = keys[i]);
    }
    return filledKey;
  },
  encrypt(clear: unknown) {
    //获取填充后的key
    const key = cryptoJs.enc.Utf8.parse(this.getKey() as unknown as string);
    //判断非string类型使用JSON.stringify转换
    let data;
    if (typeof clear === 'string') {
      data = clear;
    } else {
      data = JSON.stringify(clear);
    }
    //加密
    const enc = cryptoJs.AES.encrypt(data, key, {
      mode: cryptoJs.mode.CBC,
      padding: cryptoJs.pad.Pkcs7,
      iv: iv,
    });
    // 将加密后的数据转换成 Base64
    const encString = enc.ciphertext.toString(cryptoJs.enc.Base64);
    // 处理 Android 某些低版的BUG
    const encResult = encString.replace(/\+/g, '-').replace(/\//g, '_');
    return encResult;
  },
  decrypt(code: string) {
    //获取填充后的key
    const key = cryptoJs.enc.Utf8.parse(this.getKey() as unknown as string);
    //先将Base64还原一下，因为加密的时候做了一些字符的替换
    const restoreBase64 = code.replace(/\-/g, '+').replace(/_/g, '/');
    //返回的是解密后的对象
    const decrypt = cryptoJs.AES.decrypt(restoreBase64, key, {
      mode: cryptoJs.mode.CBC,
      padding: cryptoJs.pad.Pkcs7,
      iv: iv,
    });
    //将解密对象转换成UTF8的字符串
    const decryptedStr = cryptoJs.enc.Utf8.stringify(decrypt);
    //返回解密结果
    return decryptedStr;
  },
};
