// const router = require("express").Router();
// const BankVerification = require("../models/Bank");

// router.get("/bankData",async(req,res)=>{
//     try{
//         const response=await BankVerification.find({})
//         console.log(response)
//         res.status(200).json(response)     
//     }
//     catch(err){
//         console.log(err)
//         res.send(err)
//     }
// })

// module.exports = router



const router = require("express").Router();
const BankVerification = require("../models/Bank");

router.get("/bankData", async (req, res) => {
    try {
        const response = await BankVerification.find({});
        
        console.log("Fetched bank data:", response);
        if (response.length === 0) {
            return res.status(404).json({ message: "No bank data found" });
        }
        
        res.status(200).json(response);
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).json({ message: "Internal Server Error", error: err });
    }
});

module.exports = router;
