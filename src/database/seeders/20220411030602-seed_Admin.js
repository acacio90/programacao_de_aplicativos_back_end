const argon2 = require('argon2');

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Admins', [
      {
        username_admin: 'test',
        password_admin: await argon2.hash('test'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Admins', null, {});
  },
};