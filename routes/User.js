const express = require("express");
const {addpatient , authorizedUser } =require ("../controllers/usercontroller");
const {login}= require ("../controllers/LoginController")
//const isAuth = require("../middelware/isAuth");

const router = express.Router()



router.post("/addpatient", addpatient)
router.post("/login",  login)
//router.get("/auth", isAuth, authorizedUser );

module.exports = router