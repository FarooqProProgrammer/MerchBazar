var mongoose = require('mongoose');
var  slug = require('mongoose-slug-generator')
mongoose.plugin(slug);

const productMainCategory = mongoose.Schema(
    {
        productCategory: { 
            type:String,
            requied:true
        },
        slug: { type: String, slug: "productCategory" }
    },
    {
    timestamps:true
    }
);

const productCatergoryMain = mongoose.model('mainCategory',productMainCategory);
module.exports = productCatergoryMain