import { Model, DataTypes } from 'sequelize';

class Internship extends Model {
  static init(connection) {
    super.init(
      {
        name_internship: DataTypes.STRING,
        ideal_period_internship: DataTypes.STRING,
        couser_internship: DataTypes.STRING,
        weekly_period_internship: DataTypes.STRING,
        email_internship: DataTypes.STRING,
        schedules_internship: DataTypes.STRING,
        number_vacancies_internship: DataTypes.STRING,
        description_internship: DataTypes.STRING,
        requirements_internship: DataTypes.STRING,
        remuneration_internship: DataTypes.STRING,
        remuneration_value_internship: DataTypes.STRING,
        professor_responsable_internship: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Professor, {
      foreignKey: 'professor_responsable_internship',
      as: 'professor_internship'
    })
  }
}

export default Internship;