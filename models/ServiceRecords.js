const mongoose = require('mongoose');

const ServiceRecordSchema = new mongoose.Schema({
    sr_id:{type:String,unique:true},
    account_id:String,

    problem_type:String,
    problem_sub_type:String,
    
    route:String,
    desc_template:String,
    third_level_category:String,
    module_relevance:Number,
    incident_template:Number,
    request_template:Number,
    change_template:Number,
    problem_template:Number,
    first_level_key:Number,
    second_level_key:Number,
    third_level_key:Number,
    admin_groups:String

},
    {
        timestamps:true,
    }
)
const ServiceRecordsVar = mongoose.model('ServiceRecords',ServiceRecordSchema)
module.exports = ServiceRecordsVar