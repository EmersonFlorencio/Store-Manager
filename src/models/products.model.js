const { connection } = require('./connection');

const findAll = async () => {
  const [listOfProducts] = await connection.execute('select * from StoreManager.products;')


  return listOfProducts
}

module.exports = {
  findAll,
}