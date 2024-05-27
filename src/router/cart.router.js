 
const router = require("express").Router();

const cartController = require("../controller/cart.controller");

const authMiddleware = require("../middleware/auth.middleware");
const { validateCart,  validateIdParams, validatePizzasCartOrder } = require("../middleware/validate.middleware");
const pagination = require("../middleware/pagination.middleware");

router.get("/find/:id", authMiddleware, validateIdParams, cartController.findCartByIdController);
router.get("/findall", authMiddleware, pagination, cartController.findAllCartsController);

router.post("/create", authMiddleware, validatePizzasCartOrder, validateCart, cartController.createCartController);

router.put("/update/:id", authMiddleware, validateIdParams, validateCart, cartController.updateCartController);

router.delete("/remove/:id", authMiddleware, validateIdParams, cartController.removeCartController);

module.exports = router;