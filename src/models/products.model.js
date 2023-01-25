const { connection } = require('./connection');

const findAll = async () => {
  const [listOfProducts] = await connection.execute('select * from StoreManager.products;');

  return listOfProducts;
};

const findById = async (id) => {
  const [[product]] = await connection.execute('select * from StoreManager.products where id = ?;',
    [id]);

  return product;
};

const InsertProduct = async (name) => {
  const [{ insertId }] = await connection
    .execute('INSERT INTO StoreManager.products (name) values (?)', [name]);

  const newProduct = { id: insertId, name };
  return newProduct;
};

const updateProduct = async (id, name) => {
  const [{ affectedRows }] = await connection
    .execute('UPDATE StoreManager.products SET name = ? WHERE id = ?', [name, id]);

  return affectedRows;
};

module.exports = {
  findAll,
  findById,
  InsertProduct,
  updateProduct,
};