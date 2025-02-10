// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const kycSchema = new Schema({
//     image: {
//         type: String, 
//         required: true
//     },
//     imageBack: {
//         type: String,
//         default: ""
//     },
//     type: {
//         type: String,
//         required: true
//     },
//     isVerify: {
//         type: Number,
//         required: true
//     },
//     uid: {
//         type: Schema.Types.ObjectId,
//         required: true,
//         ref: 'User' 
//     },
//     cd: {
//         type: Date,
//         required: true
//     },
//     reason: {
//         type: String, 
//         default: ""
//     },
//     isRejected: {
//         type: Number, 
//         required: true
//     },
//     details: {
//         age: {
//             type: Number, 
//             required: true
//         },
//         date_of_birth: {
//             type: Date,
//             required: true
//         },
//         date_of_issue: {
//             type: Date, 
//             default: ""
//         },
//         fathers_name: {
//             type: String, 
//             required: true
//         },
//         id_number: {
//             type: String, 
//             required: true
//         },
//         is_scanned: {
//             type: Boolean, 
//             required: true
//         },
//         minor: {
//             type: Boolean, 
//             required: true
//         },
//         name_on_card: {
//             type: String,
//             required: true
//         },
//         pan_type: {
//             type: String, 
//             required: true
//         }
//     },
//     id_number: {
//         type: String,
//         required: true
//     },
//     apiResponce: {
//         type: String, 
//         required: true
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     },
//     updatedAt: {
//         type: Date, 
//         default: Date.now
//     },
//     cd_ist: {
//         type: Date, 
//         required: true
//     }
// },
// { timestamps: true,
//   collection:'kycData'

//  }
// );

// const KYC = mongoose.model('KYC', kycSchema);

// module.exports = KYC;


const mongoose = require('mongoose');
const { Schema } = mongoose;
const kycSchema = new Schema(
  {
    image: {
      type: String, 
      required: true,
    },
    imageBack: {
      type: String, 
    },
    type: {
      type: String,
      enum: ['pan', 'aadhar'], // Either PAN or Aadhar card
      required: true,
    },
    isVerify: {
      type: Boolean, 
      required: true,
    },
    uid: {
      type: Schema.Types.ObjectId, 
      required: true,
    },
    cd: {
      type: Date,
      default: Date.now,
    },
    reason: {
      type: String,
    },
    isRejected: {
      type: Boolean,
      default: false,
    },
    // This can contain either PAN-specific or Aadhar-specific data depending on `type`
    details: {
      // Common fields
      name_on_card: {
        type: String,
        required: true,
      },
      id_number: {
        type: String, // PAN or Aadhar number
        required: true,
      },
      is_scanned: {
        type: Boolean,
        default: false,
      },
      // Fields specific to PAN
      panDetails: {
        // Only relevant if `type` is 'pan'
        age: {
          type: Number,
        },
        date_of_birth: {
          type: Date,
        },
        date_of_issue: {
          type: Date,
        },
        fathers_name: {
          type: String,
        },
        minor: {
          type: Boolean,
          default: false,
        },
        pan_type: {
          type: String, // Individual or other types of PAN
        },
      },
      // Fields specific to Aadhar
      aadharDetails: {
        // Only relevant if `type` is 'aadhar'
        address: {
          type: String,
        },
        district: {
          type: String,
        },
        fathers_name: {
          type: String,
        },
        gender: {
          type: String,
        },
        house_number: {
          type: String,
        },
        pincode: {
          type: String,
        },
        state: {
          type: String,
        },
        street_address: {
          type: String,
        },
        year_of_birth: {
          type: String, 
        },
      },
    },
    apiResponce: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    cd_ist: {
      type: Date, 
      default: Date.now,
    },
  },
  {
    timestamps: true,
    collection:'kycData'
  }
);


const KYC = mongoose.model('KYC', kycSchema);

module.exports = KYC;
