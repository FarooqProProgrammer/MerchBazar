const mongoose = require('mongoose');

const whishListSchema = mongoose.Schema(
    {
        whishList: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'storeDetail'
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'auth'
        },
        wishListId: { 
            type:String,
            required:true
        }
    },
    {
        timestamps: true
    }
);

const whishList = mongoose.model('whishList', whishListSchema);
module.exports = whishList
