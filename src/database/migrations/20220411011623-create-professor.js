'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('professors', {
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
      turno_professor: {
        type: Sequelize.STRING
      },
      access_professor: {
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
      course_professor: {
        type: Sequelize.STRING
      },
      email_professor: {
        type: Sequelize.STRING,
        unique: true
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
    await queryInterface.dropTable('professors');
  }
};