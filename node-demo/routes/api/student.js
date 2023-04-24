const express = require("express");
// 处理api的请求
// 定义一个处理学生接口的路由
const studentRouter = express.Router();
// 学生server
const stuServe = require("../../services/studentService");
// 处理响应数据的方法
const { asyncHandler } = require("../getSendResult");
// get ---> /api/student
studentRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    // 获取学生分页
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const sex = req.query.sex || -1;
    const name = req.query.name || "";
    const result = await stuServe.getStudents(page, limit, sex, name);
     res.send(result)
  })
);

// get ---> /api/student/:id
studentRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    // 获取单个学生
    const result = await stuServe.getStudentById(req.params.id);
    return result;
  })
);

// post ---> /api/student
studentRouter.post(
  "/",
  asyncHandler(async (req, res, next) => {
    // 添加学生
    const result = await stuServe.addStudent(req.body);
    return result;
  })
);

// delete ---> /api/student/:id
studentRouter.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    // 删除学生
    return await stuServe.deleteStudent(req.params.id);
  })
);
// put ---> /api/student/:id
studentRouter.put(
  "/:id",
  asyncHandler(async (req, res) => {
    // 修改学生
    return await stuServe.updateStudent(req.params.id, req.body);
  })
);

module.exports = studentRouter;
