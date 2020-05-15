const userService = require('../business/user/index')
const {validationResult} = require('express-validator');


exports.show = async (req, res, next) => {
    try {
        const {userId} = req.params;
        const user = await userService.findById(userId);
        if (user !== null) {
            res.status(200).json(user)
        } else {
            res.status(404).json([])
        }
    } catch (error) {
        res.status(500).json({err: error})
    }
}

exports.index = async (req, res, next) => {
    try {

        let users = await userService.all(req)
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({err: error})
    }
}

exports.store = (req, res, next) => {

}
exports.update = (req, res, next) => {

}

exports.destroy = (req, res, next) => {

}
