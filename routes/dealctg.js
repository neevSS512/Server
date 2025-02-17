// const router = require("express").Router();
// const dealctgData = require("../models/dealctg");

// // Get all dealctg data
// router.get("/dealctgData", async (req, res) => {
//   try {
//     const response = await dealctgData.find({});
//     console.log(response);
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Failed to fetch data", error: err });
//   }
// });

// router.patch("/dealctgData/:id", async (req, res) => {
//   try {
//     const _id = req.params.id.trim();  // Trim the ID to remove any whitespace or newline characters

//     // Ensure the ID is a valid ObjectId
//     if (!/^[0-9a-fA-F]{24}$/.test(_id)) {
//       return res.status(400).json({ message: "Invalid ObjectId" });
//     }

//     const updatedData = await dealctgData.findByIdAndUpdate(_id, req.body, {
//       new: true,
//     });

//     if (!updatedData) {
//       return res.status(404).json({ message: "Data not found" });
//     }

//     res.status(200).json(updatedData);
//   } catch (err) {
//     console.log("Error during update:", err);
//     res.status(500).json({ message: "Failed to update data", error: err });
//   }
// });

// // Create new dealctg data
// router.post("/dealctgData", async (req, res) => {
//   try {

//     const newData = new dealctgData(req.body);
//     const savedData = await newData.save();
//     res.status(201).json(savedData);
//   } catch (err) {
//     console.log("Error during POST request:", err);
//     res.status(500).json({ message: "Failed to create data", error: err });
//   }
// });

// router.patch("/dealctgData", async (req, res) => {
//   try {
//     console.log('Received data for update:', req.body);
    
//     const response = await dealctgData.updateMany({}, req.body); // Example update logic
//     console.log('Update response:', response);
    
//     res.status(200).json({ message: 'Data updated successfully' });
//   } catch (err) {
//     console.error('Error during update:', err);
//     res.status(500).json({ message: "Failed to update data", error: err });
//   }
// });



// module.exports = router;






const express = require('express');
const router = express.Router();
const dealctgData = require('../models/dealctg');

// Get all dealctg data
router.get("/dealctgData", async (req, res) => {
  try {
    const response = await dealctgData.find({});
    console.log(response);
    res.status(200).json(response);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ message: "Failed to fetch data", error: err.message });
  }
});

// // Update a specific dealctg data entry
// router.patch("/dealctgData/:id", async (req, res) => {
//   try {
//     const _id = req.params.id.trim();  // Trim the ID to remove any whitespace or newline characters

//     // Validate if the ID is a valid MongoDB ObjectId
//     if (!/^[0-9a-fA-F]{24}$/.test(_id)) {
//       return res.status(400).json({ message: "Invalid ObjectId format" });
//     }

//     const updatedData = await dealctgData.findByIdAndUpdate(_id, req.body, { new: true });

//     // If no document was found for the given ID, return a 404 error
//     if (!updatedData) {
//       return res.status(404).json({ message: "Data not found" });
//     }

//     // Return the updated data
//     res.status(200).json(updatedData);
//   } catch (err) {
//     // Log error and send back the error message
//     console.error("Error during update:", err.stack);
//     res.status(500).json({ message: "Failed to update data", error: err.message });
//   }
// });

// Create new dealctg data
router.post("/dealctgData", async (req, res) => {
  try {
    const newData = new dealctgData(req.body);
    
    // Save the new data to the database
    const savedData = await newData.save();
    
    res.status(201).json(savedData); // Return the newly created data
  } catch (err) {
    console.error("Error during POST request:", err);
    res.status(500).json({ message: "Failed to create data", error: err.message });
  }
});
// Bulk update all dealctg data
router.patch("/dealctgData", async (req, res) => {
  try {
    // If the received data is not an array, return an error
    if (!Array.isArray(req.body)) {
      return res.status(400).json({ message: "Expected an array of data for bulk update." });
    }

    // Update all records
    const updatePromises = req.body.map(item => {
      return dealctgData.findByIdAndUpdate(item._id, item, { new: true });
    });

    // Wait for all updates to complete
    const updatedData = await Promise.all(updatePromises);

    // Send back the updated data
    res.status(200).json(updatedData);
  } catch (err) {
    // Log the complete error to understand the cause
    console.error('Error during bulk update:', err);

    // Send a more descriptive error message
    res.status(500).json({ message: "Failed to update data", error: err.message, stack: err.stack });
  }
});



// Export the router so it can be used in the main server file
module.exports = router;
