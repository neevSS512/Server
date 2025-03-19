

const router = require("express").Router();
const snakecounterCtgData = require("../models/snakecounter");  

// GET all Ludo Playing Category data
router.get("/snakecounterctg", async (req, res) => {
  try {
    const response = await snakecounterCtgData.find({ modeType: 'counter' });  // Fetch all data from the collection
    res.status(200).json(response);  // Send the response as JSON
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch game data", error: err });  // Handle error
  }
});




router.patch("/snakecounterctg/:id", async (req, res) => {
  try {
    const _id = req.params.id.trim();  // Trim the ID to remove any whitespace or newline characters
    // console.log("ID being updated: ", _id);

    // Ensure the ID is a valid ObjectId
    if (!/^[0-9a-fA-F]{24}$/.test(_id)) {
      return res.status(400).json({ message: "Invalid ObjectId" });
    }

    // Log the incoming request body to verify it
    // console.log("Request Body: ", req.body);

    const updatedData = await snakecounterCtgData.findByIdAndUpdate(_id, req.body, { new: true });

    if (!updatedData) {
      console.log("No data found with this ID to update");
      return res.status(404).json({ message: "Data not found" });
    }

    // console.log("Updated Data: ", updatedData);
    res.status(200).json(updatedData);

  } catch (err) {
    console.log("Error during update:", err);
    res.status(500).json({ message: "Failed to update data", error: err });
  }
});



// POST route to create a new deal row


router.post("/snakecounterctg", async (req, res) => {
  console.log("Received Data:", req.body); // Check if data is being received correctly
  try {
    const newRow = new snakecounterCtgData(req.body);
    await newRow.save();
    res.status(201).json(newRow); // Return the saved row with status 201
  } catch (err) {
    console.error("Error saving new row:", err);
    res.status(500).json({ error: "Failed to save the row", details: err.message });
  }
});

// DELETE route to delete a document by ID
router.delete("/snakecounterctg/:id", async (req, res) => {
  try {
    const _id = req.params.id.trim(); // Trim the ID to remove any whitespace or newline characters
    // console.log("ID being deleted: ", _id);

    // Ensure the ID is a valid ObjectId
    if (!/^[0-9a-fA-F]{24}$/.test(_id)) {
      return res.status(400).json({ message: "Invalid ObjectId" });
    }

    // Attempt to delete the document by ID
    const deletedData = await snakecounterCtgData.findByIdAndDelete(_id);

    // If the document is not found
    if (!deletedData) {
      return res.status(404).json({ message: "Data not found" });
    }

    // Return a success message and the deleted data
    res.status(200).json({ message: "Data deleted successfully", data: deletedData });
  } catch (err) {
    console.log("Error during delete:", err);
    res.status(500).json({ message: "Failed to delete data", error: err });
  }
});


module.exports = router;
