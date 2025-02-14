
const router = require("express").Router();
const poolGame = require("../models/poolctgGame");

router.get("/poolctgData", async (req, res) => {
  try {
    const response = await poolGame.find({});
    console.log(response);
    res.status(200).json(response); 
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch game data", error: err });
  }
});

module.exports = router;
