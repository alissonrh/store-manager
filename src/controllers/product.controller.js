const { productService } = require('../services');
const errorMap = require('../utils/errorMap');

const getAllProducts = async (_req, res) => {
  const { message } = await productService.getAllProducts();
  res.status(200).json(message);
};

const getProductId = async (req, res) => {
  const { productId } = req.params;
  const { type, message } = await productService.isProductsExist(productId);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const createProducts = async (req, res) => {
  const { name } = req.body;

  const { message } = await productService.createNewProduct(name);

  /*   if (type) return res.status(errorMap.mapError(type).json(message)); */

  res.status(201).json(message);
};

module.exports = {
  getProductId,
  getAllProducts,
  createProducts,
};
