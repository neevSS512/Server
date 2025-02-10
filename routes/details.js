const router = require("express").Router();
const Display = require("../models/Display");

router.get("/getUsers",async(req,res)=>{
    try{
        const response=await Display.find({})
        // console.log(response)
        res.status(200).json(response)     
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})

module.exports = router