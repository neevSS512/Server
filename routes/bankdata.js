const router = require("express").Router();
const BankVerification = require("../models/Bank");

router.get("/bankData",async(req,res)=>{
    try{
        const response=await BankVerification.find({})
        // console.log(response)
        res.status(200).json(response)     
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})

module.exports = router