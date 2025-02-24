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




router.patch("/ludocounterctg/:id", async (req, res) => {
  try {
    const _id = req.params.id.trim();  // Trim the ID to remove any whitespace or newline characters
    console.log("ID being updated: ", _id);

    // Ensure the ID is a valid ObjectId
    if (!/^[0-9a-fA-F]{24}$/.test(_id)) {
      return res.status(400).json({ message: "Invalid ObjectId" });
    }

    // Log the incoming request body to verify it
    console.log("Request Body: ", req.body);

    const updatedData = await ludocounterCtgData.findByIdAndUpdate(_id, req.body, { new: true });

    if (!updatedData) {
      console.log("No data found with this ID to update");
      return res.status(404).json({ message: "Data not found" });
    }

    console.log("Updated Data: ", updatedData);
    res.status(200).json(updatedData);

  } catch (err) {
    console.log("Error during update:", err);
    res.status(500).json({ message: "Failed to update data", error: err });
  }
});



// POST route to create a new deal row


router.post("/ludocounterctg", async (req, res) => {
  console.log("Received Data:", req.body); // Check if data is being received correctly
  try {
    const newRow = new ludocounterCtgData(req.body);
    await newRow.save();
    res.status(201).json(newRow); // Return the saved row with status 201
  } catch (err) {
    console.error("Error saving new row:", err);
    res.status(500).json({ error: "Failed to save the row", details: err.message });
  }
});




module.exports = router;
