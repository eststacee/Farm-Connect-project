const Buyer = require('../models/Buyer');

exports.addBuyer = async (req, res) => {
  try {
    const newBuyer = new Buyer(req.body);
    const buyer = await newBuyer.save();
    res.json(buyer);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getBuyers = async (req, res) => {
  try {
    const buyers = await Buyer.find();
    res.json(buyers);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getBuyerById = async (req, res) => {
  try {
    const buyer = await Buyer.findById(req.params.id);
    if (!buyer) return res.status(404).json({ msg: 'Buyer not found' });
    res.json(buyer);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.updateBuyer = async (req, res) => {
  try {
    let buyer = await Buyer.findById(req.params.id);
    if (!buyer) return res.status(404).json({ msg: 'Buyer not found' });

    buyer = await Buyer.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.json(buyer);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deleteBuyer = async (req, res) => {
  try {
    const buyer = await Buyer.findById(req.params.id);
    if (!buyer) return res.status(404).json({ msg: 'Buyer not found' });

    await Buyer.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Buyer removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
