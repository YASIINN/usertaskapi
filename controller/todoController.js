const todoService = require('../business/todo/index')
const {validationResult} = require('express-validator');
exports.show = async (req, res, next) => {
    try {
        const {todoId} = req.params;
        const todo = await todoService.findById(todoId);
        console.log(todo)
        if (todo !== null) {
            res.status(200).json(todo)

        } else {
            res.status(404).json([])
        }
    } catch (error) {
        res.status(500).json({err: error})
    }
}



exports.index = async (req, res, next) => {
    try {

        let todos = await todoService.all(req)
        res.status(200).json(todos);
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
        let todo = await todoService.create(req);
        res.status(201).json(todo)

    } catch (error) {
        res.status(500).json({err: error})
    }
}
exports.update = async (req, res, next) => {
    try {
        let todo = await todoService.update(req)
        /*1 - 0 message Success*/
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json({err: error})
    }
}

exports.destroy = async (req, res, next) => {
    try {
        await todoService.delete(req)
        res.status(200).json({message: "Success"})
    } catch (error) {
        res.status(500).json({err: error})
    }
}
