const router = require("express").Router();
const matchtrack = require("../models/matchtrackludos"); // Assuming you have this model

router.get("/matchtrack", async (req, res) => {
  try {
    const matches = await matchtrack.find({}).limit(6);
    res.status(200).json(matches);
  } catch (err) {
    console.error("Error fetching match data:", err);
    res.status(500).json({ message: "Failed to fetch match data", error: err });
  }
});

module.exports = router;
