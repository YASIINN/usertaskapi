const techService = require('../business/tech/index')
const {validationResult} = require('express-validator');
exports.show = async (req, res, next) => {
    try {
        const {techId} = req.params;
        const tech = await techService.findById(techId);
        console.log(tech)
        if (tech !== null) {
            res.status(200).json(tech)

        } else {
            res.status(404).json([])
        }
    } catch (error) {
        res.status(500).json({err: error})
    }
}


exports.index = async (req, res, next) => {
    try {

        let techs = await techService.all(req)
        res.status(200).json(techs);
    } catch (error) {
        res.status(500).json({err: error})
    }
}

exports.store = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        let tech = await techService.create(req);
        res.status(201).json(tech)

    } catch (error) {
        res.status(500).json({err: error})
    }
}
exports.update = async (req, res, next) => {
    try {
        let tech = await techService.update(req)
        /*1 - 0 message Success*/
        res.status(200).json(tech)
    } catch (error) {
        res.status(500).json({err: error})
    }
}

exports.destroy = async (req, res, next) => {
    try {
        await techService.delete(req)
        res.status(200).json({message: "Success"})
    } catch (error) {
        res.status(500).json({err: error})
    }
}
