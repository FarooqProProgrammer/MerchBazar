const mongoose = require('mongoose');
var mongooseSlug = require('mongoose-slug-generator')

mongoose.plugin(mongooseSlug);


const designCheck = mongoose.Schema(
    {
        isdesign: { 
            type:Boolean,
            default:false
        },
        userId: { 
            type:String
        }
    },
    {
        timestamps:true
    }
)

const designModel = mongoose.model('design',designCheck);
module.exports = designModel;

