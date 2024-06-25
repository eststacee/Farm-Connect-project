const express = require('express');
const router = express.Router();
const Buyer = require('../models/Buyer');
const { addBuyer, getBuyers, getBuyerById, updateBuyer, deleteBuyer } = require('../controllers/buyerController');

// @route   POST api/buyers
// @desc    Add a new buyer
// @access  Public
router.post('/', addBuyer);

// @route   GET api/buyers
// @desc    Get all buyers
// @access  Public
router.get('/', getBuyers);

// @route   GET api/buyers/:id
// @desc    Get buyer by ID
// @access  Public
router.get('/:id', getBuyerById);

// @route   PUT api/buyers/:id
// @desc    Update buyer by ID
// @access  Public
router.put('/:id', updateBuyer);

// @route   DELETE api/buyers/:id
// @desc    Delete buyer by ID
// @access  Public
router.delete('/:id', deleteBuyer);

module.exports = router;
