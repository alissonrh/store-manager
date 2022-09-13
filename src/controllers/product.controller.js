const { productService } = require('../services');
const errorMap = require('../utils/errorMap');

const getAllProducts = async (_req, res) => {
  const { message } = await productService.getAllProducts();
  res.status(200).json(message);
};

const getProductId = async (req, res) => {
  const { productId } = req.params;
  const { type, message } = await productService.isProductsExist(productId);
  console.log(productId, type, message);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

module.exports = {
  getProductId,
  getAllProducts,
};
