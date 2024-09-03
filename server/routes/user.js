const express = require("express");
const router = express.Router();
const UserController = require("../controller/user");

router.post("/createTemplate", UserController.createTemplate);
router.post("/getTemplates", UserController.getTemplates)



// router.post("/createTemplate", () => {console.log('sucess')});

module.exports = router;