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

module.exports = {
  insert,
};