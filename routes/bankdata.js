

const router =require("express").Router()
const bankDatas =require("../models/Bank")
router.get("/bankData", async (req, res) => {
    try {
        const response = await bankDatas.find({})
        // console.log(response);
        res.status(200).json(response);     
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error fetching data", error: err });
    }
});


module.exports=router