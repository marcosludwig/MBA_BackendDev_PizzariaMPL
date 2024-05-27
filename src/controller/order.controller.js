/* eslint-disable no-undef */
const orderService = require("../service/order.service");

const findOrderByIdController = async (req, res) => {
  try {
    res.status(200).send(await ordertService.findOrderByIdService(req.params.id));
  }
  catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

const findAllOrdersController = async (req, res) => {
  try {
    res.status(200).send(await orderService.findAllOrdersService(req.query.limit, req.query.offset));
  }
  catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

const createOrderController = async (req, res) => {
  try {
    const corpo = {
      ...req.body,
      userId: req.userId,
    }
    res.status(201).send(await orderService.createOrderService(corpo));
  }
  catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

const removeOrderController = async (req, res) => {
  try {
    res.status(200).send(await orderService.removeOrderService(req.params.id));
  }
  catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

const updateOrderStatusController = async (req, res) => {
  try {
    res.status(200).send(await orderService.updateOrderStatusService(req.params.id));
  }
  catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

module.exports = {
  findOrderByIdController,
  findAllOrdersController,
  createOrderController,
  removeOrderController,
  updateOrderStatusController
}