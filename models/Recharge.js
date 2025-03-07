const mongoose = require('mongoose');
const { Schema } = mongoose;

const rechargeSchema = new Schema({
  uid: {
		type: String,
		default: ''
	},
    username: {
		type: String,
		default: ''
	},
    clientTxnId: {
		type: String,
		default: ''
	},
	sabpaisaTxnId: {
		type: String,
		default: ''
	},
	orderId: {
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
    amount: {
        type: Number,
        default: 0
    },
	amountAfterGst: {
		type: Number,
        default: 0
	},
	InclusiveGst: {
		type: Number,
        default: 0
	},
	cgst: {
		type: Number,
		default: 0
	},
	sgst: {
		type: Number,
		default: 0
	},
	igst: {
		type: Number,
		default: 0
	},
    channelld: {
		type: String,
		default: ''
	},
    mcc: {
		type: Number,
		default: 0
	},
    transDate: {
        type: Date,
        default: Date.now
    },
    cd: {
        type: Date,
        default: Date.now
    },
	cd_ist: {
        type: Date,
        default: Date.now
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
    after_deposit_cash: {
		type: Number,
		default: 0
	},
	after_cash: {
		type: Number,
		default: 0
	},
	response: {
		type: String,
		default: ''
	},
	couponcode: {
		type: String,
		default: ''
	},
	frontResponse: {
		type: String,
		default: ''
	},
	txStatus: {
		type: String,
		default: 'PENDING'
	},
	errorResponce: {
		type: String,
		default: ''
	},
	transactionStatusString: {
		type: String,
		default: 'PENDING'
	},
	sabpaisaCallback: {
		type: String,
		default: ''
	},
	pancardNo: {
		type: String,
		default: ''
	},
	aadharNo: {
		type: String,
		default: ''
	},
	state: {
		type: String,
		default: ''
	},
	invoiceId: {
		type: String,
		default: ''
	},
	offerReward: {
		type: Number,
		default: 0
	},
	type: {
		type: String,
		default: 'auto'
	}
}, {
	versionKey: false,
	timestamps: true,
	collection: 'payment_request'
});

const Recharge = mongoose.model('Recharge', rechargeSchema);

module.exports = Recharge;
