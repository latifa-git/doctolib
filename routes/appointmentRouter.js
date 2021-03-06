const express = require('express');

const router = express.Router();

const appointmentController = require('../controllers/appointmentController');
const middlewares = require('../middelware/appointment');

//get all appointments
router.get('/', appointmentController.findAllAppointments);

//add appointment
router.post('/', middlewares.validateInput, middlewares.validateSlot, appointmentController.addAppointment);

module.exports = router;