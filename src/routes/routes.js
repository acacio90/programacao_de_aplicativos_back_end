import { Router } from 'express';
import InternshipController from '../app/controllers/InternshipController';
import ProfessorController from '../app/controllers/ProfessorController';
import ProjectController from '../app/controllers/ProjectController';
import StudentController from '../app/controllers/StudentController';
import CandidateController from '../app/controllers/CandidateController';
import SessionAdminController from '../app/controllers/SessionAdminController';
import SessionProfessorController from '../app/controllers/SessionProfessorController';
import SessionStudentController from '../app/controllers/SessionStudentController';

import uploadImage from '../app/middlewares/uploadImage';
import multer from 'multer';
import multerConfig from '../config/multer';
import verifyJWT from '../app/middlewares/jwtVerify';

const routes = Router();

routes.get('/', (req, res) =>
  res.json({
    Hello: 'world',
  })
);

// Internship - Testes
routes.post('/InternshipStore', InternshipController.store);
routes.post('/InternshipIndex', InternshipController.index);
routes.post('/InternshipShow', InternshipController.show);
routes.post('/InternshipDestroy', InternshipController.destroy);
routes.post('/InternshipUpdate', InternshipController.update);

// Professor - Testes 
routes.post('/ProfessorStore', multer(multerConfig).single('file'), uploadImage, ProfessorController.store); //TESTE MULTER
routes.get('/ProfessorIndex', ProfessorController.index);
routes.post('/ProfessorShow', ProfessorController.show);
routes.post('/ProfessorDestroy', ProfessorController.destroy);
routes.post('/ProfessorUpdate', multer(multerConfig).single('file'), uploadImage,ProfessorController.update);

//ROTAS DE LOGIN
routes.post('/Admin/login', SessionAdminController.store);
routes.post('/Professor/login', SessionProfessorController.store);
routes.post('/Student/login', SessionStudentController.store);

// Project - Testes 
routes.post('/ProjectStore', ProjectController.store);
routes.get('/ProjectIndex', ProjectController.index);
routes.post('/ProjectShow', ProjectController.show);
routes.post('/ProjectDestroy', ProjectController.destroy);
routes.post('/ProjectUpdate', ProjectController.update);

// Student - Testes 
routes.post('/StudentStore', multer(multerConfig).single('file'), uploadImage, StudentController.store);
routes.get('/StudentIndex', verifyJWT, StudentController.index);
routes.post('/StudentShow', StudentController.show);
routes.post('/StudentDestroy', StudentController.destroy);
routes.post('/StudentUpdate', multer(multerConfig).single('file'), uploadImage, StudentController.update);

// Candidate - Testes 
routes.post('/CandidateStore', CandidateController.store);
routes.post('/CandidateIndex', CandidateController.index);
routes.post('/CandidateShow', CandidateController.show);
routes.post('/CandidateDestroy', CandidateController.destroy);
routes.post('/CandidateUpdate', CandidateController.update);

export default routes;