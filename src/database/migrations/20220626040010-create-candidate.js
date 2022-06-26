'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('candidates', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      status_candidate: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      student_candidate: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'students',
          },
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        allowNull: true,
      },
      project_candidate: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'projects',
          },
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
    },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('candidates');
  }
};
