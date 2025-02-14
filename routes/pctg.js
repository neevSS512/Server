
const router = require("express").Router();
const Game = require("../models/playingctgGame");

router.get("/ctgData", async (req, res) => {
  try {
    const response = await Game.find({});
    console.log(response);
    res.status(200).json(response); 
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch game data", error: err });
  }
});

module.exports = router;
