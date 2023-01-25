import { IUserRequest } from '../../interfaces';

interface IPostArticle {
  userId: number;
  image: string;
  articleText: string;
}

type IPostArticleDTO = (_request: IUserRequest) => IPostArticle;

export const postArticleDTO: IPostArticleDTO = (request) => ({
  userId: Number(request?.user?.id),
  image: request.body.image,
  articleText: request.body.articleText,
});

interface IUpdateArticle {
  id: number;
  image: string;
  userId: number;
  articleText:string;
}
type IUpdateArticleDTO = (request: IUserRequest) => IUpdateArticle;

export const updateArticleDTO: IUpdateArticleDTO = (request) => ({
  id: request.body.id,
  userId: Number(request?.user?.id),
  articleText: request.body.articleText,
  image: request.body.image,
});

interface IDeleteArticle {
  id: number;
  userId:number;
}
type IDeleteArticleDTO = (request: IUserRequest) => IDeleteArticle;

export const deleteArticleDTO: IDeleteArticleDTO = (request) => ({
  id: Number(request.body.id),
  userId: Number(request?.user?.id),
});

interface IRateDTO{
    articleId: number;
  userId: number;
  rateValue: number;
}

type IRateAtrticleDTO = (request: IUserRequest) => IRateDTO;
export const rateArticleDTO: IRateAtrticleDTO = (request) => ({
  articleId: Number(request.body.id),
  userId: Number(request?.user?.id),
  rateValue: Number(request.body.rateValue),
});
