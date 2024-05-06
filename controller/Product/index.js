const multer = require('multer');
const Product = require('../../model/product');




class ProductController {


    static async createProduct(req, res) {
      try {
        const { productName, sku, brand,  category, retailPrice, salePrice, discount, color, size, description, additionalInformation, specification, review, productType } = req.body;
        
        console.log(req.body)

        const frontImage = req.files['frontImage'][0].path;
        const backImage = req.files['backImage'] ? req.files['backImage'][0].path : null;

        const newProduct = new Product({
            productName,
            sku,
            brand,
            availability:true,
            category,
            retailPrice,
            salePrice,
            discount,
            color,
            size,
            description,
            additionalInformation,
            specification,
            review,
            frontImage,
            backImage,
            productType:'design',
        });

        const savedProduct = await newProduct.save();
        res.render('/product');

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
    }

    static async getAllProducts (req, res) {
        try {
            const products = await Product.find();
            res.status(200).send(products);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    }

    static async getProductById (req, res) { 
        try {
            const product = await Product.findById(req.params.id);
            if (!product) {
              return res.status(404).send('Product not found');
            }
            res.status(200).send(product);
          } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
          }
    }

    static async updateProduct(req, res) { 
        try {
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!product) {
              return res.status(404).send('Product not found');
            }
            res.status(200).send(product);
          } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
          }
    }




}

module.exports = ProductController