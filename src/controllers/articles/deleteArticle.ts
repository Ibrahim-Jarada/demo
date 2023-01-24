import { Response, NextFunction } from 'express';
import { constants, dto } from '../../helpers';
import { IUserRequest } from '../../interfaces';
import { deleteArticle } from '../../services';

export default async (
  request: IUserRequest,
  response: Response,
  next: NextFunction,
): Promise<void> => {
  const { id, userId } = dto.articlesDTO.deleteArticleDTO(request);

  try {
    await deleteArticle({ id, userId });

    response.json(constants.messages.data);
  } catch (error) {
    next(error);
  }
};
