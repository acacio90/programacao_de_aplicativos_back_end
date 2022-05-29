import { Model, DataTypes } from 'sequelize';
import * as argon2 from 'argon2'

class Admin extends Model {
  static init(connection) {
    super.init(
      {
        username_admin: DataTypes.STRING,
        password_admin: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
    
    return this;
  }

  static associate(models) {
  }

  checkPassword(password) {
    return argon2.verify(this.password_admin, password);
  }
}

export default Admin;