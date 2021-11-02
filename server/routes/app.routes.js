const UserController=require('../controllers/app.controllers.js')

module.exports=app=>{
    app.get("/api/allUsers", UserController.findAllUsers)
    app.post("/api/findUserByEmail", UserController.findUserByEmail)
    app.post("/api/makeUser", UserController.makeUser)
    app.post("/api/deleteUser", UserController.deleteUser)
    app.post("/api/updateUser", UserController.updateUser)
}