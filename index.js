const express = require("express");
require("dotenv").config();

const connectToDatabase = require("./src/database/database");

const user = require("./src/router/user.router");
const auth = require("./src/router/auth.router");
const pizza = require("./src/router/pizza.router");
const cart = require("./src/router/cart.router");
const order = require("./src/router/order.router");
const docs = require("./src/router/docs.router");

const app = express();

const port = 3000;

app.use(express.json());

connectToDatabase();

app.use("/user", user);
app.use("/auth", auth);
app.use("/pizza", pizza);
app.use("/cart", cart);
app.use("/order", order);
app.use("/docs", docs);

app.get("/", (req, res) => {
  res.send({ message: "bem vindo ao nosso market-place" });
})

app.listen(port, () => {
  console.log(`servidor rodando em: http://localhost:${port}`);
})