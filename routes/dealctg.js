


const router = require("express").Router();
const dealctgData = require("../models/dealctg"); // Assuming your model is correctly defined in this file

router.get("/dealctgData", async (req, res) => {
  try {
    const response = await dealctgData.find({});
    console.log(response);
    res.status(200).json(response); 
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch game data", error: err });
  }
});




router.patch("/dealctgData/:id", async (req, res) => {
  try {
    const _id = req.params.id.trim();  // Trim the ID to remove any whitespace or newline characters
    console.log("ID being updated: ", _id);

    // Ensure the ID is a valid ObjectId
    if (!/^[0-9a-fA-F]{24}$/.test(_id)) {
      return res.status(400).json({ message: "Invalid ObjectId" });
    }

    // Log the incoming request body to verify it
    console.log("Request Body: ", req.body);

    const updatedData = await dealctgData.findByIdAndUpdate(_id, req.body, { new: true });

    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json(updatedData);
  } catch (err) {
    console.log("Error during update:", err);
    res.status(500).json({ message: "Failed to update data", error: err });
  }
});
// POST route to create a new Pool row
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
