const mongoose = require('mongoose');
var mongooseSlug = require('mongoose-slug-generator')

mongoose.plugin(mongooseSlug);

const countryModel = mongoose.Schema(
    {
        countryName:{
            type:String,
            required:true
        },
        slug: { type: String, slug: "countryName" }

    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model('countries',countryModel)

