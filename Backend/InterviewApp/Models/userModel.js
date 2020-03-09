const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
    "firstName" : String,
    "lastName" : String,
    "email" : String,
    "mobileNumber" : String
})

const userModel = mongoose.model(
    "UserModel",
    userSchema,
    "user_details"
);

module.exports = userModel

