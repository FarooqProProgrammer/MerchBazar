const express = require('express');
const router = express.Router();
const Checkout = require('../../model/Site/checkout');
const { body, validationResult } = require('express-validator');
const Cart = require("../../model/cart");
const csurf = require('csurf');

const csrfProtection = csurf({ cookie: true });







const removeApiPrefix = (req, res, next) => {
    if (req.originalUrl.startsWith('/api')) {
        // Remove the /api prefix from the URL
        req.originalUrl = req.originalUrl.replace('/api', '');
    }
    next(); // Move to the next middleware or route handler
};

// Include the middleware before your checkout route





// POST request to create a new checkout
router.post('/checkout',async (req, res) => {
    try {
        const userId = req.cookies.user._id;
        console.log(userId,req.body)
        const allCarts = await Cart.find({ user: userId }).populate('user').populate({
            path: 'product',
            populate: {
                path: 'productId',
            }
        });

        const updatedCarts = allCarts.map(cart => {
            const designPrice = +cart.product.designPrice;
            const basePrice = +cart.product.productId.pdocutBasePrice;
            const totalPrice = (designPrice + basePrice) * cart.quantity;
            return { ...cart.toObject(), totalPrice };
        });

        const totalPriceVal = updatedCarts.reduce((acc, curr) => acc + curr.totalPrice, 0);

       
        // If validation passes, proceed to save the checkout data
        const { userName, lastName, companyName, address, country, regionState, city, zipCode, email, phoneNumber, paymentMethod, orderNotes ,
        full_name,bank_name,account_no,amount,image
        } = req.body;
        const newCheckout = new Checkout({ userName, lastName, companyName, address, country, regionState, city, zipCode, email, phoneNumber, orderNotes, paymentMethod ,full_name,bank_name,account_no,amount,image});
        await newCheckout.save();
        
        // After successfully saving the checkout data, render the checkout page
        // with updated data and without any errors
        res.send('Data Updated');
    } catch (err) {
        // Handle other errors here, e.g., database errors
        console.error(err);
        res.send('Data Updated');

    }
});
router.use(removeApiPrefix);

module.exports = router;
