const express = require("express");
const {getAllUsers,updateDoctor,addDoctor} = require("../controllers/admincontroller");
const auth = require("../middelware/auth");
const checkRole = require("../middelware/authRole");
const router = express.Router()



// Get all users
router.get("/alluser",auth,checkRole(["Admin"]),getAllUsers)

//update a doctor details
//router.put("/:id",auth,checkRole(["Admin"]),updateDoctor)

// add doctor
router.post("/adddoctor",checkRole(["Admin"]),addDoctor)

// delete doctor(missed)

module.exports = router