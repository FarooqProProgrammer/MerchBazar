const { default: mongoose } = require("mongoose");

const shippingAdress = mongoose.Schema(
    {
        firstName: { type: String, required: true },
        userId: { type: String, required: true },
        lastName: { type: String, required: true },
        addressLine1: { type: String, required: true },
        addressLine2: { type: String },
        country: { type: String, required: true },
        zip: { type: String, required: true },
        state: { type: String, required: true },
        city: { type: String, required: true },
    },
    {
        timestamps:true
    }
);

const shippingAdressModel = mongoose.model('shipping-address',shippingAdress);
module.exports =shippingAdressModel