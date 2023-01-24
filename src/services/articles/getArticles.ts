import { col, fn } from 'sequelize';
import { Article, Comment, Rating } from '../../database';
import { IGetArticlesDTO } from '../../helpers/dto/services';

const getArticles: IGetArticlesDTO = () => Article.findAll({
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

export default getArticles;
