import { Request } from 'express';
import {
  ILogin, ISignup, IUserAuth,
} from '../../interfaces/DtoAuth';
import { IUser, IUserRequest } from '../../interfaces';

export const loginDTO = (request: Request): ILogin => ({
  email: request.body.email.toLowerCase(),
  password: request.body.password,
  rememberMe: request.body.rememberMe,
});

export const signupDTO = (request: Request): ISignup => ({
  password: request.body.password,
  name: request.body.name,
  email: request.body.email.toLowerCase(),
});

export const userAuthDTO = (request: IUserRequest): IUserAuth => ({
  user: request.user as IUser,
});
