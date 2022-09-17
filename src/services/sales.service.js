const { validateCreateSaleSchema } = require('./validations/validationsIputValues');
const { salesModels, salesProductsModels, productsModels } = require('../models');

const saveSalesProducts = (salesProducts, saleId) => salesProducts.map(async (value) => {
    await salesProductsModels.insert({
      saleId,
      productId: value.productId,
      quantity: value.quantity,
    });
  });

const createSale = async (salesProducts) => {
  const validateInput = await validateCreateSaleSchema(salesProducts);
  if (validateInput.type) return validateInput;

  const arrayOfProducts = await Promise.all(salesProducts.map(async (value) => value.productId));

  const productExiste = await Promise.all(
    arrayOfProducts.map(async (value) => productsModels.findById(value)),
  );

  const someProductMissing = productExiste.some((p) => p === undefined);
  if (someProductMissing) {
    return {
      type: 'PRODUCT_NOT_FOUND', message: 'Product not found',
    };
  }

  const saleId = await salesModels.insert();

  await Promise.all(saveSalesProducts(salesProducts, saleId));
  return { type: null, message: { id: saleId, itemsSold: salesProducts } };
};

const getAllSales = async () => {
  const sales = await salesModels.getAll();
  await Promise.all(sales.map(async (e) => {
    delete e.id;
  }));
  
  return { type: null, message: sales };
};

const isSaleExist = async (saleId) => {
  const sale = await salesModels.findById(saleId);
  if (!sale) {
    return {
      type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  }
  const { date } = sale;
  const salesProducts = await salesProductsModels.findById(saleId);
  const newResult = await [];
  await Promise.all(salesProducts.map(async (e) => {
    delete e.saleId;
    newResult.push({ ...e, date });
  }));
  return { type: null, message: newResult };
};

module.exports = {
  createSale,
  getAllSales,
  isSaleExist,
};