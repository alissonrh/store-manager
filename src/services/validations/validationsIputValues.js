const {
  addNewProductSchema,
} = require('./schemas');

const validateNewProduct = (name) => {
  const { error } = addNewProductSchema.validate({ name });
  if (error) {
    return { type: 'INVALID_VALUE', message: error.message };
  }
  return { type: null, message: '' };
};

module.exports = {
  validateNewProduct,
};