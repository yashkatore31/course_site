const jwt = require("jsonwebtoken");
const {JWT_ADMIN_SECRET_KEY}= require("../config.js")


function adminMiddelware(req,res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_ADMIN_SECRET_KEY);

    if(decoded){
        req.userID = decoded.ID;
        next()
    }else{
        req.status(403).json({
            message:"you are not signed in"
        });
    }

}


module.exports ={
    adminMiddelware:adminMiddelware
}