import {
  IArticle, IRating, IUser,
} from '../../database/interfaces';

import { IAddUser } from '../../interfaces';

export type GetUserByEmailDTO = (email: string) => Promise<IUser | null>;

export type GetUserByIdDTO = (id: number) => Promise<IUser | null>;

export type AddUserDTO = (data: IAddUser) => Promise<IUser>;

export type IGetArticlesDTO = () => Promise<IArticle[]>;
export type IGetArticleByIdDTO = ({ id, userId }:{id:number, userId:number}) => Promise<IArticle>;

export type IPostArticleDTO = ({ userId, articleText, imageUrl }:{
  userId:number,
  articleText:string,
  imageUrl:string
}) => Promise<IArticle>;

export type IDeleteAtrticleDTO = ({
  id,
  userId,
}: {
  id: number;
  userId: number;
}) => Promise<void>;

export type IRateAtrticleDTO = ({
  articleId,
  userId,
  rateValue,
}: {
  articleId: number;
  userId: number;
  rateValue: number;
}) => Promise<IRating>;
