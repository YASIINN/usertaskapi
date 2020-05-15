const Todo = require('../../models/todo')
const User = require('../../models/user')
let todoDataAccess = {
    async delete(where) {
        const deletedTodo = await Todo.destroy({
            where: where
        })
        return deletedTodo
    },
    async update(todoModel, where) {
        const updated = await Todo.update(todoModel, {where: where})
        /*return updated*/
        const todo=await this.all(where)
        return todo[0]
    },
    async show(todoId) {
        const todo = await Todo.findOne({where: {id: todoId}, include: [{model: User}]})
        return JSON.parse(JSON.stringify(todo))
    },
    async create(todoModel) {
        const todo = await Todo.create(todoModel)
        return JSON.parse(JSON.stringify(todo))
    },
    async all(where) {
        const todos = await Todo.findAll({
            where: where,
            include: [{
                model: User,
            }]
        })
        return JSON.parse(JSON.stringify(todos));
    }
}

module.exports = todoDataAccess;
