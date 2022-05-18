import { Router } from 'express';
import InternshipController from '../app/controllers/InternshipController';

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

export default routes;