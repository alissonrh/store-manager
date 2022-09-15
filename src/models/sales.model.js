const camelize = require('camelize');
const connection = require('./connection');

const insert = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales VALUES()',
    [],
  );
  return insertId;
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
  findById,
};