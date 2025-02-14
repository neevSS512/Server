const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const snakePlayingCategorySchema = new Schema({
  entryFee: { type: String, required: true },  // Entry fee (stored as string)
  bonus: { type: Number, required: true },  // Bonus associated with the category
  type: { 
    type: String, 
    enum: ['CASH', 'other_types'], 
    required: true 
  },  // Type of category (e.g., 'CASH', 'other_types')
  botsAllowed: { type: Boolean, required: true },  // Whether bots are allowed
  rake: { type: Number, required: true },  // Rake value for the category
  allowedPlayer: { type: Number, required: true },  // Number of players allowed in the game
  online_player: { type: Number, required: true },  // Number of online players
  prizeDistributionRatio: [{
    rank: { type: Number, required: true },  // Rank for prize distribution
    prizeRatio: { type: Number, required: true }  // Prize ratio for the rank
  }],
  modeType: { 
    type: String, 
    enum: ['score', 'other_modes'], 
    required: true 
  },  // Mode type (e.g., 'score', 'other_modes')
  targetScore: { type: Number, default: null },  // Target score for the game (nullable)
  isdelete: { type: Number, required: true },  // Deletion status (0 or 1)
  _ip: { type: Boolean, required: true },  // IP-related flag
  gst: { type: Number, required: true },  // GST percentage for the category
  play_store: { type: Boolean, required: true },  // Whether it’s linked to the Play Store
  first_game: { type: Boolean, required: true },  // Whether it’s the first game
  order: { type: Number, required: true },  // Order or sequence of the category
  winAmount: { type: Number, required: true },  // Amount to win
  online_playerForTwo: { type: Number, required: true },  // Online players for the two-player game
  leaderBoardScore: { type: Number, required: true },  // Leaderboard score
  freeWinGame: { type: Boolean, required: true },  // Whether free wins are allowed
}, {
  timestamps: true,  // Automatically add createdAt and updatedAt fields
  collection: 'snake_playing_category'  // Collection name
});

const SnakePlayingCategory = mongoose.model("SnakePlayingCategory", snakePlayingCategorySchema);
module.exports = SnakePlayingCategory;
