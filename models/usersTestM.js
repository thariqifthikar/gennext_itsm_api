const { Int32 } = require("bson");
const mongoose = require("mongoose");

const userTestSchema = new mongoose.Schema({

    // id:{type:String,  //ID will be added 
    //     unique:true},
     
   id:String,
    name:String,
    email:String,
    password:String,
    


},{
    timestamps: true,
    
}

)
const userTestVar = mongoose.model('usersTestM',userTestSchema)
module.exports = userTestVar
