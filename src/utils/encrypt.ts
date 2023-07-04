import JSEncrypt from 'jsencrypt';
import CryptoJS from 'crypto-js';
import { mathHelper } from '@/utils';

export const RANDOM_STR = mathHelper.randomString();

const aa = [
  // HmacMD5: ƒ (message, key)
  // HmacRIPEMD160: ƒ (message, key)
  // HmacSHA1: ƒ (message, key)
  // HmacSHA3: ƒ (message, key)
  // HmacSHA224: ƒ (message, key)
  // HmacSHA256: ƒ (message, key)
  // HmacSHA384: ƒ (message, key)
  // HmacSHA512: ƒ (message, key)
  // MD5: ƒ (message, cfg) 支持
  // RIPEMD160: ƒ (message, cfg) 支持
  // SHA1: ƒ (message, cfg) 支持
  // SHA3: ƒ (message, cfg) 支持
  // SHA224: ƒ (message, cfg) 支持
  // SHA256: ƒ (message, cfg) 支持
  // SHA384: ƒ (message, cfg) 支持
  // SHA512: ƒ (message, cfg) 支持
];
/** 私钥 */
const PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----\n'
+ 'MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAI2wRDW0S7NRZzssLTPh69K3rhTxiSf0UGSI5j3Xwu7swiY1hb8uKEdLArR2U+YkAdAh286gfX4bb5X3ZfPIHO5SX50eMEqAQ6z52GivBYgc1l2XtBMzLKGGo0GW1IZ/4ASC1HcuKTo3egUsYBV6KxIndNaf1Xzw54dUGUXASn4DAgMBAAECgYAzjMIEWAiCwUcxvCzmB3hpPfLUI9ym8LifGz/JmEqP6wvoIuj6WazF44Ckb7iursMKGoeCcdm2m/zJLy2kuFXtwLfKQ4DT08u2tPA/bahdb+gt2wlltS0c//NPbTfqrNs/Y5CY4cdM1p2OJm44vrMf6OeT0fNjiP3eCjL0nafSYQJBAPOEVUjWfiUoobHHRTK+7a+Gkeed0TF9jDdN169Wc/qnIWez2sDZS66nWD04v0XvL+txaYd29klfy99kmUPb7ocCQQCU86RNptmpkpQOkt+9TEgj0GZCHFkgch6pIUi+knkGFPtXFHPcU0DiS9xCuOOSX1802NDthI9eSuNwDpJ0T3elAkB7mX9wKO5+DdGEWpBU4XPi03rbBM9ZP1AcAfanmEnlv07FRBSULbasP2QaLuNmq7C24CmgCFGZjHX+PSFNwCOhAkAKQvrHyr3mG84NbvrxDKdPqFTTKybMwG/yUPO1BVxHGfzy09rji+zFalqDUj+DXwStHF7Qbjh+U4R1vNtEHhFtAkEApEY6Y+8Z3IjCQ9IZaiT6lu60DRMhSz3ONpf3j7bHydBh+b/jdlLHSc3xuvZmlyet9/KWQIXP4Hzgke4wZQgQ7Q==\n'
+ '-----END PRIVATE KEY-----';

/** 公钥 */
const PUBLIC_KEY = '-----BEGIN PUBLIC KEY-----\n'
+ 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCNsEQ1tEuzUWc7LC0z4evSt64U8Ykn9FBkiOY918Lu7MImNYW/LihHSwK0dlPmJAHQIdvOoH1+G2+V92XzyBzuUl+dHjBKgEOs+dhorwWIHNZdl7QTMyyhhqNBltSGf+AEgtR3Lik6N3oFLGAVeisSJ3TWn9V88OeHVBlFwEp+AwIDAQAB\n'
+ '-----END PUBLIC KEY-----';

export const RSA = {
  /**
   * 加密
   * @param clear 明文
   * @param publicKey 公钥，可为空
   * @returns 密文
   */
  encrypt(clear: unknown, publicKey: string = PUBLIC_KEY) {
    let data;
    if (typeof clear === 'string') {
      data = clear;
    } else {
      data = JSON.stringify(clear);
    }
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey); // 公钥
    const encryptMsg = encrypt.encrypt(data);
    return encryptMsg;
  },
  /**
   * 解密
   * @param code 密文
   * @param privateKey 私钥，可为空
   * @returns 明文
   */
   decrypt(code: string, privateKey: string = PRIVATE_KEY) {
    const decrypt = new JSEncrypt();
    decrypt.setPrivateKey(privateKey); // 私钥
    const decryptMsg = decrypt.decrypt(code);
    return decryptMsg;
  },
  /**
   * 加签
   * @param data 明文
   * @param alg 算法
   * @param privateKey 私钥
   * @returns 加签后的密文
   */
  signature(data: string, alg: string, privateKey: string = PRIVATE_KEY) {
    const sign = new JSEncrypt();
    sign.setPrivateKey(privateKey);
    const signature = sign.sign(data, CryptoJS[alg], alg);
    return signature;
  },
  /**
   * 验签
   * @param clear 原文
   * @param code 密文
   * @param alg 算法
   * @param publicKey 公钥
   * @returns 验签结果
   */
  verify(clear: string, code: string, alg: string, publicKey: string = PUBLIC_KEY) {
    const verify = new JSEncrypt();
    verify.setPublicKey(publicKey);
    const verified = verify.verify(clear, code, CryptoJS[alg]);
    return verified;
  },
};
