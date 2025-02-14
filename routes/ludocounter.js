const router = require("express").Router();
const ludocounterCtgData = require("../models/ludocounter");  // Your model

// GET all Ludo Playing Category data
router.get("/ludocounterctg", async (req, res) => {
  try {
    const response = await ludocounterCtgData.find({});  // Fetch all data from the collection
    res.status(200).json(response);  // Send the response as JSON
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch game data", error: err });  // Handle error
  }
});

module.exports = router;
