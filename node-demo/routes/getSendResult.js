/**
 * 处理接口错误的方法
 * @param {*} err 错误
 * @param {*} errCode 错误码
 * @returns 返回一个对象，响应数据
 */
exports.getErr = function (err = "server internal error", errCode = 500) {
  // 错误响应
  return {
    // 错误码
    code: errCode,
    // 错误信息
    msg: err,
  };
};
/**
 * 处理接口数据
 * @param {*} result 返回数据 
 * @returns 返回一个对象，响应数据
 */
exports.getResult = function (result) {
  return {
    code: 0,
    msg: "",
    data: result,
  };
};
/**
 * 处理接口请求的方法
 * @param {*} handler 请求的处理函数，返回一个处理结果 
 * @returns 该函数返回一个异步函数
 */
exports.asyncHandler = (handler) => {
  return async function (req, res, next) {
    try {
      const result = await handler(req, res,next);
      res.send(exports.getResult(result));
    } catch (err) {
      next(err);
    }
  };
};
