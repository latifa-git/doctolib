const express = require("express");
const {getAllUsers,updateDoctor,addDoctor} = require("../controllers/admincontroller");
const multer = require('multer');
//const auth = require("../middelware/auth");
//const checkRole = require("../middelware/authRole");
const router = express.Router()



// Get all users
router.get("/alluser",getAllUsers)

//update a doctor details
router.put("/:id",updateDoctor)

// add doctor
router.post("/adddoctor",addDoctor)

//uplaodimage

// const upload = multer({ storage });
// router.post('/uploadimage', upload.single('image'), (req, res) => {
//     res.send(`/uploads/${req.file.filename}`);
// });

// delete doctor(missed)

module.exports = router