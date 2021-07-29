const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },

  role: {
    type: String,
    default: "patient",
    enum: ["patient", "doctor", "Admin"],
  },
  roleType: {
    type: String,
    default: "User",
    enum: ["User", "Admin"],
  },


});
module.exports = mongoose.model("User", userSchema);
