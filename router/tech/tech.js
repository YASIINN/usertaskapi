const express = require('express')
const techController = require('../../controller/techController')
const router = express.Router();
const techService = require('../../business/tech/index')
router.post("/", techController.index);
router.post("/create", [...techService.validation("create")], techController.store);
router.get("/:userId", techController.show);
router.post("/update", [...techService.validation("update")], techController.update);
router.post("/delete", [...techService.validation('delete')], techController.destroy);
module.exports = router;
