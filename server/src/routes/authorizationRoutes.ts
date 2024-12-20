import { Router, Request, Response, NextFunction } from 'express';
import AuthenticationMiddleware from '../midlewares/authenticationMiddleware';
import UserValidation from '../validators/user';
import AuthorizationValidation from '../validators/auth';
import UserController from '../controllers/userController';
import AuthorizationContoller from '../controllers/authorizationController';
import UserService from '../services/userService';
import AuthorizationService from '../services/autorizationService';

const userService = new UserService();
const userController = new UserController(userService);
const authorizationService = new AuthorizationService();
const authorizationController = new AuthorizationContoller(userService, authorizationService);
const authorizationRoute = Router();

authorizationRoute.post(
  '/register',
  UserValidation.create(),
  AuthenticationMiddleware.verifyApiKey,
  (req: Request, res: Response, next: NextFunction) => userController.register(req, res, next),
);
authorizationRoute.post(
  '/login',
  AuthorizationValidation.login(),
  AuthenticationMiddleware.verifyApiKey,
  (req: Request, res: Response, next: NextFunction) => authorizationController.signIn(req, res, next),
);
authorizationRoute.post('/logout', AuthenticationMiddleware.verifyApiKey, (req: Request, res: Response) =>
  authorizationController.signOut(req, res),
);

export default authorizationRoute;
