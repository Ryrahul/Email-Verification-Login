const User = require("../db/model/UserSchema");

const signup = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(200).send(newUser);
};

module.exports = { signup };
