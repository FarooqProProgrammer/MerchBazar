// models/Product.js

const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);


const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    availability: {
        type: Boolean,
        default: true
    },
    category: {
        type: String,
        required: true
    },
    retailPrice: {
        type: Number,
        required: true
    },
    salePrice: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
    },
    color: {
        type: [String],
        required: true
    },
    size: {
        type: Array,
        required: true
    },
    description: {
        type: String
    },
    additionalInformation: {
        type: String
    },
    specification: {
        type: String
    },
    review: {
        type: String
    },
    frontImage: {
        type: String,
        required: true
    },
    backImage: {
        type: String,
    },
    productType: {
        type: String,
        enum: ['design', 'marketplace'],
        required: true
    },
    slug: { type: String, slug: "productName" }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
