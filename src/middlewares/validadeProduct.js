const productsModel = require('../models/products.model');

const validadeName = (req, res, next) => {
  const { name } = req.body;
  const min = 5;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (name.length < min) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }

  next();
};

const validateProducts = async (req, res, next) => {
  const { name } = req.body;
  const { id } = req.params;
  const product = await productsModel.findById(id);
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = {
  validadeName,
  validateProducts,
};