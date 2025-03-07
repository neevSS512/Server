
const mongoose = require('mongoose');

// Main schema
const schema = mongoose.Schema({
//     action: {
//         type: String,
//         default: '',
//         required: true,
//     },
//     value: {
//         type: String,
//         default: '',
//         required: true, 
//     },
//     sDate: {
//         type: Date,
//         default:null,
//     },
//     eDate: {
//         type: Date,  
//         default: null,  
//     },
//     player: {
//         type: Object,  
//         default: {},    
//         required: false,  // It's now optional
//     },
//     bonus_type: {
//         type: String,
//         default: '',
//     },
//     increment_counter: {
//         type: Number,
//         default: 0,
//     },
//     final_counter: {
//         type: Number,
//         default: 0,
//     },
//     cash: {
//         type: Number,
//         default: 0,
//     },
//     state: {
//         type: [String],
//         default: [],
//     },
// },
// {
//     versionKey: false,
//     timestamps: true,
//     collection: 'game_configurations',
// });

action: {
    type: String,
    default: ''
},
value: {
    type: String,
    default: ''
},
sDate: {
    type: Date,
    default: Date.now
},
eDate: {
    type: String,
    default: ''
},
player: {
    type: Object,
    default: {}
},
bonus_type: {
    type: String,
    default: ''
},
increment_counter: {
    type: Number,
    default: 0
},
final_counter: {
    type: Number,
    default: 0
},
cash: {
    type: Number,
    default: 0
},
state: {
    type: Array,
    default: []
}
}, {
versionKey: false,
timestamps: true,
collection: 'game_configurations'
});

module.exports = mongoose.model('gameconfiguration', schema);
