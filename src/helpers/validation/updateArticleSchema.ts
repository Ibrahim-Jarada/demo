import Joi from 'joi';
import { idValidation, stringValidation } from '../validationRules';

export default Joi.object({
  id: idValidation,
  image: stringValidation,
  articleText: stringValidation,
}).min(2).message('one field of  image, articleText  is required');
