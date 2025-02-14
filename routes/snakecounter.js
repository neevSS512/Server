const router = require("express").Router();
const snakecounterCtgData = require("../models/snakecounter");  // Your model

// GET all Ludo Playing Category data
router.get("/snakecounterctg", async (req, res) => {
  try {
    const response = await snakecounterCtgData.find({});  // Fetch all data from the collection
    res.status(200).json(response);  // Send the response as JSON
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch game data", error: err });  // Handle error
  }
});

module.exports = router;
