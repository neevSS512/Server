// const mongoose = require('mongoose');
// const { Schema } = mongoose;
// const kycSchema = new Schema(
//   {
//     image: {
//       type: String, 
//       required: true,
//     },
//     imageBack: {
//       type: String, 
//     },
//     phn:{
//       type:String,
//       required:true,
//       unique:true,
//     },
//     id:{
//       type:String,
//       required:true
//     },
//     type: {
//       type: String,
//       enum: ['pan', 'aadhar'], // Either PAN or Aadhar card
//       required: true,
//     },
//     isVerified: {
//       type: Boolean, 
//       required: true,
//     },
//     uid: {
//       type: Schema.Types.ObjectId, 
//       required: true,
//     },
//     cd: {
//       type: Date,
//       default: Date.now,
//     },
//     reason: {
//       type: String,
//     },
//     isRejected: {
//       type: Boolean,
//       default: false,
//     },
//     // This can contain either PAN-specific or Aadhar-specific data depending on `type`
//     details: {
//       // Common fields
//       name_on_card: {
//         type: String,
//         required: true,
//       },
//       id_number: {
//         type: String, // PAN or Aadhar number
//         required: true,
//       },
//       is_scanned: {
//         type: Boolean,
//         default: false,
//       },
//       // Fields specific to PAN
//       panDetails: {
//         // Only relevant if `type` is 'pan'
//         age: {
//           type: Number,
//         },
//         date_of_birth: {
//           type: Date,
//         },
//         date_of_issue: {
//           type: Date,
//         },
//         fathers_name: {
//           type: String,
//         },
//         minor: {
//           type: Boolean,
//           default: false,
//         },
//         pan_type: {
//           type: String, // Individual or other types of PAN
//         },
//       },
//       // Fields specific to Aadhar
//       aadharDetails: {
//         // Only relevant if `type` is 'aadhar'
//         address: {
//           type: String,
//         },
//         district: {
//           type: String,
//         },
//         fathers_name: {
//           type: String,
//         },
//         gender: {
//           type: String,
//         },
//         house_number: {
//           type: String,
//         },
//         pincode: {
//           type: String,
//         },
//         state: {
//           type: String,
//         },
//         street_address: {
//           type: String,
//         },
//         year_of_birth: {
//           type: String, 
//         },
//       },
//     },
//     apiResponce: {
//       type: String,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//     },
//     updatedAt: {
//       type: Date,
//       default: Date.now,
//     },
//     cd_ist: {
//       type: Date, 
//       default: Date.now,
//     },
//   },
//   {
//     timestamps: true,
//     collection:'kycData'
//   }
// );


// const KYC = mongoose.model('KYC', kycSchema);

// module.exports = KYC;












const mongoose = require('mongoose');
const { Schema } = mongoose;

const kycSchema = new Schema(
  {
    image: {
      type: String,
      default: ''
    },
    imageBack: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    isVerify: {
      type: Number,
      default: 0
    },
    uid: {
      type: mongoose.Schema.Types.ObjectId,
      default: ''
    },
    cd: {
      type: Date,
      default: Date.now
    },
    cd_ist: {
      type: Date,
      default: Date.now
    },
    reason: {
      type: String,
      default: ''
    },
    isRejected: {
      type: Number,
      default: 0
    },
    details: {
      type: Object,
      default: {}
    },
    id_number: {
      type: String,
      default: ''
    },
    apiResponce: {
      type: String,
      default: ''
    },
    session_id: {
      type: String,
      default: ''
    },
    captcha: {
      type: String,
      default: ''
    }
  },
  {
    versionKey: false,
    timestamps: true,
    collection: 'user_documents'
  }
);

const KYC = mongoose.model('KYC', kycSchema);

module.exports = KYC;
