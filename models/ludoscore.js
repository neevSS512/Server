// const mongoose = require('mongoose');

// const prizeDistributionSchema = new mongoose.Schema({
//   rank: { type: Number, required: true },
//   prizeRatio: { type: Number, required: true }
// });

// const ludoscorePlayingCategorySchema = new mongoose.Schema({
//   entryFee: { type: String, required: true },
//   bonus: { type: Number, required: true },
//   type: { type: String, enum: ['CASH', 'OTHER',], required: true },
//   botsAllowed: { type: Boolean, required: true },
//   rake: { type: Number, required: true },
//   allowedPlayer: { type: Number, required: true },
//   online_player: { type: Number, required: true },
//   prizeDistributionRatio: [prizeDistributionSchema],
//   modeType: { type: String, required: true },
//   targetScore: { type: Number, default: null },
//   isdelete: { type: Number, default: 0 },
//   _ip: { type: Boolean, required: true },
//   gst: { type: Number, required: true },
//   play_store: { type: Boolean, required: true },
//   first_game: { type: Boolean, required: true },
//   order: { type: Number, required: true },
//   winAmount: { type: Number, default: 0 },
//   online_playerForTwo: { type: Number, required: true },
//   leaderBoardScore: { type: Number, required: true },
//   freeWinGame: { type: Boolean, required: true }
// }
// ,
// {
//     timestamps: true,
//     collection:'ludo_score'
//  }


// );

// const ludoscore = mongoose.model('ludoscore', ludoscorePlayingCategorySchema);

// module.exports = ludoscore;










const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ludoscorePlayingCategorySchema = new mongoose.Schema({
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
    winAmount: { type: Number, required: true },
    leaderBoardScore: { type: Number, required: true },
    freeWinGame: { type: Boolean, default: false },

},
{
    timestamps: true,
    collection:'ludo_score'
  }

);

const ludoscore = mongoose.model('ludoscore', ludoscorePlayingCategorySchema);

module.exports = ludoscore;

