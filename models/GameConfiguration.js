const mongoose = require('mongoose');

// Define the player schema if you know the structure
const playerSchema = mongoose.Schema({
    name: { type: String, required: true },
    id: { type: String, required: true },
    // Other fields for player, depending on your needs
});

// Main schema
const schema = mongoose.Schema({
    action: {
        type: String,
        default: '',
        required: true,  // Add validation if necessary
    },
    value: {
        type: String,
        default: '',
        required: true,  // Add validation if necessary
    },
    sDate: {
        type: Date,
        default: Date.now,
        required: true,  // It's better to explicitly specify required fields
    },
    eDate: {
        type: Date,  // If eDate is a date, use Date type instead of String
        default: null,  // Make it null by default if it might be optional
    },
    player: {
        type: playerSchema,  // Reference the player schema if applicable
        default: {},
        required: true,  // Make sure player field is not missing
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
        type: [String],  // If it's an array of strings (e.g., states or statuses), define it clearly
        default: [],
    },
}, {
    versionKey: false,
    timestamps: true,  // Automatically adds createdAt and updatedAt
    collection: 'game_configurations',
});

module.exports = mongoose.model('gameconfiguration', schema);
