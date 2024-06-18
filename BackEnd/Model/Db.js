const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    Dob: Date,
    mobile:String,
    course:String,
    city:String
})
const UserModel=mongoose.model('verify',UserSchema)
module.exports =UserModel;