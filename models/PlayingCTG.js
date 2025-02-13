const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playingCategorySchema = new Schema({
  entryFee: {
    type: Number,
    required: true
  },
  bonus: {
    type: Number,
    required: true
  },
  mode: {
    type: String,
    enum: ['cash', 'other_modes'],
    required: true
  },
  pCount: {
    type: Number,
    required: true
  },
  use_bot: {
    type: Boolean,
    required: true
  },
  reke: {
    type: Number,
    required: true
  },
  leaderBoardScore: {
    type: Number,
    default: 0
  },
  online_player: {
    type: Number,
    default: 0
  },
  _isTur: {
    type: Boolean,
    required: true
  },
  play_store: {
    type: Boolean,
    required: true
  },
  _ip: {
    type: Boolean,
    required: true
  },
  freeWinGame: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true,
  collection: 'playing_CTG'


});

// Create the model
const PlayingCategory = mongoose.model('PlayingCategory', playingCategorySchema);

module.exports = PlayingCategory;
