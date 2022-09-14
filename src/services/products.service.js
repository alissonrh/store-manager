const { productsModels } = require('../models');
const { validateNewProduct } = require('./validations/validationsIputValues');

const getAllProducts = async () => {
  const products = await productsModels.getAll();
  return { type: null, message: products };
};

const isProductsExist = async (productId) => {
  const product = await productsModels.findById(productId);
  if (!product) {
 return {
    type: 'PRODUCT_NOT_FOUND', message: 'Product not found' }; 
}
  return { type: null, message: product };
};

const createNewProduct = async (name) => {
  const error = validateNewProduct(name);
  if (error.type) return error;
  const newProduc = await productsModels.insert({ name });
  const product = await productsModels.findById(newProduc);
  return { type: null, message: product };
};

module.exports = {
  isProductsExist,
  getAllProducts,
  createNewProduct,
};