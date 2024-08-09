import { Router } from 'express';
import AppController from '../controllers/AppController';

const appRouter = Router();

/**
 * @api {get} /status Get database and redis client status
 */
appRouter.get('/status', AppController.getStatus);

/**
 * @api {get} /stats Gets number of users and files
 */
appRouter.get('/stats', AppController.getStats);

export default appRouter;
