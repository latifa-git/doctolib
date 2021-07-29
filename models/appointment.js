const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  startTime: { type: Date, required: false },
  endTime: { type: Date, required: false },
  doctor: { type: mongoose.Schema.Types.ObjectId, required: true },
  client: { type: mongoose.Schema.Types.ObjectId, required: true },
  status: {
    type: String,
    lowercase: true,
    enum: ['accepted', 'pending', 'declined'],
    required: true,
    default: 'pending',
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Session = mongoose.model('appointment', appointementSchema);
module.exports = Session;