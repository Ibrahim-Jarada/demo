import { DataTypes } from 'sequelize';
import sequelize from '../connections';
import { IComment } from '../interfaces';

const Comment = sequelize.define<IComment>('comments', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  articleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  commentText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Comment;
