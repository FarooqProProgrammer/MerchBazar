var mongoose = require('mongoose');
var  slug = require('mongoose-slug-generator')
mongoose.plugin(slug);

const productMainSubCategory = mongoose.Schema(
    {
        productSubCategory: { 
            type:String,
            requied:true
        },
        productMainCategory: {
            type:String,
            requied:true
        },
        slug: { type: String, slug: "productSubCategory" }
    },
    {
    timestamps:true
    }
);

const productSubCatergoryMain = mongoose.model('mainSubCategory',productMainSubCategory);
module.exports = productSubCatergoryMain