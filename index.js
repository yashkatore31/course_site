const express = require("express");

const app = express();
app.use(express.json());

app.use("user",userRouter);
app.post("user/signup/" ,function(req, res){

    const email = req.body.email;
    const password = req.body.password;



});

app.post("user/signin" ,function(req, res){

});

app.post("user/purchase" ,function(req, res){

});

app.get("course/purchase" ,function(req, res){

});

app.get("/courses" ,function(req, res){

});


app.listen(3000);