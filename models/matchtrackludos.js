const mongoose = require('mongoose');

const matchTrackSchema = new mongoose.Schema({
    matchId: {
		type: String,
		default: ''
	},
    lobbyId: {
		type: String,
		default: ''
	},
	gameId: {
		type: Number,
		default: 0
	},
    entryFee: {
		type: Number,
		default: 0
	},
    playerCount: {
		type: Number,
		default: 0
	},
    cd: {
		type: Date,
		default: Date.now
	},
	cd_ist: {
        type: Date,
        default: Date.now
    },
    gameType: {
		type: String,
		default: ''
	},
    modeType: {
		type: String,
		default: ''
	},
    status: {
		type: String,
		default: ''
	},
    users: {
		type: Object,
		default: {}
	},
	usersIds: {
		type: Array,
		default: []
	},
    winnerIds: {
        type: Array,
		default: []
    },
	prizeDistributionRatio: {
		type: Object,
		default: {}
	},
	rake: {
		type: Number,
		default: 0
	},
	game: {
		type: String,
		default: ''
	},
	winAmount: {
		type: Number,
		default: 0
	},
	rakeAmount: {
		type: Number,
		default: 0
	},
	totalWinAmount: {
		type: Number,
		default: 0
	},
	refferalComission: {
		type: Number,
		default: 0
	},
	_ip: {
		type: Boolean,
		default: false
	},
	token: {
		type: String,
		default: ''
	},
	leaderBoardScore: {
		type: Number,
		default: 0
	},
	robotCount: {
		type: Number,
		default: 0
	},
	robotPlayingType: {
		type: String,
		default: ''
	},
	freeWinGame: {
		type: Boolean,
		default: false
	}
}, {
	versionKey: false,
	timestamps: true,
	collection: 'match_track'
});

const matchtrack = mongoose.model('matchtrack',matchTrackSchema);

module.exports = matchtrack;
