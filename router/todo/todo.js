const express = require('express')
const todoController = require('../../controller/todoController')
const router = express.Router();
const todoService = require('../../business/todo/index')
router.post("/", todoController.index);
router.post("/create", [
    ...todoService.validation('create')], todoController.store);
router.get("/:todoId", todoController.show);
router.post("/update", [...todoService.validation('update')], todoController.update);
router.post("/delete", [...todoService.validation('delete')], todoController.destroy);
module.exports = router;
