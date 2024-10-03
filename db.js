const {Schema, default: mongoose} = require("mongoose");

mongoose.connect("mongodb+srv://ybkatore31:ybkatore31@cluster0.qnnd1.mongodb.net/course_site")

const userSchema = Schema({
    email : { typ}
})

const adminSchema = Schema({

})

const courseSchema = Schema({

})

const purchaseSchema = Schema({

})

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("user", adminSchema);
const courseModel = mongoose.model("user", courseSchema);
const purchaseModel = mongoose.model("user", purchaseSchema);


