const camelize = require('camelize');
const connection = require('./connection');

const insert = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales VALUES()',
    [],
  );
  return insertId;
};

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM sales_products INNER JOIN sales on sales_products.sale_id = sales.id',
  );
  
  return camelize(result);
};

const findById = async (saleId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM sales WHERE id = ?',
    [saleId],
  );
  return camelize(result);
};

module.exports = {
  insert,
  getAll,
  findById,
};