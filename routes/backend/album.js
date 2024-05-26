const express = require('express');
const Product = require('../../model/product');
const route = express.Router();


route.get('/get-product/:id',async function(req,res){
    const { id } = req.params;

    const productData = await Product.find({ userID:id, productType:"design" });

    res.send(productData)
})


module.exports = route;