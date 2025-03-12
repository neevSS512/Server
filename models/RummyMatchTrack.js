







const mongoose = require('mongoose');

const rummyMatchTrackSchema = new mongoose.Schema({
    matchId: {
        type: String,
        default: ''
    },
    roundId: {
        type: Number,
        default: 0
    },
    gameId: {
        type: Number,
        default: 0
    },
    lobbyId: {
        type: String,
        default: ''
    },
    entryFee: {
        type: Number,
        default: 0
    },
    playerCount: {
        type: Number,
        default: 0
    },
    robotCount: {
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
    deals: {
        type: Number,
        default: 0
    },
    totalPoints: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: ''
    },
    users: {
        type: Object,
        default: {}
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
    totalPlayer: {
        type: Number,
        default: 0
    },
    winnerMobileNo: {
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
        type: String,
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
    collection: 'rummy_match_track'
    });
    
    


const rummymatchtrack = mongoose.model('rummymatchtrack',rummyMatchTrackSchema);

module.exports = rummymatchtrack;
