const express = require('express');
const Cart = require('../../model/cart');
const Product = require('../../model/product');
const mongoose = require('mongoose');
const route = express.Router();

route.post('/cart', async (req, res) => {
    try {
        const { product, quantity } = req.body;
        const user = req.cookies.user._id;

        console.log(product)
        console.log(quantity)

        // Check if the product is already in the cart
        const existingCartItem = await Cart.findOne({ user, product });

        if (existingCartItem) {
      
  
            existingCartItem.quantity += 1;
            await existingCartItem.save();
            res.status(200).json({ message: 'Quantity updated successfully', data: existingCartItem });
        } else {
            // If the product is not in the cart, add a new item
            const cartItem = new Cart({
                user,
                product,
                quantity,
                cartUniqueId: Math.floor(Math.random() * 1000) // Generate a unique ID
            });
            await cartItem.save();
            res.status(201).json({ message: 'Item added to cart successfully', data: cartItem });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});
route.post('/cart/decrease', async (req, res) => {
    try {
        const { product, quantity } = req.body;
        const user = req.cookies.user._id;

        // Find the cart item for the specified user and product
        const existingCartItem = await Cart.findOne({ user, product });

        if (!existingCartItem) {
            // If the item is not found in the cart, return an error
            return res.status(404).json({ message: 'Item not found in the cart' });
        }

        // Decrease the quantity by 1
        existingCartItem.quantity -= 1;

        // If the quantity becomes 0, remove the item from the cart
        if (existingCartItem.quantity === 0) {
            await existingCartItem.remove();
            return res.status(200).json({ message: 'Item removed from cart successfully' });
        }

        // Otherwise, save the updated quantity
        await existingCartItem.save();
        res.status(200).json({ message: 'Quantity decreased successfully', data: existingCartItem });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});
route.delete('/cart/:id', async (req, res) => {
    try {
        const user = req.cookies.user._id;
        const productId = req.params.id;

        // Find the cart item for the specified user and product ID
        const existingCartItem = await Cart.findOneAndDelete({ _id: productId });

        if (!existingCartItem) {
            // If the item is not found in the cart, return an error
            return res.status(404).json({ message: 'Item not found in the cart' });
        }

        // Ensure that the cart item belongs to the current user
        if (existingCartItem.user.toString() !== user.toString()) {
            return res.status(403).json({ message: 'Unauthorized access to delete the item' });
        }

        // No need to remove the item again since it's already deleted by findOneAndDelete
        // await existingCartItem.remove();

        res.status(200).json({ message: 'Item removed from cart successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});


route.get('/cart', async function (req, res) {
    try {
        const allCarts = await Cart.find().populate('user').populate({
            path: 'product',
            populate: {
                path: 'productId',
            }
        })
        const updatedCarts = allCarts.map(cart => {
            const designPrice = +cart.product.designPrice;
            const basePrice = +cart.product.productId.pdocutBasePrice;
            const totalPrice = (designPrice + basePrice) * cart.quantity;
            return { ...cart.toObject(), totalPrice };
          });
        console.log(updatedCarts)

        const totalPriceVal = updatedCarts.reduce((acc, curr) => acc + curr.totalPrice, 0);
        console.log(totalPriceVal)


        res.json(updatedCarts);


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});



const deleteCollection = async () => {
    try {
        // Delete the collection
        await Cart.deleteMany();
        console.log('Collection deleted successfully.');
    } catch (error) {
        console.error('Error deleting collection:', error);
    } finally {
        // Close the MongoDB connection
        mongoose.connection.close();
    }
};



module.exports = route