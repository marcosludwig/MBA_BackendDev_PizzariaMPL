 
const router = require("express").Router();
const userController = require("../controller/user.controller");

const authMiddleware = require("../middleware/auth.middleware");
const { validateUser, validateAddress, validateIdParams } = require("../middleware/validate.middleware");
const pagination = require("../middleware/pagination.middleware");

router.get("/findbyId/:id", authMiddleware, validateIdParams, userController.findUserByIdController);
router.get("/findAll", authMiddleware, pagination, userController.findAllUsersController);

router.post("/create", validateUser, userController.createUserController);
router.post("/addAddress/:id", authMiddleware, validateIdParams, validateAddress, userController.addUserAddressController);

router.put("/update/:id", authMiddleware, validateIdParams, validateUser, userController.updateUserController)

router.delete("/remove/:id", authMiddleware, validateIdParams, userController.removeUserController);
router.delete("/removeAddress", authMiddleware, userController.removeUserAddressController);

module.exports = router;