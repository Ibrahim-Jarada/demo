import { Router } from 'express';
import { checkUser } from '../../middleware';
import {
  deleteArticle,
  getArticles,
  postArticle,
  updateArticle,
  rateArticle,
} from '../../controllers';
import {
  validator,
  postArticleSchema,
  deleteArticleSchema,
  updateArticleSchema,
  rateArticleSchema,
} from '../../helpers/validation';

const router = Router();

router.get('/articles', getArticles);

router.use(checkUser());

router.patch('/articles', validator.body(updateArticleSchema), updateArticle);
router.delete('/articles', validator.body(deleteArticleSchema), deleteArticle);
router.post('/articles', validator.body(postArticleSchema), postArticle);

router.post('/rate', validator.body(rateArticleSchema), rateArticle);

export default router;
