const {
  addNewProductSchema,
  addNewSold,
} = require('./schemas');

const validateNewProduct = (name) => {
  const { error } = addNewProductSchema.validate({ name });
  if (error) {
    return { type: 'INVALID_VALUE', message: error.message };
  }
  return { type: null, message: '' };
};

const validateCreateSaleSchema = (salesProducts) => {
  const { error } = addNewSold.validate(salesProducts);

  if (error) {
    if (error.message.includes('must be greater than or equal to 1')) {
      return { type: 'INVALID_VALUE', message: error.message };
    }

    return { type: 'BAD_REQUEST', message: error.message };
  }

  return { type: null, message: '' };
};

module.exports = {
  validateNewProduct,
  validateCreateSaleSchema,
};