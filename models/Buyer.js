const mongoose = require('mongoose');

const BuyerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  companyName: {
    type: String,
    required: true,
  },
  contactDetails: {
    type: String,
    required: true,
  },
  productsPurchased: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  }],
});

module.exports = mongoose.model('Buyer', BuyerSchema);
