 
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  pizzas: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "pizzas" },
      quantity: { type: Number, required: true }
    }
  ],
  createdAt: { type: Date, required: true, default: Date.now() },
  totalPrice: { type: Number, required: true },
  shipping: { type: Number, required: true },
  userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "users" }
});

const Cart = mongoose.model("carts", cartSchema);

module.exports = Cart;