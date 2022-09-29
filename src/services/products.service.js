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

const attProductById = async (productId, dataToUpdate) => {
  const error = validateNewProduct(dataToUpdate.name);
  if (error.type) return error;

  const productsExist = await isProductsExist(productId);
  if (productsExist.type) return productsExist;

  await productsModels.updateById(productId, dataToUpdate);
  const getUpdatedProduct = await productsModels.findById(productId);

  return { type: null, message: getUpdatedProduct };
};

const deleteProduct = async (productId) => {
  const productsExist = await isProductsExist(productId);
  if (productsExist.type) return productsExist;

  await productsModels.deleteProductById(productId);

  return { type: null };
};

const getProductByQuery = async (query) => {
  const result = await productsModels.getProductByQuery(query);

  return result; 
};

module.exports = {
  isProductsExist,
  getAllProducts,
  createNewProduct,
  attProductById,
  deleteProduct,
  getProductByQuery,
};