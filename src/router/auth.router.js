 
const router = require("express").Router();
const authController = require("../controller/auth.controller");

const { validateLogin } = require("../middleware/validate.middleware");

router.post("/login", validateLogin, authController.loginController);

module.exports = router;