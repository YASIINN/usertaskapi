const todoDal = require("../../dataaccess/todo/index")
const queryParser = require('../../utils/queryParser')
const {check} = require('express-validator');
let todoService = {
    async update(request) {
        const {urlparse, todo} = request.body;
        let where = queryParser.parseQuery(urlparse)
        const data = await todoDal.update(todo, where)
        return data
    },
    async findById(todoId) {
        if (parseInt(todoId) > 0) {
            let data = await todoDal.show(todoId)
            return data
        } else {
            return []
        }
    },
    validation(type) {
        switch (type) {
            case "create":
                return [check("descraption").isString(), check('title').isString(), check('userId').isInt()]
            case "delete":
                return [check('urlparse').isArray()]
            case "update":
                return [check('urlparse').isArray()]
        }
    },
    async delete(request) {
        const {urlparse} = request.body;
        let where = queryParser.parseQuery(urlparse)
        const data = await todoDal.delete(where)
        return data
    },
    async create(request) {
        const {descraption, title, userId} = request.body
        const data = await todoDal.create({descraption, title, userId})
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
        const data = await todoDal.all(where == '' ? null : where)
        return data
    }

}

module.exports = todoService
