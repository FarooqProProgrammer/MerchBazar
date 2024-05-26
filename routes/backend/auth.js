const express = require('express');
const { register, login, getUser, forgetPassword } = require('../../controller/auth');
const { hasAccess } = require('../../middleware/auth');
const { addCategory, getAllCategory, addSubCategory, getAllSubCategory, deleteSubCategory, updateSubCategory, deleteCategory } = require('../../controller/category');
const { ContactForm } = require('../../controller/Contact/ContactController');
const { body, validationResult } = require('express-validator');
const csurf = require('csurf');
const route = express.Router();
const csrfProtection = csurf({ cookie: true });

// =========== AUTH ROUTES ==================
route.post('/register',register)
route.post('/login',[ 
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
], login)
route.get('/all-user',getUser)
route.post('/forget-passwor',forgetPassword)

route.post('/update-user')





// ================ CATEGORY ROUTES =============
route.post('/add-category',addCategory)
route.get('/get-category',getAllCategory)
route.post('/delete-category/:id', deleteCategory);

// ================ SUB CATEGORY ROUTES =============
route.post('/add-sub-category',addSubCategory)
route.get('/get-sub-category',getAllSubCategory)
route.delete('/delete-sub-category/:id',deleteSubCategory)
route.put('/update-sub-category/:id',updateSubCategory)





route.post('/contact-post', csrfProtection, ContactForm)


module.exports = route