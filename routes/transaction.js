const router =require("express").Router()
const Transaction=require('../models/Transaction')
router.get("/transactionData",async(req,res)=>{
    try{
        const response=await Transaction.find({})
        console.log(response)
        res.status(200).json(response)     
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})

module.exports=router