import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.router';

const routes = Router();
routes.use('/users', usersRouter);

export default routes;
