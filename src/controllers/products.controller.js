const { productsService } = require('../services/index');

const getAllProducts = async (_req, res) => {
 const products = await productsService.getAllProducts();
  return res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await productsService.productById(id);

  if (status === 404) {
    return res.status(status).json({ message });
  }

  return res.status(status).json(message);
};

const InsertProduct = async (req, res) => {
 const { name } = req.body;
 const { status, message } = await productsService.InsertProduct(name);

  return res.status(status).json(message);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const { status, message } = await productsService.updateProduct({ id, name });

  return res.status(status).json(message);
};

module.exports = {
  getAllProducts,
  getProductById,
  InsertProduct,
  updateProduct,
};