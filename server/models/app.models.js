const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    _id:Number,
    userName:String,
    password:String,
    email:String,
    Refridgerator:Array
})
const User=mongoose.model('User',UserSchema)
module.exports=User