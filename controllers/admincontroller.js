const User = require("../models/user");

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
  // validate a doctor
  if (User.roleType == "Admin") {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send({ msg: error.details[0].message });
  // Check for existant mail
  const emailExist = await doctor.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send({ msg: "verify your email" });
  
 
  
  const newDoctor = new doctor({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    location: req.body.location,
    specialty: req.body.specialty,
    password: req.body.password,
  });

  try {
    const savedDoctor = await newDoctor.save();
    res.send(savedDoctor);
  } catch (err) {
    res.status(400).send(err);
  }
};
}

//update a doctor details
const updateDoctor = async (req, res) => {
  // validate a doctor
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send({ msg: error.details[0].message });

  const updatedDoctor = await doctor.findOneAndUpdate(
    { user: req.params.user_id },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        specialty: req.body.specialty,
        location: req.body.location,
      },
    },
    { new: true, useFindAndModify: false }
  );

  try {
    res.send(updatedDoctor);
  } catch (err) {
    res.status(400).send(err);
  }
};

// delete a doctor(missed action)

module.exports = {  getAllUsers, updateDoctor, addDoctor };