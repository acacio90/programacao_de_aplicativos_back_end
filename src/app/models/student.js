import { Model, DataTypes } from 'sequelize';

class Student extends Model {
  static init(connection) {
    super.init(
      {
        username_student: DataTypes.STRING,
        password_student: DataTypes.STRING,
        course_student: DataTypes.STRING,
        email_student: DataTypes.STRING,
        contact_student: DataTypes.STRING,
        city_student: DataTypes.STRING,
        description_student: DataTypes.STRING,
        image_student: DataTypes.STRING,
        ra_student: DataTypes.STRING,
        period_student: DataTypes.STRING,
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

export default Student;