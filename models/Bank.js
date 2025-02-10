const mongoose = require('mongoose');
const { Schema } = mongoose;

const bankVerificationSchema = new Schema({
    type: {
        type: String,
        required: true,
        enum: ['bank']
    },
    isVerified: {
        type: Boolean,
        required: true
    },
    uid: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User' 
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    verificationDetails: {
        accountHolderName: {
            type: String,
            required: true
        },
        accountNumber: {
            type: String,
            required: true
        },
        bankName: {
            type: String,
            default: '' 
        },
        IFSCCode: {
            type: String,
            required: true
        },
        upiID: {
            type: String,
            default: ''
        }
    },
    idNumber: {
        type: String,
        required: true
    },
    apiResponse: {
        type: String,
        required: true
    },
    isRejected: {
        type: Boolean,
        default: false
    },
    reason: {
        type: String,
        default: '' 
    },
    createdDateIST: {
        type: Date,
        required: true
    }
},
 { timestamps: true,
    collection:'bankData'

   }
);

const BankVerification = mongoose.model('BankVerificantion', bankVerificationSchema);

module.exports = BankVerification;
