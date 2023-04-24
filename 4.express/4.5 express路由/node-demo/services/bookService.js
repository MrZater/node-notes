//书本初始化
const Book = require('../models/Book')
const {
    Op
} = require('sequelize')
exports.addBook = async function (bookObj) {
    // 应该判断bookObj的各种属性是否合理，以及账户是否存在
    const ins = await Book.create(bookObj)
    return ins.toJSON()
}
exports.deleteBook = async function (bookId) {
    // 直接通过模型删除
    Book.destroy({
        // 条件
        where: {
            id: bookId
        }
    })
}
exports.updateBook = async function (id, bookObj) {
    // 直接修改
    Book.update(bookObj, {
        // 条件
        where: {
            id
        }
    })
}

// 通过id查询书籍
exports.getBookById = async function (id) {
    const result = await Book.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
};

// 通过传参查询书籍分页数据
exports.getBooks = async function (page = 1, limit = 10, keywords = "") {
    const result = await Book.findAndCountAll({
        where: {
            [Op.or]: [
                //里面的两个条件是或者关系
                {
                    //条件1：姓名模糊匹配关键词
                    name: {
                        [Op.like]: `%${keywords}%`,
                    },
                },
                {
                    //条件2：作者模糊匹配关键词
                    author: {
                        [Op.like]: `%${keywords}%`,
                    },
                },
            ],
        },
        offset: (page - 1) * limit,
        limit: +limit,
    });
    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows)),
    };
};