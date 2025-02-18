const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dealCategorySchema = new Schema({
  entryFee: { type: Number, required: true },  
  reke: { type: Number, required: true }, 
  mode: { 
    type: String, 
    enum: ['cash', 'other_modes', 'online'],
    required: true 
  },  
  deals: { type: Number, required: true }, 
  use_bot: { type: Boolean, required: true }, 
  bonus: { type: Number, required: true }, 
  online_player: { type: Number, required: true },  
  leaderBoardScore: { type: Number, required: true },  
  play_store: { type: Boolean, required: true }, 
  _ip: { type: Boolean, required: true }, 
  freeWinGame: { type: Boolean, required: true },  


}, {
  timestamps: true, 
  collection: 'deal_category'  
});

const DealCategory = mongoose.model("DealCategory", dealCategorySchema);
module.exports = DealCategory;
