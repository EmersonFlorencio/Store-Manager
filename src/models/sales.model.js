const { connection } = require('./connection');

const insertSales = async (sales) => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
  const [{ insertId }] = await connection.execute(query);
  const querySaleProduct = `INSERT INTO StoreManager.sales_products 
    (sale_id, product_id, quantity) VALUES (?, ?, ?)`;
  sales.forEach((elem) =>
    connection.execute(querySaleProduct, [insertId, elem.productId, elem.quantity]));


  return insertId;
};

const getAllSales = async () => {
  const query = `
  SELECT sales.id as saleId, sales.date, salesProduct.product_id as productId, salesProduct.quantity
  FROM StoreManager.sales_products AS salesProduct
INNER JOIN
  StoreManager.sales AS sales
ON sales.id = salesProduct.sale_id
ORDER BY sales.id, salesProduct.product_id
  `;
  const [sales] = await connection.execute(query);
  return sales;
};

const getSalesById = async (id) => {
  const query = `
  SELECT 
    sales.date, salesProduct.product_id AS productId, salesProduct.quantity
FROM
    StoreManager.sales_products AS salesProduct
        INNER JOIN
    StoreManager.sales AS sales 
  ON sales.id = salesProduct.sale_id
  WHERE sales.id = ?
ORDER BY sales.id, salesProduct.product_id
  `;
  const [sales] = await connection.execute(query, [id]);
  
  return sales;
};


module.exports = {
  insertSales,
  getAllSales,
  getSalesById,
};