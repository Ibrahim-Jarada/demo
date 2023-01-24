import { Response, NextFunction } from 'express';
import { dto, upload } from '../../helpers';
import { IUserRequest } from '../../interfaces';
import { getArticleById } from '../../services';

export default async (
  request: IUserRequest,
  response: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const {
      articleText, id, image, userId,
    } = dto.articlesDTO.updateArticleDTO(request);

    let imageUrl;

    const article = await getArticleById({ id, userId });

    if (image) {
      imageUrl = await upload(image, userId);
    } else {
      imageUrl = article.imageUrl;
    }

    article.imageUrl = imageUrl;
    article.articleText = articleText || article.articleText;
    await article.save();

    response.json({ data: article });
  } catch (error) {
    next(error);
  }
};
