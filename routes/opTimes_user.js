const express = require('express');
const oTimesUsersVar = require('../models/operatingTimes-Users');
const operatingTimes_user =require('../models/operatingTimes-Users');
const router = express.Router()

//get all companies
router.get('/',async(req,res)=>{

    try {
        let getOPtimes_user = await operatingTimes_user.find();
        return res.send(getOPtimes_user);
        
    } catch (ex) {
        return res.status(500).send("error"+ex.message);
        
    }

})

router.get ('/id/:otimeUser_id', async(req,res)=> {
    try {
        let getOtimeUser = await oTimesUsersVar.findOne( {otimeUser_id:req.params.otimeUser_id})
    
        //let getuser = await userVar.findOne( {uid:req.params.uid}).select('user_name') to pass user only name
        if(!getOtimeUser)
            return res.status(404).send('A operating time for the given id is not available')
            return res.status(200).send(getOtimeUser)
        
           
        
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

        let optimeuser = await oTimesUsersVar.findOne({otimeUser_id})

        if(optimeuser){
            if(optimeuser.otimeUser_id !== otimeUser_id){
                oTimesUsersVar.set({
                    type,
                    start_time,
                    end_time,
                    branch_contact,
                    admin_licence_count,
                 })
                optimeuser = await optimeuser.save()

            }
            return res.status(200).send("Operating time updated"+optimeuser);
        }

        //add new company
        optimeuser = new oTimesUsersVar({
            type,
            start_time,
            end_time,
             branch_contact,
             admin_licence_count,
        })
        optimeuser = await optimeuser.save()
        return res.status(200).send("Operating times created successfully"+operatingTimes_user);

    } catch (ex) {
        return res.status(500).send("error"+ex.message);
        
    }

})

router.delete('/id/:otimeUser_id', async (req, res) => {
    try {
        //console.log("===============");
       // console.log("req :",req.body);
        let deleteByid = await oTimesUsersVar.findOneAndDelete({ otimeUser_id: req.params.otimeUser_id });
        if(!deleteByid)
            return res.status(404).send('A operating time for the given id is not available')
        return res.status(200).send(" This user was Deleted Successfully"+ deleteByid)
    }
    catch(ex) {
        return res.status(500).send('Error: ' + ex.message)
    }
})
module.exports = router