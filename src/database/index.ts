import sequelize from './connections';
import {
  Article, Comment, Rating, User,
} from './models';

User.hasMany(Article);
Article.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Article.hasMany(Comment);
Comment.belongsTo(Article);

Article.hasMany(Rating);
Rating.belongsTo(Article);

export {
  sequelize,
  User,
  Article,
  Comment,
  Rating,
};
