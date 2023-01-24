import {
  Secret,
} from 'jsonwebtoken';
import { Request } from 'express';
import { IUser } from '../database/interfaces';

interface IServerAddress{
  port: number;
  address: string;
}

interface IUserInfo{
  id: number;
  email: string;
  name: string;
}

interface IServer{
  SECRET_KEY: Secret;
  APP_MAIL: string;
  MAIL_PASSWORD: string;
  PORT: string;
  AWS_BUCKET_NAME: string;
  AWS_BUCKET_REGION: string;
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
}
interface IDatabase {
  DATABASE_URL: string;
}

interface IAddUser{
    name: string;
    email: string;
    password: string;
}

interface IUserRequest extends Request {
  user?: IUser,
}

export {
  IUserRequest,
  IServerAddress,
  IUserInfo,
  IServer,
  IDatabase,
  IAddUser,
  IUser,
};
