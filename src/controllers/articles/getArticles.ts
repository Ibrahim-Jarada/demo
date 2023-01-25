import { Response, NextFunction } from 'express';
import { IUserRequest } from '../../interfaces';
import { getArticles } from '../../services';

export default async (
  request: IUserRequest,
  response: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const articles = await getArticles();
    response.json({ data: articles });
  } catch (error) {
    next(error);
  }
};
