import { Response, NextFunction } from 'express';
import { dto } from '../../helpers';
import { IUserRequest } from '../../interfaces';
import { rateArticle } from '../../services';

export default async (
  request: IUserRequest,
  response: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { articleId, rateValue, userId } = dto.articlesDTO.rateArticleDTO(request);
    const articleRating = await rateArticle({ articleId, rateValue, userId });
    response.json({ data: articleRating });
  } catch (error) {
    next(error);
  }
};
