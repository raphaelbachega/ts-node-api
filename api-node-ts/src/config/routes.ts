import { Express } from 'express';
import { routerUser } from '../controller/routes/user.routes';

export const setupRoutes = (app:Express): void => {
    app.use(routerUser);
}

