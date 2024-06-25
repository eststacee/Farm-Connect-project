const mongoose = require('mongoose');

const FarmerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  farmName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  }],
});

module.exports = mongoose.model('Farmer', FarmerSchema);
