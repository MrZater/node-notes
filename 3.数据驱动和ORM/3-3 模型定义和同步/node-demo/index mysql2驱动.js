// get the client
const mysql = require('mysql2');

// create the connection to database
// // 创建连接
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123123',
//     database: 'test0309'
// });

// 使用链接池创建连接
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123123',
    database: 'test0309',
    multipleStatements: true,
    waitForConnections: true,// 连接池已沾满时，新连接接入，是否允许接入，否则报错，默认true
    connectionLimit: 10, // 连接池最大连接数量最大
    queueLimit: 0,// 排队接入数量，默认0，不限制长度
});


// 防止sql注入，使用execute方法
const sql = 'select * from employee where id=?'
pool.execute(sql, [5], (err, result) => {
    console.log(result)
})

// 新建
// connection.query('insert into company(`name`, location,buildDate) values("test1", "test",curdate());',
//     (err, result) => {
//         console.log(result, err)
//     }
// )

// 修改
// connection.query('update company set `name`="亿典" where id=4;',
//     (err, result) => {
//         console.log(result, err)
//     }
// )

// 删除
// connection.query('delete from company where id=4;',
//     (err, result) => {
//         console.log(result, err)
//     }
// )