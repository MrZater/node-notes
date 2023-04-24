const express = require("express");
// 处理api的请求
// 定义一个处理书籍接口的路由
const bookRouter = express.Router();
// 书籍server
const bookServ = require("../../services/bookService");
// 处理响应数据的方法
const { asyncHandler } = require("../getSendResult");
// get ---> /api/book
bookRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    // 获取全部书籍信息
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const keywords = req.query.keywords || "";
    const result = await bookServ.getBooks(page, limit, keywords);
    return result;
  })
);

// get ---> /api/book/:id
bookRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    // 获取单个书籍信息
    const result = await bookServ.getBookById(req.params.id);
    return result;
  })
);

// post ---> /api/book
bookRouter.post(
  "/",
  asyncHandler(async (req, res, next) => {
    // 添加书籍
    const result = await bookServ.addBook(req.body);
    return result;
  })
);

// delete ---> /api/book/:id
bookRouter.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    // 删除书籍
    return await bookServ.deleteBook(req.params.id);
  })
);
// put ---> /api/book/:id
bookRouter.put(
  "/:id",
  asyncHandler(async (req, res) => {
    // 修改书籍
    return await bookServ.updateBook(req.params.id, req.body);
  })
);

module.exports = bookRouter;
