const express = require("express");
const path = require("path");
// 静态资源目录
const staticRoot = path.resolve(__dirname, "../public");
const app = express(); // 创建一个express应用
const port = 5008; // 监听端口
/**
 * 静态资源中间件
 * 下面代码作用：
 * 当请求时，会根据请求路径，从指定的路径中寻找是否存在该文件，如果存在，直接响应文件内容，从而不移交给后面的中间件
 * 如果不存在该文件，则移交给下面的中间件
 * 默认情况下，如果映射结果是一个目录，则会自动使用index.html文件
 */
app.use("/static/", express.static(staticRoot));

// 加入cookie-parser
// 加入之后会在req对象中注入cookies属性，用于获取所有请求传递过来的cookie  req.cookies
// 加入之后，会在res对象中注入cookie方法，用于设置cookie   res.cookie(key, value, options)
const cookieParser = require('cookie-parser')
// 可传参：秘钥，string
app.use(cookieParser())

// 应用token中间件
app.use(require('./tokenMiddleware'))

// 解析post请求x-www-form-urlencoded形式参数（列如：name=abc&id=1）原始form表单传值
app.use(
  express.urlencoded({
    extended: true,
  })
);

// 解析post请求json形式参数
app.use(express.json());

// api接口处理
// 学生
app.use("/api/student", require('./api/student'));
// 班级
app.use("/api/class", require('./api/class'));
// 书籍
app.use("/api/book", require('./api/book'));
// 管理员
app.use("/api/admin", require('./api/admin'));

// 处理错误的中间件
app.use(require("./errorMiddleware"));

app.listen(port, () => {
  console.log("server listen to 5008");
});
