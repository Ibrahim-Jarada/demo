import { Response, NextFunction } from 'express';
import _ from 'lodash';
import { emailType } from '../../helpers/constants';
import { User } from '../../database';
import { dto, sendEmail, upload } from '../../helpers';
import { IUserRequest } from '../../interfaces';
import { postArticle } from '../../services';

export default async (
  request: IUserRequest,
  response: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { userId, image, articleText } = dto.articlesDTO.postArticleDTO(request);
    const [{ Location: imageUrl }, users] = await Promise.all([
      upload(image, userId),
      User.findAll({
        attributes: ['name', 'email'],
      }),
    ]);

    const articles = await postArticle({ articleText, imageUrl, userId });

    // as sendgrid has 1000 max emails per request so divide users to multi emails if more than 1000
    await Promise.all([..._.chunk(users, 1000).map((email) => sendEmail({ email, name: 'user', type: emailType.CREATE }))]);

    response.json({ data: articles });
  } catch (error) {
    next(error);
  }
};
