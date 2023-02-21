const express  =require('express');
const subTennantVar = require('../models/subTennant');
const subTennant = require('../models/subTennant');
//const { route } = require('./user');
const router = express.Router()


router.get('/',async (req,res)=>{

    try {
        let subTennants = await subTennant.find();
        return res.send(subTennants);

    } catch (ex) {
       return res.status(500).send("Error"+ex.message);
    }



})

router.post('/',async(req,res)=>{
    const{
        
    sub_tennant_id,
    branch_name,
    created_dateTime,
    branch_address,
    branch_contact,
    admin_licence_count

    } = req.body

    try {
        let subTennant=  await subTennantVar.findOne({sub_tennant_id})

        if(subTennant) {
            // update user if already exist and any values are changed
            if(subTennant.sub_tennant_id !== sub_tennant_id ) {
                subTennant.set({
                    branch_name,
                    created_dateTime,
                    branch_address,
                    branch_contact,
                    admin_licence_count
                })
                subTennant = await subTennant.save()
            }
                
            return res.status(200).send("sub tennent updated"+subTennant)
            
        }

        //add sub tennant if not exist
        subTennant = new subTennantVar({
            
        sub_tennant_id,
        branch_name,
        created_dateTime,
        branch_address,
        branch_contact,
        admin_licence_count

        })
        subTennant = await subTennant.save()
        return res.status(200).send("sub tennent created."+subTennantVar);


    } catch (ex) {
        return res.status(500),send("error"+ex.message);
        
    }

})
module.exports = router