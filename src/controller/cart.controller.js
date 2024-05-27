 
const cartService = require("../service/cart.service");

const findCartByIdController = async (req, res) => {
  try {
    res.status(200).send(await cartService.findCartByIdService(req.params.id));
  }
  catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }

}

const findAllCartsController = async (req, res) => {
  try {
    res.status(200).send(await cartService.findAllCartsService(req.query.limit, req.query.offset));
  }
  catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

const createCartController = async (req, res) => {
  try {
    const corpo = {
      ...req.body,
      userId: req.userId,
    }
    res.status(201).send(await cartService.createCartService(corpo));
  }
  catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

const updateCartController = async (req, res) => {
  try {
    res.status(200).send(await cartService.updateCartService(req.params.id, req.body));
  }
  catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

const removeCartController = async (req, res) => {
  try {
    res.status(200).send(await cartService.removeCartService(req.params.id));
  }
  catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

module.exports = {
  findCartByIdController,
  findAllCartsController,
  createCartController,
  updateCartController,
  removeCartController
}