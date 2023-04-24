require('./init')

const studentService = require('./services/studentService')
studentService.updateStudent(587, {
    name: '小户',
    birthday: '2010-01-01',
    sex: true,
    mobile: '12312312312',
    classId: 13,
}).catch(err => {
    // 捕获验证错误信息
    console.log(err)
})