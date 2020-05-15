/*
const Sequelize = require('sequelize')
const sequelize = require('../database/db')
const Todo = sequelize.define('todo', {
    id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    descraption: {
        type: Sequelize.STRING,
    },
    title: {
        type: Sequelize.STRING
    }
})

module.exports = Todo
*/
const Sequelize = require('sequelize')
const sequelize = require('../database/db')

class Todos extends Sequelize.Model {}
Todos.init({
    id: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    descraption: {
        type: Sequelize.STRING,
    },
    title: {
        type: Sequelize.STRING
    }
}, { sequelize, createdAt: "created_at", updatedAt: "updated_at", modelName: 'todo' })

module.exports = Todos

/*return Todo.sync({force: true}).then((res) => {
    console.log("tablo", res)
}).catch((err) => {
    console.error(err)
    console.log("tablo olmadı", err)
})*/

/*        sequelize => {

};*/