 
const mongoose = require("mongoose");
// order = pedido
const orderSchema = new mongoose.Schema({
  pizzas: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "pizzas" },
      quantity: { type: Number, required: true }
    }
  ],
  createdAt: { type: Date, required: true, default: Date.now() },
  totalPrice: { type: Number, required: true },
  shipping: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "users" },
  concluded: { type: Boolean, required: true }
});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;