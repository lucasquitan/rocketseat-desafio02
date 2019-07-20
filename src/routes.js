import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.put('/users', authMiddleware, UserController.update);

export default routes;
