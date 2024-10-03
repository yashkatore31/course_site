// const express = require("express");
// const userRouter = express.Router();

const {Router} = require("express");
const userRouter = Router();


userRouter.post("/signup/" ,function(req, res){

    const email = req.body.email;
    const password = req.body.password;
});

userRouter.post("/signin" ,function(req, res){

});

userRouter.get("/purchase" ,function(req, res){

});

module.exports = {
    userRouter:userRouter
};
