const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let Banks = new Schema({
  ifsc: { type: String },
  bank_id: { type: Number },
  branch: { type: String },
  address: { type: String },
  city: { type: String },
  district: { type: String },
  state: { type: String },
  isLiked: { type: Boolean, default: false },
  bank_name: { type: String },
}, {
  collection: 'bankList'
})

module.exports = mongoose.model('bankList', Banks)