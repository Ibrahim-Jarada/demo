import { IUser } from '../database/interfaces';

export interface ILogin {
  rememberMe: string,
  password: string,
  email: string,
}

export interface ISignup {
  password: string,
  name: string,
  email: string,
}

export interface IUserAuth {
user?: IUser
}
