const moment = require('moment');

const appointmentModel = require('../models/appointment');
const slotModel = require('../models/slotModel');

module.exports = {
  findAllAppointments,
  addAppointment,
 
}

function findAllAppointments(req, res) {
  appointmentModel.find((error, data) => {
    if (error) {
      res.status(500).json({ 
        message: 'error fetching appointments',
        error: error
      });
    } else {
      res.status(200).json(data);   
    }
  })
}

function addAppointment (req, res) {
  const input = req.body;

  const newSlot = new slotModel({
    slotTime: input.slotTime,
    slotDate: moment(input.slotDate).format('MM-DD-YYYY')
  })

  newSlot.save();

  const newAppointment = new appointmentModel({
    email: input.email,
    firstName: input.firstName,
    lastName: input.lastName,
    slots: newSlot._id
  })

  newAppointment.save((error, data) => {
    if (error) {
      res.status(500).json({ 
        message: 'error creating appointment',
        error: error
      });
    } else {
      res.status(201).json(data);
    }
  })
}

