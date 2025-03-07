const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ludoPlayingCategorySchema = new Schema({
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
const LudoPlayingCategory = mongoose.model("LudoPlayingCategory", ludoPlayingCategorySchema);
module.exports = LudoPlayingCategory;
