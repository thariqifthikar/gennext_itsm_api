const express = require('express');
const userTestVar = require('../models/usersTestM');
//const User = require('../models/user')
const usersTestM =require('../models/usersTestM')
const router = express.Router()

let userArray =[{id:1},{first_name:'amila'},{last_name:'mk'},{email:'amila@gmail.com'}];
router.get('/', async (req, res) => {
    // let getuser= {userArray}
    // res.send(getuser);

    try {
        let getusersTest = await usersTestM.find();
        return res.send(getusersTest);
    }
    catch (ex) {
        return res.status(500).send("Error: " + ex.message);
    }

})

//get with params 
router.get ('/:id', async(req,res)=> {
    try {
        let getusersTest = await userTestVar.findById( req.params.id)
        if(!getusersTest)
            return res.status(404).send('A user for the given id is not available')
            return res.status(200).send(getusersTest)
    } catch (ex) {
        return res.status(500).send("Error : "+ex.message);
        
    }
})


router.post('/', async (req, res) => {
    const {
        id,
        name,
        email,
        password
    } = req.body
      
    

    
    try {
        let userTestpost = await userTestVar.findOne({id})

        if(userTestpost) {
            // update user if already exist and any values are changed
            if(user.name !== name || user.email !== email || user.password !== password) {
                user.set({
                    name,
                    email,
                    password
                })
                userTestpost = await userTestpost.save()
            }
                
            return res.status(200).send("user Updated"+usersTestM)
            
        }

        // add a new user if already not exist
        userTestpost = new userTestVar({
            name,
            email,
            password
        })
        userTestpost = await userTestpost.save()
        return res.status(200).send("new user Creatred"+usersTestM)
        
    }   
    catch(ex) {
        return res.status(500).send('Error: ' + ex.message)
    }

        

     
})

module.exports = router