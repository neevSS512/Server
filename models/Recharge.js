const mongoose = require('mongoose');
const { Schema } = mongoose;

const rechargeSchema = new Schema({
  uid: { type: String, required: true },
  username: { type: String, required: true },
  clientTxnId: { type: String, required: true },
  sabpaisaTxnId: { type: String, required: true },
  orderId: { type: String, required: true },
  ue: { type: String, required: true },
  mobile_no: { type: String, required: true },
  amount: { type: Number, required: true },
  amountAfterGst: { type: Number, required: true },
  InclusiveGst: { type: Number, required: true },
  cgst: { type: Number, default: 0 },
  sgst: { type: Number, default: 0 },
  igst: { type: Number, required: true },
  channelld: { type: String, required: true },
  mcc: { type: Number, required: true },
  transDate: { type: Date, required: true },
  cd: { type: Date, required: true },
  cd_ist: { type: Date, required: true },
  previous_cash: { type: Number, required: true },
  previous_deposit_cash: { type: Number, required: true },
  previous_winning_cash: { type: Number, required: true },
  previous_bonus_cash: { type: Number, required: true },
  after_deposit_cash: { type: Number, required: true },
  after_cash: { type: Number, required: true },
  response: { type: Schema.Types.Mixed, required: true },
  couponcode: { type: String, default: "" },
  frontResponse: { type: Schema.Types.Mixed, required: true },
  txStatus: { type: String, required: true },
  errorResponce: { type: String, default: "" },
  transactionStatusString: { type: String, default: "PENDING" },
  sabpaisaCallback: { type: String, default: "" },
  pancardNo: { type: String, required: true },
  aadharNo: { type: String, required: true },
  state: { type: String, required: true },
  invoiceId: { type: String, required: true },
  offerReward: { type: Number, default: 0 },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true }
},
 { timestamps: true,
   collection:'payment-request'
  }
);

const Recharge = mongoose.model('Recharge', rechargeSchema);

module.exports = Recharge;
