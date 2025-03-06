// // In your game model (Game.js)
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const gameSchema = new Schema({
//   // _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
//   entryFee: { type: Number, required: true },  
//   reke: { type: Number, required: true }, 
//   pCount:{type:Number,required:true},
//   mode: { 
//     type: String, 
//     enum: ['cash', 'other_modes', 'online'],
//     required: true 
//   },  
//   use_bot: { type: Boolean, required: true }, 
//   bonus: { type: Number, required: true }, 
//   online_player: { type: Number, required: true },  
//   leaderBoardScore: { type: Number, required: true },  
//   play_store: { type: Boolean, required: true }, 
//   _ip: { type: Boolean, required: true }, 
//   freeWinGame: { type: Boolean, required: true },  
// },
//  {
//    timestamps: true,
//   collection: 'playingctg' 
// });

// const Game = mongoose.model("Game", gameSchema);
// module.exports = Game;








// In your game model (Game.js)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  entryFee: {
		type: Number,
		default: 0
	},
    bonus: {
		type: Number,
		default: 0
	},
    mode: {
		type: String,
		default: ''
	},
    pCount: {
		type: Number,
		default: 0
	},
    reke: {
		type: Number,
		default: 0
	},
    use_bot: {
		type: Boolean,
		default: false
	},
	_isTur: {
		type: Boolean,
		default: false
	},
	play_store: {
		type: Boolean,
		default: false
	},
    online_player: {
		type: Number,
		default: 0
	},
	leaderBoardScore: {
		type: Number,
		default: 0
	},
	_ip: {
		type: Boolean,
		default: false
	},
	freeWinGame: {
		type: Boolean,
		default: false
	}
}, {
	versionKey: false,
	timestamps: true,
	collection: 'playing_category'
});

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
