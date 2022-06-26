import { Model, DataTypes } from 'sequelize';
import * as argon2 from 'argon2'


class Professor extends Model {
  static init(connection) {
    super.init(
      {
        username_professor: DataTypes.STRING,
        password_professor: DataTypes.STRING,
        turno_professor: DataTypes.STRING,
        access_professor: DataTypes.INTEGER,
        course_professor: DataTypes.STRING,
        turno_professor: DataTypes.STRING,
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
    // this.belongsTo(models.File, {
    //   foreignKey: 'img_id',
    //   as: 'img',
    // });
  }

  checkPassword(password) {
    return argon2.verify(this.password_professor, password);
  }
}

export default Professor;