const router = require("express").Router();
const Kyc = require("../models/Kyc");

router.get("/kycData",async(req,res)=>{
    try{
        const response=await Kyc.find({})
        // console.log(response)
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})
module.exports = router