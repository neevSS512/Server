const mongoose = require('mongoose');

// Counter Schema
const counterSchema = new mongoose.Schema({
    hl: { type: Number, default: 0 },
    hw: { type: Number, default: 0 },
    ht: { type: Number, default: 0 },
    thp: { type: Number, default: 0 },
    paymnetcounter: { type: Number, default: 0 },
    withdrawCounter: { type: Number, default: 0 },
    dailyWithdrawCounter: { type: Number, default: 0 },
    dailyPaymnetcounter: { type: Number, default: 0 },
    totalTds: { type: Number, default: 0 },
    yearlywithdrawCounter: { type: Number, default: 0 },
    yearlyPaymnetcounter: { type: Number, default: 0 },
    tdsDeductedOnAmount: { type: Number, default: 0 },
    DepositLimitDaily: { type: Number, default: 0 },
    DepositLimitMonthly: { type: Number, default: 0 }
});

// Last Activity Schema
const lastSchema = new mongoose.Schema({
    ll: { type: Date, default: Date.now },
    ldi: { type: String, default: '' },
    lastFcmToken: { type: String, default: '' },
    lastWithdrawTime: { type: Date, default: Date.now },
    lastPayinTime: { type: Date, default: Date.now },
    updateDepositLimitDaily: { type: Date, default: Date.now },
    updateDepositLimitMonthly: { type: Date, default: Date.now }
});

// Flags Schema
const flagsSchema = new mongoose.Schema({
    _ir: { type: Number, default: 0 },
    _isBlock: { type: String, default: 'no' },
    _isBlockWithdraw: { type: Boolean, default: false },
    _isBlockDeposit: { type: Boolean, default: false },
    blockReamrk: { type: String, default: '' },
    _io: { type: Number, default: 0 },
    _isSound: { type: Boolean, default: true },
    _isMusic: { type: Boolean, default: true },
    _isVibration: { type: Boolean, default: true },
    _isfirstTimeDeposit: { type: Boolean, default: false }
});

