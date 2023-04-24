const express = require("express");
// 处理api的请求
// 定义一个处理管理员接口的路由
const adminRouter = express.Router();
// 管理员server
const adminServe = require("../../services/adminService");
// 处理响应数据的方法
const { asyncHandler } = require("../getSendResult");
// 加密方法
const cryptor = require("../../util/crypt");

// get ---> /api/student/login
adminRouter.post(
  "/login",
  asyncHandler(async (req, res, next) => {
    // 验证账号、密码
    const result = await adminServe.login(req.body.loginId, req.body.loginPwd);
    if (result) {
      // 使用cookie-parser注入的cookie方法去设置cookie
      // 加密token
      const value = cryptor.encrypt(result.id.toString());
      res.cookie("token", value, {
        path: "/",
        domain: "localhost",
        // 过期时间
        maxAge: 7 * 60 * 60 * 1000 * 24,
        // 不允许web使用
        httpOnly: true,
        // 是否使用对称加密
        // signed: true,
      });
      // 添加header，除浏览器以外的设备使用
      res.header("authorization", value);
    }
    return result;
  })
);

// get ---> /api/admin/:id
adminRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    // 获取单个管理员
    const result = await adminServe.getAdminById(req.params.id);
    return result;
  })
);

// post ---> /api/admin
adminRouter.post(
  "/",
  asyncHandler(async (req, res, next) => {
    // 添加管理员
    const result = await adminServe.addAdmin(req.body);
    return result;
  })
);

// delete ---> /api/admin/:id
adminRouter.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    // 删除管理员
    return await adminServe.deleteAdmin(req.params.id);
  })
);
// put ---> /api/admin/:id
adminRouter.put(
  "/:id",
  asyncHandler(async (req, res) => {
    // 修改管理员
    return await adminServe.updateAdmin(req.params.id, req.body);
  })
);

module.exports = adminRouter;
