const mongoose = require('mongoose');

const cartSchema = mongoose.Schema(
    {
        userID: {
            type: String,
            required: true
        },

        items: [{
            product: {
                type: Array,
                required: true

            },
            quantity: {
                type: Number,
                default: 0
            }
        }]
    }
)