 

const validateUser = (req, res, next) => {
  let errors = [];

  if (!req.body.name)
    errors.push("name");

  // TODO: validar se os tipos correspondem ('name' precisa ser String).
  if (req.body.name)
    console.log(typeof (req.body.name));

  if (!req.body.email)
    errors.push("email");

  if (!req.body.password)
    errors.push("password");

  if (!req.body.image)
    errors.push("image");

  if (req.body.admin == undefined)
    errors.push("admin");

  if (errors.length == 0)
    return next();
  else {
    if (errors.length > 1)
      return res.status(400).send({ message: `Os campos ${errors} precisam ser preenchidos!` });
    else
      return res.status(400).send({ message: `O campo ${errors} precisa ser preenchido!` });
  }
}

const validateAddress = (req, res, next) => {
  let errors = [];

  req.body.map((value, key) => {
    if (!value.street)
      errors.push(`'${key + 1} - rua'`)

    if (!value.number)
      errors.push(`'${key + 1} - numero'`)

    if (!value.CEP)
      errors.push(`'${key + 1} - CEP'`)
  });

  if (errors.length == 0)
    return next();
  else {
    if (errors.length > 1) {
      return res.status(400).send({ message: `Os campos ${errors} precisam ser preenchidos!` });
    } else {
      return res.status(400).send({ message: `O campo ${errors} precisa ser preenchido!` });
    }
  }
}

const validatePizza = (req, res, next) => {
  let errors = [];

  if (!req.body.name)
    errors.push("name");

  if (!req.body.description)
    errors.push("description");

  if (!req.body.unitPrice)
    errors.push("unitPrice");

  if (!req.body.image)
    errors.push("image");

  if (errors.length == 0)
    return next();
  else {
    if (errors.length > 1)
      return res.status(400).send({ message: `Os campos ${errors} precisam ser preenchidos!` });
    else
      return res.status(400).send({ message: `O campo ${errors} precisa ser preenchido!` });
  }
}

const validateCategory = (req, res, next) => {
  if (!req.body.nome)
    return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido!` });

  return next();
}

const ObjectId = require("mongoose").Types.ObjectId;

const validateIdParams = (req, res, next) => {
  if (ObjectId.isValid(req.params.id))
    return next();
  else
    return res.status(400).send({ message: `O ID não corresponde aos padroes necessarios` });
}

const validate_IdBody = (req, res, next) => {
  if (ObjectId.isValid(req.body._id))
    return next();
  else
    return res.status(400).send({ message: `O ID não corresponde aos padroes necessarios` });
}

const validateOrder = (req, res, next) => {
  let errors = []; //var para acumular os erros

  if (!req.body.totalPrice)
    errors.push("totalPrice");

  if (!req.body.shipping)
    errors.push("shipping");

  if (req.body.concluded == undefined)
    errors.push("concluded");

  if (errors.length == 0)
    return next();
  else {
    if (errors.length > 1)
      return res.status(400).send({ message: `Os campos ${errors} precisam ser preenchidos!` });
    else
      return res.status(400).send({ message: `O campo ${errors} precisa ser preenchido!` });
  }
}

const validateCart = (req, res, next) => {
  let errors = [];

  if (!req.body.totalPrice)
    errors.push("totalPrice");

  if (!req.body.shipping)
    errors.push("shipping");

  if (errors.length == 0)
    return next();
  else {
    if (errors.length > 1)
      return res.status(400).send({ message: `Os campos ${errors} precisam ser preenchidos!` });
    else
      return res.status(400).send({ message: `O campo ${errors} precisa ser preenchido!` });
  }
}

const validateLogin = (req, res, next) => {
  let errors = [];

  if (!req.body.email)
    errors.push("email");

  if (!req.body.password)
    errors.push("password");

  if (errors.length == 0)
    return next();
  else {
    if (errors.length > 1)
      return res.status(400).send({ message: `Os campos ${errors} precisam ser preenchidos!` });
    else
      return res.status(400).send({ message: `O campo ${errors} precisa ser preenchido!` });
  }
}

const validatePizzasCartOrder = (req, res, next) => {
  let errors = [];

  req.body.pizzas.map((value, key) => {
    if (!value._id) 
      errors.push(`'${key + 1} - _id'`)

    if (!ObjectId.isValid(value._id))
      errors.push(`'${key + 1} - _id - tipo invalido'`)

    if (!value.quantity)
      errors.push(`'${key + 1} - quantity'`)
  });

  if (errors.length == 0)
    return next();
  else {
    if (errors.length > 1)
      return res.status(400).send({ message: `Os campos ${errors} precisam ser preenchidos!` });
    else
      return res.status(400).send({ message: `O campo ${errors} precisa ser preenchido!` });
  }
}


module.exports = {
  validateUser,
  validateAddress,
  validatePizza,
  validateCategory,
  validateIdParams,
  validate_IdBody,
  validateOrder,
  validateCart,
  validateLogin,
  validatePizzasCartOrder
};