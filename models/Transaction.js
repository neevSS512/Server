const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new Schema({
  uid: {
    type: Schema.Types.ObjectId,
    required: true
  },
  tbid: {
    type: String,
    required: true
  },
  un: {
    type: String,
    required: true
  },
  ue: {
    type: String,
    default: ""
  },
  mobile_no: {
    type: String,
    required: true
  },
  _ir: {
    type: Number,
    default: 1
  },
  amount: {
    type: Number,
    required: true
  },
  deposit_amount: {
    type: Number,
    default: 0
  },
  winning_amount: {
    type: Number,
    required: true
  },
  bonus_amount: {
    type: Number,
    default: 0
  },
  previous_cash: {
    type: Number,
    required: true
  },
  previous_deposit_cash: {
    type: Number,
    default: 0
  },
  previous_winning_cash: {
    type: Number,
    required: true
  },
  previous_bonus_cash: {
    type: Number,
    default: 0
  },
  transection_purpose: {
    type: String,
    required: true
  },
  current_total_cash: {
    type: Number,
    required: true
  },
  updated_deposit_cash: {
    type: Number,
    default: 0
  },
  updated_winning_cash: {
    type: Number,
    required: true
  },
  updated_bonus_cash: {
    type: Number,
    default: 0
  },
  contact_support: {
    type: Boolean,
    default: true
  },
  transaction_status: {
    type: String,
    required: true
  },
  gameState: {
    type: String,
    default: ""
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
  cd_ist: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: ""
  },
  rfc: {
    type: String,
    default: ""
  },
  robotCount: {
    type: Number,
    default: 1
  },
  dt: {
    totalEntryFee: {
      type: String,
      required: true
    },
    totalWinning: {
      type: String,
      required: true
    },
    oponanatMobileNumber: {
      type: String,
      required: true
    },
    decidePlayType: {
      type: String,
      required: true
    },
    finaldecidePlayType: {
      type: String,
      required: true
    },
    totalCashOfRobot: {
      type: Number,
      required: true
    },
    botWalletPercentage: {
      type: Number,
      required: true
    },
    playingType: {
      type: String,
      required: true
    },
    rid: {
      type: Number,
      default: 1
    },
    win: {
      type: Boolean,
      default: false
    }
  },
  rid: {
    type: Number,
    default: 0
  },
  cd: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
},
{
     timestamps: true,
    collection:'transaction'
}
);

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
