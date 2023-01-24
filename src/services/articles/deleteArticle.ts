import { errorMessages } from '../../helpers';
import { Article } from '../../database';
import { IDeleteAtrticleDTO } from '../../helpers/dto/services';

const deleteArticle: IDeleteAtrticleDTO = async ({ id, userId }) => {
  const toBeDeleted = await Article.destroy({ where: { id, userId } });
  if (toBeDeleted === 0) throw errorMessages.BAD_REQUEST_ERROR;
};
export default deleteArticle;
