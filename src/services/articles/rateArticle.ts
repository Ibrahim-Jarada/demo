import { errorMessages } from '../../helpers';
import { Rating } from '../../database';
import { IRateAtrticleDTO } from '../../helpers/dto/services';

const rateArticle: IRateAtrticleDTO = async ({
  articleId,
  userId,
  rateValue,
}) => {
  const isRated = await Rating.findOne({ where: { articleId, userId } });
  if (isRated) throw errorMessages.BAD_REQUEST_ERROR;
  return Rating.create({ articleId, userId, rateValue });
};
export default rateArticle;
