const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ludoPlayingCategorySchema = new Schema({
  entryFee: { type: String, required: true },  
  bonus: { type: Number, required: true },  
  type: { 
    type: String, 
    enum: ['CASH', 'other_types'], 
    required: true 
  }, 
  botsAllowed: { type: Boolean, required: true }, 
  rake: { type: Number, required: true },  
  allowedPlayer: { type: Number, required: true },  
  online_player: { type: Number, required: true },
  prizeDistributionRatio: [{
    rank: { type: Number, required: true }, 
    prizeRatio: { type: Number, required: true } 
  }],
  modeType: { 
    type: String, 
    enum: ['counter', 'other_modes'], 
    required: true 
  },  // Type of mode (e.g., 'counter', 'other_modes')
  targetScore: { type: Number, default: null }, 
  isdelete: { type: Number, required: true }, 
  _ip: { type: Boolean, required: true }, 
  gst: { type: Number, required: true },  
  play_store: { type: Boolean, required: true },
  first_game: { type: Boolean, required: true }, 
  order: { type: Number, required: true },  
  winAmount: { type: Number, required: true },  
  leaderBoardScore: { type: Number, required: true },
  _isTur: { type: Boolean, required: true },  
  freeWinGame: { type: Boolean, required: true }, 
}, {
  timestamps: true, 
  collection: 'ludo_playing_category' 
});

const LudoPlayingCategory = mongoose.model("LudoPlayingCategory", ludoPlayingCategorySchema);
module.exports = LudoPlayingCategory;
