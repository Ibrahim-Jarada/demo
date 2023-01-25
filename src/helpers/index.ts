import * as Constants from './constants';
import * as Checkers from './checkUserExistence';
import { validator } from './validate';
import * as DTO from './dto';
import * as ERROR_MESSAGES from './errorMessages';

const checkExistence = Checkers;

const dto = DTO;

const constants = Constants;
const errorMessages = ERROR_MESSAGES;

export {
  validator, checkExistence, dto, errorMessages,
};
export {
  signupSchema,
  loginSchema,
  postArticleSchema,
  deleteArticleSchema,
} from './validation';

export {
  constants,
};

export { default as Logger } from './logger';
export { default as CustomError } from './CustomError';
export { default as validateError } from './validationError';
export { default as sendEmail } from './emailService';
export { default as tokenError } from './tokenError';
export { signToken, verifyToken } from './jwt';
export { default as upload } from './uploadImage';
