const mongoose = require('mongoose');
var mongooseSlug = require('mongoose-slug-generator')

mongoose.plugin(mongooseSlug);


const SubCategory = mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        parentCategory: {
            type: String,
            required: true,
        },
        slug: { type: String, slug: "Name" }

    },
    {
        timestamps:true
    }
);

const SubCategoryModel = mongoose.model('sub-category', SubCategory)
module.exports = SubCategoryModel