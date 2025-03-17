
const router =require("express").Router()
const TransactionData=require('../models/Transaction')
const Gameuser = require("../models/Gameuser");
router.get("/transactionData", async (req, res) => {
    try {
        const response = await TransactionData.find({}).limit(8000)
        // console.log(response);
        res.status(200).json(response);     
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error fetching data", error: err });
    }
});




// Create a new transaction entry
// router.post("/transactionData", async (req, res) => {
//     const { userId, amount, transactionType, purpose, status } = req.body;
  
//     if (!userId || !amount || !transactionType || !purpose) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }
  
//     try {
//       // Fetch the user data (assuming the user ID exists in GameUser model)
//       const user = await Gameuser.findById(userId);
//       if (!user) {
//         return res.status(404).json({ message: "User not found" });
//       }
  
//       // Create a new transaction document
//       const newTransaction = new TransactionData({
//         uid: userId,
//         amount,
//         transaction_type: transactionType,
//         purpose,
//         transaction_status: status, // Pending or Completed
//         userName: user.un, // Assuming 'un' is the username
//         mobile_no: user.mobile_no,
//         date: new Date(),
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         // Add any other fields you need, like deposit, bonus, winnings, etc.
//       });
  
//       // Save the transaction entry to the database
//       await newTransaction.save();
  
//       // If successful, return the transaction details
//       res.status(201).json({
//         message: "Transaction recorded successfully",
//         transaction: newTransaction,
//       });
//     } catch (err) {
//       console.error("Error creating transaction:", err);
//       res.status(500).json({ message: "Error creating transaction", error: err });
//     }
//   });





// Create a new transaction entry
router.post("/transactionData", async (req, res) => {
    const { userId, amount, transactionType, purpose, status } = req.body;
  
    if (!userId || !amount || !transactionType || !purpose) {
      return res.status(400).json({ message: "Missing required fields" });
    }
  
    try {
      // Fetch the user data (assuming the user ID exists in GameUser model)
      const user = await Gameuser.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Create a new transaction document
      const newTransaction = new TransactionData({
        uid: userId,
        amount,
        transaction_type: transactionType,
        purpose,
        transaction_status: status, // Pending or Completed
        userName: user.un, // Assuming 'un' is the username
        mobile_no: user.mobile_no,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        // Add any other fields you need, like deposit, bonus, winnings, etc.
      });
  
      // Save the transaction entry to the database
      await newTransaction.save();
  
      // If successful, return the transaction details with a 201 status code
      res.status(201).json({
        message: "Transaction recorded successfully",
        transaction: newTransaction,
      });
    } catch (err) {
      console.error("Error creating transaction:", err);
      res.status(500).json({ message: "Error creating transaction", error: err });
    }
  });


  // Route to fetch the most recent transaction
router.get("/latestTransaction", async (req, res) => {
    try {
      // Get the most recent transaction by sorting by the creation date (descending)
      const latestTransaction = await TransactionData.findOne().sort({ createdAt: -1 });
  
      if (!latestTransaction) {
        return res.status(404).json({ message: "No transactions found" });
      }
  
      // Return the latest transaction details
      res.status(200).json({
        message: "Latest transaction fetched successfully",
        transaction: latestTransaction,
      });
    } catch (err) {
      console.error("Error fetching latest transaction:", err);
      res.status(500).json({ message: "Error fetching latest transaction", error: err });
    }
  });
  
  
module.exports=router


