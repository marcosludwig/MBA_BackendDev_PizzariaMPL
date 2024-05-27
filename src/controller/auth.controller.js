 
const authService = require("../service/auth.service");;
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await authService.loginService(email);

  if (!user)
    return res.status(400).send({ message: "usuário não encontrado." });

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid)
    return res.status(400).send({ message: "senha inválida" });

  const token = authService.generateToken(user.id);

  res.status(200).send({ email, token });
}

module.exports = { loginController };