
const router =require("express").Router()
const TransactionData=require('../models/Transaction')
const Gameuser = require("../models/Gameuser");
router.get("/transactionData", async (req, res) => {
    try {
        const response = await TransactionData.find({}).limit(12000)
        // console.log(response);
        res.status(200).json(response);     
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error fetching data", error: err });
    }
});


  router.get("/transactionData/:mobile_no", async (req, res) => {
    const { mobile_no } = req.params;
    
    try {
        // Find all transactions where the mobile_no matches
        const transactions = await TransactionData.find({ mobile_no: mobile_no });
  
        if (transactions.length === 0) {
            return res.status(404).json({ message: "No transactions found for this user." });
        }
  
     
        res.status(200).json(transactions);
    } catch (err) {
     
        console.error("Error fetching transactions for mobile_no:", mobile_no, err);
        res.status(500).json({ message: "Error fetching transaction data", error: err.message });
    }
  });




  


  router.post("/createTransaction", async (req, res) => {
    const {
      uid, tbid, un, ue, mobile_no, amount, 
      deposit_amount, winning_amount, bonus_amount, 
      previous_cash,previous_deposit_cash,previous_winning_cash,previous_bonus_cash,transection_purpose,current_total_cash,updated_deposit_cash,updated_winning_cash,updated_bonus_cash
      ,contact_support,transaction_status, gameState, paid_tds, tds
    } = req.body;
  
    try {
      // Initialize variables to 0 by default
      let updatedDeposit = 0;
      let updatedWinning = 0;
      let updatedBonus = 0;
  
      // Logic to update only the selected type, and reset the others to 0
      if (transection_purpose === "deposit") {
        updatedDeposit = parseFloat(amount);  // Update deposit_amount to the added amount
        updatedWinning = 0;  // Reset winnings to 0
        updatedBonus = 0;    // Reset bonus to 0
      } else if (transection_purpose === "winnings") {
        updatedDeposit = 0;  
        updatedWinning = parseFloat(amount);  // Update winning_amount to the added amount
        updatedBonus = 0;    
      } else if (transection_purpose === "bonus") {
        updatedDeposit = 0; 
        updatedWinning = 0;  
        updatedBonus = parseFloat(amount);  // Update bonus_amount to the added amount
      }
  
      // Calculate the new total cash value
      // const newTotalCash = updatedDeposit + updatedWinning + updatedBonus;
      // const newTotalCash = updatedDeposit + updatedWinning + updatedBonus+previous_cash;
  
      // Create a new transaction entry
      const newTransaction = new TransactionData({
        uid,
        tbid,
        un,
        ue,
        mobile_no,
        amount,
        deposit_amount: updatedDeposit,
        winning_amount: updatedWinning,
        bonus_amount: updatedBonus,
        previous_cash,
        previous_deposit_cash,
        previous_winning_cash,
        previous_bonus_cash,
        transection_purpose,
        current_total_cash,
        updated_deposit_cash,
        updated_winning_cash,
        updated_bonus_cash,
        contact_support,
        transaction_status,
        gameState,
        paid_tds,
        tds
      });
  
      // Save the new transaction entry to the database
      const savedTransaction = await newTransaction.save();
  
      res.status(201).json({ message: "Transaction created successfully", savedTransaction });
    } catch (err) {
      console.error("Error creating transaction:", err);
      res.status(500).json({ message: "Error creating transaction", error: err.message });
    }
  });
  


  //create a new transaction entry
  // router.post("/createTransaction", async (req, res) => {
  //   const {
  //     uid, tbid, un, ue, mobile_no, amount, 
  //     deposit_amount, winning_amount, bonus_amount, 
  //     previous_cash, transection_purpose, current_total_cash,
  //     transaction_status, gameState, paid_tds, tds
  //   } = req.body;
  
  //   try {
  //     // Create a new transaction entry
  //     const newTransaction = new TransactionData({
  //       uid,
  //       tbid,
  //       un,
  //       ue,
  //       mobile_no,
  //       amount,
  //       deposit_amount,
  //       winning_amount,
  //       bonus_amount,
  //       previous_cash,
  //       transection_purpose,
  //       current_total_cash,
  //       transaction_status,
  //       gameState,
  //       paid_tds,
  //       tds
  //     });
  
  //     // Save the new transaction entry to the database
  //     const savedTransaction = await newTransaction.save();
  
  //     res.status(201).json({ message: "Transaction created successfully", savedTransaction });
  //   } catch (err) {
  //     console.error("Error creating transaction:", err);
  //     res.status(500).json({ message: "Error creating transaction", error: err.message });
  //   }
  // });
  



module.exports=router























