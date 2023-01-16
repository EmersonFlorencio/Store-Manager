const { connection } = require('./connection');

const findAll = async () => {
  const [listOfProducts] = await connection.execute('select * from StoreManager.products;')


  return listOfProducts
}

const findById = async (id) => {
 const [[product]] = await connection.execute('select * from StoreManager.products where id = ?', [id])


 return product;
}

module.exports = {
  findAll,
  findById,
}