// Main User Schema
const GameuserSchema = new mongoose.Schema({
    un: { type: String, default: '' },
    Id:{type:String,  required: true,unique:true, default: 0},
    UserName: {
        type: String,
        required: true,
        unique:true,
        trim:"true"
      },
      MobileNo: {
        type: String,
        required: true,
        unique:"true",
        minlength:[2,"minimum 10 digits"]
    },
    State:{
        type:String,
        required:true,
    },
    BlockRemarks:{
        type:String,
        required:true,
    },
    PaymentCounter:{
        type:String,
        required:true,
    },
    WithdrawCounter:{
        type:String,
        required:true,
    },
    unique_id: { type: Number, default: 0 },
    sck: { type: String, default: '' },
    facebookId: { type: String, default: '' },
    pp: { type: String, default: '0' },
    otp: { type: String, default: '' },
    ue: { type: String, default: '' },
    cd: { type: Date, default: Date.now },
    cd_ist: { type: Date, default: Date.now },
    det: { type: String, default: '' },
    ult: { type: String, default: 'guest' },
    psw: { type: String, default: '' },
    dids: { type: [String], default: [] },  // Using an array instead of an object
    fcmToken: { type: [String], default: [] },  // Using an array instead of an object
    filePath: { type: [String], default: [] },  // Using an array instead of an object
    filePath2: { type: [String], default: [] },  // Using an array instead of an object
    lfp: { type: String, default: '' },
    Chips: { type: Number, default: 0 },
    initalCash: { type: Number, default: 0 },
    totalcash: { type: Number, default: 0 },
    deposit: { type: Number, default: 0 },
    Bonus: { type: Number, default: 0 },
    Winning: { type: Number, default: 0 },
    counters: { type: counterSchema, default: {} },
    iv: { type: String, default: '' },
    av: { type: String, default: '' },
    rfc: { type: String, default: '' },
    rfl: { type: String, default: '' },
    s: { type: String, default: 'free' },
    flags: { type: flagsSchema, default: {} },
    lasts: { type: lastSchema, default: {} },
    tbid: { type: String, default: '' },
    isPanVerified: { type: Number, default: -1 },
    isAadharVerified: { type: Number, default: -1 },
    isBankVerified: { type: Number, default: -1 },
    isUPIVerified: { type: Number, default: -1 },
    isEmailVerified: { type: Number, default: -1 },
    isMobileVerified: { type: Number, default: -1 },
    isRedeemedRfc: { type: Number, default: -1 },
    beneIdUpi: { type: String, default: '' },
    user_kyc_name: { type: String, default: '' },
    panNumber: { type: String, default: '' },
    aadharNumber: { type: String, default: '' },
    bankAccount: { type: String, default: '' },
    version: { type: String, default: '' },
    state: { type: String, default: '' },
    city: { type: String, default: '' },
    withdrawMode: { type: String, default: '' },
    lockWithdraw: { type: Boolean, default: false },
    selfExcludeTime: { type: Date, default: Date.now },
    lockWithdrawDate: { type: Date, default: Date.now },
    otpCount: { type: Number, default: 0 },
    lockOtptime: { type: Date, default: Date.now },
    otpJobid: { type: String, default: '' },
    isexpire: { type: Boolean, default: false },
    referredRfc: { type: String, default: '' },
    refferdUserId: { type: String, default: '' },
    ReferalBonus: { type: Number, default: 0 },
    beneIdBank: { type: String, default: '' },
    carryforwardAmount: { type: Number, default: 0 },
    emailOtp: { type: String, default: '' },
    deleteAccount: { type: Boolean, default: false },
    lastGame: { type: String, default: '' },
    isShowTournament: { type: Boolean, default: true },
    canCovertPlayToCash: { type: Boolean, default: false },
    giveSpin: { type: Boolean, default: true },
    spinRewardIndex: { type: Number, default: -1 },
    spinReward: { type: Number, default: -1 },
    isParchaseLottery: { type: Boolean, default: false },
    giveThreeGameMission: { type: Boolean, default: true },
    last_mission: { type: Date, default: Date.now },
    giveInviteFriendMission: { type: Boolean, default: true },
    last_invitefriend_mission: { type: Date, default: Date.now },
    addCashMission: { type: Boolean, default: true },
    addCashMissionReward: { type: Number, default: 0 },
    last_addcash_mission: { type: Date, default: Date.now },
    giveBigGameMission: { type: Boolean, default: true },
    last_bigGame_mission: { type: Date, default: Date.now },
    BigGameMissionReward: { type: Number, default: 0 },
    giveAddFriendMission: { type: Boolean, default: true },
    last_addfriend_mission: { type: Date, default: Date.now },
    giveTournamentMission: { type: Boolean, default: true },
    last_tournament_mission: { type: Date, default: Date.now },
    tournamentMissionReward: { type: Number, default: -1 },
    giveCompleteAllMission: { type: Boolean, default: true },
    last_completeAll_mission: { type: Date, default: Date.now },
    giveLottery: { type: Boolean, default: true },
    scratchCardReward: { type: Number, default: -1 },
    level: {
         type: String,
         default: 'bronze',
         enum:["bronze","silver","gold","diamond"]
           },
    referalCount: { type: Number, default: 0 },
    totalReferalEarning: { type: Number, default: 0 },
    totalGameOfReferedUser: { type: Number, default: 0 },
    totalGameplayafterRefer: { type: Number, default: 0 },
    tour_type: { type: String, default: '' },
    isRegisterLudoTournament: { type: Boolean, default: false },
    isRegisterRummyTournament: { type: Boolean, default: false },
    isFacebookState: { type: Number, default: 1 }
}, {
    versionKey: false,
    timestamps: true,
    collection: 'game_users'
});

// Indexing the `unique_id` and `mobile_no` fields for faster queries
GameuserSchema.index({ unique_id: 1 });
GameuserSchema.index({ mobile_no: 1 });

module.exports = mongoose.model('users', GameuserSchema);
