 
const router = require("express").Router();

const orderController = require("../controller/order.controller");

const authMiddleware = require("../middleware/auth.middleware")
const { validateIdParams, validateOrder, validatePizzasCartOrder } = require("../middleware/validate.middleware");
const pagination = require("../middleware/pagination.middleware");

router.get("/find/:id", authMiddleware, validateIdParams, orderController.findOrderByIdController);
router.get("/findall", authMiddleware, pagination, orderController.findAllOrdersController);

router.post("/create", authMiddleware, validatePizzasCartOrder, validateOrder, orderController.createOrderController);

router.delete("/remove/:id", authMiddleware, validateIdParams, orderController.removeOrderController);

router.patch("/updateStatus/:id", authMiddleware, validateIdParams, orderController.updateOrderStatusController);

module.exports = router;