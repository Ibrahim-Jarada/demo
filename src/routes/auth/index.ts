import { Router } from 'express';

import { signupHandler, loginHandler } from '../../controllers';

import {
  validator, loginSchema, signupSchema,
} from '../../helpers';

const router = Router();

router.post('/login', validator.body(loginSchema), loginHandler);
router.post('/signup', validator.body(signupSchema), signupHandler);

export default router;
