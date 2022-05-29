import { Model, DataTypes } from 'sequelize';

class Professor extends Model {
  static init(connection) {
    super.init(
      {
        username_professor: DataTypes.STRING,
        password_professor: DataTypes.STRING,
        course_professor: DataTypes.STRING,
        email_professor: DataTypes.STRING,
        contact_professor: DataTypes.STRING,
        city_professor: DataTypes.STRING,
        description_professor: DataTypes.STRING,
        status_professor: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
    return this;
  }

  static associate(models) {
  }

}

export default Professor;