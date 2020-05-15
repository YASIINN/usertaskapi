const Sequelize = require('sequelize')
const sequelize = require('../database/db')
const User = require('../models/user')

class Todo extends Sequelize.Model {
}
Todo.init({
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
}, {sequelize, created_at: "created_at", updated_at: "updated_at", modelName: 'todo'})
/*Todo.belongsTo(User, {onUpdate: "CASCADE", onDelete: "CASCADE", foreignKey: "user_id", as: "user"})
*/
module.exports = Todo
