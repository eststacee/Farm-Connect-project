const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { addProduct, getProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/productController');

// @route   POST api/products
// @desc    Add a new product
// @access  Public
router.post('/', addProduct);

// @route   GET api/products
// @desc    Get all products
// @access  Public
router.get('/', getProducts);

// @route   GET api/products/:id
// @desc    Get product by ID
// @access  Public
router.get('/:id', getProductById);

// @route   PUT api/products/:id
// @desc    Update product by ID
// @access  Public
router.put('/:id', updateProduct);

// @route   DELETE api/products/:id
// @desc    Delete product by ID
// @access  Public
router.delete('/:id', deleteProduct);

module.exports = router;
