const { productsService }  = require('../services/index')

const getAllProducts = async (_req, res) => {
 const { status, response } = await productsService.getAllProducts();
  return res.status(status).json(response)
}

module.exports = {
  getAllProducts,
}