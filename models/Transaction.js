

const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new Schema({
    uid: {
		type: mongoose.Schema.Types.ObjectId,
		default: ''
	},
    tbid: {
		type: String,
		default: ''
	},
    un: {
		type: String,
		default: ''
	},
    ue: {
		type: String,
		default: ''
	},
    mobile_no: {
		type: String,
		default: ''
	},
    _ir: {
		type: Number,
		default: 0
	},
    amount: {
		type: Number,
		default: 0
	},
    deposit_amount: {
		type: Number,
		default: 0
	},
    winning_amount: {
		type: Number,
		default: 0
	},
    bonus_amount: {
		type: Number,
		default: 0
	},
    previous_cash: {
		type: Number,
		default: 0
	},
    previous_deposit_cash: {
		type: Number,
		default: 0
	},
    previous_winning_cash: {
		type: Number,
		default: 0
	},
    previous_bonus_cash: {
		type: Number,
		default: 0
	},
    transection_purpose: {
		type: String,
		default: ''
	},
    current_total_cash: {
		type: Number,
		default: 0
	},
    updated_deposit_cash: {
		type: Number,
		default: 0
	},
    updated_winning_cash: {
		type: Number,
		default: 0
	},
    updated_bonus_cash: {
		type: Number,
		default: 0
	},
    contact_support: {
        type: Boolean,
        default: false
    },
    transaction_status: {
		type: String,
		default: ''
	},
    gameState: {
        type: String,
		default: ''
    },
    paid_tds: {
        type: Number,
		default: 0
    },
    tds: {
        type: Number,
		default: 0
    },
    tds_track: {
        type: Boolean,
        default: false
    },
    cd: {
		type: Date,
		default: Date.now
	},
	cd_ist: {
        type: Date,
        default: Date.now
    },
	time: {
		type: String,
		default: ''
	},
	date: {
		type: String,
		default: ''
	},
	rfc: {
		type: String,
		default: ''
	},
	robotCount: {
		type: Number,
		default: 0
	},
	dt: {
		type: Object,
		default: {}
	},
	rid: {
		type: Number,
		default: 0
	}
}, {
	versionKey: false,
	timestamps: true,
	collection: 'transaction'
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;


