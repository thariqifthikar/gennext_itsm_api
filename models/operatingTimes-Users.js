const { Int32 } = require('bson');
const mongoose= require('mongoose');

const oTimesUsersSchema = new mongoose.Schema({

    otimeUser_id :{Type:String, unique:true },
    sub_tennant_id:String,
    type:String,
    start_time:Date,
    end_time:Date,
    branch_contact:String,
    admin_licence_count:Int32,


})

const oTimesUsersVar = mongoose.model('oTimesUsers',oTimesUsersSchema)
module.exports = oTimesUsersVar