const router = require("express").Router();
const PlayingCategory = require("../models/PlayingCTG");

router.get("/playingCTGData",async(req,res)=>{
    try{
        const response=await PlayingCategory.find({})
        // console.log(response)
        res.status(200).json(response)     
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})

module.exports = router