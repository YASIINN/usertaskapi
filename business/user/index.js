const userDal = require("../../dataaccess/user/index")
const queryParser = require('../../utils/queryParser')
const {check} = require('express-validator');
let userService = {
    async update(request) {
        const {urlparse, user} = request.body;
        let where = queryParser.parseQuery(urlparse)
        const data = await userDal.update(user, where)
        return data
    },
    async findById(userId) {
        if (parseInt(userId) > 0) {
            let data = await userDal.show(userId)
            return data
        } else {
            return []
        }
    },
    validation(type) {
        switch (type) {
            case "create":
                return [check("name").isString(), check('age').isString()]
            case "delete":
                return [check('urlparse').isArray()]
            case "update":
                return [check('urlparse').isArray()]
        }
    },
    async delete(request) {
        const {urlparse} = request.body;
        let where = queryParser.parseQuery(urlparse)
        const data = await userDal.delete(where)
        return data
    },
    async create(request) {
        const {name, age} = request.body
        const data = await userDal.create({name, age})
        return data
    },

    async all(request) {
        const {urlparse} = request.body;
        let where;
        if (urlparse === undefined || urlparse === null) {
            where = "";
        } else {
            where = queryParser.parseQuery(urlparse)
        }
        const data = await userDal.all(where == '' ? null : where)
        return data
    }

}

module.exports = userService
