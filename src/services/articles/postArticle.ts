import { Article } from '../../database';
import { IPostArticleDTO } from '../../helpers/dto/services';

const postArticle: IPostArticleDTO = ({ userId, articleText, imageUrl }) => Article.create({
  userId,
  articleText,
  imageUrl,
});

export default postArticle;
