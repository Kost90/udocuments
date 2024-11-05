import { Router } from 'express';
import AuthenticationMiddleware from '../midlewares/authenticationMiddleware';
import UserValidation from '../validators/user';

const authorizationRoute = Router();

// TODO:create controller and pass here
// TODO: think about authorization middleware
authorizationRoute.post('register', UserValidation.create(), AuthenticationMiddleware.verifyApiKey);
