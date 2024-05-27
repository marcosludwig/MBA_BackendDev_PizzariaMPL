 
const router = require("express").Router();
const pizzaController = require("../controller/pizza.controller");

const authMiddleware = require("../middleware/auth.middleware")
const { validatePizza, validateIdParams } = require("../middleware/validate.middleware");
const pagination = require("../middleware/pagination.middleware");

router.get("/find/:id", authMiddleware, validateIdParams, pizzaController.findPizzaByIdController);
router.get("/findall", authMiddleware, pagination, pizzaController.findAllPizzasController);

router.post("/create", authMiddleware, validatePizza, pizzaController.createPizzaController);

router.put("/update/:id", authMiddleware, validateIdParams, validatePizza, pizzaController.updatePizzaController);

router.delete("/remove/:id", authMiddleware, validateIdParams, pizzaController.removePizzaController);

module.exports = router;