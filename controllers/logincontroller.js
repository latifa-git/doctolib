const User = require("../models/user");
const bcrypt = require("bcryptjs");
const config = require("config");
const secret = config.get("secret");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "email invalid" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(404).json({ msg: " password invalid" });
    const payload = {
      id: user._id,
    };
    const token = await jwt.sign(payload, secret);
    res.send({
      token,
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role
    });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
};

module.exports = { login };
