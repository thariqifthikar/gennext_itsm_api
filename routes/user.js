const express = require('express');
const userVar = require('../models/users');
//const User = require('../models/user')
const users =require('../models/users')
const router = express.Router()

let userArray =[{id:1},{first_name:'amila'},{last_name:'mk'},{email:'amila@gmail.com'}];
router.get('/', async (req, res) => {
    // let getuser= {userArray}
    // res.send(getuser);

    try {
        let getusers = await users.find();
        return res.send(getusers);
    }
    catch (ex) {
        return res.status(500).send("Error: " + ex.message);
    }

})

//get with params 
router.get ('/:id', async(req,res)=> {
    try {
        let getuser = await userVar.findById( req.params.id)
        if(!getuser)
            return res.status(404).send('A user for the given id is not available')
            return res.status(200).send(getuser)
    } catch (ex) {
        return res.status(500).send("Error : "+ex.message);
        
    }
})


router.post('/', async (req, res) => {
    const {
        id,
        user_name,
        account_id,
        password,
        first_name,
        last_name,
        main_user,
        email_address,
        sms_number,
        user_conf,
        phone,
        cell_phone,
        notes,
        location, //
        car_number,
        building,
        floor,
        cubic,
        administrator,
        manager,
        version, //
        cust_list1, //
        cust_list2, //
        cust_text1,
        cust_text2,
        cust_notes,
        cust_1, //
        cust_2, //
        department, //
        company, //
        company_backup, //
        disable,
        expiration_time,
        cust_date1,
        cust_date2,
        history_version, //
        ldap,//
        change_time,
        changed_by,
        email_notifications,
        permissions_by_groups,
        user_manager_name,
        chat_nick_name,
        enable_login_to_eup,
    
        agreement ,     //
        display_name,
        secondary_email,
        sr_email_notif_condition,
        login_user,
        login_domain,
        login_guid,
        calculated_user_name,
        calculated_user_name_upper,
        locale,
        timezone,
        charset,
        login_user_upper,
        user_name_upper,
        ssp_theme
    } = req.body
      
    

    // let user = await userVar.findOne({id})
    // user = new userVar({
    //     id,
    //     first_name,
    //     last_name,
    //     email
    // })
    // user = await user.save()
    // return res.status(200).send(users)

    // if(!id) 
    //     return res.status(400).send('User is missing')
    

    try {
        let user = await userVar.findOne({id})

        if(user) {
            // update user if already exist and any values are changed
            if(user.first_name !== first_name || user.last_name !== last_name || user.user_name !== user_name) {
                user.set({
                    first_name,
                    last_name,
                    user_name
                })
                user = await user.save()
            }
                
            return res.status(200).send("user Updated"+users)
            
        }

        // add a new user if already not exist
        user = new userVar({
          id,
            user_name,
        account_id,
        password,
        first_name,
        last_name,
        main_user,
        email_address,
        sms_number,
        user_conf,
        phone,
        cell_phone,
        notes,
        location, //
        car_number,
        building,
        floor,
        cubic,
        administrator,
        manager,
        version, //
        cust_list1, //
        cust_list2, //
        cust_text1,
        cust_text2,
        cust_notes,
        cust_1, //
        cust_2, //
        department, //
        company, //
        company_backup, //
        disable,
        expiration_time,
        cust_date1,
        cust_date2,
        history_version, //
        ldap,//
        change_time,
        changed_by,
        email_notifications,
        permissions_by_groups,
        user_manager_name,
        chat_nick_name,
        enable_login_to_eup,
    
        agreement ,     //
        display_name,
        secondary_email,
        sr_email_notif_condition,
        login_user,
        login_domain,
        login_guid,
        calculated_user_name,
        calculated_user_name_upper,
        locale,
        timezone,
        charset,
        login_user_upper,
        user_name_upper,
        ssp_theme
        })
        user = await user.save()
        return res.status(200).send("new user Creatred"+users)
        
    }   
    catch(ex) {
        return res.status(500).send('Error: ' + ex.message)
    }

        

     
})

module.exports = router