// In your game model (Game.js)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  // _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
  entryFee: { type: Number, required: true },  
  reke: { type: Number, required: true }, 
  pCount:{type:Number,required:true},
  mode: { 
    type: String, 
    enum: ['cash', 'other_modes', 'online'],
    required: true 
  },  
  use_bot: { type: Boolean, required: true }, 
  bonus: { type: Number, required: true }, 
  online_player: { type: Number, required: true },  
  leaderBoardScore: { type: Number, required: true },  
  play_store: { type: Boolean, required: true }, 
  _ip: { type: Boolean, required: true }, 
  freeWinGame: { type: Boolean, required: true },  
},
 {
   timestamps: true,
  collection: 'playingctg' 
});

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
