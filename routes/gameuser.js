
// const router = require("express").Router();
// const Gameuser = require("../models/Gameuser");

// // Get all users
// router.get("/gameUsers", async (req, res) => {
//     try {
//         const response = await Gameuser.find({}).limit(50); // Optional: limit to 50 results
//         res.status(200).json(response);
//     } catch (err) {
//         console.error("Error fetching game users:", err);
//         res.status(500).send({ message: "Internal Server Error", error: err });
//     }
// });

// // Get user by MobileNo
// router.get("/gameUsers/:MobileNo", async (req, res) => {
//     const { MobileNo } = req.params;
//     try {
//         // Find the user by the MobileNo
//         const user = await Gameuser.findOne({ MobileNo }); 
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }
//         res.status(200).json(user);
//     } catch (err) {
//         console.error("Error fetching user by MobileNo:", err);
//         res.status(500).send({ message: "Internal Server Error", error: err });
//     }
// });
// router.patch("/gameUsers/:id", async (req, res) => {
//     try {
//       const _id = req.params.id.trim();
//       console.log("ID being updated: ", _id);
  
//       if (!/^[0-9a-fA-F]{24}$/.test(_id)) {
//         return res.status(400).json({ message: "Invalid ObjectId" });
//       }
//       console.log("Request Body: ", req.body);
  
//       const updatedData = await Gameuser.findByIdAndUpdate(_id, req.body, { new: true });
  
//       if (!updatedData) {
//         return res.status(404).json({ message: "Data not found" });
//       }
  
//       res.status(200).json(updatedData);
//     } catch (err) {
//       console.log("Error during update:", err);
//       res.status(500).json({ message: "Failed to update data", error: err });
//     }
//   });


// module.exports = router;



const router = require("express").Router();
const Gameuser = require("../models/Gameuser");

// Get all users
router.get("/gameUsers", async (req, res) => {
    try {
        const response = await Gameuser.find({}).limit(50); // Optional: limit to 50 results
        res.status(200).json(response);
    } catch (err) {
        console.error("Error fetching game users:", err);
        res.status(500).send({ message: "Internal Server Error", error: err });
    }
});

// Get user by MobileNo
router.get("/gameUsers/:MobileNo", async (req, res) => {
    const { MobileNo } = req.params;
    try {
        // Find the user by the MobileNo
        const user = await Gameuser.findOne({ MobileNo });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        console.error("Error fetching user by MobileNo:", err);
        res.status(500).send({ message: "Internal Server Error", error: err });
    }
});

// Update user data
router.patch("/gameUsers/:id", async (req, res) => {
    try {
        const _id = req.params.id.trim();
        console.log("ID being updated: ", _id);

        if (!/^[0-9a-fA-F]{24}$/.test(_id)) {
            return res.status(400).json({ message: "Invalid ObjectId" });
        }
        console.log("Request Body: ", req.body);

        const updatedData = await Gameuser.findByIdAndUpdate(_id, req.body, { new: true });

        if (!updatedData) {
            return res.status(404).json({ message: "Data not found" });
        }

        res.status(200).json(updatedData);
    } catch (err) {
        console.log("Error during update:", err);
        res.status(500).json({ message: "Failed to update data", error: err });
    }
});

// Get the total number of users
router.get("/total-users", async (req, res) => {
    try {
        const totalUsers = await Gameuser.countDocuments(); // MongoDB query to count documents
        res.status(200).json({ totalUsers }); // Send the count as a response
    } catch (err) {
        console.error("Error fetching total users:", err);
        res.status(500).send({ message: "Internal Server Error", error: err });
    }
});


module.exports = router;
