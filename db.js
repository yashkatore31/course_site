const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

mongoose.connect("mongodb+srv://ybkatore31:ybkatore31@cluster0.qnnd1.mongodb.net/course_site")

const userSchema = Schema({
    email : { type:String , unique: true},
    password : String,
    firstname : String,
    lastname : String
});

const adminSchema = Schema({
    email : { type:String , unique: true},
    password : String,
    firstname : String,
    lastname : String
});

const courseSchema = Schema({
    title : String,
    description : String,
    pricce : String,
    imageURL : String,
    creatorID : ObjectId

});

const purchaseSchema = Schema({
    userID : ObjectId,
    courseID : ObjectId

});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("user", adminSchema);
const courseModel = mongoose.model("user", courseSchema);
const purchaseModel = mongoose.model("user", purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}
