const express = require('express');
const router = express.Router();
const Farmer = require('../models/Farmer');
const { addFarmer, getFarmers, getFarmerById, updateFarmer, deleteFarmer } = require('../controllers/farmerController');

// @route   POST api/farmers
// @desc    Add a new farmer
// @access  Public
router.post('/', addFarmer);

// @route   GET api/farmers
// @desc    Get all farmers
// @access  Public
router.get('/', getFarmers);

// @route   GET api/farmers/:id
// @desc    Get farmer by ID
// @access  Public
router.get('/:id', getFarmerById);

// @route   PUT api/farmers/:id
// @desc    Update farmer by ID
// @access  Public
router.put('/:id', updateFarmer);

// @route   DELETE api/farmers/:id
// @desc    Delete farmer by ID
// @access  Public
router.delete('/:id', deleteFarmer);

module.exports = router;
