const techDal = require("../../dataaccess/tech/index")
const queryParser = require('../../utils/queryParser')
const {check} = require('express-validator');
let techService = {
    async update(request) {
        const {urlparse, tech} = request.body;
        let where = queryParser.parseQuery(urlparse)
        const data = await techDal.update(tech, where)
        return data
    },
    async findById(techId) {
        if (parseInt(techId) > 0) {
            let data = await techDal.show(techId)
            return data
        } else {
            return []
        }
    },
    validation(type) {
        switch (type) {
            case "create":
                return [check("name").isString()]
            case "delete":
                return [check('urlparse').isArray()]
            case "update":
                return [check('urlparse').isArray()]
        }
    },
    async delete(request) {
        const {urlparse} = request.body;
        let where = queryParser.parseQuery(urlparse)
        const data = await techDal.delete(where)
        return data
    },
    async create(request) {
        /*bulkcreate*/
        const {name} = request.body
        const data = await techDal.create({name})
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
        const data = await techDal.all(where == '' ? null : where)
        return data
    }

}

module.exports = techService
