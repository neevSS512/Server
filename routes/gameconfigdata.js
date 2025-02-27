const express = require('express');
const router = express.Router();
const GameConfiguration = require('./models/GameConfiguration');  // Import the model

// GET request to fetch all game configurations
router.get('/gameconfigurations', async (req, res) => {
    try {
        const gameConfigurations = await GameConfiguration.find();  // Retrieve all documents
        return res.status(200).json(gameConfigurations);  // Send the result as JSON
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// GET request to fetch a specific game configuration by ID
router.get('/gameconfigurations/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const gameConfiguration = await GameConfiguration.findById(id);  // Retrieve document by ID
        if (!gameConfiguration) {
            return res.status(404).json({ message: 'Game configuration not found' });
        }
        return res.status(200).json(gameConfiguration);  // Send the result as JSON
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
