const Todo = require('../../models/todo')
const User = require('../../models/user')
let userDataAccess = {
    async delete(where) {
        const deletedUser = await User.destroy({
            where: where
        })
        return deletedUser
    },
    async update(userModel, where) {
        const updated = await User.update(userModel, {where: where})
        /*return updated*/
        const user = await this.all(where)
        return user[0]
    },
    async show(userId) {
        const user = await User.findOne({where: {id: userId}, include: [{model: Todo}]})
        return JSON.parse(JSON.stringify(user))
    },
    async create(userModel) {
        const user = await User.create(userModel)
        return JSON.parse(JSON.stringify(user))
    },
    async all(where) {
        const users = await User.findAll({
            where: where,
            include: [{
                model: Todo,
            }]
        })
        return JSON.parse(JSON.stringify(users));
    }
}

module.exports = userDataAccess;
