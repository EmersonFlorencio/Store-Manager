const { productsService } = require('../services/index');
const  salesModel  = require('../models/sales.model');

const validateSale = (req, res, next) => {
  const sales = req.body;
  const haveProductId = sales.every((sale) => sale.productId);
  const MinQuantity= sales.every((sale) => sale.quantity > 0);
  const haveQuantity = sales.every((sale) => sale.quantity !== undefined);

  if (!haveProductId) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  if (!haveQuantity) return res.status(400).json({ message: '"quantity" is required' });

  if (!MinQuantity) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

const validateProduct = async (req, res, next) => {
  const productId = req.body;
  const promisses = productId.map((e) => productsService.productById(e.productId));
  const productNow = await Promise.all(promisses);
  if (productNow.some((item) => item.status === 404)) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

const validateIfHaveSales = async (req, res, next) => {
  const { id } = req.params;
  const [result] = await salesModel.getSalesById(id);
  if (!result) return res.status(404).json({ message: 'Sale not found' });
  next();
};

module.exports = {
  validateSale,
  validateProduct,
  validateIfHaveSales
}
