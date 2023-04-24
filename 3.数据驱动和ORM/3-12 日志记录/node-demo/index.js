// const {logger} = require('./logger')
// for (let i = 0; i < 100; i++) {
//     logger.info('abc')
// }

require('./init')
const studentService = require('./services/studentService')
studentService.getStudents().then(()=>{
    console.log(123)
})