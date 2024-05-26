const express = require('express');
const ProductController = require('../../controller/Product');
const multer = require('multer');
const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/product', upload.fields([{ name: 'frontImage', maxCount: 1 }, { name: 'backImage', maxCount: 1 }]), ProductController.createProduct);
router.get('/products', ProductController.getAllProducts);
router.get('/product/:id', ProductController.getProductById);
// router.put('/product/:id', productController.updateProduct);






module.exports = router;