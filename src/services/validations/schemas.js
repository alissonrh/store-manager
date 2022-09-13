const Joi = require('joi');

/* const idSchema = Joi.number().integer().required(); */
const nameSchema = Joi.string().min(5).required();

const addNewProductSchema = Joi.object({
  /* id: idSchema, */
  name: nameSchema,
});

module.exports = {
  addNewProductSchema,
};