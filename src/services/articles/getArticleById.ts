import { col, fn } from 'sequelize';
import { errorMessages } from '../../helpers';
import { Article, Comment, Rating } from '../../database';
import { IGetArticleByIdDTO } from '../../helpers/dto/services';

const getArticleById: IGetArticleByIdDTO = async ({ id, userId }) => {
  const article = await Article.findOne({
    where: { id, userId },
    group: ['articles.id'],
    include: [
      {
        model: Comment,
        attributes: [],
      },
      {
        model: Rating,
        attributes: [],
      },
    ],
    attributes: [
      'id',
      'articleText',
      'imageUrl',
      'userId',
      [fn('COUNT', col('comments.id')), 'commentsCount'],
      [fn('AVG', col('ratings.rate_value')), 'rating'],
    ],
  });
  if (!article) throw errorMessages.BAD_REQUEST_ERROR;
  return article;
};

export default getArticleById;
