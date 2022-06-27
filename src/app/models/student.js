import { Model, DataTypes } from 'sequelize';
import * as argon2 from 'argon2'

class Student extends Model {
  static init(connection) {
    super.init(
      {
        username_student: DataTypes.STRING,
        password_student: DataTypes.STRING,
        turno_student: DataTypes.STRING,
        access_student: DataTypes.INTEGER,
        course_student: DataTypes.STRING,
        email_student: DataTypes.STRING,
        contact_student: DataTypes.STRING,
        city_student: DataTypes.STRING,
        description_student: DataTypes.STRING,
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
    this.belongsTo(models.File, {
      foreignKey: 'img_id',
      as: 'img',
    });
  }

  checkPassword(password) {
    return argon2.verify(this.password_student, password);
  }
}

export default Student;