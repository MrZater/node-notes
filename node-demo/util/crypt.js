// 使用对称加密算法 aes 128位
// 128位的秘钥
const sercet = Buffer.from("kaft5zo9oa1wyp2k");
// 内置加密模块
const crypto = require("crypto");

// 准备一个iv，随机向量，128位
// const iv = Buffer.from(
//   Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8)
// );
const iv = Buffer.from('kaft5zo9dg1wyp2k');

// 加密一个字符串
exports.encrypt = function (str) {
  // 创建一个加密实例 传参： 加密方式、加密秘钥、iv
  const cry = crypto.createCipheriv("aes-128-cbc", sercet, iv);
  // 得到一个加密结果 传参：加密字符、字符编码形式、加密后编码形式
  let result = cry.update(str, "utf-8", "hex");
  // 结果连接final，得到最终加密字符
  result += cry.final("hex");
  return result;
};
// 解密一个字符串
exports.decrypt = function (str) {
  // 创建一个解密实例 传参： 解密方式、加密秘钥、iv
  const decry = crypto.createDecipheriv("aes-128-cbc", sercet, iv);
  // 对加密字符进行解密 传参： 加密字符、加密字符编码形式、目标编码形式
  let result = decry.update(str, "hex", "utf-8");
  // 结果连接final，得到最终解密字符
  result += decry.final("utf-8");
  return result;
};
