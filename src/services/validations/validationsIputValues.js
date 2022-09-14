const {
  addNewProductSchema,
} = require('./schemas');

const validateNewProduct = (name) => {
  const { error } = addNewProductSchema.validate({ name });
  if (!error) {
    return { type: null, message: '' };
  }  
  if (error.message.length < 20) {
    return { type: 'BAD_REQUEST', message: error.message };
  }
  if (error.message.length > 20) {
    return { type: 'INVALID_VALUE', message: error.message };
  }
};

module.exports = {
  validateNewProduct,
};