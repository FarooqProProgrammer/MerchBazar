const mongoose = require('mongoose');
var mongooseSlug = require('mongoose-slug-generator')

mongoose.plugin(mongooseSlug);


const storeProduct = mongoose.Schema(
    { 
        title: {
            type: String,
            required: true
        },
        mainTag:  {
            type: String,
            required: true
        },
        description:  {
            type: String,
            required: true
        },
        supportingTags:  {
            type: String,
            required: true
        },
        designPrice:{
            type: String,
            required: true
        },
        album:  {
            type: String,
        },
        designImage: {
            type: String,
                    required: true
        }, 
        storeId: { 
            type: String,
        },
        productId: {
            type:mongoose.Schema.Types.ObjectId,
            ref:'ProductMockup',
            required:true
        },
        userId : {
            type:mongoose.Schema.Types.ObjectId,
            ref:'auth'
        }
        
     },
)

module.exports = mongoose.model('storeDetail',storeProduct)