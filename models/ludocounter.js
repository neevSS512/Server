const mongoose = require('mongoose');

const prizeDistributionSchema = new mongoose.Schema({
  rank: { type: Number, required: true },
  prizeRatio: { type: Number, required: true }
});

const ludocountergameSchema = new mongoose.Schema({
  entryFee: { type: String, required: true },
  bonus: { type: Number, required: true },
  type: { type: String, enum: ['CASH', 'OTHER'], required: true },
  botsAllowed: { type: Boolean, required: true },
  rake: { type: Number, required: true },
  allowedPlayer: { type: Number, required: true },
  online_player: { type: Number, required: true },
  prizeDistributionRatio: [prizeDistributionSchema],
  modeType: { type: String, required: true },
  targetScore: { type: Number, default: null },
  isdelete: { type: Number, default: 0 },
  _ip: { type: Boolean, required: true },
  gst: { type: Number, required: true },
  play_store: { type: Boolean, required: true },
  first_game: { type: Boolean, required: true },
  order: { type: Number, required: true },
  winAmount: { type: Number, default: 0 },
  // online_playerForTwo: { type: Number, required: true },
  leaderBoardScore: { type: Number, required: true },
  freeWinGame: { type: Boolean, required: true }
},
{
    timestamps: true,
    collection:'ludo_counter'
  }
);

const ludocounterGame = mongoose.model('ludocounterGame', ludocountergameSchema);

module.exports = ludocounterGame;
