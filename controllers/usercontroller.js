const User = require("../models/user");
const bcrypt = require("bcryptjs");
const config = require("config");
const secret = config.get("secret");
const jwt = require("jsonwebtoken");

// register 
const addpatient = async (req, res) => {
  const { name, email, phone,  address, password, role ,gender} = req.body;
  try {
    const searchRes = await User.findOne({ email });
    if (searchRes) return res.status(401).json({ msg: "user already exists" });
    const newUser = new User({
      name,
      email,
      phone,
      password,
      address,
      gender,
      role
    });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    newUser.password = hash;
    await newUser.save();
    // res.status(201).json(newUser);
    const payload = {
      id: newUser._id,
    };
    const token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        address: newUser.address,
        gender :newUser.gender,
        role : newUser.role
      },
    });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
};


const authorizedUser = (req, res) => {
  res.send(req.User);
 };

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
     // name: user.name,
      //email: user.email,
      //phone: user.phone,
     // role: user.role
    });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
};


module.exports = {addpatient , authorizedUser , login };



