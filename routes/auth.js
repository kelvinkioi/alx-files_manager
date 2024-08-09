import { Router } from 'express';
import AuthController from '../controllers/AuthController';
import authenticateToken from '../middleware/auth';

const authRouter = Router();

authRouter.use('/disconnect', authenticateToken);

/**
 * @apiDefine XToken
 */
authRouter.get('/connect', AuthController.getConnect);
/**
 * @api {get} /disconnect User logout
 */
authRouter.get('/disconnect', AuthController.getDisconnect);

export default authRouter;