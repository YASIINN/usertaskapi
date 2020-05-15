const Sequelize = require('sequelize')
const sequelize = require('../database/db')
const Todo=require('./todo')
class User extends Sequelize.Model {}
User.init({
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
    },
    age: {
        type: Sequelize.STRING
    }
}, { sequelize, created_at: "created_at", updated_at: "updated_at", modelName: 'user' })


module.exports = User
