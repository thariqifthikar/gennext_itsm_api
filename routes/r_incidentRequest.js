const express = require('express');
const incidentRequestVar =require('../models/incidentRequest');
const incidentRequest = require('../models/incidentRequest');
const router =express.router();


router.get('/',async (req,res)=>{

    try {
        
        let incidentRequests = await incidentRequest.find();
        return res.send(incidentRequests);

    } catch (ex) {
        return res.status(500).send("Error"+ex.message);
    }

})
//Get by params
router.get ('/id/:IR_id', async(req,res)=> {
    try {
        let getIR = await incidentRequestVar.findOne( {IR_id:req.params.IR_id})
    
        //let getuser = await userVar.findOne( {uid:req.params.uid}).select('user_name') to pass user only name
        if(!getIR)
            return res.status(404).send('A user for the given id is not available')
            return res.status(200).send(getIR)
        
           
        
    } catch (ex) {
        return res.status(500).send("Error : "+ex.message);
        
    }
})

router.delete('/id/:IR_id', async (req, res) => {
    try {
        //console.log("===============");
       // console.log("req :",req.body);
        let deleteByid = await incidentRequestVar.findOneAndDelete({ IR_id: req.params.IR_id });
        if(!deleteByid)
            return res.status(404).send('A user for the given id is not available')
        return res.status(200).send(" This user was Deleted Successfully"+ deleteByid)
    }
    catch(ex) {
        return res.status(500).send('Error: ' + ex.message)
    }
})

router.post('/',async (req,res)=>{

    const{

        IR_id,
        title,
        Description

    } =res.body
    try {
    let incidentRequest 
    
    incidentRequest = new incidentRequestVar({

        title,
        Description

    })
    incidentRequest = await incidentRequest.save()
    return res.status(200).send("New Incident request created"+incidentRequestVar);

        
    } catch (ex) {
        return res.status(500).send("error"+ex.message);
    }

})
module.exports =router