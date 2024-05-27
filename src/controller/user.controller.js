 
const userService = require("../service/user.service");

const findUserByIdController = async (req, res) => {
  try {
    const user = await userService.findUserByIdService(req.params.id);

    if (!user)
      return res.status(404).send({ message: "usuário não encontrado. tente novamente." });

    return res.status(200).send(user);
  } catch (err) {
    if (err.kind == "ObjectId") {
      console.log(err.message);
      return res.status(400).send({ message: "ID informado está incorreto. tente novamente." });
    }

    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

const findAllUsersController = async (req, res) => {
  try {
    return res.send(await userService.findAllUsersService(req.query.limit, req.query.offset));
  } catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

const createUserController = async (req, res) => {
  try {
    return res.status(201).send(await userService.createUserService(req.body));
  } catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

const updateUserController = async (req, res) => {
  try {
    return res.send(await userService.updateUserService(req.params.id, req.body));
  } catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

const removeUserController = async (req, res) => {
  try {
    const deletedUser = await userService.removeUserService(req.params.id);

    if (deletedUser)
      return res.status.send({ message: "usuário removido com sucesso." });
    else
      return res.status.send({ message: "usuário não encontrado." });

  } catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

const addUserAddressController = async (req, res) => {
  try {
    const address = await userService.addUserAddressService(req.params.id, req.body);

    if (address)
      res.status(201).send({ message: "endereço adicionado com sucesso." });
    else
      res.status(400).send({ message: "algo deu errado e o endereço não foi adicionado. tente novamente." });
  } catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

const removeUserAddressController = async (req, res) => {
  try {
    const user = await userService.removeUserAddressService(req.body.id, req.body.addressId)
    
    let found = false;

    // eslint-disable-next-line no-unused-vars
    user.addresses.map((valor, chave) => {
      if (valor._id == req.body.addressId)
        found = true;
    })

    if (found)
      res.status(200).send({ message: "endereço removido com sucesso." });
    else
      res.status(400).send({ message: "algo deu errado no endereço. tente novamente." });

  } catch (err) {
    console.log(`erro: ${err.message}`);
    res.status(500).send({ message: "erro inesperado. tente novamente." });
  }
}

module.exports = {
  findUserByIdController,
  findAllUsersController,
  createUserController,
  updateUserController,
  removeUserController,
  addUserAddressController,
  removeUserAddressController,
}