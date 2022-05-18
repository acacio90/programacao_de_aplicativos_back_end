const argon2 = require('argon2');

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('admins', [
      {
        username_admin: 'test',
        password_admin: await argon2.hash('test'),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('admins', null, {});
  },
};