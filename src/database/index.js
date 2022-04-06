import Sequelize from 'sequelize';
import dbConfig from './config/database'

const models = [];

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