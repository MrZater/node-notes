// 学生初始化
const Student = require('../models/Student')
const Class = require('../models/Class')
// 查询条件api
const {
    Op
} = require('sequelize')
exports.addStudent = async function (studentObj) {
    // 应该判断studentObj的各种属性是否合理，以及账户是否存在
    const ins = await Student.create(studentObj)
    return ins.toJSON()
}
exports.deleteStudent = async function (studentId) {
    // 直接通过模型删除
    Student.destroy({
        // 条件
        where: {
            id: studentId
        }
    })
}
exports.updateStudent = async function (id, studentObj) {
    // 直接修改
    Student.update(studentObj, {
        // 条件
        where: {
            id
        }
    })
}


// 通过传参查询学生分页数据
exports.getStudents = async function (page = 1, limit = 10, sex = -1, name = '') {
    const result = await Student.findAndCountAll({
        attributes: ['id', 'name', 'sex', 'birthday'],
        where: {
            sex: sex === -1 ? undefined : sex,
            name: name === '' ? undefined : {
                [Op.like]: `%${name}%`
            }
        },
        // 关联表查询
        include: [Class],
        offset: (page - 1) * limit,
        limit: +limit
    })
    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows))
    }
}