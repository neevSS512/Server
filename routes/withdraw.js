const router = require("express").Router();
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
    
    console.log("Received mobile_no:", mobile_no);

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



// Get count of total withdraw in the last 7 days
// Get total deposit in the last 7 days
router.get("/totalDepositLast7Days", async (req, res) => {
    try {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7); // Subtract 7 days from today
  
      const totalDepositLast7Days = await DepositData.aggregate([
        {
          $match: {
            createdAt: { $gte: sevenDaysAgo },
          },
        },
        {
          $group: {
            _id: null, // No grouping by specific fields, just a sum of all documents
            totalDeposit: { $sum: "$amount" }, // Replace "amount" with the actual field name for deposit value
          },
        },
      ]);
  
      const depositAmount = totalDepositLast7Days.length > 0 ? totalDepositLast7Days[0].totalDeposit : 0;
  
      res.status(200).json({ totalDepositLast7Days: depositAmount }); // Send the total deposit as response
    } catch (err) {
      console.error("Error fetching total deposit in the last 7 days:", err);
      res.status(500).json({
        message: "Internal Server Error",
        error: err.message || err, // Include the error message to help with debugging
      });
    }
  });
  

module.exports = router