const {Router} = require("express");

const adminRouter = Router();

//created rout for signin admin
adminRouter.post("/signin" ,function(req, res){
    res.json({
        msg:"signin"
    });
    });
    
    //created rout for singup admin
    adminRouter.post("/signup" ,function(req, res){
        res.json({
            msg:"admin signup"
        });
    });


    //created rout for add course
    adminRouter.post("/course" ,function(req, res){
        res.json({
            msg:"add course"
        });
    });

    //created rout for edit course
    adminRouter.put("/purchase" ,function(req, res){
        res.json({
            msg:"edit course"
        });
    });


    //created rout for edit course
    adminRouter.get("/courses/bulk" ,function(req, res){
        res.json({
            msg:"get all course"
        });
    });


    module.exports ={
        adminRouter : adminRouter
    }


    