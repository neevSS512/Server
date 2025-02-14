const router = require("express").Router();
const snakepublicCtgData = require("../models/snakepublic");  // Your model

// GET all Ludo Playing Category data
router.get("/snakepublicctg", async (req, res) => {
  try {
    const response = await snakepublicCtgData.find({});  // Fetch all data from the collection
    res.status(200).json(response);  // Send the response as JSON
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch game data", error: err });  // Handle error
  }
});

module.exports = router;
