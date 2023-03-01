const express = require('express');
const oTimesAdminVar = require('../models/operatingTimes-Admins');
const operatingTimes_Admin =require('../models/operatingTimes-Admins');
const router = express.Router()

//get all companies
router.get('/',async(req,res)=>{

    try {
        let getadmins = await operatingTimes_Admin.find();
        return res.send(getadmins);
        
    } catch (ex) {
        return res.status(500).send("error"+ex.message);
        
    }

})

router.get ('/id/:otime_id', async(req,res)=> {
    try {
        let getOtimeAdmin = await oTimesAdminVar.findOne( {otime_id:req.params.otime_id})
    
        //let getuser = await userVar.findOne( {uid:req.params.uid}).select('user_name') to pass user only name
        if(!getOtimeAdmin)
            return res.status(404).send('A operating times-Admin for the given id is not available')
            return res.status(200).send(getOtimeAdmin)
        
           
        
    } catch (ex) {
        return res.status(500).send("Error : "+ex.message);
        
    }
})

//insert companies
router.post('/',async (req,res)=>{

    const {
        
    type,
    start_time,
    end_time,
    branch_contact,
    admin_licence_count,
    } = req.body

    try {

        let optimeAD = await oTimesAdminVar.findOne({otime_id})

        if(optimeAD){
            if(optimeAD.otime_id !== otime_id){
                oTimesAdminVar.set({
                    type,
                    start_time,
                    end_time,
                    branch_contact,
                    admin_licence_count,
                                })
                optimeAD = await optimeAD.save()

            }
            return res.status(200).send("Operating time updated"+optimeAD);
        }

        //add new company
        optimeAD = new oTimesAdminVar({
            type,
            start_time,
            end_time,
             branch_contact,
             admin_licence_count,
        })
        optimeAD = await optimeAD.save()
        return res.status(200).send("Operating times created successfully"+operatingTimes_Admin);

    } catch (ex) {
        return res.status(500).send("error"+ex.message);
        
    }

})


router.delete('/id/:otime_id', async (req, res) => {
    try {
        //console.log("===============");
       // console.log("req :",req.body);
        let deleteByid = await oTimesAdminVar.findOneAndDelete({ otime_id: req.params.otime_id });
        if(!deleteByid)
            return res.status(404).send('A operating times-admin for the given id is not available')
        return res.status(200).send(" This operating times-Admin was Deleted Successfully"+ deleteByid)
    }
    catch(ex) {
        return res.status(500).send('Error: ' + ex.message)
    }
})
module.exports = router