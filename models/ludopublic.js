const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ludopublicSchema = new Schema({
    entryFee: {
		type: String,
		default: ''
	},
    bonus: {
		type: Number,
		default: 0
	},
    type: {
		type: String,
		default: ''
	},
    botsAllowed: {
		type: Boolean,
		default: false
	},
    rake: {
		type: Number,
		default: ''
	},
    allowedPlayer: {
		type: Number,
		default: 0
	},
    online_player: {
		type: Number,
		default: 0
	},
    prizeDistributionRatio: {
        type: Object,
		default: []
    },
	modeType: {
		type: String,
		default: ''
	},
	targetScore: {
		type: Number,
		default: 0
	},
	_ip: {
		type: Boolean,
		default: false
	},
	_isTur: {
		type: Boolean,
		default: false
	},
	gst: {
		type: Number,
		default: 0
	},
	play_store: {
		type: Boolean,
		default: false
	},
	order: {
		type: Number,
		default: 1
	},
	winAmount: {
		type: Number,
		default: 1
	},
	leaderBoardScore: {
		type: Number,
		default: 0
	},
	freeWinGame: {
		type: Boolean,
		default: false
	}
}, {
	versionKey: false,
	timestamps: true,
	collection: 'ludo_playing_category'
});


const ludopublicGame = mongoose.model('ludopublicGame', ludopublicSchema);

module.exports = ludopublicGame;
