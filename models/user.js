const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: Number,
    required: false,
  },

  pasword: {
    type: String,
    required: false,
  },
  specialty: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },

  role: {
    type: String,
    default: "patient",
    enum: ["patient", "doctor", "Admin"],
  },
 

});
module.exports = mongoose.model("User", userSchema);
