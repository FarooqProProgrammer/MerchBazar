const express = require('express');
const Cart = require("../../model/cart")
const route = express.Router();


route.post('/add-cart', async (req, res) => {
    const { cartQuantity, authorID } = req.body;

    const findAuthorId = await Cart.findOne(authorID);
    if(!findAuthorId) {
        res.send('Product Not Found')
    }
    res.send(findAuthorId)

})



module.exports = route