const router = require("express").Router();
const moment = require("moment");
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

        // console.log(response);
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred while retrieving the data", error: err.message });
    }
});


// GET the total amount of all recharge data
router.get("/totalAmount", async (req, res) => {
    try {
        // Aggregation query to sum all amounts
        const result = await RechargeData.aggregate([
            {
                $group: {
                    _id: null,  // No grouping by any field, just one result
                    totalAmount: { $sum: "$amount" }  // Sum of the `amount` field across all documents
                }
            }
        ]);

        // Check if there is a result
        if (result.length > 0) {
            // Return the total amount
            res.status(200).json({ totalAmount: result[0].totalAmount });
        } else {
            // If no data found, return 0
            res.status(200).json({ totalAmount: 0 });
        }
    } catch (err) {
        console.error("Error calculating total amount:", err);
        res.status(500).json({ message: "An error occurred while calculating the total amount", error: err.message });
    }
});

// GET the total success and pending of all Recharge data
router.get("/txStatusCounts", async (req, res) => {
    try {
        const result = await RechargeData.aggregate([
            {
                $match: { 
                    txStatus: { $in: ["SUCCESS", "PENDING","FAILED"] }
                }
            },
            {
                $group: {
                    _id: "$txStatus",
                    totalCount: { $sum: 1 }
                }
            }
        ]);

        let totalSuccessCount = 0;
        let totalPendingCount = 0;
        let totalFailedCount = 0;

        result.forEach(item => {
            if (item._id === "SUCCESS") totalSuccessCount = item.totalCount;
            if (item._id === "PENDING") totalPendingCount = item.totalCount;
            if (item._id === "FAILED") totalFailedCount = item.totalCount;
        });

        res.status(200).json({
            totalSuccess: totalSuccessCount,
            totalPending: totalPendingCount,
            totalFailed:totalFailedCount
            
        });
    } catch (error) {
        console.error("Error calculating txStatus counts:", error);
        res.status(500).json({ message: "An error occurred while calculating txStatus counts", error: error.message });
    }
});


router.get("/depositCountById/:mobile_no", async (req, res) => {
    const { mobile_no } = req.params; 

    if (!mobile_no) {
        return res.status(400).json({ message: "mobile_no is required" });
    }

    // console.log("Received mobile_no:", mobile_no); 

    try {
        // Count the documents where mobile_no matches
        const depositCount = await RechargeData.countDocuments({ mobile_no });

        // console.log("Deposit count:", depositCount); 

        res.status(200).json({
            mobile_no,
            depositCount
        });
    } catch (err) {
        console.error("Error counting deposits:", err);
        res.status(500).json({ message: "An error occurred while counting deposits", error: err.message });
    }
});






router.get("/depositDetailsById/:mobile_no", async (req, res) => {
    const { mobile_no } = req.params;
    const { page = 1, limit = 5 } = req.query; 

    if (!mobile_no) {
        return res.status(400).json({ error: true, message: "mobile_no is required" });
    }

    console.log("Received mobile_no:", mobile_no);

    try {
        const skip = (page - 1) * limit;
        
        // Fetch all recharge details with pagination
        const rechargeDetails = await RechargeData.find({ mobile_no })
            .sort({ transDate: -1 }) // Sort by transaction date (newest first)
            .skip(skip)              // Skip the previous pages' records
            .limit(parseInt(limit)); // Limit the number of records per page

        const totalRecords = await RechargeData.countDocuments({ mobile_no }); // Total records for pagination

        if (rechargeDetails.length === 0) {
            return res.status(404).json({ error: true, message: "No recharge details found for the provided mobile number" });
        }

        // console.log("Recharge details:", rechargeDetails);

        // Return paginated results
        res.status(200).json({
            mobile_no,
            rechargeDetails,
            pagination: {
                totalRecords,
                totalPages: Math.ceil(totalRecords / limit),
                currentPage: page,
                pageSize: limit
            }
        });
    } catch (err) {
        console.error("Error fetching recharge details:", err);
        res.status(500).json({ error: true, message: "An error occurred while fetching recharge details", error: err.message });
    }
});



//last 7days recharge amount


  router.get("/totalRechargeLast7Days", async (req, res) => {
    try {
      
        const sevenDaysAgo = moment().subtract(1, 'days').toDate();
      //   console.log('Seven days ago:', sevenDaysAgo); 
        const result = await RechargeData.aggregate([
            {
                $match: {
                    createdAt: { $gte: new Date(sevenDaysAgo) } // Use ISODate for proper comparison
                }
            },
            {
                $group: {
                    _id: null,
                    totalRecharge: { $sum: "$amount" }
                }
            }
        ]);

    //    console.log('Aggregation result:', result); 

        // If no data found, return 0
        const totalRecharge = result.length > 0 ? result[0].totalRecharge : 0;

        res.status(200).json({ totalRecharge });
    } catch (err) {
        console.log('Error:', err); 
        res.status(500).send("Error fetching total recharge");
    }
});




module.exports = router