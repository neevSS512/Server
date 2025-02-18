
const express = require("express");
const router = express.Router();
const dealctgData = require("../models/dealctg"); // Assuming your model is correctly defined in this file

// Get all dealctg data
router.get("/dealctgData", async (req, res) => {
  try {
    const response = await dealctgData.find({});
    res.status(200).json(response); // Respond with all data in the database
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch data", error: err });
  }
});

// Update dealctg data by ID
router.patch("/dealctgData/:id", async (req, res) => {
  try {
    const _id = req.params.id.trim(); // Trim any extra spaces around the ID

    // Ensure the ID is a valid ObjectId (for MongoDB)
    if (!/^[0-9a-fA-F]{24}$/.test(_id)) {
      return res.status(400).json({ message: "Invalid ObjectId" });
    }

    const updatedData = await dealctgData.findByIdAndUpdate(_id, req.body, {
      new: true, // Return the updated data after the update operation
    });

    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json(updatedData); // Return the updated data to the client
  } catch (err) {
    console.log("Error during update:", err);
    res.status(500).json({ message: "Failed to update data", error: err });
  }
});

// POST route to create a new deal row
router.post("/dealctgData", async (req, res) => {
  try {
    // Validate the incoming data to ensure it follows the schema
    const newRow = new dealctgData(req.body);

    // Save the new row to the database
    await newRow.save();
    res.status(201).json(newRow); // Respond with the created row and a status of 201 (Created)
  } catch (err) {
    console.error("Error saving new row:", err);
    res.status(500).json({ error: "Failed to save the row", details: err.message });
  }
});

module.exports = router;


