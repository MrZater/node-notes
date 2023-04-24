// 管理员初始化
// 判断数据库里是否有管理员，如果没有，自动添加一个管理员
const Admin = require('../models/Admin')
exports.addAdmin = async function (adminObj) {
    // 应该判断AdminObj的各种属性是否合理，以及账户是否存在
    const ins = await Admin.create(adminObj)
    return ins.toJSON()
}
exports.deleteAdmin = async function (adminId) {
    // 方式1
    // // 1. 得到实例
    // const ins = await Admin.findByPk(adminId)
    // // 2.操作实例
    // if (ins) {
    //     await ins.destroy()
    // }


    // 方式2
    // 直接通过模型删除
    Admin.destroy({
        // 条件
        where: {
            id: adminId
        }
    })
}
exports.updateAdmin = async function (id, adminObj) {
    // 方式1
    // // 1.得到实例
    // const ins = await Admin.findByPk(id)
    // ins.loginId = adminObj.loginId
    // // 2.保存
    // ins.save()


    // 方式2
    // 直接修改
    Admin.update(adminObj, {
        // 条件
        where: {
            id
        }
    })
}
// 登录
exports.login = async function (loginId, loginPwd) {
    const result = await Admin.findOne({
        // 查询条件
        where: {
            loginId,
            loginPwd
        }
    })
    // 区分大小写
    if (result && result.loginId === loginId && result.loginPwd === loginPwd) {
        return result.toJSON()
    }
    return null
}

// 通过id查管理员
exports.getAdminById = async function (id) {
    const result = await Admin.findByPk(id)
    if (result) {
        return result.toJSON()
    }
    return null
}