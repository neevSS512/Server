const express = require('express');
const router = express.Router();
const GameConfiguration = require('../models/Gameconfig');  

// GET request to fetch all game configurations
router.get('/gameconfigurations', async (req, res) => {
    try {
        const gameConfigurations = await GameConfiguration.find();  
        return res.status(200).json(gameConfigurations);  
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
});

router.patch("/gameconfigurations/:id", async (req, res) => {
    try {
      const _id = req.params.id.trim();  
      // console.log("ID being updated: ", _id);
  
      // Ensure the ID is a valid ObjectId
      if (!/^[0-9a-fA-F]{24}$/.test(_id)) {
        return res.status(400).json({ message: "Invalid ObjectId" });
      }
  
      // Log the incoming request body to verify it
      // console.log("Request Body: ", req.body);
  
      const updatedData = await GameConfiguration.findByIdAndUpdate(_id, req.body, { new: true });
  
      if (!updatedData) {
        return res.status(404).json({ message: "Data not found" });
      }
  
      res.status(200).json(updatedData);
    } catch (err) {
      // console.log("Error during update:", err);
      res.status(500).json({ message: "Failed to update data", error: err });
    }
  });

module.exports = router;
