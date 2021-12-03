const UserController=require('../controllers/app.controllers.js')
//all API routes
module.exports=app=>{
    app.get("/api/allUsers", UserController.findAllUsers)
    app.post("/api/findUserByEmail", UserController.findUserByEmail)
    app.post("/api/makeUser", UserController.makeUser)
    app.post("/api/deleteUser", UserController.deleteUser)
    app.post("/api/updateUser", UserController.updateUser)
    //WARNING: only used for debugging purposes, needs to be removed before full rollout
    app.post("/api/deleteAllUsers",UserController.deleteAllUsers)
    app.post("/api/updateFridge", UserController.updateFridge)
}