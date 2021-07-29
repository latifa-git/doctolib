const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: {
    type: String,
   
  },
  email: {
    type: String,
    
  },
  phone: {
    type: Number,
    
  },
address: {
    type: String,
   
  },
  password: {
    type: String,
   
  },
  gender: {
    type: String,
   
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("patient", patientSchema);
