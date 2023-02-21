const { Int32 } = require("bson");
const { timeStamp } = require("console");
const mongoose = require("mongoose");


const subTennantSchema = new mongoose.Schema({
    sub_tennant_id:{type:String,
        unique:true},
    branch_name:String,
    created_dateTime:Date,
    branch_address:String,
    branch_contact:Number,
    admin_licence_count:Number



},{timeStamp :true}
)

const subTennantVar = mongoose.model('subTennant',subTennantSchema)
module.exports = subTennantVar