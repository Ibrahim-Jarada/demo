import Joi from 'joi';
import { IServer } from '../interfaces';
import { stringValidation } from '../helpers/validationRules';

const envVarsSchema = Joi.object({
  JWT_SECRET: stringValidation.required(),
  APP_MAIL: stringValidation.required(),
  MAIL_PASSWORD: stringValidation.required(),
  PORT: stringValidation.required(),
  AWS_BUCKET_NAME: stringValidation.required(),
  AWS_BUCKET_REGION: stringValidation.required(),
  AWS_ACCESS_KEY_ID: stringValidation.required(),
  AWS_SECRET_ACCESS_KEY: stringValidation.required(),
}).unknown().required();

const config = (): IServer => {
  const { error, value: envVars } = envVarsSchema.validate(process.env);

  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

  return {
    SECRET_KEY: envVars.JWT_SECRET,
    APP_MAIL: envVars.APP_MAIL,
    MAIL_PASSWORD: envVars.MAIL_PASSWORD,
    PORT: envVars.PORT,
    AWS_BUCKET_NAME: envVars.AWS_BUCKET_NAME,
    AWS_BUCKET_REGION: envVars.AWS_BUCKET_REGION,
    AWS_ACCESS_KEY_ID: envVars.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: envVars.AWS_SECRET_ACCESS_KEY,
  };
};

export default config;
