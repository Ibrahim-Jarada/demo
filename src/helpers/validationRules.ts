import Joi from 'joi';

const EMAIL_REGEX = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,10}$/;

export const email = Joi.string().min(5).max(255).email()
  .regex(RegExp(EMAIL_REGEX))
  .rule({ message: 'You must enter a valid Email' })
  .required();

export const name = Joi.string()
  .required().messages({ 'string.empty': 'name cannot be empty', 'any.required': 'name is required' });

export const password = Joi.string().$.min(6).max(33)
  .rule({ message: 'Password length must be between 6 and 33 characters' })
  .required();

export const idValidation = Joi.number().min(1).required();

export const stringValidation = Joi.string();

export const rateValueValidation = Joi.number().min(1).max(5).required();
