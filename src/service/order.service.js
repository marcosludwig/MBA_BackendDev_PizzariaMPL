 
const Order = require("../model/Order");

const findOrderByIdService = (id) => {
  return Order.findById(id);
};

const findAllOrdersService = (limit, offset) => {
  return Order.find().limit(limit).skip(offset);
};

const createOrderService = (body) => {
  return Order.create(body);
};

const removeOrderService = (id) => {
  return Order.findByIdAndDelete(id);
};

const updateOrderStatusService = (id) => {
  return Order.findOneAndUpdate({ _id: id }, {$set: { concluded: true } });
};

module.exports = {
  findOrderByIdService,
  findAllOrdersService,
  createOrderService,
  removeOrderService,
  updateOrderStatusService
}