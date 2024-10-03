const { Router } = require("express");
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = "yashk123";
const userRouter = Router();

//created rout for signup user
userRouter.post("/signup/", async function (req, res) {
    const { email, password, firstname, lastname } = req.body;
    //loging in console for development,will be remove when build
    console.log(email);
    console.log(password);
    console.log(firstname);
    console.log(lastname);

    //adding zod validation
    //adding password encrypt "brcypt method"
    //dumping data in db
    try {
        await userModel.create({
            email,
            password,
            firstname,
            lastname
        });

    } catch (error) {
        res.json({
            error: "error"
        })
    }

    res.json({
        msg: "user signup"
    });
});

//created rout for signin user
userRouter.post("/signin", async function (req, res) {
    const { email, password } = req.body;
    //loging in console for development,will be remove when build
    console.log(email);
    console.log(password);

    const user = await userModel.findOne({
        email,
        password
    });

    console.log(user._id);
    if (user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET_KEY);

        res.json({
            token: token
        });
    } else {
        res.json({
            msg: "wrong credintials"
        });
    }



});

//created rout for purchase
userRouter.get("/purchase", function (req, res) {
    res.json({
        msg: "purchase"
    });
});


//exported routs
module.exports = {
    userRouter: userRouter
};
