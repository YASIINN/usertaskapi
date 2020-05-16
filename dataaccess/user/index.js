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
    async show(userId, inc, attr) {
        const user = await User.findOne({
            where: {id: userId},
            include: inc,
            attributes: attr.length > 0 ? attr : ""
        })
        return JSON.parse(JSON.stringify(user))
    },
    async create(userModel) {
        const user = await User.create(userModel)
        return JSON.parse(JSON.stringify(user))
    },
    async all(where, include, attr) {
        const users = await User.findAll(
            {
                attributes: attr.length > 0 ? attr : "",
                where: where,
                include: include
            })
        return JSON.parse(JSON.stringify(users));
    }
}

module.exports = userDataAccess;
