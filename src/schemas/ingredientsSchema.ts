import Joi from 'joi';

const ingredientsSchema = Joi.object({
  name: Joi.string().required(),
  supplier: Joi.string().max(100).required(),
  isOrganic: Joi.string().valid('sim', 'não').required(),
  certificate: Joi.string().uri(),
  invoice: Joi.string().uri().required(),
  buyDate: Joi.date().required(), 
  productBatch: Joi.string().required()
});

export default ingredientsSchema;