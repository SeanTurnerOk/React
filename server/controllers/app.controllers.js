const User=require("../models/app.models.js")

module.exports.findAllUsers=(req, res)=>{
    User.find({})
    .then(users=>res.json(users))
    .catch(err=>console.log("findAllUsers failed:",err))
}
module.exports.findUserByEmail=(req, res)=>{
    User.findOne({email:req.body.email})
    .then(user=>res.json(user))
    .catch(err=> console.log("findByEmail failed", err))
}
module.exports.makeUser=(req,res)=>{
    User.create(req.body)
    .then(res.json("New User made"))
    .catch(err=>console.log("makeUser failed",err))
}
module.exports.updateUser=(req,res)=>{
    User.updateOne({_id:req.body._id},req.body)
    .then(res.json("User updated"))
    .catch(err=>console.log("User update failed",err))
}
module.exports.deleteUser=(req,res)=>{
    User.remove({_id:req.body._id})
    .then(res.json("Deleted User"))
    .catch(err=>console.log("User delete failed:",err))
}
