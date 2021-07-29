const doctor = require("../models/doctor");

const { registerValidation } = require("../validation/doctorvalidation");

//Get all doctors
const getAllDoctors = async (req, res) => {
  const doctors = await doctor.find();
  try {
    res.send(doctors);
  } catch (err) {
    res.status(400).send(err);
  }
};

//Get one  doctor
const getOneDoctor = (req, res) => {
  doctor.findById({ user: req.params.id })
    .populate("user", ["name", "email"])
    .then((profile) => {
      if (!profile) return res.status(404).send({ msg: "no profile" });
      else res.send(profile);
    })
    .catch((err) => res.status(400).send(err));
};

//get current doctor
const getCurrentDoctor = (req, res) => {
  doctor.findOne({ user: req.user._id })
    .then((profile) => {
      if (!profile) return res.status(404).send({ msg: "no profile" });
      else res.send(profile);
    })
    .catch((err) => res.status(400).send(err));
};





module.exports = {
  
  getOneDoctor,
  getCurrentDoctor,
  getAllDoctors,
};
