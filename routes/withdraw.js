const router = require("express").Router();
const WithdrawData = require("../models/Withdraw");

router.get("/withdrawData",async(req,res)=>{
    try{
        const response=await WithdrawData.find({}).limit(30)
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



// For fetching all withdraw details by mobile_no
// router.get("/withdrawDetailsByMobile/:phn", async (req, res) => {
//     const { phn } = req.params;

//     if (!phn) {
//         return res.status(400).json({ error: true, message: "mobile_no is required" });
//     }

//     console.log("Received mobile_no:", phn);

//     try {
//         // Fetch all withdrawal details where mobile_no matches
//         const withdrawDetails = await WithdrawData.find({ phn })
//             .sort({ date: -1 }); // Sorting by date in descending order to get the latest first

//         if (withdrawDetails.length === 0) {
//             return res.status(404).json({ error: true, message: "No withdrawal details found for the provided mobile number" });
//         }

//         console.log("Withdrawal details:", withdrawDetails);

//         // Return the details
//         res.status(200).json({
//             phn,
//             withdrawDetails
//         });
//     } catch (err) {
//         console.error("Error fetching withdrawal details:", err);
//         res.status(500).json({ error: true, message: "An error occurred while fetching withdrawal details", error: err.message });
//     }
// });






// Backend API to fetch withdrawal details by mobile number
router.get("/withdrawDetailsByMobile/:phn", async (req, res) => {
    const { phn } = req.params;

    if (!phn) {
        return res.status(400).json({ error: true, message: "mobile_no is required" });
    }

    console.log("Received mobile_no:", phn);

    try {
        // Fetch all withdrawal details where mobile_no matches
        const withdrawDetails = await WithdrawData.find({ phn })
            .sort({ date: -1 }); // Sorting by date in descending order to get the latest first

        console.log("Fetched Withdraw Details:", withdrawDetails);

        if (withdrawDetails.length === 0) {
            return res.status(404).json({ error: true, message: "No withdrawal details found for the provided mobile number" });
        }

        // Return the details
        res.status(200).json({
            phn,
            withdrawDetails
        });
    } catch (err) {
        console.error("Error fetching withdrawal details:", err);
        res.status(500).json({ error: true, message: "An error occurred while fetching withdrawal details", error: err.message });
    }
});


module.exports = router