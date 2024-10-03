const {Router} = require("express");
const courseRouter = Router();


//created rout for preveiw the courses 
courseRouter.get("/preview",function(req, res){
    res.json({
        msg:"preview"
    });
});

//craeted rout for courses
courseRouter.post("/courses",function(req, res){
    res.json({
        msg:"courses"
    });
});


//exported routs
module.exports = {
    courseRouter: courseRouter
}