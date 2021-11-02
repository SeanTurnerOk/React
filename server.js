const express =require('express')
const app=express()
const cors=require('cors')
require('./server/config/mongoose.config.js')
app.use(express.json(), express.urlencoded({extended:true}))
app.use(cors())
const allRoutes=require('./server/routes/app.routes')(app)

app.listen(8080,()=>console.log("the server is open on port 8080"))