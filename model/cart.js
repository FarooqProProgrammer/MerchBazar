const mongoose = require('mongoose');


const cartSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'auth',
            required:true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'storeDetail',
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        cartUniqueId: {
            type:Number,
            required:true
        }

    },
    {
        timestamps: true
    }
);

const cartModel = mongoose.model('cart', cartSchema);
module.exports = cartModel;