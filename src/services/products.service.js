const { productsModel } = require('../models/index');

const getAllProducts = async () => {
  const listProducts = await productsModel.findAll();
  return listProducts;
};

const productById = async (id) => {
  const product = await productsModel.findById(id);

  if (!product) {
    return { status: 404, message: 'Product not found' };
  }

  return { status: 200, message: product };
};

const InsertProduct = async (name) => {
  const newProduct = await productsModel.InsertProduct(name);

  console.log(newProduct);
  return { status: 201, message: newProduct };
};

const updateProduct = async ({ id, name }) => {
  const affectedRows = await productsModel.updateProduct(id, name);

  if (affectedRows === 0) {
    return { status: 404, message: 'Product not found' };
  }

  const productUpdated = { id, name };

  return { status: 200, message: productUpdated };
};

module.exports = {
  getAllProducts,
  productById,
  InsertProduct,
  updateProduct,
};