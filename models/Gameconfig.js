// const mongoose = require('mongoose');

// // Player schema
// const playerSchema = mongoose.Schema({
//     name: { type: String, required: true },
//     id: { type: String, required: true },
// });

// // Main schema
// const schema = mongoose.Schema({
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
//         default: Date.now,
//         required: true, 
//     },
//     eDate: {
//         type: Date,  
//         default: null,  
//     },
//     player: {
//         type: playerSchema, 
//         default: {},
//         required: true,  
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
//         type: [String],  // If it's an array of strings (e.g., states or statuses), define it clearly
//         default: [],
//     },
// },
// {
//     versionKey: false,
//     timestamps: true,  // Automatically adds createdAt and updatedAt
//     collection: 'game_configurations',
// });

// module.exports = mongoose.model('gameconfiguration', schema);

const mongoose = require('mongoose');

// Main schema
const schema = mongoose.Schema({
    action: {
        type: String,
        default: '',
        required: true,
    },
    value: {
        type: String,
        default: '',
        required: true, 
    },
    sDate: {
        type: Date,
        default:null,
    },
    eDate: {
        type: Date,  
        default: null,  
    },
    player: {
        type: Object,  
        default: {},    
        required: false,  // It's now optional
    },
    bonus_type: {
        type: String,
        default: '',
    },
    increment_counter: {
        type: Number,
        default: 0,
    },
    final_counter: {
        type: Number,
        default: 0,
    },
    cash: {
        type: Number,
        default: 0,
    },
    state: {
        type: [String],
        default: [],
    },
},
{
    versionKey: false,
    timestamps: true,
    collection: 'game_configurations',
});

module.exports = mongoose.model('gameconfiguration', schema);
