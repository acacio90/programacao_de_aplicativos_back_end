'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username_student: {
        type: Sequelize.STRING
      },
      password_student: {
        type: Sequelize.STRING
      },
      course_student: {
        type: Sequelize.STRING
      },
      email_student: {
        type: Sequelize.STRING
      },
      contact_student: {
        type: Sequelize.STRING
      },
      description_student: {
        type: Sequelize.STRING
      },
      image_student: {
        type: Sequelize.STRING
      },
      ra_student: {
        type: Sequelize.INTEGER
      },
      period_student: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Students');
  }
};