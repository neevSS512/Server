
const router = require("express").Router();
const Game = require("../models/playingctgGame");

router.get("/ctgData", async (req, res) => {
  try {
    const response = await Game.find({});
    // console.log(response);
    res.status(200).json(response); 
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch game data", error: err });
  }
});


router.patch("/ctgData/:id", async (req, res) => {
  try {
    const _id = req.params.id.trim();  // Trim the ID to remove any whitespace or newline characters
    // console.log("ID being updated: ", _id);

    // Ensure the ID is a valid ObjectId
    if (!/^[0-9a-fA-F]{24}$/.test(_id)) {
      return res.status(400).json({ message: "Invalid ObjectId" });
    }

    // Log the incoming request body to verify it
    // console.log("Request Body: ", req.body);

    const updatedData = await Game.findByIdAndUpdate(_id, req.body, { new: true });

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
router.post("/ctgData", async (req, res) => {
  try {
    // Validate the incoming data to ensure it follows the schema
    const newRow = new Game(req.body);

    // Save the new row to the database
    await newRow.save();
    res.status(201).json(newRow); // Respond with the created row and a status of 201 (Created)
  } catch (err) {
    console.error("Error saving new row:", err);
    res.status(500).json({ error: "Failed to save the row", details: err.message });
  }
});

// DELETE route to delete a document by ID
router.delete("/ctgData/:id", async (req, res) => {
  try {
    const _id = req.params.id.trim(); // Trim the ID to remove any whitespace or newline characters
    console.log("ID being deleted: ", _id);

    // Ensure the ID is a valid ObjectId
    if (!/^[0-9a-fA-F]{24}$/.test(_id)) {
      return res.status(400).json({ message: "Invalid ObjectId" });
    }

    // Attempt to delete the document by ID
    const deletedData = await Game.findByIdAndDelete(_id);

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
