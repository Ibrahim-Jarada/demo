import Joi from 'joi';
import {
  stringValidation,
} from '../validationRules';

export default Joi.object({
  image: stringValidation.required(),
  articleText: stringValidation.required(),
});
