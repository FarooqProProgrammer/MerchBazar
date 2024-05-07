const express = require('express');
const storeDetail = require('../../model/store-detail')
const countryModel = require('../../model/country')
const State = require('../../model/Site/state');
const ProceedCheckout = require('../../model/Site/ProceedToCheckOut');
const designModel = require('../../model/Site/CheckDesign');
const Coupon = require('../../model/Site/coupon');
const designUpdate = require('../../model/Pages/designModelSchema')
const route = express.Router();



route.post('/upload-designs', async (req, res) => {
  try {
    const userId = req.cookies.user._id;


   
      const newDesign = new designModel({
          isdesign: req.body.isdesign,
          userId: userId
      });

      // Save the new design check document to the database
      const savedDesign = await newDesign.save();

      // Send a success response with the saved design check document
      res.status(201).json(savedDesign);
  } catch (error) {
      // If an error occurs, send a 500 status code with the error message
      res.status(500).json({ error: error.message });
  }
});



route.post('/get-products-by-id', async function (req, res) {
  try {
    const { IdsArray } = req.body;

    console.log(IdsArray)

    // Ensure IdsArray is an array
    if (!Array.isArray(IdsArray)) {
      return res.status(400).json({ error: 'IdsArray must be an array' });
    }

    // Find products with IDs in the IdsArray
    const products = await storeDetail.find({ _id: { $in: IdsArray } });
    console.log(products)
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

route.post('/add-countries', async (req, res) => {
  try {
    const countriesData = req.body;

    // Insert multiple documents into the collection
    await countryModel.insertMany(countriesData);

    res.send('Data saved successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

route.post('/add-states', async (req, res) => {
  try {
      const states = req.body;
      if (!Array.isArray(states)) {
          return res.status(400).json({ message: "Request body must be an array" });
      }

      const result = await State.insertMany(states);
      res.status(201).json(result);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});





// Create a new coupon
route.post('/coupons', async (req, res) => {
  try {
    const coupon = new Coupon(req.body);
    await coupon.save();
    res.status(201).send(coupon);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all coupons
route.get('/coupons', async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.send(coupons);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a coupon by ID
route.get('/coupons/:id', async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);
    if (!coupon) {
      return res.status(404).send({ message: 'Coupon not found' });
    }
    res.send(coupon);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a coupon by ID
route.put('/coupons/:id', async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!coupon) {
      return res.status(404).send({ message: 'Coupon not found' });
    }
    res.send(coupon);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a coupon by ID
route.delete('/coupons/:id', async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndDelete(req.params.id);
    if (!coupon) {
      return res.status(404).send({ message: 'Coupon not found' });
    }
    res.send({ message: 'Coupon deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
});




route.post('/add-checkout', async (req, res, next) => {
  try {
    const userId = req.cookies.user._id;

    // Check if checkout already exists for the user
    const existingCheckout = await Checkout.findOne({ user: userId });
    if (existingCheckout) {
        // If checkout exists, delete it
        await Checkout.findByIdAndDelete(existingCheckout._id);
    }

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
    const { userName, lastName, companyName, address, country, regionState, city, zipCode, email, phoneNumber, paymentMethod, orderNotes } = req.body;
    const newCheckout = new Checkout({ user: userId, userName, lastName, companyName, address, country, regionState, city, zipCode, email, phoneNumber, orderNotes, paymentMethod });
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




route.post('/upload-design', async (req, res) => {
  try {
      // Extract data from request body


      // const storeId = req.cookies.store._id;


      const { title, mainTag,userId, description, supportingTags, designPrice, album, designImage,  productId } = req.body;

      // Create a new instance of the DesignModel with the extracted data
      const design = new designUpdate({
          title,
          mainTag,
          description,
          supportingTags,
          designPrice,
          album,
          designImage,
          productId:'663a6b107a3946a3879c1ba4',
          userId
      });

      // Save the design data to the database
      const savedDesign = await design.save();

      // Respond with success message and saved design data
      res.status(201).json({ message: 'Design uploaded successfully', design: savedDesign });
  } catch (error) {
      // Handle any errors
      console.error('Error uploading design:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});







module.exports = route