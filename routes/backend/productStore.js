const express = require("express");
const multer = require("multer");
const artistData = require('../../model/artistSchema')
const StoreProduct = require('../../model/storeProduct');
const router = express.Router();


router.post('/create-store-data', async (req, res) => {

    const {
        title,
        mainTag,
        description,
        supportingTags,
        album,
        designImage,
        productId,
        designPrice,

    } = req.body;

    const userId = req.cookies.user._id;
    const storeId = req.cookies.store._id;

    const artist = artistData.find({ userId: userId });
    artist.totalDesigns += 1;


    const SaveProduct = await StoreProduct({
        title,
        mainTag,
        description,
        supportingTags,
        album,
        designImage,
        storeId,
        userId,
        productId,
        designPrice
    });
    await SaveProduct.save();

    res.send({ "product saved success": SaveProduct })

})

router.get('/get-stores', async function () {
    try {
        const product = await StoreProduct.find().populate('productId');
        console.log(product)
        res.send(product)
    } catch (error) {

    }
});

router.delete('/delete-store/:productId', async function (req, res) {
    try {
        const productId = req.params.productId;

        const deleteArtistCounter = await artistData.find().populate('userId');
        const deletedProduct = await StoreProduct.find({ _id: productId }).populate('userId');


        console.log(deleteArtistCounter == deletedProduct)



        return
        // Find the product by its ID and delete it
        // const deletedProduct = await StoreProduct.findByIdAndDelete(productId);

        // If the product is successfully deleted, send a success message
        if (deletedProduct) {
            console.log('Product deleted successfully:', deletedProduct);
            res.status(200).send('Product deleted successfully');
        } else {
            // If the product is not found, send a 404 response
            console.log('Product not found');
            res.status(404).send('Product not found');
        }
    } catch (error) {
        // Handle any errors that occur during the process
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});




module.exports = router