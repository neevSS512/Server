// const router = require("express").Router();
// const Gameuser = require("../models/Gameuser");

// router.get("/gameUsers",async(req,res)=>{
//     try{
//         const response=await Gameuser.find({})
//         // console.log(response)
//         res.status(200).json(response)     
//     }
//     catch(err){
//         console.log(err)
//         res.send(err)
//     }
// })

// module.exports = router



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


module.exports = router;
