const router = require("express").Router();
const WithdrawData = require("../models/Withdraw");

router.get("/withdrawData",async(req,res)=>{
    try{
        const response=await WithdrawData.find({})
        // console.log(response)
        res.status(200).json(response)       
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})

router.post("/withdrawData",async(req,res)=>{
    const {transferid} = req.body; 
    try{
        const response = await WithdrawData.findOne
        ({ 
            transferid:transferid,
         });
        console.log(response)
        res.status(200).json(response)       
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})


// GET the total withdraw of all withdraw data
router.get("/totalWithdraw", async (req, res) => {
    try {
        // Aggregation query to sum all amounts
        const result = await WithdrawData.aggregate([
            {
                $group: {
                    _id: null,  // No grouping by any field, just one result
                    totalWithdraw: { $sum: "$amount" }  // Sum of the `amount` field across all documents
                }
            }
        ]);

        // Check if there is a result
        if (result.length > 0) {
            // Return the total withdraw
            res.status(200).json({ totalWithdraw: result[0].totalWithdraw });
        } else {
            // If no data found, return 0
            res.status(200).json({ totalWithdraw: 0 });
        }
    } catch (err) {
        console.error("Error calculating total withdraw:", err);
        res.status(500).json({ message: "An error occurred while calculating the total withdraw", error: err.message });
    }
});

module.exports = router