const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const slotSchema = new Schema({
  slotTime: { 
    type: String, 
    require: false
  },
  slotDate: {
    type: String, 
    require: false
  }, 
}, { versionKey: false })

const slotModel = mongoose.model('user', slotSchema);

module.exports = slotModel;