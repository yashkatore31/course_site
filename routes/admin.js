const { Router } = require("express");
const { adminModel } = require("../db")
const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = "kyash123"
const adminRouter = Router();

//created rout for signin admin
adminRouter.post("/signup", async function (req, res) {
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
        await adminModel.create({
            email,
            password,
            firstname,
            lastname
        });

    }catch (error) {
        res.json({
            error: "error"
        })
    }

    res.json({
        msg: "admin signup"
    });
});

//created rout for singup admin
adminRouter.post("/signin", async function (req, res) {
    const { email, password } = req.body;
    //loging in console for development,will be remove when build
    console.log(email);
    console.log(password);

    const admin = await adminModel.findOne({
        email,
        password
    });

    console.log(admin._id);
    if (admin) {
        const token = jwt.sign({
            id: admin._id
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


//created rout for add course
adminRouter.post("/course", function (req, res) {
    res.json({
        msg: "add course"
    });
});

//created rout for edit course
adminRouter.put("/purchase", function (req, res) {
    res.json({
        msg: "edit course"
    });
});


//created rout for edit course
adminRouter.get("/courses/bulk", function (req, res) {
    res.json({
        msg: "get all course"
    });
});


module.exports = {
    adminRouter: adminRouter
}