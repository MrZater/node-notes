const express = require("express");
// 处理api的请求
// 定义一个处理班级接口的路由
const classRouter = express.Router();
// 班级server
const classServ = require("../../services/classService");
// 处理响应数据的方法
const { asyncHandler } = require("../getSendResult");
// get ---> /api/class
classRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    // 获取全部班级信息
    const result = await classServ.getClasses();
    return result;
  })
);

// get ---> /api/class/:id
classRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    // 获取单个班级信息
    const result = await classServ.getClassById(req.params.id);
    return result;
  })
);

// post ---> /api/class
classRouter.post(
  "/",
  asyncHandler(async (req, res, next) => {
    // 添加班级
    const result = await classServ.addClass(req.body);
    return result;
  })
);

// delete ---> /api/class/:id
classRouter.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    // 删除班级
    return await classServ.deleteClass(req.params.id);
  })
);
// put ---> /api/class/:id
classRouter.put(
  "/:id",
  asyncHandler(async (req, res) => {
    // 修改班级
    return await classServ.updateClass(req.params.id, req.body);
  })
);

module.exports = classRouter;
