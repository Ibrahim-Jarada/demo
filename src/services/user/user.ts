import { User } from '../../database';
import { IAddUser } from '../../interfaces';
import { AddUserDTO, GetUserByEmailDTO, GetUserByIdDTO } from '../../helpers/dto/services';

const getUserByEmail: GetUserByEmailDTO = (email: string) => User.findOne({ where: { email } });

const getUserById: GetUserByIdDTO = (id: number) => User.findOne({
  where: { id },
  attributes: { exclude: ['password'] },
});

const getAllUserDataById: GetUserByIdDTO = (id: number) => User.findOne({
  where: { id },
});

const addUser: AddUserDTO = (data: IAddUser) => User.create(data);

export {
  getUserByEmail,
  getUserById,
  addUser,
  getAllUserDataById,
};
