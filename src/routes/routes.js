import { Router } from 'express';
import InternshipController from '../app/controllers/InternshipController';
import ProfessorController from '../app/controllers/ProfessorController';
import ProjectController from '../app/controllers/ProjectController';
import StudentController from '../app/controllers/StudentController';
import SessionAdminController from '../app/controllers/SessionAdminController';

import verifyJWT from '../app/middlewares/jwtVerify';

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

routes.post('/Admin/login', SessionAdminController.store);

// Project - Testes 
routes.post('/ProjectStore', ProjectController.store);
routes.get('/ProjectIndex', ProjectController.index);
routes.post('/ProjectShow', ProjectController.show);
routes.post('/ProjectDestroy', ProjectController.destroy);
routes.post('/ProjectUpdate', ProjectController.update);
routes.post('/ProjectUpdate', ProjectController.update);

// Student - Testes 
routes.post('/StudentStore', StudentController.store);
routes.get('/StudentIndex', verifyJWT, StudentController.index);
routes.post('/StudentShow', StudentController.show);
routes.post('/StudentDestroy', StudentController.destroy);
routes.post('/StudentUpdate', StudentController.update);

export default routes;