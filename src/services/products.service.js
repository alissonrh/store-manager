const { productsModels } = require('../models');

const getAllProducts = async () => {
  const products = await productsModels.getAll();
  return { type: null, message: products };
};

const isProductsExist = async (productId) => {
  const product = await productsModels.findById(productId);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: product };
};

module.exports = {
  isProductsExist,
  getAllProducts,
};