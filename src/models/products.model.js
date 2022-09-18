const snakeize = require('snakeize');
const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );

  return result;
};

const findById = async (productId) => {
  const [[result]] = await connection.execute('SELECT * FROM products WHERE id = ?', [productId]);
  return result;
};

const insert = async (name) => {
  const columns = Object.keys(name)
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(name)
    .map((_key) => '?')
    .join(', ');
  console.log('placeholders', placeholders);

  const [{ insertId }] = await connection.execute(
    `INSERT INTO products (${columns}) VALUE (${placeholders})`,
    [...Object.values(name)],
  );

  return insertId;
};

const updateById = async (productId, dataToUpdate) => {
  const formattedColumns = Object.keys(snakeize(dataToUpdate))
    .map((key) => `${key} = ?`)
    .join(', ');
  
  return connection.execute(
    `UPDATE products SET ${formattedColumns} WHERE id = ?`,
    [...Object.values(dataToUpdate), productId],
  );
};

module.exports = {
  getAll,
  findById,
  insert,
  updateById,
};