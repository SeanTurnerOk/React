const mongoose=require("mongoose")
//connecting to the actual mongoDB database
mongoose.connect('mongodb://localhost/refrigerator',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(console.log('server connected to db'))
    .catch(err=>console.log("Something went wrong with db connection"+err))