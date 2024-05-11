const ProductMockup = require('../../model/productMockup');
const express = require('express');

const route = express.Router();

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); // Destination folder for storing images
    },
    filename: function(req, file, cb) {
        cb(null, Date.now()+file.originalname); // Use the original filename
    }
});



const upload = multer({ storage: storage });




route.post('/add-mockup', async(req,res)=>{
    console.log(req.body)
    try {
        const { productName, productSku, productBrand, productAvialability, category, pdocutBasePrice, productFrontImage,productBackImage, productColors, AdditionalInformation, SpecificationReview } = req.body;
        const product = new ProductMockup({
            productName,
            pdocutBasePrice,
            productColors,
            productFrontImage,
            productBackImage,
            AdditionalInformation,
            SpecificationReview,
            category,
            productSku,
            productBrand,
            productAvialability

        });
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

});

route.get('/get-mouckup',async function(req,res){
    try { 
        const mock = await ProductMockup.find().sort({ createdAt: -1 });
        res.send(mock)
    }catch(error) { 
        res.send(error)

    }
})


route.post('/delete-mockup/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        console.log(productId);
        // Assuming you're using Mongoose
        const deletedProduct = await ProductMockup.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.redirect('/product');
        }
        // Assuming you're using this route for AJAX requests, respond with JSON
        return res.redirect('/product');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




module.exports = route