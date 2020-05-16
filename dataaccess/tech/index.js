const Tech = require('../../models/tech');
let techDataAccess = {
    async delete(where) {
        const deletedTech = await Tech.destroy({
            where: where
        })
        return deletedTech
    },
    async update(techModel, where) {
        const updated = await Tech.update(techModel, {where: where})
        /*return updated*/
        const tech = await this.all(where)
        return tech[0]
    },
    async show(techId) {
        const tech = await Tech.findOne({where: {id: techId}})
        return JSON.parse(JSON.stringify(tech))
    },
    async create(techModel) {
        const tech = await Tech.create(techModel)
        return JSON.parse(JSON.stringify(tech))
    },
    async all(where) {
        const tech = await Tech.findAll({
            where: where,
        })
        return JSON.parse(JSON.stringify(tech));
    }
}

module.exports = techDataAccess;
