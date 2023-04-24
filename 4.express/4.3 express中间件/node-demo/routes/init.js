const express = require("express");

const app = express(); // 创建一个express应用
const port = 5008; // 监听端口

app.get(
  "/news",
  (req, res, next) => {
    console.log("handle1");
    // 报错
    throw new Error('错误')// 相当于调用了 next(new Error('错误'))
    next()
  }
);
app.use(require('./errorMiddleware'))

app.listen(port, () => {
  console.log("server listen to 5008");
});
