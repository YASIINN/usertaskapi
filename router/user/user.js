const express = require('express')
const userController = require('../../controller/userController')
const router = express.Router();
const userService = require('../../business/user/index')
router.post("/", userController.index);
router.post("/create", [...userService.validation("create")], userController.store);
router.get("/:userId", userController.show);
router.post("/update", [...userService.validation("update")], userController.update);
router.post("/delete", [...userService.validation('delete')], userController.destroy);
router.post("/:userId/todos",userController.todos)
router.post("/:userId/teches",userController.teches)
module.exports = router;
