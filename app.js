//require("dotenv").config()
const cors = require('cors')
const express = require("express");
const mongoose = require("mongoose");
//const User = require("./routes/user");
const user = require('./routes/user');
const r_subTennant = require('./routes/r_subTennant');
const r_company = require('./routes/r_company');
const userTest = require('./routes/userTest');


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/user',user)
app.use('/api/r_subTennant',r_subTennant)
app.use('/api/r_company',r_company)
app.use('/api/userTest',userTest)
app.listen(5000, () => {
    console.log('Connected. Listening on port 5000')
})
mongoose.set('strictQuery', true);

mongoose
.connect('mongodb://itsm-microtech-cosmos:8N0SrGdIPA7PjTn1Bl917jGmH5jLpEtdknucFq5RRxiTrMOuX3FKhupPOXNcHNCTw2IylUZ3KBQuACDbTnbCyg%3D%3D@itsm-microtech-cosmos.mongo.cosmos.azure.com:10255/ITSMdb?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@itsm-microtech-cosmos@',
{useNewUrlParser:true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log('Connected to db successfully......')
})
.catch((err)=>{
    console.log('Error connecting to database: '+err)
})