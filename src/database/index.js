import Sequelize from 'sequelize';
import dbConfig from '../config/database'

import Internship from '../app/models/internship';
import Professor from '../app/models/professor';
import Project from '../app/models/project';
import Student from '../app/models/student';
import Admin from '../app/models/admin';


const models = [Internship, Professor, Project, Student, Admin];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // Inicializa conexao
    this.connection = new Sequelize(dbConfig);

    // Percorre o vetor e acessa o método inicializador e associações
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();