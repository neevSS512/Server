
const router = require("express").Router();
const poolGame = require("../models/poolctgGame");

router.get("/poolctgData", async (req, res) => {
  try {
    const response = await poolGame.find({});
    console.log(response);
    res.status(200).json(response); 
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch game data", error: err });
  }
});




router.patch("/poolctgData/:id", async (req, res) => {
  try {
    const _id = req.params.id.trim();  // Trim the ID to remove any whitespace or newline characters
    console.log("ID being updated: ", _id);

    // Ensure the ID is a valid ObjectId
    if (!/^[0-9a-fA-F]{24}$/.test(_id)) {
      return res.status(400).json({ message: "Invalid ObjectId" });
    }

    // Log the incoming request body to verify it
    console.log("Request Body: ", req.body);

    const updatedData = await poolGame.findByIdAndUpdate(_id, req.body, { new: true });

    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json(updatedData);
  } catch (err) {
    console.log("Error during update:", err);
    res.status(500).json({ message: "Failed to update data", error: err });
  }
});


module.exports = router;
