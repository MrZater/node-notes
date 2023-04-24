const { getErr } = require("./getSendResult");
// 处理路径正则的第三方库
const { pathToRegexp } = require("path-to-regexp");
// 加解密方法
const cryptor = require("../util/crypt");
// 需要token认证的方法数组
const needTokenApi = [
  // { path: "/api/student", method: "POST" },
  // { path: "/api/student", method: "GET" },
  // { path: "/api/student/:id", method: "PUT" },
];

module.exports = (req, res, next) => {
  // 判断当前请求方法是否需要token验证
  const apis = needTokenApi.filter((api) => {
    // 请求方法、请求路径都相同
    if (api.method === req.method && pathToRegexp(api.path).test(req.path)) {
      return true;
    } else {
      return false;
    }
  });
  // 不需要token验证
  if (apis.length === 0) {
    next();
    return;
  }
  // 需要token验证
  // 获取未加密cookie
  let token = req.cookies.token;
  // 获取加密cookie
  // let token = req.signedCookies.token;
  // token的cookie不存在
  // 1. 可能没有验证信息
  // 2. 可能适配其他终端存放在headers中
  if (!token) {
    // 获取headers中的验证信息
    token = req.header["authorization"];
  }
  // 仍然没有值，表示未认证
  if (!token) {
    // 未认证
    handleNonToken(req, res, token);
    return;
  }
  // 有token
  // 解密token
  const userId = cryptor.decrypt(token);
  // 验证token
  req.userId = userId;
  next();
};

function handleNonToken(req, res, next) {
  res
    .status(403)
    .send(getErr("You do not have any token to access the api", 403));
}
