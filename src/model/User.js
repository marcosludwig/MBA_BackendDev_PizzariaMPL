 
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  addresses: [
    {
      street: { type: String, required: true },
      number: { type: Number, required: true },
      complement: { type: String, required: false },
      CEP: { type: String, required: true },
      createdAt: { type: Date, required: true, default: Date.now() },
    }
  ],
  createdAt: { type: Date, required: true, default: Date.now() },
  admin: { type: Boolean, required: true, default: false },
});

// eslint-disable-next-line no-unused-vars
userSchema.pre("save", async function (next) {
  if (this.password)
    this.password = await bcrypt.hash(this.password, 10);
});

// eslint-disable-next-line no-unused-vars
userSchema.pre("findOneAndUpdate", async function (next) {
  if (this._update.password)
    this._update.password = await bcrypt.hash(this._update.password, 10);
});

const User = mongoose.model("users", userSchema);

module.exports = User;