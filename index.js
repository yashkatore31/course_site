const express = require("express");
const { userRouter} = require("./routes/user");
const { courseRouter} = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.json());


//rout handalers
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main() {
    await mongoose.connect("mongodb+srv://ybkatore31:ybkatore31@cluster0.qnnd1.mongodb.net/course_site")
    app.listen(3000);
}