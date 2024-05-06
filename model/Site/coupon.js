const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  couponName: {
    type: String,
    required: true,
    unique: true
  },
  discount: {
    type: Number,
    required: true
  },
  expiryDate: {
    type: Date,
    required: true,
    default:Date.now(),
  }
});

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
