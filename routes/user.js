const express = require ("express");
const router = express.Router()
const auth = require("../middelware/isAuth")

const user = require("../models/user");
const { register, login, getCurrentUser  } = require("../controllers/usercontroller");

//patient Register
router.post('/register',async(req,res)=> {
    await register(req.body  ,res)
})


// User login
router.post('/login',async (req,res)=> {
    await login(req.body,"User",res)
})
//Admin login
router.post('/admin',async (req,res)=> {
    await login(req.body,"Admin",res)
})


//get the current user with the token
router.get("/" ,auth,getCurrentUser)




module.exports = router