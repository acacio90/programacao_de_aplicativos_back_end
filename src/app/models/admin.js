import { Model, DataTypes } from 'sequelize';

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
}

export default Admin;