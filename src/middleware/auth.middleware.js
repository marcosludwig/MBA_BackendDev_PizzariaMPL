 
const jwt = require("jsonwebtoken");
const { findUserByIdService } = require("../service/user.service");

 // como essa função não é chamada pelo user/create nem pelo user/login, então qualquer
 // 'POST', 'PUT' ou 'DELETE' só pode ser feito por Admin
 const isMethodEnabledForUser = (req) => {
  if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE')
      return false;

  return true;
};

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).send({ message: "o token não foi informado." });

  const parts = authHeader.split(" ");

  if (parts.length !== 2)
    return res.status(401).send({ message: "token inválido." });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ message: "token mal formatado" });

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    if (err) {
      console.log(`erro: ${err}`);
      return res.status(500).send("erro no servidor. tente novamente mais tarde");
    }

    const user = await findUserByIdService(decoded.id);

    if (!user || !user.id)
      return res.status(401).send({ message: "token inválido" });

    if (!isMethodEnabledForUser(req) && !user.admin)
    {
      console.log("acesso negado. somente administradores podem executar essa ação.");
      return res.status(403).send("acesso negado.")
    }

    req.userId = decoded.id;

    return next();
  });
}
