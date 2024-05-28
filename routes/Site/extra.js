const express = require('express');
const storeDetail = require('../../model/store-detail')
const countryModel = require('../../model/country')
const State = require('../../model/Site/state');
const ProceedCheckout = require('../../model/Site/ProceedToCheckOut');
const designModel = require('../../model/Site/CheckDesign');
const Coupon = require('../../model/Site/coupon');
const designUpdate = require('../../model/Pages/designModelSchema');
const DesignAlbum = require('../../model/Site/albumModel');
const { getContactInfo } = require('../../controller/Contact/ContactController');
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
    console.log(req.body)
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
route.get('/delete-coupons/:id', async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndDelete(req.params.id);
    if (!coupon) {
      return res.redirect('/coupon')
    }
    return res.redirect('/coupon')
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
      const userId = req.cookies.store._id;


      const { title, mainTag, description, supportingTags, designPrice, album, designImage,  productId } = req.body;

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


route.post('/add-album', async (req, res) => {
  try {
    const { AlbumStatus,Albumname, AlbumProductIds } = req.body;
    const userId = req.cookies.user._id;



    // Create a new status
    const status = new DesignAlbum({
      AlbumStatus,
      AlbumProductIds,
      userId,
      userIdwithMetaData:userId,
      Albumname
    });

    // Save the new status to the database
    const savedStatus = await status.save();

    res.status(201).json(savedStatus);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
route.post('/update-album/:id', async (req, res) => {
  try {
    const { AlbumStatus, Albumname, AlbumProductIds } = req.body;
    const userId = req.cookies.user._id;
    const albumId = req.params.id;

    // Find the existing album by ID and update its fields
    const updatedAlbum = await DesignAlbum.findByIdAndUpdate(
      albumId,
      {
        AlbumStatus,
        AlbumProductIds,
        userId,
        userIdwithMetaData: userId,
        Albumname
      },
      { new: true } // Set new: true to return the updated document
    );

    if (!updatedAlbum) {
      return res.status(404).json({ error: 'Album not found' });
    }

    res.status(200).json(updatedAlbum);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }

});


route.get('/delete-album/:id', async (req, res) => {
  try {
    const albumId = req.params.id;
    
    // Find the album by its ID and delete it
    const deletedAlbum = await DesignAlbum.findByIdAndDelete(albumId);
    
    if (!deletedAlbum) {
      return res.redirect('/album')
    }
    return res.redirect('/album')
  } catch (err) {
    console.error(err);
    return res.redirect('/album')
  }
});

route.get('/get-album/:id', async (req, res) => {
  try {
    const albumId = req.params.id;
    
    // Find the album by its ID
    const album = await DesignAlbum.findById(albumId).populate('AlbumProductIds');
    
    if (!album) {
      return res.status(404).json({ error: 'Album not found' });
    }
    
    res.status(200).json(album);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// GET CONTACT
route.get('/get-contact',getContactInfo)

module.exports = route