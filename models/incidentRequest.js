const mongoose= require('mongoose')

const incidentRequestSchema = new mongoose.Schema({


    IR_id :String,
    title: String,
    Description: String
},
    {
        timestamps:true
    }
)
const incidentRequestVar = mongoose.model('incidentRequest',incidentRequestSchema)
module.exports = incidentRequestVar