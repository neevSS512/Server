
const router = require("express").Router();
const dealctgData = require("../models/dealctg");

router.get("/dealctgData", async (req, res) => {
  try {
    const response = await dealctgData.find({});
    // console.log(response);
    res.status(200).json(response); 
  } catch (err) {
    // console.log(err);
    res.status(500).json({ message: "Failed to fetch game data", error: err });
  }
});




router.patch("/dealctgData/:id", async (req, res) => {
  try {
    const _id = req.params.id.trim(); 
    console.log("ID being updated: ", _id);

    // Ensure the ID is a valid ObjectId
    if (!/^[0-9a-fA-F]{24}$/.test(_id)) {
      return res.status(400).json({ message: "Invalid ObjectId" });
    }

    // console.log("Request Body: ", req.body);

    const updatedData = await dealctgData.findByIdAndUpdate(_id, req.body, { new: true });

    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json(updatedData);
  } catch (err) {
    // console.log("Error during update:", err);
    res.status(500).json({ message: "Failed to update data", error: err });
  }
});
// POST route to create a new Pool row
router.post("/dealctgData", async (req, res) => {
  try {
    const newRow = new dealctgData(req.body);

    // Save the new row to the database
    await newRow.save();
    res.status(201).json(newRow);
  } catch (err) {
    // console.error("Error saving new row:", err);
    res.status(500).json({ error: "Failed to save the row", details: err.message });
  }
});
// DELETE route to delete a document by ID
router.delete("/dealctgData/:id", async (req, res) => {
  try {
    const _id = req.params.id.trim(); 
    // console.log("ID being deleted: ", _id);

    // Ensure the ID is a valid ObjectId
    if (!/^[0-9a-fA-F]{24}$/.test(_id)) {
      return res.status(400).json({ message: "Invalid ObjectId" });
    }


    const deletedData = await dealctgData.findByIdAndDelete(_id);

    if (!deletedData) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json({ message: "Data deleted successfully", data: deletedData });
  } catch (err) {
    // console.log("Error during delete:", err);
    res.status(500).json({ message: "Failed to delete data", error: err });
  }
});


module.exports = router;
