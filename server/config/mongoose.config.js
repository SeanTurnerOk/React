const mongoose=require("mongoose")

mongoose.connect('mongodb://localhost/refridgerator',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(console.log('server connected to db'))
    .catch(err=>console.log("Something went wrong with db connection"+err))