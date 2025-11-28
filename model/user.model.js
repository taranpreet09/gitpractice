 const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    email:{
        type:String
    },
    password: String
    
})
module.exports= mongoose.model("User",userSchema);