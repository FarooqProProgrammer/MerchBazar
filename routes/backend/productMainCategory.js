const express = require('express');
const productCatergoryMain = require('../../model/productMainCategory');
const productSubCatergoryMain = require('../../model/productmainSubCategoruy');
const route = express.Router();



route.post('/create-main-category',async(req,res)=>{
    try { 

        const savedCategory = await productCatergoryMain(req.body);
        await savedCategory.save();
        res.redirect('/product-categories')
    }catch(error) { 
        res.send({error:error})
    }   
})

// Create or update a main category
route.post('/create-update-main-category', async (req, res) => {
    try {
        if (req.body._id) {
            console.log(req.body._id)
            const updatedCategory = await productCatergoryMain.findByIdAndUpdate(req.body._id, req.body, { new: true });
            res.redirect('/product-categories')
        } 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



route.get('/product-category/:id', async (req, res) => {
    try {
        // Find the category by ID
        const category = await productCatergoryMain.findById(req.params.id);
        
        if (!category) {
            return res.status(404).send({ message: "Category not found" });
        }
        
        res.json(category);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

route.post('/delete-main-category/:id', async (req, res) => {
    try {
        // Find the category by ID and delete it
        const deletedCategory = await productCatergoryMain.findByIdAndDelete(req.params.id);
        
        if (!deletedCategory) {
            return res.status(404).send({ message: "Category not found" });
        }
        
        res.redirect('/product-categories');
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});


route.post('/create-sub-category', async (req, res) => {
    try {
        const newSubCategory = new productSubCatergoryMain(req.body);
        await newSubCategory.save();
        // res.redirect('/product-categories')
        res.send('Success')
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.post('/delete-sub-category/:id', async (req, res) => {
    try {
        const deletedSubCategory = await productSubCatergoryMain.findByIdAndDelete(req.params.id);
        if (!deletedSubCategory) {
            return res.status(404).json({ message: 'Subcategory not found' });
        }
       res.redirect('/product-categories');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = route;