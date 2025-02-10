const router = require("express").Router();
const RechargeData = require("../models/Recharge")
router.get("/rechargeData",async(req,res)=>{
    try{
        const response=await RechargeData.find({})
        // console.log(response)
        res.status(200).json(response)     
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})

router.post("/rechargeData", async (req, res) => {
    const { orderId, mobile_no } = req.body;

    if (!orderId && !mobile_no) {
        return res.status(400).json({ message: "Either orderId or mobile_no is required" });
    }

    try {
        let query = {};
        if (orderId) query.orderId = orderId;
        if (mobile_no) query.mobile_no = mobile_no;

        const response = await RechargeData.findOne(query);

        if (!response) {
            return res.status(404).json({ message: "No data found for the provided information" });
        }

        console.log(response);
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred while retrieving the data", error: err.message });
    }
});
module.exports = router