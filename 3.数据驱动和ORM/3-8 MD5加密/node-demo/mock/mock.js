const Mock = require('mockjs')
// 添加班级模拟数据
// const Class = require('../models/Class')
// const result = Mock.mock({
//     'datas|16': [{
//         'id|+1': 1,
//         name: '前端第 @id 期',
//         openDate: '@date'
//     }]
// }).datas
// Class.bulkCreate(result)

// // 添加学生模拟数据
// const Student = require('../models/Student')
// const result = Mock.mock({
//     'datas|500-700': [{
//         name: '@cname',
//         birthday: '@date',
//         'sex|1-2': true,
//         'mobile': /1\d{10}/,
//         'classId|1-16': 0
//     }]
// }).datas
// console.log(result)
// Student.bulkCreate(result)

// 添加管理员模拟数据
const Admin = require('../models/Admin')
const result = Mock.mock({
    'datas|2': [{
        'id|+1':10,
        loginId: 'admin@id',
        loginPwd: '123123',
    }]
}).datas
Admin.bulkCreate(result).then((ins)=>{
    console.log(ins)
})