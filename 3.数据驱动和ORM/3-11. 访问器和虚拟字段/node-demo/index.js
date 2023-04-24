require('./init')

const studentService = require('./services/studentService')
studentService.getStudents(1, 10, 1, '曹').then(res=>{
    console.log(res)
})