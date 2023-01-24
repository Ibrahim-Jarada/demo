export const messages = {
  authResponse: {
    NOT_EXIST_USER: 'NOT EXIST USER',
    BAD_REQUEST: 'BAD REQUEST',
    ALREADY_EXIST: 'ALREADY EXIST USER',
    INCORRECT_PASSWORD: 'INCORRECT PASSWORD',
    UNAUTHORIZED: 'UNAUTHORIZED',
    APPROVED_USER: 'APPROVED ACCOUNT',
    NOT_EXIST: 'NOT EXIST USER',
    WRONG_EMAIL_OR_PASSWORD: 'Incorrect email or password',
    SUCCESS_LOGIN: 'SUCCESS LOGIN',
    SUCCESS_SIGNUP: 'SUCCESS SIGNUP',
    LOGOUT: 'SUCCESS LOGOUT',
  },
  token: {
    ACCESS_TOKEN: 'accessToken',
  },
  data: {
    SUCCESS: 'SUCCESS PROCESS',
  },
  responses: {
    NO_STRIPE_ACCOUNT: 'User has no stripe account yet',
    SUCCESS_PAYOUT_APPROVAL: 'Payout approved successfully',
    SUCCESS_PAYOUT_REJECTION: 'Payout rejected successfully',
    NO_BALANCE: 'No enough balance to ask a payout',
    WRONG_DATE: "You can't create a report ended at a date after this moment",
    SUCCESS_REPORT_CREATION: 'New report was created successfully and the revenue calculation process has been launched. It can take up to 16 minutes',
    PENDING_CALCULATION_PROCCESS: (remainingMins:number):string => `There is a pending calculation proccess, will be settled after ${remainingMins} minutes`,
    SUCCESS_RESTART_OF_CALCULATION_PROCCESS: 'Failed calculation proccess was restarted successfully',
    WRONG_REPORT_DURATION: "Report end date shouldn't be the same as report start",
  },
  stripe: {
    SUCCESS_ADD: "User's Stripe Account Added Successfully",
    SUCCESS_UPDATE: "User's Stripe Account Updated Successfully",
  },
};

export const httpStatus = {
  UNAUTHORIZED: 401,
  CREATED: 201,
  OK: 200,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  REDIRECT: 302,
};

export const errorResponse = {
  CLIENT: 'PAGE NOT FOUND',
  SERVER: 'INTERNAL SERVER ERROR',
};

export const LOGGER_LEVELS = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

export const EMAIL_REGEX = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,10}$/;

export const LOGGER_COLORS = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'cyan',
  debug: 'gray',
};

export const PASSWORD_LENGTH = 15;
export const SALT_ROUNDS = 10;

export const emailType = {
  CREATE: 'create',
  VERIFY: 'verify',
  RESET: 'reset',
  APPROVE: 'approve',
  REJECT: 'reject',
};

export const expire = {
  EXP_30d: '30d',
  EXP_24h: '24h',
};

export const validationRulesMessages = {
  VALID_EMAIL: 'You must enter a valid Email',
  NAME_EMPTY: 'Name cannot be empty',
  NAME_REQUIRED: 'Name is required',
  PASSWORD_LENGTH: 'Password length must be between 6 and 33 characters',
  PASSWORD_MATCH: 'New password should not be the same as the old one',
};
