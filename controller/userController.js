const userService = require('../business/user/index')
const {validationResult} = require('express-validator');
exports.show = async (req, res, next) => {
    try {
        const {userId} = req.params;
        if (userId != undefined) {

            const user = await userService.findById(userId);
            if (user !== null) {
                res.status(200).json(user)
            } else {
                res.status(404).json([])
            }
        } else {
            res.status(404).json([])
        }

    } catch (error) {
        res.status(500).json({err: error})
    }
}

exports.teches = async (req, res, next) => {
    try {
        const {userId} = req.params
        if (userId != undefined) {
            let data = await userService.teches(userId, req)
            if (data.length === 0) {
                res.status(404).json([])
            }
            res.status(200).json(data)
        } else {
            res.status(404).json([])
        }
    } catch (error) {
        res.status(500).json({err: error})
    }
}

exports.todos = async (req, res, next) => {
    try {
        const {userId} = req.params
        if (userId != undefined) {
            let data = await userService.todos(userId, req)
            if (data.length === 0) {
                res.status(404).json([])
            }
            res.status(200).json(data)
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

exports.store = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        let user = await userService.create(req);
        res.status(201).json(user)

    } catch (error) {
        res.status(500).json({err: error})
    }
}
exports.update = async (req, res, next) => {
    try {
        let todo = await userService.update(req)
        /*1 - 0 message Success*/
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json({err: error})
    }
}

exports.destroy = async (req, res, next) => {
    try {
        await userService.delete(req)
        res.status(200).json({message: "Success"})
    } catch (error) {
        res.status(500).json({err: error})
    }
}
