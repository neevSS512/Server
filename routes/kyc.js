const router = require("express").Router();
const Kyc = require("../models/Kyc");

router.get("/kycData",async(req,res)=>{
    try{
        const response=await Kyc.find({}).limit(30)
        // console.log(response)
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})

router.get("/kycDataByUid/:uid", async (req, res) => {
    try {
        const { uid } = req.params; // Extract uid from URL parameter
        const response = await Kyc.find({ uid }).limit(30); // Find records by uid
        if (response.length === 0) {
            return res.status(404).json({ message: "No KYC data found for the given UID." });
        }
        res.status(200).json(response); // Return the found records
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Server error." });
    }
});
router.get("/kyccData/:userId", async (req, res) => {
  const userId = req.params.userId; 
  try {
    const matches = await Kyc.find({ "users.uid": userId }) 
      .sort({ cd: -1 }) 
      .limit(7); 
    
    if (!matches.length) {
      return res.status(404).json({ message: "No matches found for this user" });
    }
    console.log(matches)
    res.status(200).json(matches); 
  } catch (err) {
    console.error("Error fetching kyc data:", err);
    res.status(500).json({ message: "Failed to fetch kyc data", error: err });
  }
});

module.exports = router