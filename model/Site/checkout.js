const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    lastName: String,
    companyName: String,
    address: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    regionState: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    orderNotes: String,
    full_name: String,
    bank_name: String,
    image:String, 
    account_no: Number,
    amount: Number
    // cartProductIDs: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Cart' // Assuming you have a Cart model
    // }]
});

const Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports = Checkout;
