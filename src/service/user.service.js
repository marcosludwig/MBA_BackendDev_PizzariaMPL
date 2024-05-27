const User = require("../model/User");

const findUserByIdService = (id) => { return User.findById(id); }

const findAllUsersService = (limit, offset) => { return User.find().limit(limit).skip(offset); }

const createUserService = (body) => { return User.create(body); }

const updateUserService = (id, body) => { return User.findByIdAndUpdate(id, body, { returnDocument: "after" }); }

const removeUserService = (id) => { return User.findByIdAndDelete(id); }

const addUserAddressService = (id, address) => {
  return User.findOneAndUpdate(
    { _id: id, },
    { $push: { addresses: address, }, },
    { rawResult: true, },
  )
}

const removeUserAddressService = (id, addressId) => {
  return User.findOneAndUpdate(
    { _id: id, },
    { $pull: { addresses: { _id: addressId, }, }, },
    { rawResult: true, }
  )
}

module.exports = {
  findUserByIdService,
  findAllUsersService,
  createUserService,
  updateUserService,
  removeUserService,
  addUserAddressService,
  removeUserAddressService,
}