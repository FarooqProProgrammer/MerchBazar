const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    orderNumber: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    commission: {
        type: Number,
        required: true
    },
    orderCompleted: {
        type: Boolean,
        default: false
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
