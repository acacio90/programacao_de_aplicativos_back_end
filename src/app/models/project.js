import { Model, DataTypes } from 'sequelize';

class Project extends Model {
  static init(connection) {
    super.init(
      {
        name_project: DataTypes.STRING,
        turno_project: DataTypes.STRING,
        ideal_period_project: DataTypes.STRING,
        course_project: DataTypes.STRING,
        weekly_workload_project: DataTypes.STRING,
        email_project: DataTypes.STRING,
        schedules_project: DataTypes.STRING,
        number_vacancies_project: DataTypes.STRING,
        description_project: DataTypes.STRING,
        requirements_project: DataTypes.STRING,
        remuneration_project: DataTypes.STRING,
        remuneration_value_project: DataTypes.STRING,
        professor_responsable_project: DataTypes.INTEGER,
      },
      {
        sequelize: connection,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Professor, {
      foreignKey: 'id',
      as: 'professor_project'
    })
  }
}

export default Project;