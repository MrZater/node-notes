const express = require("express");
const path = require("path");
const staticRoot = path.resolve(__dirname, "../public");
const app = express(); // 创建一个express应用
const port = 5008; // 监听端口
/**
 * 下面代码作用：
 * 当请求时，会根据请求路径，从指定的路径中寻找是否存在该文件，如果存在，直接响应文件内容，从而不移交给后面的中间件
 * 如果不存在该文件，则移交给下面的中间件
 * 默认情况下，如果映射结果是一个目录，则会自动使用index.html文件
 */
app.use("/static/", express.static(staticRoot));

// 解析post请求x-www-form-urlencoded形式参数（列如：name=abc&id=1）原始form表单传值
app.use(
  express.urlencoded({
    extended: true,
  })
);

// 解析post请求json形式参数
app.use(express.json());

app.use(require("./errorMiddleware"));

app.listen(port, () => {
  console.log("server listen to 5008");
});
