import { Model, DataTypes } from 'sequelize';

class Candidate extends Model {
  static init(connection) {
    super.init(
      {
        status_candidate: DataTypes.INTEGER,
        student_candidate: DataTypes.INTEGER,
        project_candidate: DataTypes.INTEGER
      },
      {
        sequelize: connection,
      }
    );
    
    return this;
  }

  static associate(models) {
    this.hasMany(models.Student ,{
        foreignKey: 'id',
        as: 'candidate',
        onDelete: 'cascade'
      });
    this.hasMany(models.Project ,{
        foreignKey: 'id',
        as: 'project',
        onDelete: 'cascade'
      });
  }
}

export default Candidate;