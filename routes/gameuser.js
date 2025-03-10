const router = require("express").Router();
const Gameuser = require("../models/Gameuser");

// Get all users
router.get("/gameUsers", async (req, res) => {
  try {
    const response = await Gameuser.find({}).limit(30)
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

// // Update user data
router.patch("/gameUsers/:id", async (req, res) => {
  try {
    const _id = req.params.id.trim();
    // console.log("ID being updated: ", _id);

    if (!/^[0-9a-fA-F]{24}$/.test(_id)) {
      return res.status(400).json({ message: "Invalid ObjectId" });
    }
    // console.log("Request Body: ", req.body);

    const updatedData = await Gameuser.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

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


router.get("/deposituserCountById/:mobile_no", async (req, res) => {
  const { mobile_no } = req.params; 

  if (!mobile_no) {
      return res.status(400).json({ message: "mobile_no is required" });
  }

  console.log("Received mobile_no:", mobile_no); 

  try {
      // Count the documents where mobile_no matches
      const depositCount = await Gameuser.countDocuments({ mobile_no });

      console.log("Deposit count:", depositCount); 

      res.status(200).json({
          mobile_no,
          depositCount
      });
  } catch (err) {
      console.error("Error counting deposits:", err);
      res.status(500).json({ message: "An error occurred while counting deposits", error: err.message });
  }
});

// Get users created today
// router.get("/newUsersToday", async (req, res) => {
//   try {
//     const startOfDay = new Date();
//     startOfDay.setHours(0, 0, 0, 0); // Set the start of the day to 00:00:00

//     const endOfDay = new Date();
//     endOfDay.setHours(23, 59, 59, 999); // Set the end of the day to 23:59:59

//     // Find users created today by comparing the createdAt field
//     const newUsersToday = await Gameuser.find({
//       createdAt: { $gte: startOfDay, $lte: endOfDay }
//     });

//     res.status(200).json(newUsersToday); // Send the new users as response
//   } catch (err) {
//     console.error("Error fetching new users of today:", err);
//     res.status(500).json({ message: "Internal Server Error", error: err });
//   }
// });



// Get users created in the last 6 days
// router.get("/newUsersLast6Days", async (req, res) => {
//   try {
//     // Get the current date and subtract 6 days
//     const sixDaysAgo = new Date();
//     sixDaysAgo.setDate(sixDaysAgo.getDate() - 6); // Subtract 6 days from today

//     // Find users created in the last 6 days
//     const newUsersLast6Days = await Gameuser.find({
//       createdAt: { $gte: sixDaysAgo }
//     });

//     res.status(200).json(newUsersLast6Days);
//   } catch (err) {
//     console.error("Error fetching new users in the last 6 days:", err);
//     res.status(500).json({ message: "Internal Server Error", error: err });
//   }
// });




// Get count of users created in the last 7 days
// router.get("/newUsersCountLast6Days", async (req, res) => {
//   try {
//     // Get the current date and subtract 7 days
//     const sixDaysAgo = new Date();
//     sixDaysAgo.setDate(sixDaysAgo.getDate() -7); // Subtract 7 days from today

//     // Count the users created in the last 7 days
//     const newUsersCountLast6Days = await Gameuser.countDocuments({
//       createdAt: { $gte: sixDaysAgo }
//     });

//     res.status(200).json({ newUsersCountLast6Days }); // Send the count as response
//   } catch (err) {
//     console.error("Error fetching new users count in the last 7 days:", err);
//     res.status(500).json({ message: "Internal Server Error", error: err });
//   }
// });


// Get count of users created in the last 7 days
router.get("/newUsersCountLast7Days", async (req, res) => {
  try {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7); // Subtract 7 days from today

    const newUsersCountLast7Days = await Gameuser.countDocuments({
      createdAt: { $gte: sevenDaysAgo },
    });

    res.status(200).json({ newUsersCountLast7Days }); // Send the count as response
  } catch (err) {
    console.error("Error fetching new users count in the last 7 days:", err);
    res.status(500).json({ message: "Internal Server Error", error: err });
  }
});


module.exports = router;







