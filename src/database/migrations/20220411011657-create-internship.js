'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('internships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_internship: {
        type: Sequelize.STRING
      },
      ideal_period_internship: {
        type: Sequelize.STRING
      },
      couser_internship: {
        type: Sequelize.STRING
      },
      weekly_period_internship: {
        type: Sequelize.STRING
      },
      email_internship: {
        type: Sequelize.STRING
      },
      schedules_internship: {
        type: Sequelize.STRING
      },
      number_vacancies_internship: {
        type: Sequelize.STRING
      },
      description_internship: {
        type: Sequelize.STRING
      },
      requirements_internship: {
        type: Sequelize.STRING
      },
      remuneration_internship: {
        type: Sequelize.INTEGER
      },
      remuneration_value_internship: {
        type: Sequelize.INTEGER
      },
      professor_responsable_internship: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'professors',
          },
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        allowNull: true,
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
    await queryInterface.dropTable('internships');
  }
};