const { Int32 } = require("bson");
const mongoose = require("mongoose");

const mainTennantSchema = new mongoose.Schema({

 main_tennant_id:{type:String,
                    unique:true},
 organization_name:String,
 created_datetime:Date,
 hq_address:String,
 hq_contact:Number,
 admin_licence_count:Number
},{
    timestamps: true
}

)
const mainTennantVar = mongoose.model('mainTennant',mainTennantSchema)
module.exports = mainTennantVar