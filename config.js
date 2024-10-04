require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;
const JWT_USER_SECRET_KEY = process.env.JWT_USER_SECRET_KEY;
const JWT_ADMIN_SECRET_KEY =process.env.JWT_ADMIN_SECRET_KEY;
// console.log(JWT_ADMIN_SECRET_KEY);
// console.log(JWT_USER_SECRET_KEY);

module.export ={
    JWT_ADMIN_SECRET_KEY,
    JWT_USER_SECRET_KEY
}