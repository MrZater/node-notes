const {
    Sequelize
} = require('sequelize');
// 链接数据库
// 获取sequelize原型，传入对应参数  (数据库名称 账户  密码 配置参数)
const sequelize = new Sequelize('myschooldb', 'root', '123123', {
    host: 'localhost',// 链接地址
    dialect: 'mysql', /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
    // logging: null// 是否打印日志
});
module.exports = sequelize