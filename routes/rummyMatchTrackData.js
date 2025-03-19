const router = require("express").Router();
const rummymatchtrack = require("../models/RummyMatchTrack"); // Assuming you have this model


router.get("/rummymatchtrack", async (req, res) => {
  try {
    const matches = await rummymatchtrack
      .find({})
      .sort({ cd: -1 }) 
      .limit(7)
    res.status(200).json(matches);
  } catch (err) {
    console.error("Error fetching match data:", err);
    res.status(500).json({ message: "Failed to fetch match data", error: err });
  }
});




router.get("/rummymatchtrack/:userId", async (req, res) => {
  const userId = req.params.userId; 
  try {
    const matches = await rummymatchtrack
      .find({ "users.uid": userId }) 
      .sort({ cd: -1 }) 
    //   .limit(7); 
    
    if (!matches.length) {
      return res.status(404).json({ message: "No matches found for this user" });
    }
    // console.log(matches)
    res.status(200).json(matches); 
  } catch (err) {
    console.error("Error fetching match data:", err);
    res.status(500).json({ message: "Failed to fetch match data", error: err });
  }
});




module.exports = router;


