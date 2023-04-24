// 处理错误的中间件
const { getErr } = require("./getSendResult");
module.exports = (err, req, res, next) => {
  if (err) {
    //发生了错误
    res.send(getErr(err instanceof Error ? err.message : err, 500));
  } else {
    next();
  }
};
