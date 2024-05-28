 
const jwt = require("jsonwebtoken");
const { findUserByIdService } = require("../service/user.service");

function checkAddressRoute(req) {
  const url = req.url;
  const addressRoutes = ['/addAddress', '/removeAddress'];

  return addressRoutes.some(route => url.includes(route));
}

// como essa função não é chamada pelo user/create nem pelo user/login, então qualquer
// 'POST', 'PUT' ou 'DELETE' só pode ser feito por Admin
// se a URL é para '/addAddress' ou '/removeAddress', então libera os métodos de escrita
const isMethodEnabledForUser = (req) => {
  if (checkAddressRoute(req))
    return true;
  
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

    if (req.body && req.body.userId) // somente se tiver 'userId' no 'body'
    {
      if (req.body.userId != user.id && !user.admin)
      { // somente o route 'cart' e o 'order' passam por aqui
        console.log("acesso negado. somente o mesmo userId pode alterar seu carrinho ou pedido.");
        return res.status(403).send("acesso negado.")
      }
    }
    else if (!isMethodEnabledForUser(req) && !user.admin)
    { // somente os administradores podem executar escritas (a não ser 'add address' e 'remove address')
      console.log("acesso negado. somente administradores podem executar essa ação.");
      return res.status(403).send("acesso negado.")
    }

    req.userId = decoded.id;

    return next();
  });
}
