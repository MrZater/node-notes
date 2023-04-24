const sequelize = require('./db')
const {
    DataTypes,
} = require('sequelize');
// 定义模型，对应传参  (模型名称  表配置属性 配置参数)
const Admin = sequelize.define('admin', {
    loginId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    // freezeTableName: true,// 停止 Sequelize 执行自动复数化获得表名称
    // tableName: 'Admin'// 自定义表名称
    createdAt: false, // 添加时间，默认添加
    updatedAt: false, // 修改时间， 默认添加
    paranoid: true, // 该表的数据不会真正的删除，而是增加一列deleteDate记录删除时间
});
// (async function () {
//     // 模型同步
//     // User.sync() - 如果表不存在,则创建该表(如果已经存在,则不执行任何操作)
//     // User.sync({ force: true }) - 将创建表,如果表已经存在,则将其首先删除
//     // User.sync({ alter: true }) - 这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.
//     Admin.sync({
//         alter: true
//     })
//     console.log('Admin同步')
// })()

module.exports = Admin