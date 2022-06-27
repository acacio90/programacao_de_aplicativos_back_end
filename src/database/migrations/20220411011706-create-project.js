'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_project: {
        type: Sequelize.STRING
      },
      turno_project: {
        type: Sequelize.STRING
      },
      ideal_period_project: {
        type: Sequelize.STRING
      },
      course_project: {
        type: Sequelize.STRING
      },
      weekly_workload_project: {
        type: Sequelize.STRING
      },
      email_project: {
        type: Sequelize.STRING
      },
      schedules_project: {
        type: Sequelize.STRING
      },
      number_vacancies_project: {
        type: Sequelize.STRING
      },
      description_project: {
        type: Sequelize.STRING
      },
      requirements_project: {
        type: Sequelize.STRING
      },
      remuneration_project: {
        type: Sequelize.INTEGER
      },
      remuneration_value_project: {
        type: Sequelize.INTEGER
      },
      professor_responsable_project: {
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
    await queryInterface.dropTable('projects');
  }
};