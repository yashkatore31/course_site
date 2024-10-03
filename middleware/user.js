const jwt = require("jsonwebtoken");
const {JWT_USER_SECRET_KEY}= require("../config.js")


function userMiddelware(req,res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_USER_SECRET_KEY);

    if(decoded){
        req.adminID = decoded.ID;
        next()
    }else{
        req.status(403).json({
            message:"you are not signed in"
        });
    }

}


module.exports ={
    userMiddelware:userMiddelware
}