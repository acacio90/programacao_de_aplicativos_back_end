import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) =>
  res.json({
    Hello: 'world',
  })
);

/// ///////////////////////testes  :)


/// ////////////////////////////////////////////////////
export default routes;