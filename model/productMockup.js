const mongoose = require('mongoose');

const productMockup = mongoose.Schema(
    {
        productName: {
            type:String,
            required:true
        },
        pdocutBasePrice:{
            type:String,
            required:true
        },
        productColors:{
            type:Array,
            required:true
        },
        productFrontImage: {
            type:String,
            required:true
        },
        productBackImage: {
            type:String,
        },
        category: {
            type:String,
            required:true
        },
        productSku: {
            type:String,
            required:true
        },
        productBrand: {
            type:String,
            required:true
        },
        productAvialability: {
            type:String,
            required:true
        },

        AdditionalInformation:{
            type:String,
            required:true
        },
        SpecificationReview:{
            type:String,
            required:true
        },
        

    },
    {
        timestamps:true
    }
)

const ProductMockup = mongoose.model('ProductMockup',productMockup);
module.exports = ProductMockup