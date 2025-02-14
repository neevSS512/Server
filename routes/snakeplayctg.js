const router = require("express").Router();
const snakeCtgData = require("../models/snakeplayctg");  // Your model

// GET all Ludo Playing Category data
router.get("/snakectg", async (req, res) => {
  try {
    const response = await snakeCtgData.find({});  // Fetch all data from the collection
    res.status(200).json(response);  // Send the response as JSON
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch game data", error: err });  // Handle error
  }
});

module.exports = router;
