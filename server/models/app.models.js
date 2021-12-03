const mongoose=require('mongoose')
//creating schema for user, ensuring that when User is created it has all data fields
const UserSchema=new mongoose.Schema({
    userName:String,
    password:String,
    email:String,
    refrigerator:Array
})
const User=mongoose.model('User',UserSchema)
module.exports=User