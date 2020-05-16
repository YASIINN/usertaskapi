const Sequelize = require('sequelize')
const sequelize = require('../database/db')

class Tech extends Sequelize.Model {
}

Tech.init({
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
    },
}, {sequelize, created_at: "created_at", updated_at: "updated_at", modelName: 'tech'})


module.exports = Tech
