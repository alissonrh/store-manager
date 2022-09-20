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

  const { type, message } = await productService.createNewProduct(name);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

const attProductId = async (req, res) => {
  const id = req.params.productId;
  const dataToUpdate = { id, ...req.body };
  const { type, message } = await productService.attProductById(id, dataToUpdate);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  const { type, message } = await productService.deleteProduct(productId);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(204).json(message);
};

module.exports = {
  getProductId,
  getAllProducts,
  createProducts,
  attProductId,
  deleteProduct,
};
