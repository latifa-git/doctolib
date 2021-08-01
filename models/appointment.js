const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  email: { 
    type: String, 
    require: false 
  },
  firstName: { 
    type: String, 
    require: false
  },
  lastName: { 
    type: String, 
    require: false 
  },
  slot: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'slot'
  }
}, { versionKey: false })

const appointmentModel = mongoose.model('appointment', appointmentSchema);

module.exports = appointmentModel;