import JsRSASign from 'jsrsasign';

/** 私钥 */
const PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----\n'
+ 'MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAI2wRDW0S7NRZzssLTPh69K3rhTxiSf0UGSI5j3Xwu7swiY1hb8uKEdLArR2U+YkAdAh286gfX4bb5X3ZfPIHO5SX50eMEqAQ6z52GivBYgc1l2XtBMzLKGGo0GW1IZ/4ASC1HcuKTo3egUsYBV6KxIndNaf1Xzw54dUGUXASn4DAgMBAAECgYAzjMIEWAiCwUcxvCzmB3hpPfLUI9ym8LifGz/JmEqP6wvoIuj6WazF44Ckb7iursMKGoeCcdm2m/zJLy2kuFXtwLfKQ4DT08u2tPA/bahdb+gt2wlltS0c//NPbTfqrNs/Y5CY4cdM1p2OJm44vrMf6OeT0fNjiP3eCjL0nafSYQJBAPOEVUjWfiUoobHHRTK+7a+Gkeed0TF9jDdN169Wc/qnIWez2sDZS66nWD04v0XvL+txaYd29klfy99kmUPb7ocCQQCU86RNptmpkpQOkt+9TEgj0GZCHFkgch6pIUi+knkGFPtXFHPcU0DiS9xCuOOSX1802NDthI9eSuNwDpJ0T3elAkB7mX9wKO5+DdGEWpBU4XPi03rbBM9ZP1AcAfanmEnlv07FRBSULbasP2QaLuNmq7C24CmgCFGZjHX+PSFNwCOhAkAKQvrHyr3mG84NbvrxDKdPqFTTKybMwG/yUPO1BVxHGfzy09rji+zFalqDUj+DXwStHF7Qbjh+U4R1vNtEHhFtAkEApEY6Y+8Z3IjCQ9IZaiT6lu60DRMhSz3ONpf3j7bHydBh+b/jdlLHSc3xuvZmlyet9/KWQIXP4Hzgke4wZQgQ7Q==\n'
+ '-----END PRIVATE KEY-----';

/** 公钥 */
const PUBLIC_KEY = '-----BEGIN PUBLIC KEY-----\n'
+ 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCNsEQ1tEuzUWc7LC0z4evSt64U8Ykn9FBkiOY918Lu7MImNYW/LihHSwK0dlPmJAHQIdvOoH1+G2+V92XzyBzuUl+dHjBKgEOs+dhorwWIHNZdl7QTMyyhhqNBltSGf+AEgtR3Lik6N3oFLGAVeisSJ3TWn9V88OeHVBlFwEp+AwIDAQAB\n'
+ '-----END PUBLIC KEY-----';

/**
 * MD5withECDSA: "cryptojs/jsrsa"
 * MD5withRSA: "cryptojs/jsrsa" 支持,值一样,验签通过
 * MD5withRSAandMGF1: "cryptojs/jsrsa" 支持,值不一样,验签通过
 * RIPEMD160withECDSA: "cryptojs/jsrsa"
 * RIPEMD160withRSA: "cryptojs/jsrsa" 支持,值一样,验签通过
 * RIPEMD160withRSAandMGF1: "cryptojs/jsrsa" 支持,值不一样,验签通过
 * SHA1withDSA: "cryptojs/jsrsa"
 * SHA1withECDSA: "cryptojs/jsrsa"
 * SHA1withRSA: "cryptojs/jsrsa" 支持,值一样,验签通过
 * SHA1withRSAandMGF1: "cryptojs/jsrsa" 支持,值不一样,验签通过
 * SHA224withDSA: "cryptojs/jsrsa"
 * SHA224withECDSA: "cryptojs/jsrsa"
 * SHA224withRSA: "cryptojs/jsrsa" 支持,值一样,验签通过
 * SHA224withRSAandMGF1: "cryptojs/jsrsa" 支持,值不一样,验签通过
 * SHA256withDSA: "cryptojs/jsrsa"
 * SHA256withECDSA: "cryptojs/jsrsa"
 * SHA256withRSA: "cryptojs/jsrsa" 支持,值一样,验签通过
 * SHA256withRSAandMGF1: "cryptojs/jsrsa" 支持,值不一样,验签通过
 * SHA384withECDSA: "cryptojs/jsrsa" 支持,值一样,验签通过
 * SHA384withRSA: "cryptojs/jsrsa" 支持,值一样,验签通过
 * SHA384withRSAandMGF1: "cryptojs/jsrsa" 支持,值一样,验签通过
 * SHA512withECDSA: "cryptojs/jsrsa"
 * SHA512withRSA: "cryptojs/jsrsa" 支持,值一样,验签通过
 * SHA512withRSAandMGF1: "cryptojs/jsrsa"
 * SHAwithRSAandMGF1: "cryptojs/jsrsa" 支持,值不一样,验签通过
 * hmacmd5: "cryptojs"
 * hmacripemd160: "cryptojs"
 * hmacsha1: "cryptojs"
 * hmacsha224: "cryptojs"
 * hmacsha256: "cryptojs"
 * hmacsha384: "cryptojs"
 * hmacsha512: "cryptojs"
 * md5: "cryptojs"
 * ripemd160: "cryptojs"
 * sha1: "cryptojs"
 * sha224: "cryptojs"
 * sha256: "cryptojs"
 * sha384: "cryptojs"
 * sha512: "cryptojs"
 */
export const sign = {
  /**
   * 算法列表
   */
  DEFAULT_PROVIDER_ALGORITHMS: Object.keys(JsRSASign.KJUR.crypto.Util.DEFAULTPROVIDER),
  encrypt(src: string) {
    // TODO
    console.debug(src);
  },
  decrypt(code: string) {
    // TODO
    console.debug(code);
  },
  signature(src: string, algorithm: string) {
    const privateKey = JsRSASign.KEYUTIL.getKey(PRIVATE_KEY);
    const signature = new JsRSASign.KJUR.crypto.Signature({ alg: algorithm });
    signature.init(privateKey);
    signature.updateString(src);
    const sign = signature.sign();
    const base64 = JsRSASign.hextob64(sign);
    return base64;
  },
  verify(signData: string, data: string, algorithm: string) {
    const publicKey = JsRSASign.KEYUTIL.getKey(PUBLIC_KEY);
    const signature = new JsRSASign.KJUR.crypto.Signature({ alg: algorithm });
    signature.init(publicKey);
    signature.updateString(data);
    const isValid = signature.verify(JsRSASign.b64tohex(signData));
    return isValid;
  },
};
