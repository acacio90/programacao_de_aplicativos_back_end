'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Professors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username_professor: {
        type: Sequelize.STRING
      },
      password_professor: {
        type: Sequelize.STRING
      },
      course_professor: {
        type: Sequelize.STRING
      },
      email_professor: {
        type: Sequelize.STRING
      },
      contact_professor: {
        type: Sequelize.STRING
      },
      city_professor: {
        type: Sequelize.STRING
      },
      description_professor: {
        type: Sequelize.STRING
      },
      status_professor: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Professors');
  }
};