const { Int32 } = require('bson');
const mongoose= require('mongoose');

const oTimesAdminSchema = new mongoose.Schema({

    otime_id :{type:String, unique:true },
    sub_tennant_id:String,
    type:String,
    start_time:Date,
    end_time:Date,
    branch_contact:String,
    admin_licence_count:Number,



})

const oTimesAdminVar = mongoose.model('oTimesAdmin',oTimesAdminSchema)
module.exports = oTimesAdminVar
