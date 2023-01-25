import { DataTypes } from 'sequelize';
import sequelize from '../connections';
import { IRating } from '../interfaces';

const Rating = sequelize.define<IRating>(
  'ratings',
  {
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
    rateValue: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ['article_id', 'user_id'],
      },
    ],
    paranoid: true,
  },
);

export default Rating;
