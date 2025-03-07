const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const withdrawSchema = new Schema({

  Id:{
    type:String,
    required:true
  },
  uid: {
    type: String,
    required: true
  },
  beneId: {
    type: String,
    required: true
  },
  un: {
    type: String,
    required: true
  },
  ue: {
    type: String,
    required: true
  },
  phn: {
    type: String,
    required: true,
    unique:true
  },
  bankAccount: {
    type: String,
    required: true
  },
  bank: {
    type: String,
    required: true
  },
  ifsc: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  tds: {
    type: Number,
    required: true
  },
  amountAfterTDS: {
    type: Number,
    required: true
  },
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  vpa: {
    type: String,
    default: ''
  },
  transferid: {
    type: String,
    required: true
  },
  txnRefNo: {
    type: String,
    default: ''
  },
  payoutId: {
    type: String,
    default: ''
  },
  transfermode: {
    type: String,
    required: true
  },
  cd: {
    type: Date,
    required: true
  },
  cd_ist: {
    type: Date,
    required: true
  },
  isPanVerified: {
    type: Boolean,
    required: true
  },
  previous_cash: {
    type: Number,
    required: true
  },
  previous_winning_cash: {
    type: Number,
    required: true
  },
  after_winning_cash: {
    type: Number,
    required: true
  },
  updated_cash: {
    type: Number,
    required: true
  },
  withdrawCounter: {
    type: Number,
    required: true
  },
  lastWithdrawTime: {
    type: Date,
    required: true
  },
  lastPayinTime: {
    type: Date,
    required: true
  },
  amountOnTdsDeduct: {
    type: Number,
    required: true
  },
  transactionResponce: {
    type: String,
    default: ''
  },
  pancardNo: {
    type: String,
    required: true
  },
  aadharNo: {
    type: String,
    required: true
  },
  response: {
    type: String,
    default: ''
  },
  totalPayin: {
    type: Number,
    default: 0
  },
  totalPayout: {
    type: Number,
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
{ timestamps: true,
  collection:'withdraw_request'
 }
);
const Withdraw = mongoose.model('Withdraw', withdrawSchema);

module.exports = Withdraw;
