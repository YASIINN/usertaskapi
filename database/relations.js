const Todo = require('../models/todo')
const User = require('../models/user')
const Tech = require('../models/tech')
Todo.belongsTo(User)
User.hasMany(Todo)
Tech.belongsToMany(User, {as: "users", foreignKey: "tech_id", through: "user_tech"})
User.belongsToMany(Tech, {as: "teches", foreignKey: "user_id", through: "user_tech"})

