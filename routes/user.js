// const express = require("express");
// const userRouter = express.Router();

const {Router} = require("express");
const userRouter = Router();

//created rout for signup user
userRouter.post("/signup/" ,function(req, res){

    const email = req.body.email;
    const password = req.body.password;

    res.json({
        msg:"signun"
    });
});


//created rout for signin user
userRouter.post("/signin" ,function(req, res){
res.json({
    msg:"signin"
});
});

//created rout for purchase
userRouter.get("/purchase" ,function(req, res){
    res.json({
        msg:"purchase"
    });
});


//exported routs
module.exports = {
    userRouter:userRouter
};
