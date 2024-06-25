const Farmer = require('../models/Farmer');

exports.addFarmer = async (req, res) => {
  try {
    const newFarmer = new Farmer(req.body);
    const farmer = await newFarmer.save();
    res.json(farmer);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getFarmers = async (req, res) => {
  try {
    const farmers = await Farmer.find();
    res.json(farmers);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getFarmerById = async (req, res) => {
  try {
    const farmer = await Farmer.findById(req.params.id);
    if (!farmer) return res.status(404).json({ msg: 'Farmer not found' });
    res.json(farmer);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.updateFarmer = async (req, res) => {
  try {
    let farmer = await Farmer.findById(req.params.id);
    if (!farmer) return res.status(404).json({ msg: 'Farmer not found' });

    farmer = await Farmer.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.json(farmer);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deleteFarmer = async (req, res) => {
  try {
    const farmer = await Farmer.findById(req.params.id);
    if (!farmer) return res.status(404).json({ msg: 'Farmer not found' });

    await Farmer.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Farmer removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
