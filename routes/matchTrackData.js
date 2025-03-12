const router = require("express").Router();
const matchtrack = require("../models/matchtrackludos"); // Assuming you have this model


router.get("/matchtrack", async (req, res) => {
  try {
    const matches = await matchtrack
      .find({})
      .sort({ cd: -1 }) 
      .limit(7)
    res.status(200).json(matches);
  } catch (err) {
    console.error("Error fetching match data:", err);
    res.status(500).json({ message: "Failed to fetch match data", error: err });
  }
});




// router.get("/matchtrack/:userId", async (req, res) => {
//   const userId = req.params.userId; 
//   try {
//     const matches = await matchtrack
//       .find({ "users.uid": userId }) 
//       .sort({ cd: -1 }) 
//       .limit(7); 
    
//     if (!matches.length) {
//       return res.status(404).json({ message: "No matches found for this user" });
//     }
//     console.log(matches)
//     res.status(200).json(matches); 
//   } catch (err) {
//     console.error("Error fetching match data:", err);
//     res.status(500).json({ message: "Failed to fetch match data", error: err });
//   }
// });

router.get("/matchtrack/:userId", async (req, res) => {
  const userId = req.params.userId; 
  try {
    const matches = await matchtrack
      .find({ "users.uid": userId, game: "ludo" }) // Filter for game "ludo"
      .sort({ cd: -1 }) 
      // .limit(7); 
    
    if (!matches.length) {
      return res.status(404).json({ message: "No matches found for this user" });
    }
    
    res.status(200).json(matches); 
  } catch (err) {
    console.error("Error fetching match data:", err);
    res.status(500).json({ message: "Failed to fetch match data", error: err });
  }
});
router.get("/matchtrackS/:userId", async (req, res) => {
  const userId = req.params.userId; 
  try {
    const matches = await matchtrack
      .find({ "users.uid": userId, game: "snake" }) // Filter for game "ludo"
      .sort({ cd: -1 }) 
      .limit(7); 
    
    if (!matches.length) {
      return res.status(404).json({ message: "No matches found for this user" });
    }
    
    res.status(200).json(matches); 
  } catch (err) {
    console.error("Error fetching match data:", err);
    res.status(500).json({ message: "Failed to fetch match data", error: err });
  }
});





module.exports = router;


