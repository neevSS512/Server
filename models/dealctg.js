const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dealCategorySchema = new Schema({
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
    deals: {
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
    online_player: {
		type: Number,
		default: 0
	},
	_isTur: {
		type: Boolean,
		default: false
	},
	play_store: {
		type: Boolean,
		default: false
	},
	leaderBoardScore: {
		type: Number,
		default: 0
	},
	winAmount: {
		type: Number,
		default: 1
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
	collection: 'deal_category'
});

const DealCategory = mongoose.model("DealCategory", dealCategorySchema);
module.exports = DealCategory;
