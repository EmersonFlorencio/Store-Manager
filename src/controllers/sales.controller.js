const salesService = require('../services/sales.service');

const registerSale = async (req, res) => {
  const sales = req.body;
  const { status, message } = await salesService.insertSale(sales);

  console.log('retorno controler', message);

  return res.status(status).json(message);
};

const listOfSales = async (_req, res) => {
  const respServ = await salesService.listOfSales();
  res.status(200).json(respServ);
};

const salesById = async (req, res) => {
  const { id } = req.params; 
  const sales = await salesService.SalesById(id);
  res.status(200).json(sales);
};

module.exports = {
  registerSale,
  listOfSales,
  salesById,
};