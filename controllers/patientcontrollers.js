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
 
module.exports = {addpatient , authorizedUser};



