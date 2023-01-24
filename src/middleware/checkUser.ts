import { Response, NextFunction } from 'express';
import {
  verifyToken, tokenError, errorMessages,
} from '../helpers';
import { getAllUserDataById } from '../services';
import { IUserRequest } from '../interfaces';

export default () => async (
  request: IUserRequest,
  _res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { accessToken } = request.cookies;

    if (!accessToken) {
      throw errorMessages.UNAUTHORIZED_ERROR;
    }

    const userPayload = await verifyToken(accessToken);

    const { id } = userPayload;

    const userData = await getAllUserDataById(id as number);

    if (!userData) {
      throw errorMessages.NOT_EXIST_ERROR;
    }

    request.user = userData;
    next();
  } catch (error) {
    next(tokenError(error as Error));
  }
};
