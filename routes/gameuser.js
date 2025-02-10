const router = require("express").Router();
const Gameuser = require("../models/Gameuser");

router.get("/gameUsers",async(req,res)=>{
    try{
        const response=await Gameuser.find({})
        // console.log(response)
        res.status(200).json(response)     
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})

module.exports = router