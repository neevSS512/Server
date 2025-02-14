const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const snakepublicSchema = new Schema({
    entryFee: { type: String, required: true },
    bonus: { type: Number, required: true },
    type: { type: String, required: true },
    botsAllowed: { type: Boolean, required: true },
    rake: { type: Number, required: true },
    allowedPlayer: { type: Number, required: true },
    online_player: { type: Number, default: 0 },
    prizeDistributionRatio: [
        {
            rank: { type: Number, required: true },
            prizeRatio: { type: Number, required: true },
        }
    ],
    modeType: { type: String, required: true },
    targetScore: { type: Schema.Types.Mixed, default: null }, // Can be null or any value
    isdelete: { type: Number, required: true, default: 0 },
    _ip: { type: Boolean, default: false },
    gst: { type: Number, required: true },
    play_store: { type: Boolean, default: false },
    first_game: { type: Boolean, default: false },
    order: { type: Number, required: true },
    winAmount: { type: Number, required: true, default: 0 },
    leaderBoardScore: { type: Number, required: true },
    freeWinGame: { type: Boolean, default: false },

},
{
    timestamps: true,
    collection:'snake_public'
  }

);

const snakepublicGame = mongoose.model('snakepublicGame', snakepublicSchema);

module.exports = snakepublicGame;
