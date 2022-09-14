const {
  addNewProductSchema,
} = require('./schemas');

const validateNewProduct = (name) => {
  const { error } = addNewProductSchema.validate({ name });
  console.log(error.message.length);
  if (error.message.length < 20) {
    return { type: 'BAD_REQUEST', message: error.message };
  }
  if (error.message.length > 20) {
    return { type: 'INVALID_VALUE', message: error.message };
  } 
    return { type: null, message: '' };
};

module.exports = {
  validateNewProduct,
};