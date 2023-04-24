// 学生初始化
const Student = require('../models/Student')
exports.addStudent = async function (studentObj) {
    // 应该判断studentObj的各种属性是否合理，以及账户是否存在
    const ins = await Student.create(studentObj)
    return ins.toJSON()
}
exports.deleteStudent = async function (studentId) {
    // 方式1
    // // 1. 得到实例
    // const ins = await Student.findByPk(studentId)
    // // 2.操作实例
    // if (ins) {
    //     await ins.destroy()
    // }


    // 方式2
    // 直接通过模型删除
    Student.destroy({
        // 条件
        where: {
            id: studentId
        }
    })
}
exports.updateStudent = async function (id, studentObj) {
    // 方式1
    // // 1.得到实例
    // const ins = await Student.findByPk(id)
    // ins.loginId = studentObj.loginId
    // // 2.保存
    // ins.save()


    // 方式2
    // 直接修改
    Student.update(studentObj, {
        // 条件
        where: {
            id
        }
    })
}