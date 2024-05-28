 
const pizzaService = require("../service/pizza.service");

const findPizzaByIdController = async (req, res) => {
  try {
    return res.status(200).send(await pizzaService.findPizzaByIdService(req.params.id));
  }
  catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

const findAllPizzasController = async (req, res) => {
  try {
    return res.status(200).send(await pizzaService.findAllPizzasService(req.query.limit, req.query.offset));
  }
  catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

const createPizzaController = async (req, res) => {
  try {
    const corpo = {
      ...req.body,
      userId: req.userId
    }
    
    return res.status(201).send(await pizzaService.createPizzaService(corpo));
  }
  catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

const updatePizzaController = async (req, res) => {
  try {
    return res.status(200).send(await pizzaService.updatePizzaService(req.params.id, req.body));
  }
  catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

const removePizzaController = async (req, res) => {
  try {
    return res.status(200).send(await pizzaService.removePizzaService(req.params.id));
  }
  catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

module.exports = {
  findPizzaByIdController,
  findAllPizzasController,
  createPizzaController,
  updatePizzaController,
  removePizzaController,
}