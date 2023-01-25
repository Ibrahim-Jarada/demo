import {
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

interface IDatabase {
  DATABASE_URL: string;
  ENCRYPTION_SECRET_KEY: string;
}

interface IUser extends Model<
InferAttributes<IUser>, InferCreationAttributes<IUser>
> {
  id?: number;
  name: string;
  email: string;
  password: string;
}

interface IArticle
  extends Model<InferAttributes<IArticle>, InferCreationAttributes<IArticle>> {
  id?: number;
  userId: number;
  articleText: string;
  imageUrl: string;
}

interface IComment
  extends Model<InferAttributes<IComment>, InferCreationAttributes<IComment>> {
  id?: number;
  userId: number;
  articleId: number;
  commentText: string;
}

interface IRating
  extends Model<InferAttributes<IRating>, InferCreationAttributes<IRating>> {
  id?: number;
  userId: number;
  articleId: number;
  rateValue: number;
}

export {
  IUser, IDatabase, IArticle, IComment, IRating,
};
