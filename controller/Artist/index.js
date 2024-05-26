const ArtistModel = require('../../model/artistSchema')
const fs = require('fs')

class Artist {
    static async createArtist(req, res) {
        try {
            const { name, totalDesigns, Id } = req.body;
            const userId = req.cookies.user._id;
    
            const artistLogo = req.file ? req.file.path : null; 
    
            let artist = await ArtistModel.findOne({ userId });
    
            if (artist) {
                if (req.file && artist.artistLogo) {
                    fs.unlinkSync(artist.artistLogo); 
                }
                artist = await ArtistModel.findOneAndUpdate({ userId }, { name, totalDesigns, artistLogo, Id }, { new: true });
            } else {
                // Create new artist data
                artist = new ArtistModel({ name, totalDesigns, userId, artistLogo, Id });
                artist = await artist.save();
            }
    
            res.status(201).json(artist);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    

    static async getArtists(req, res) {
        try {

            const allArtist = await ArtistModel.find();
            res.send(allArtist)

        } catch (error) {
            res.send(error)
        }
    }
}
module.exports = Artist;