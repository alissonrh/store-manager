const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('./connection');

const insert = async (salesProducts) => {
  const columns = Object.keys(snakeize(salesProducts))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(salesProducts)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO sales_products (${columns}) VALUE (${placeholders})`,
    [...Object.values(salesProducts)],
  );

  return insertId;
};

const findById = async (saleId) => {
  const [result] = await connection.execute(
    'SELECT * FROM sales_products WHERE sale_id = ?',
    [saleId],
  );
  
  return camelize(result);
};

const updateById = async (saleId, salesProductsToAtt) => connection.execute(
    'UPDATE sales_products SET quantity = ? WHERE sale_id = ? AND product_id = ?',
    [salesProductsToAtt.quantity, saleId, salesProductsToAtt.productId],
  );

module.exports = {
  insert,
  findById,
  updateById,
};