const Joi = require('joi');

/* const idSchema = Joi.number().integer().required(); */
const nameSchema = Joi.string().min(5).required();

const salesProducts = Joi.object({
  productId: Joi.number().integer().required()
    .messages({ 'any.required': '"productId" is required' }),
  quantity: Joi.number().integer().min(1).required()
    .messages({
      'any.required': '"quantity" is required',
      'number.min': '"quantity" must be greater than or equal to 1',
    }),
});

const addNewSold = Joi.array().items(salesProducts);

const addNewProductSchema = Joi.object({
  /* id: idSchema, */
  name: nameSchema,
});

module.exports = {
  addNewProductSchema,
  addNewSold,
};