const router = require("express").Router();
const moment =require("moment")
const WithdrawData = require("../models/Withdraw");
const Gameuser = require("../models/Gameuser");
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
        // console.log(response)
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



// GET the total success and pending of all withdraw data

router.get("/StatusCounts", async (req, res) => {
    try {
        const result = await WithdrawData.aggregate([
            {
                $match: { 
                    status: { $in: ["Success", "Pending"] }
                }
            },
            {
                $group: {
                    _id: "$status",
                    totalCount: { $sum: 1 }
                }
            }
        ]);

        let totalSuccessCount = 0;
        let totalPendingCount = 0;

        result.forEach(item => {
            if (item._id === "Success") totalSuccessCount = item.totalCount;
            if (item._id === "Pending") totalPendingCount = item.totalCount;
        });

        res.status(200).json({
            totalSuccessW: totalSuccessCount,
            totalPendingW: totalPendingCount
        });
    } catch (error) {
        console.error("Error calculating Status counts:", error);
        res.status(500).json({ message: "An error occurred while calculating Status counts", error: error.message });
    }
});







router.get("/getWithdrawDetails", async (req, res) => {
    const { mobile_no } = req.query;  // mobile_no sent as a query parameter
    if (!mobile_no) {
        return res.status(400).json({ error: true, message: "mobile_no is required" });
    }
    
    // console.log("Received mobile_no:", mobile_no);

    try {
        
        const gameUser = await Gameuser.findOne({ mobile_no });

        if (!gameUser) {
            return res.status(404).json({ error: true, message: "User not found with the provided mobile number" });
        }

        const withdrawDetails = await WithdrawData.find({ phn: mobile_no }).sort({ date: -1 });

        if (withdrawDetails.length === 0) {
            return res.status(404).json({ error: true, message: "No withdrawal details found of this user" });
        }

        res.status(200).json({
            mobile_no,
            withdrawDetails,
        });

    } catch (err) {
        console.error("Error fetching withdrawal details:", err);
        res.status(500).json({ error: true, message: "An error occurred while fetching withdrawal details", error: err.message });
    }
});






  router.get("/totalWithdrawLast7Days", async (req, res) => {
    try {
      
        const sevenDaysAgo = moment().subtract(1, 'days').toDate();
      //   console.log('Seven days ago:', sevenDaysAgo); // Log the date we're comparing against

        // Aggregate the total withdraws in the last 7 days
        const result = await WithdrawData.aggregate([
            {
                $match: {
                    createdAt: { $gte: new Date(sevenDaysAgo) } // Use ISODate for proper comparison
                }
            },
            {
                $group: {
                    _id: null,
                    totalWithdraw: { $sum: "$amount" }
                }
            }
        ]);

      //   console.log('Aggregation result:', result); // Log the result of aggregation

        // If no data found, return 0
        const totalWithdraw = result.length > 0 ? result[0].totalWithdraw : 0;

        // Return the total withdrawal in the last 7 days
        res.status(200).json({ totalWithdraw });
    } catch (err) {
        console.log('Error:', err); // Log the error for debugging
        res.status(500).send("Error fetching total withdrawals");
    }
});
module.exports = router