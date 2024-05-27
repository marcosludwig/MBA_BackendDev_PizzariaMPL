 
const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  unitPrice: { type: Number, required: true },
  image: { type: String, required: true },
});

const Pizza = mongoose.model("pizzas", pizzaSchema);

module.exports = Pizza;