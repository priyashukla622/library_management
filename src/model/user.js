const mongoose=require("mongoose");

const Schema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,

    },
    password:{
        type:Number,
        require:true,
    },
    contect:{
        type:Number,
        require:true,
    }
})
const UserSchema=mongoose.model("UserData",Schema)
module.exports={UserSchema}