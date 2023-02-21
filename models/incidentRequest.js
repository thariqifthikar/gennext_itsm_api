const mongoose= require('mongoose')

const incidentRequestSchema = new mongoose.Schema({


},
    {
        timestamps:true
    }
)
const incidentRequestVar = mongoose.model('incidentRequest',incidentRequestSchema)
module.exports = incidentRequestVar