import { Router } from 'express';
import userController from '../handles/user.controller';

const routerUser = Router();

routerUser.get('/user/select-all', userController.selectAll);

export { routerUser };

