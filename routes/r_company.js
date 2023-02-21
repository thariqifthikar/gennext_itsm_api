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
        return res.status(200).send("Company created successfully"+companiesVar);

    } catch (ex) {
        return res.status(500).send("error"+ex.message);
        
    }

})
module.exports = router