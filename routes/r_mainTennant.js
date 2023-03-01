const express  =require('express');
const mainTennantVar = require('../models/subTennant');
const mainTennant = require('../models/subTennant');
//const { route } = require('./user');
const router = express.Router()


router.get('/',async (req,res)=>{

    try {
        let mainTennants = await mainTennant.find();
        return res.send(mainTennants);

    } catch (ex) {
       return res.status(500).send("Error"+ex.message);
    }



})

//Search by params
router.get ('/id/:main_tennant_id', async(req,res)=> {
    try {
        let getMainTennant = await mainTennantVar.findOne( {main_tennant_id:req.params.main_tennant_id})
    
        //let getuser = await userVar.findOne( {uid:req.params.uid}).select('user_name') to pass user only name
        if(!getMainTennant)
            return res.status(404).send('A main tennant for the given id is not available')
            return res.status(200).send(getMainTennant)
        
           
        
    } catch (ex) {
        return res.status(500).send("Error : "+ex.message);
        
    }
})

//delete by ID
router.delete('/id/:main_tennant_id', async (req, res) => {
    try {
        //console.log("===============");
       // console.log("req :",req.body);
        let deleteByid = await userVar.findOneAndDelete({ main_tennant_id: req.params.main_tennant_id });
        if(!deleteByid)
            return res.status(404).send('A main tennant for the given id is not available')
        return res.status(200).send(" This main tennant was Deleted Successfully"+ deleteByid)
    }
    catch(ex) {
        return res.status(500).send('Error: ' + ex.message)
    }
})

router.post('/',async(req,res)=>{
    const{
        
    main_tennant_id,
    branch_name,
    created_dateTime,
    hq_address,
    hq_contact,
    admin_licence_count

    } = req.body

    try {
        let mainTennant=  await mainTennantVar.findOne({main_tennant_id})

        if(subTennant) {
            // update user if already exist and any values are changed
            if(mainTennant.main_tennant_id !== main_tennant_id ) {
                mainTennant.set({
                    branch_name,
                    created_dateTime,
                    hq_address,
                    hq_contact,
                    admin_licence_count
                })
                mainTennant = await mainTennant.save()
            }
                
            return res.status(200).send("sub tennent updated"+mainTennant)
            
        }

        //add sub tennant if not exist
        mainTennant = new mainTennantVar({
            
        
        branch_name,
        created_dateTime,
        hq_address,
        hq_contact,
        admin_licence_count

        })
        mainTennant = await mainTennant.save()
        return res.status(200).send("sub tennent created."+mainTennantVar);


    } catch (ex) {
        return res.status(500).send("error"+ex.message);
        
    }

})
module.exports = router