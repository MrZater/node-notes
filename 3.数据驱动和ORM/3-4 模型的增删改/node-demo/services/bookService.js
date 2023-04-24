//书本初始化
const Book = require('../models/Book')
exports.addBook = async function (bookObj) {
    // 应该判断bookObj的各种属性是否合理，以及账户是否存在
    const ins = await Book.create(bookObj)
    return ins.toJSON()
}
exports.deleteBook = async function (bookId) {
    // 方式1
    // // 1. 得到实例
    // const ins = await Book.findByPk(bookId)
    // // 2.操作实例
    // if (ins) {
    //     await ins.destroy()
    // }


    // 方式2
    // 直接通过模型删除
    Book.destroy({
        // 条件
        where: {
            id: bookId
        }
    })
}
exports.updateBook = async function (id, bookObj) {
    // 方式1
    // // 1.得到实例
    // const ins = await Book.findByPk(id)
    // ins.loginId = bookObj.loginId
    // // 2.保存
    // ins.save()


    // 方式2
    // 直接修改
    Book.update(bookObj, {
        // 条件
        where: {
            id
        }
    })
}