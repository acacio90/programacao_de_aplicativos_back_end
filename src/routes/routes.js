import { Router } from 'express';
import InternshipController from '../app/controllers/InternshipController';
import ProfessorController from '../app/controllers/ProfessorController';
import ProjectController from '../app/controllers/ProjectController';
import StudentController from '../app/controllers/StudentController';


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

// Project - Testes 
routes.post('/ProjectStore', ProjectController.store);
routes.get('/ProjectIndex', ProjectController.index);
routes.post('/ProjectShow', ProjectController.show);
routes.post('/ProjectDestroy', ProjectController.destroy);
routes.post('/ProjectUpdate', ProjectController.update);

// Student - Testes 
routes.post('/StudentStore', StudentController.store);
routes.get('/StudentIndex', StudentController.index);
routes.post('/StudentShow', StudentController.show);
routes.post('/StudentDestroy', StudentController.destroy);
routes.post('/StudentUpdate', StudentController.update);

export default routes;