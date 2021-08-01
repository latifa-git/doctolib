const express = require("express");
const {addpatient , authorizedUser , login} =require ("../controllers/usercontroller");
const isAuth = require("../middelware/isAuth");


const router = express.Router()



router.post("/addpatient", addpatient)
router.post("/login",  login)
router.get("/auth", isAuth, authorizedUser );

module.exports = router