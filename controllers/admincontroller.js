const User = require("../models/user");
const bcrypt = require("bcryptjs");
const config = require("config");
const secret = config.get("secret");
const jwt = require("jsonwebtoken");

const { registerValidation } = require("../validation/doctorvalidation");


// get All users
// i want to get user (doctors and patients) //(missed action)

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  try {
    res.send(users);
  } catch (err) {
    res.status(400).send(err);
  }
};





//Post a doctor

const addDoctor = async (req, res) => {
  const { name, email, phone,  address, password, role , specialty} = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) return res.status(401).json({ msg: "user already exists" });
    let newDoctor = new User({
      name,
      email,
      phone,
      password,
      address,
      specialty,
      role
    });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    newDoctor.password = hash;
    await newDoctor.save();
    // res.status(201).json(newUser);
    const payload = {
      id: newDoctor._id,
    };
    const token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        _id: newDoctor._id,
        name: newDoctor.name,
        password : newDoctor.password,
        email: newDoctor.email,
        phone: newDoctor.phone,
        role: newDoctor.role,
        address: newDoctor.address,
        specialy: newDoctor.specialty
      }
    });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};















//update a doctor details
const updateDoctor = async (req, res) => {
  // validate a doctor
  const { error } = (req.body);
  if (error) return res.status(400).send({ msg: error.details[0].message });

  const updatedDoctor = await User.findOneAndUpdate(
    { User: req.params.user_id },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        specialty: req.body.specialty,
        password: req.body.password,
        address:req.body.address

      },
    },
  //  { new: false, useFindAndModify: true }
  );

  try {
    res.send(updatedDoctor);
  } catch (err) {
    res.status(400).send(err);
  }
};

// delete a doctor(missed action)

module.exports = {  getAllUsers, updateDoctor, addDoctor };