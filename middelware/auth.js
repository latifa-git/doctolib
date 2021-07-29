const jwt = require("jsonwebtoken");
const auth = (req,res,next) => {
    const token = req.header("auth-token");
    if (!token) return res.status(401).send({msg:"Access denied"})

    try{
        //verify tokens
        const verifiedUser = jwt.verify(token,process.env.SECRET_TOKEN_E);
        //Add user  from payload
         req.user=verifiedUser
        next()
        
       
    }
    catch(e){
        res.status(400).send({msg:"Invalid token"})
    }
}
module.exports= auth;
