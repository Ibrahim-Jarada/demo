import CustomError from './CustomError';
import { messages, httpStatus } from './constants';

export const NOT_EXIST_ERROR = new CustomError(
  messages.authResponse.NOT_EXIST,
  httpStatus.NOT_FOUND,
);

export const WRONG_EMAIL_OR_PASSWORD_ERROR = new CustomError(
  messages.authResponse.WRONG_EMAIL_OR_PASSWORD,
  httpStatus.UNAUTHORIZED,
);

export const UNAUTHORIZED_ERROR = new CustomError(
  messages.authResponse.UNAUTHORIZED,
  httpStatus.UNAUTHORIZED,
);

export const INCORRECT_PASSWORD_ERROR = new CustomError(
  messages.authResponse.INCORRECT_PASSWORD,
  httpStatus.BAD_REQUEST,
);

export const ALREADY_EXIST_ERROR = new CustomError(
  messages.authResponse.ALREADY_EXIST,
  httpStatus.UNAUTHORIZED,
);

export const NOT_EXIST_USER_ERROR = new CustomError(
  messages.authResponse.NOT_EXIST_USER,
  httpStatus.BAD_REQUEST,
);

export const BAD_REQUEST_ERROR = new CustomError(
  messages.authResponse.BAD_REQUEST,
  httpStatus.BAD_REQUEST,
);
