import express from 'express';
import cors from 'cors';
import routes from './routes/routes';
import './database';

// Criamos uma classe para trabalhar com apenas uma instancia do server
class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  // Onde será configurado nossas rotas
  routes() {
    this.server.use(routes);
  }

  // Se ocorrerá algum tipo de middleware na aplicação
  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }
}

export default new App().server;