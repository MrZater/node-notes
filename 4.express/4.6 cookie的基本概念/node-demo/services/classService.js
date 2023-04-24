// 学生初始化
const Class = require('../models/Class')
exports.addClass = async function (classObj) {
    // 应该判断classObj的各种属性是否合理，以及账户是否存在
    console.log(classObj)
    const ins = await Class.create(classObj)
    return ins.toJSON()
}
exports.deleteClass = async function (classId) {
    // 直接通过模型删除
    Class.destroy({
        // 条件
        where: {
            id: classId
        }
    })
}
exports.updateClass = async function (id, classObj) {
    // 直接修改
    Class.update(classObj, {
        // 条件
        where: {
            id
        }
    })
}

// 通过id查询班级
exports.getClassById = async function (id) {
    const result = await Class.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
};

// 查询班级全部数据
exports.getClasses = async function () {
    const result = await Class.findAll();
    return JSON.parse(JSON.stringify(result));
};