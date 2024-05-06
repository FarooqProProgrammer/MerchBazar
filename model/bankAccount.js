var mongoose = require('mongoose');


const bankchema = mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'auth'
        },
        bankName:{
            type:String,
            required:true
        },
        bankNumber:{
            type:String,
            required:true
        },
        AccountNumber:{
            type:String,
            required:true
        },

    },
    {
        timestamps: true
    }
);



var bankModel = mongoose.model('bankAccount', bankchema);
module.exports = bankModel;