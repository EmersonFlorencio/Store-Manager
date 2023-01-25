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

module.exports = {
  getAllProducts,
  productById,
  InsertProduct,
};