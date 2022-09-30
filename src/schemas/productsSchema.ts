import Joi from 'joi';

const productsSchema = Joi.object({
  name: Joi.string().required(),
  
});

export default productsSchema;