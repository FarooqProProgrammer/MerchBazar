const mongoose = require('mongoose');
var mongooseSlug = require('mongoose-slug-generator')

mongoose.plugin(mongooseSlug);


const storeInfo = mongoose.Schema(
    {
        userid:{type:String,required:true},
        storeName: {
            type: String,
            required: true,
        },
        BriefBio: {
            type: String,
        },
        Location: {
            type: String,
        },
        displayPrefence: {
            type: String,
        },
        SalesNotification: {
            type: Boolean,
        },
        products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'storeDetail' }],

        
                yourWebsiteLink: { type: String },
                DeviantArt: { type: String },
                Facebook: { type: String },
                Instagram: { type: String },
                TikTok: { type: String },
                Tumblr: { type: String },
                Twitch: { type: String },
                Twitter: { type: String },
                YouTube: { type: String },
                Pinterest: { type: String },
            
     
        slug: { type: String, slug: "categoryName" }

    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('storeInfo', storeInfo)