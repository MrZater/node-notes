    require('./models/relation')
    const adminService = require('./services/adminService')

    adminService.login('admin', '123123').then(ins => {
        console.log(ins)
    })