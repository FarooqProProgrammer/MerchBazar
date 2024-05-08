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

router.get('/get-store/:productId', async function (req, res) {
    try {
        const productId = req.params.productId;
        const product = await StoreProduct.findById(productId).populate('productId');
        console.log(product);
        res.send(product);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



module.exports = router