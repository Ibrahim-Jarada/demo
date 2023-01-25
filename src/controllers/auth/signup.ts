import { Request, Response, NextFunction } from 'express';
import { hash } from 'bcrypt';
import {
  checkExistence, constants, sendEmail, dto,
} from '../../helpers';
import { addUser } from '../../services';

export default async (request: Request, response: Response, next: NextFunction):Promise<void> => {
  const { name, email, password } = dto.authDTO.signupDTO(request);
  const {
    httpStatus, emailType, SALT_ROUNDS,
  } = constants;

  try {
    await checkExistence.RegistrationCheck(email);

    const hashedPassword = await hash(password, SALT_ROUNDS);

    const user = await addUser({
      name,
      email,
      password: hashedPassword,
    });

    await sendEmail({
      email: user.email,
      type: emailType.VERIFY,
      name: user.name,
    });

    response
      .status(httpStatus.CREATED)
      .json({
        message: constants.messages.authResponse.SUCCESS_SIGNUP,
        data: { name, email },
      });
  } catch (error) {
    next(error);
  }
};
