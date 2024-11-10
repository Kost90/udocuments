import { Router, Request, Response, NextFunction } from 'express';
import AuthenticationMiddleware from '../midlewares/authenticationMiddleware';
import UserController from '../controllers/userController';
import UserService from '../services/userService';

const userRoute = Router();
const userService = new UserService();
const authenticationMiddleware = new AuthenticationMiddleware(userService);
const userController = new UserController(userService);

// TODO:Think maybe change name of route
userRoute.get(
  '/user',
  AuthenticationMiddleware.verifyApiKey,
  authenticationMiddleware.verifyAccesse,
  (req: Request, res: Response, next: NextFunction) => userController.findUser(req, res, next),
);
