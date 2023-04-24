const sequelize = require('./db')
const {
    DataTypes
} = require('sequelize')
const Book = sequelize.define('book', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imgurl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publishDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    createdAt: false,
    updatedAt: false,
    paranoid: true
});
module.exports = Book