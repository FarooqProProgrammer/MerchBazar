const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    totalDesigns: {
        type: Number,
        default: 0
    },
    artistLogo: {
        type: String, // Assuming you will store the path to the uploaded image
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'auth'
    },
    Id: { 
        type: String, 
        required: true,
        default:Date.now()
    }

});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
