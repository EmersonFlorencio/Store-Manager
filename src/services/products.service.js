const { productsModel } = require('../models/index');

const getAllProducts = async () => {
  const listProducts = await productsModel.findAll();

  if (!listProducts) {
    return { status: 404, message: 'Product not found' };
  }

  return { status: 200, message: listProducts };
};

const productById = async (id) => {
  const product = await productsModel.findById(id);

  if (!product) {
    return { status: 404, message: 'Product not found' };
  }

  return { status: 200, message: product };
};

module.exports = {
  getAllProducts,
  productById,
};