const express = require("express");
const { login } = require("../controllers/logincontroller.js");
const {addpatient , authorizedUser}=require ("../controllers/patientcontrollers");
const isAuth = require("../middelware/isAuth");


const router = express.Router()



router.post("/addpatient", addpatient)
router.post("/loginpatient",  login)
router.get("/auth", isAuth, authorizedUser );

module.exports = router