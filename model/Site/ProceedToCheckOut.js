const mongoose = require('mongoose');


const ProceedToCheckout = mongoose.Schema(
    {
        cartId: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'cart',
            required: true
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'auth',
        },
        subTotal: {
            type: String,
            required: true
        },
        shipping: {
            type: String,
            required: true
        },
        Discount: {
            type: String,
            required: true
        },
        Total: {
            type: String,
            required: true
        },

    },
    {
        timestamps: true
    }
);

const ProceedCheckout = mongoose.model('ProceedCheckout', ProceedToCheckout);
module.exports = ProceedCheckout