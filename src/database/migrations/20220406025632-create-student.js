'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('students', {
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
      turno_student: {
        type: Sequelize.STRING
      },
      access_student: {
        type: Sequelize.INTEGER
      },
      img_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'files',
          },
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        allowNull: true,
      },
      course_student: {
        type: Sequelize.STRING
      },
      email_student: {
        type: Sequelize.STRING,
        unique: true
      },
      contact_student: {
        type: Sequelize.STRING
      },
      city_student: {
        type: Sequelize.STRING
      },
      description_student: {
        type: Sequelize.STRING
      },
      ra_student: {
        type: Sequelize.INTEGER
      },
      period_student: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  }
};