const express = require('express');

const router = express.Router();

const slotController = require('../controllers/slotController');

//get all slots
router.get('/get', slotController.findAllSlots);

//get slot by id
//router.get('/', slotController.findSlotsByDate);

router.get('/:id', slotController.findSlotById);

module.exports = router;