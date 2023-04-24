// 学生初始化
const Student = require('../models/Student')
const Class = require('../models/Class')
// 查询条件api
const {
    Op
} = require('sequelize')
const validate = require('validate.js')
const moment = require('moment')
const {
    pick
} = require('../util/propertyHelp')

// 添加自定义异步验证
validate.validators.classExits = async function (value) {
    // 查询该classid是否存在
    const result = await Class.findByPk(value)
    // 通过该验证返回undefind
    if (result) {
        return
    }
    // 否则返回提示语
    return 'is not exist'
}

exports.addStudent = async function (studentObj) {
    // 应该判断studentObj的各种属性是否合理
    // 通过pick方法过滤得到需要的属性
    studentObj = pick(studentObj, 'name', 'birthday', 'sex', 'mobile', 'classId')
    // 验证规则
    const rule = {
        name: {
            // presence 必填
            presence: {
                // allowEmpty 不可为空值
                allowEmpty: false,
                // message
                message: '不正确'
            },
            // 类型限制规则
            type: 'string',
            // 长度限制规则
            length: {
                // 最短长度
                minimum: 2,
                // 最长长度
                maximum: 10
            }
        },
        birthday: {
            presence: {
                allowEmpty: false
            },
            datetime: {
                // 只能是日期，不允许有时间
                dateOnly: true,
                // 最早
                earliest: moment.utc().subtract(100, 'y'),
                // 最迟
                latest: moment.utc().subtract(5, 'y')
            }
        },
        sex: {
            presence: true,
            type: 'boolean'
        },
        mobile: {
            presence: {
                allowEmpty: false
            },
            // 匹配正则
            format: /1\d{10}/
        },
        classId: {
            presence: {
                allowEmpty: false
            },
            // 整数
            numericality: {
                onlyInteger: true,
                // 严格校验
                strict: true
            },
            // 添加自定义验证（异步）
            classExits: true
        }
    }
    // 存在异步验证
    await validate.async(studentObj, rule)
    // 不存在异步验证
    // await validate.validators(studentObj, rule)
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
    // 应该判断studentObj的各种属性是否合理
    // 验证规则
    studentObj = pick(studentObj, 'name', 'birthday', 'sex', 'mobile', 'classId')
    const rule = {
        name: {
            // presence 必填
            presence: {
                // allowEmpty 不可为空值
                allowEmpty: false,
                // message
                message: '不正确'
            },
            // 类型限制规则
            type: 'string',
            // 长度限制规则
            length: {
                // 最短长度
                minimum: 2,
                // 最长长度
                maximum: 10
            }
        },
        birthday: {
            presence: {
                allowEmpty: false
            },
            datetime: {
                dateOnly: true,
                earliest: moment.utc().subtract(100, 'y'),
                latest: moment.utc().subtract(5, 'y')
            }
        },
        sex: {
            presence: true,
            type: 'boolean'
        },
        mobile: {
            presence: {
                allowEmpty: false
            },
            format: /1\d{10}/
        },
        classId: {
            presence: {
                allowEmpty: false
            },
            numericality: {
                onlyInteger: true,
                strict: true
            },
            classExits: true
        }
    }
    await validate.async(studentObj, rule)
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