import { DataTypes } from 'sequelize';
import sequelize from '../connections';
import { IArticle } from '../interfaces';

const Article = sequelize.define<IArticle>('articles', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  articleText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Article;
