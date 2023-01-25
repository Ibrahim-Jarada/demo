import Joi from 'joi';
import {
  idValidation,
  rateValueValidation as rateValue,
} from '../validationRules';

export default Joi.object({
  id: idValidation,
  rateValue,
});
