require('dotenv').config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));
  
const userSchema = new Schema({
    email : { type:String , unique: true},
    password : String,
    firstname : String,
    lastname : String
});

const adminSchema = new Schema({
    email : { type:String , unique: true},
    password : String,
    firstname : String,
    lastname : String
});

const courseSchema = new Schema({
    title : String,
    description : String,
    pricce : String,
    imageURL : String,
    creatorID : ObjectId

});

const purchaseSchema = new Schema({
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
