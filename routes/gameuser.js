const router = require("express").Router();
const Gameuser = require("../models/Gameuser");

// Get all users
router.get("/gameUsers", async (req, res) => {
  try {

    const response = await Gameuser.find({}).limit(2000)
    // console.log(response)
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

// Update user data
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


// Get count of users created in the last 7 days
router.get("/newUsersCountLast7Days", async (req, res) => {
  try {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 1); // Subtract 7 days from today

    const newUsersCountLast7Days = await Gameuser.countDocuments({
      createdAt: { $gte: sevenDaysAgo },
    });

    res.status(200).json({ newUsersCountLast7Days }); // Send the count as response
  } catch (err) {
    console.error("Error fetching new users count in the last 7 days:", err);
    res.status(500).json({ message: "Internal Server Error", error: err });
  }
});







//for totalcash
router.patch("/gameUsers/:id", async (req, res) => {
  const { id } = req.params;
  const { deposit, Winning, Bonus } = req.body; 

  try {
    const user = await Gameuser.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }


    if (deposit) user.deposit = deposit;
    if (Winning) user.Winning = Winning;
    if (Bonus) user.Bonus = Bonus;

    // Calculate totalcash (sum of deposit, winnings, and bonus)
    user.totalcash = parseFloat(user.deposit) + parseFloat(user.Winning) + parseFloat(user.Bonus);

 
    await user.save();

    res.status(200).json({ message: "User updated successfully", user });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).send({ message: "Internal Server Error", error: err });
  }
});



module.exports = router;