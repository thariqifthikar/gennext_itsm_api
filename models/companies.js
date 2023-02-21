const { Int32 } = require("bson");
const mongoose = require("mongoose");

const companiesSchema = new mongoose.Schema({

    
    company_Id:{type:String,Unique:true},
    sub_tennant_Id:String,
    company_name:String


})

const companiesVar = mongoose.model('company',companiesSchema);
module.exports= companiesVar