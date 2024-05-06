const express = require('express');
const { createArtist } = require('../../controller/Artist');
const multer = require('multer');
const ArtistModel = require('../../model/artistSchema')


const route = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({ storage: storage });


route.post('/create-store',upload.single('image'),createArtist)

route.post('/update-store/:id', async (req, res) => {
    const artistId = req.params.id;

    try {
        // Find the artist by ID
        const artist = await ArtistModel.findById(artistId);

        if (!artist) {
            return res.status(404).json({ error: 'Artist not found' });
        }

        // Increment totalDesigns
        artist.totalDesigns++;

        // Save the updated artist
        await artist.save();

        // Respond with success message
        return res.status(200).json({ message: 'Total designs updated successfully' });
    } catch (error) {
        console.error('Error updating total designs:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});




module.exports = route;