const { productsModel } = require('../models/index');

const  getAllProducts = async () => {
  const listProducts = await productsModel.findAll();

  if(!listProducts) return {
    status: 404 , response: "Products not found",
  }
 
  return {status: 200, response: listProducts};
}

module.exports = {
  getAllProducts,
}