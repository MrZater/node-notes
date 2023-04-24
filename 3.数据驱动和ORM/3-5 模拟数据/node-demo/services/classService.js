// 学生初始化
const Class = require('../models/Class')
exports.addClass = async function (classObj) {
    // 应该判断classObj的各种属性是否合理，以及账户是否存在
    const ins = await Class.create(classObj)
    return ins.toJSON()
}
exports.deleteClass = async function (classId) {
    // 方式1
    // // 1. 得到实例
    // const ins = await Class.findByPk(classId)
    // // 2.操作实例
    // if (ins) {
    //     await ins.destroy()
    // }


    // 方式2
    // 直接通过模型删除
    Class.destroy({
        // 条件
        where: {
            id: classId
        }
    })
}
exports.updateClass = async function (id, classObj) {
    // 方式1
    // // 1.得到实例
    // const ins = await Class.findByPk(id)
    // ins.loginId = classObj.loginId
    // // 2.保存
    // ins.save()


    // 方式2
    // 直接修改
    Class.update(classObj, {
        // 条件
        where: {
            id
        }
    })
}