import { Router, Request, Response, NextFunction } from 'express';
import AuthenticationMiddleware from '../midlewares/authenticationMiddleware';
import UserValidation from '../validators/user';
import UserController from '../controllers/userController';

const userController = new UserController();
const authorizationRoute = Router();

// TODO: think about authorization middleware
authorizationRoute.post(
  '/register',
  UserValidation.create(),
  AuthenticationMiddleware.verifyApiKey,
  (req: Request, res: Response, next: NextFunction) => userController.register(req, res, next),
);

export default authorizationRoute;
