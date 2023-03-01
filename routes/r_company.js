const express = require('express');
const companiesVar = require('../models/companies');
const companyVar = require('../models/companies');
const companies =require('../models/companies');
const router = express.Router()

//get all companies
router.get('/',async(req,res)=>{

    try {
        let getCompanies = await companies.find();
        return res.send(getCompanies);
        
    } catch (ex) {
        return res.status(500).send("error"+ex.message);
        
    }

})

//get with params (uid) 
router.get ('/id/:company_Id', async(req,res)=> {
    try {
        let getcompany = await companiesVar.findOne( {company_Id:req.params.company_Id})
    
        //let getuser = await userVar.findOne( {uid:req.params.uid}).select('user_name') to pass user only name
        if(!getcompany)
            return res.status(404).send('A company for the given id is not available')
            return res.status(200).send(getcompany)
        
           
        
    } catch (ex) {
        return res.status(500).send("Error : "+ex.message);
        
    }
})
//get use by company name
router.get ('/name/:company_name', async(req,res)=> {
    try {
        let getcompanybyName = await companyVar.findOne( {company_name:req.params.company_name})
    
        //let getuser = await userVar.findOne( {uid:req.params.uid}).select('user_name') to pass user only name
        if(!getcompanybyName)
            return res.status(404).send('A user for the given Name is not available')
            return res.status(200).send(getcompanybyName)
        
        
    } catch (ex) {
        return res.status(500).send("Error : "+ex.message);
        
    }
})

//insert companies
router.post('/',async (req,res)=>{

    const {
        company_Id,
    sub_tennant_Id,
    company_name
    } = req.body

    try {

        let CompanyV2 = await companyVar.findOne({company_Id})

        if(CompanyV2){
            if(CompanyV2.company_Id !== company_Id){
                companiesVar.set({
                    company_name
                })
                CompanyV2 = await CompanyV2.save()

            }
            return res.status(200).send("company updated"+CompanyV2);
        }

        //add new company
        CompanyV2 = new companiesVar({
            company_Id,
            company_name
        })
        CompanyV2 = await CompanyV2.save()
        return res.status(200).send("Company created successfully"+companies);

    } catch (ex) {
        return res.status(500).send("error"+ex.message);
        
    }

})


router.delete('/id/:company_Id', async (req, res) => {
    try {
        //console.log("===============");
       // console.log("req :",req.body);
        let deleteByid = await companiesVar.findOneAndDelete({ company_Id: req.params.company_Id });
        if(!deleteByid)
            return res.status(404).send('A company for the given id is not available')
        return res.status(200).send(" This user was Deleted Successfully"+ deleteByid)
    }
    catch(ex) {
        return res.status(500).send('Error: ' + ex.message)
    }
})
module.exports = router