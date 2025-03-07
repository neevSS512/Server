



const router = require("express").Router();
const snakescoreCtgData = require("../models/snakescore");  

// GET all Ludo Playing Category data
router.get("/snakescorectg", async (req, res) => {
  try {
    const response = await snakescoreCtgData.find({ modeType: 'score' });  // Fetch all data from the collection
    res.status(200).json(response);  // Send the response as JSON
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch game data", error: err });  // Handle error
  }
});

router.patch("/snakescorectg/:id", async (req, res) => {
  try {
    const _id = req.params.id.trim();  // Trim the ID to remove any whitespace or newline characters
    console.log("ID being updated: ", _id);

    // Ensure the ID is a valid ObjectId
    if (!/^[0-9a-fA-F]{24}$/.test(_id)) {
      return res.status(400).json({ message: "Invalid ObjectId" });
    }

    // Log the incoming request body to verify it
    console.log("Request Body: ", req.body);

    const updatedData = await snakescoreCtgData.findByIdAndUpdate(_id, req.body, { new: true });

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
router.post("/snakescorectg", async (req, res) => {
  try {
    // Validate the incoming data to ensure it follows the schema
    const newRow = new snakescoreCtgData(req.body);

    // Save the new row to the database
    await newRow.save();
    res.status(201).json(newRow); // Respond with the created row and a status of 201 (Created)
  } catch (err) {
    console.error("Error saving new row:", err);
    res.status(500).json({ error: "Failed to save the row", details: err.message });
  }
});


// DELETE route to delete a document by ID
router.delete("/snakescorectg/:id", async (req, res) => {
  try {
    const _id = req.params.id.trim(); // Trim the ID to remove any whitespace or newline characters
    console.log("ID being deleted: ", _id);

    // Ensure the ID is a valid ObjectId
    if (!/^[0-9a-fA-F]{24}$/.test(_id)) {
      return res.status(400).json({ message: "Invalid ObjectId" });
    }

    // Attempt to delete the document by ID
    const deletedData = await snakescoreCtgData.findByIdAndDelete(_id);

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
