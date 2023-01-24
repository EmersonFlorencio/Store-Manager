const salesModel = require('../models/sales.model');


const insertSale = async (sales) => {
  const insertId = await salesModel.insertSales(sales);


  const response = { id: insertId, itemsSold: sales };

  const newSale = {
    status: 201,
    message: response
  };

  return newSale;
};

const listOfSales = async () => {
  const sales = await salesModel.getAllSales();
  return sales;
};

const SalesById = async (id) => {
  const sale = await salesModel.getSalesById(id);
  return sale;
};

module.exports = {
  insertSale,
  listOfSales,
  SalesById
}