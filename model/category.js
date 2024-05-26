const mongoose = require('mongoose');
var mongooseSlug = require('mongoose-slug-generator')

mongoose.plugin(mongooseSlug);

const categorySchema = mongoose.Schema(
    {
        categoryName: {
            type: String,
            required: true,
        },
        categoryImage:{
            type: String,
            required: true,
        },
        slug: { type: String, slug: "categoryName" }
    },
    { timestamps: true }
)

const CategoryModel = mongoose.model('category', categorySchema)
module.exports = CategoryModel
