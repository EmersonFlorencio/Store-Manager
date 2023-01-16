const { productsService }  = require('../services/index')

const getAllProducts = async (_req, res) => {
 const { status, message } = await productsService.getAllProducts();
  return res.status(status).json(message)
}

const getProductById = async (req, res) => {
  const { id } = req.params;
  const {status, message} = await productsService.productById(id);

  if(status === 404) {
    return res.status(status).json({message: message});
  }

  return res.status(status).json(message)
}

module.exports = {
  getAllProducts,
  getProductById,
}