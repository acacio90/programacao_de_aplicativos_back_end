import { Router } from 'express';
import InternshipController from '../app/controllers/InternshipController';
import ProfessorController from '../app/controllers/ProfessorController';

const routes = Router();

routes.get('/', (req, res) =>
  res.json({
    Hello: 'world',
  })
);

// Internship - Testes 
routes.post('/InternshipStore', InternshipController.store);
routes.get('/InternshipIndex', InternshipController.index);
routes.post('/InternshipShow', InternshipController.show);
routes.post('/InternshipDestroy', InternshipController.destroy);
routes.post('/InternshipUpdate', InternshipController.update);

// Professor - Testes 
routes.post('/ProfessorStore', ProfessorController.store);
routes.get('/ProfessorIndex', ProfessorController.index);
routes.post('/ProfessorShow', ProfessorController.show);
routes.post('/ProfessorDestroy', ProfessorController.destroy);
routes.post('/ProfessorUpdate', ProfessorController.update);

export default routes;