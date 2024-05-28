var mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Import bcryptjs


const authSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        country: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        storeDetail: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Store"
        },
        userOrderHistory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        },
        userProducts: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        bankData: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'bankAccount'
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        verificationToken: String,
    },
    {
        timestamps: true
    }
);


    
authSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})


var authModel = mongoose.model('auth', authSchema);
module.exports = authModel;