const User = require("../db/model/UserSchema");
const createToken = require("../middleware/jwt");

const signup = async (req, res) => {
  try {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
      verified: req.body.verified,
    });
    await newUser.save();
    console.log(newUser);
    res.status(200).send(newUser);
  } catch (e) {
    res.status(401).send(e.message);
  }
};
const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.comparePassword(email, password);
    const token = createToken({ email: email, _id: user._id });

    res.status(200).json({
      message: "Succses",
      token: token,
    });
  } catch (e) {
    res.status(401).send(e.message);
  }
};

module.exports = { signup, login };
