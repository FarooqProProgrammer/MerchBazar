const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    urlSlug: {
        type: String,
        required: true,
        unique: true
    },
    bio: String,
    location: String,
    displayPreferences: {
        type: [String],
        enum: ['Dark Mode', 'Light Mode', 'High Contrast'],
        default: ['Light Mode']
    },
    salesNotificationEmails: {
        type: Boolean,
        default: true
    },
    customLink: String,
    socialMedia: {
        deviantArt: String,
        facebook: String,
        instagram: String,
        tiktok: String,
        tumblr: String,
        twitch: String,
        twitter: String,
        youtube: String,
        pinterest: String
    }
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
