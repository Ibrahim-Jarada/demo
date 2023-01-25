import { IUser } from '../database/interfaces';
import CustomError from './CustomError';
import { messages, httpStatus } from './constants';
import { getUserByEmail } from '../services';
import { ALREADY_EXIST_ERROR, NOT_EXIST_ERROR } from './errorMessages';

/**
 * @description RegistrationCheck is a function  used to check user existence sign up
 * @param {string} email user email
 * @returns {Promise<string | void>}
 * if the user exist return error existence, if not exist continue registration
 */
export const RegistrationCheck = async (email: string): Promise<string> => {
  try {
    const userExists = await getUserByEmail(email);
    if (userExists) {
      throw ALREADY_EXIST_ERROR;
    }

    return messages.authResponse.NOT_EXIST;
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError(String(error), httpStatus.INTERNAL_SERVER_ERROR);
  }
};

/**
 * @description ApprovalChecks is a function used to check user approve => true LogIn, ResetPassword
 * @param {IUser | null}  userExists user object
 * @returns {Promise<IUser>}
 * if the user dose not exist return error, then check his status => if approved return User Object
 */
export const ApprovalChecks = async (userExists: IUser | null): Promise<IUser> => {
  try {
    if (!userExists) throw NOT_EXIST_ERROR;

    return userExists;
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError(String(error), httpStatus.INTERNAL_SERVER_ERROR);
  }
};
