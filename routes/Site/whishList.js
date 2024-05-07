const express = require('express');
const whishListSchema = require('../../model/Site/whislist')
const { v4: uuidv4 } = require('uuid');
const route = express.Router();



function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        id += characters.charAt(randomIndex);
    }
    return id;
}

route.post('/add-whishlist', async function (req, res) {
    try {
        const { whishList } = req.body;
        const user = req.cookies.user._id;

        // Check if the wishlist item already exists for the user
        const existingWishlistItem = await whishListSchema.findOne({ whishList });

        if (existingWishlistItem) {
            // If the item already exists, remove it from the collection
            await whishListSchema.deleteOne({ whishList });
            return res.status(200).json({ message: 'Wishlist item removed successfully' });
        }

        // If the item does not exist, create a new wishlist item
        const wishListId = Date.now();
        const wishlistItem = new whishListSchema({ whishList, user, wishListId });
        await wishlistItem.save();

        // Return a success response
        res.status(201).json({ message: 'Wishlist item added successfully', wishlistItem });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});




route.post('/remove-whishlist', async function (req, res) {
    try {
        const { whishListItemId } = req.body;
        const deletedItem = await whishListSchema.findOneAndDelete({ wishListId: whishListItemId });
        if (!deletedItem) {
            return res.status(404).json({ error: 'Wishlist item not found' });
        }
        res.status(200).json({ message: 'Wishlist item deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});



route.get('/wishList', async function (req, res) {
    const whishList = await whishListSchema.find().populate('user').populate('whishList');
    res.send(whishList)
})


module.exports = route;