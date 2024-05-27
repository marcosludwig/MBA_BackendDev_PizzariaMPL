 
const Cart = require("../model/Cart");

const findCartByIdService = (id) => {
  return Cart.findById(id);
}

const findAllCartsService = (limit, offset) => {
  return Cart.find().limit(limit).skip(offset);
}

const createCartService = (body) => {
  return Cart.create(body);
}

const updateCartService = (id, body) => {
  return Cart.findByIdAndUpdate(id, body, { returnDocument: "after" });
}

const removeCartService = (id) => {
  return Cart.findByIdAndDelete(id);
}

module.exports = {
  findCartByIdService,
  findAllCartsService,
  createCartService,
  updateCartService,  
  removeCartService,
}