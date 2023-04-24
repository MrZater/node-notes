## 驱动
- MySql的驱动程序是连接内存数据和mysql数据的桥梁
- mysql驱动程序通常使用： mysql mysql2
- mysql2的使用  ``https://github.com/sidorares/node-mysql2#readme``
- 防止sql注入
  - sql注入：用户通过注入sql语句到最终查询中，导致了整个sql与预期行为不符
  - mysql支持变量：变量的内容不作为任何sql关键字


```js
// get the client
const mysql = require('mysql2');

// create the connection to database
// // 创建普通连接
// const connection = mysql.createConnection({
//     host: 'localhost',// 链接地址
//     user: 'root',// 账户
//     password: '123123',// 密码
//     database: 'test0309'// 数据库名称
// });

// 使用链接池创建连接
const pool = mysql.createPool({
    host: 'localhost',// 链接地址
    user: 'root',// 账户
    password: '123123',// 密码
    database: 'test0309',// 数据库名称
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
```