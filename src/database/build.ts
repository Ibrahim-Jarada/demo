import { sequelize } from '.';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
(async () => {
  try {
    await sequelize.sync({ force: true });
  } catch (e) {
    console.log(e);
  }
})();
