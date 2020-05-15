const Todo = require('../models/todo')
const User = require('../models/user')

Todo.belongsTo(User)
User.hasMany(Todo)
