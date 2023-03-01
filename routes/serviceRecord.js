const express = require('express');
const ServiceRecordsVar = require('../models/ServiceRecords');
const ServiceRecords = require('../models/ServiceRecords');
const router = express.Router()

router.get('/',async (req,res)=>{

    try {
        
        let Service_Record = await ServiceRecords.find();
        return res.send(Service_Record);

    } catch (ex) {
        return res.status(500).send("Error"+ex.message);
    }

})
//Get by params
router.get ('/id/:sr_id', async(req,res)=> {
    try {
        let getSR = await ServiceRecordsVar.findOne( {sr_id:req.params.sr_id})
    
        //let getuser = await userVar.findOne( {uid:req.params.uid}).select('user_name') to pass user only name
        if(!getSR)
            return res.status(404).send('A user for the given id is not available')
            return res.status(200).send(getSR)
        
           
        
    } catch (ex) {
        return res.status(500).send("Error : "+ex.message);
        
    }
})

router.delete('/id/:sr_id', async (req, res) => {
    try {
        //console.log("===============");
       // console.log("req :",req.body);
        let deleteByid = await ServiceRecordsVar.findOneAndDelete({ sr_id: req.params.sr_id });
        if(!deleteByid)
            return res.status(404).send('A service record for the given id is not available')
        return res.status(200).send(" This service record was Deleted Successfully"+ deleteByid)
    }
    catch(ex) {
        return res.status(500).send('Error: ' + ex.message)
    }
})

router.post('/',async (req,res)=>{

    const{

    sr_id,
    account_id,
    problem_type,
    problem_sub_type,
    route,
    desc_template,
    third_level_category,
    module_relevance,
    incident_template,
    request_template,
    change_template,
    problem_template,
    first_level_key,
    second_level_key,
    third_level_key,
    admin_groups

    } = req.body
    try {
    let serviceRecord = await ServiceRecordsVar.findOne({sr_id})

    if(serviceRecord){
        if(serviceRecord.sr_id !== sr_id){
            serviceRecord.set({
                
                
                problem_type,
                problem_sub_type,
                route,
                desc_template,
                third_level_category,
                module_relevance,
                incident_template,
                request_template,
                change_template,
                problem_template,
                first_level_key,
                second_level_key,
                third_level_key,
                admin_groups
                    })
                    serviceRecord = await serviceRecord.save()
        }
        return res.status(200).send("Service Record Successfully updated " + ServiceRecords)

    }
    
    serviceRecord = new ServiceRecordsVar({

    sr_id,
    account_id,
    problem_type,
    problem_sub_type,
    route,
    desc_template,
    third_level_category,
    module_relevance,
    incident_template,
    request_template,
    change_template,
    problem_template,
    first_level_key,
    second_level_key,
    third_level_key,
    admin_groups

    })
    serviceRecord = await serviceRecord.save()
    return res.status(200).send("New Servie Record created"+ServiceRecords);

        
    } catch (ex) {
        return res.status(500).send("error"+ex.message);
    }

})


module.exports =router