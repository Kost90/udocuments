import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import ErrorWithContext from '../errors/errorWithContext';
import ValidationHelper from '../helpers/validationHelper';
import HttpCodesHelper from '../helpers/httpCodesHelpers';
import UserService from '../services/userService';
import AuthorizationService from '../services/autorizationService';
import { config } from '../config/default';



export default class AuthorizationContoller {
  private userService: UserService;
  private authorizationService: AuthorizationService;

  constructor(userService: UserService, authorizationService:AuthorizationService) {
    this.userService = userService;
    this.authorizationService = authorizationService;
  }
  async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const { validationErrors, matchedData } = ValidationHelper.validateRequest(req);

      if (validationErrors !== null) {
        const errorMessage: string = validationErrors.map((error) => error.msg).join(', ');
        return next(new ErrorWithContext({}, errorMessage, HttpCodesHelper.BAD, true));
      }

      const user = await this.userService.findOne(matchedData.email);

      const isPasswordCorrect = this.authorizationService.comparePassword(matchedData.password, user.password);

      if (!isPasswordCorrect) {
        next(new ErrorWithContext({ userId: user.id }, 'Password incorrect', HttpCodesHelper.FORBIDDEN));
      }

      // TODO:Change for jwt secret
      const token = jwt.sign({ userId: user.id }, config.session.secret, { expiresIn: '1d' });

      req.session.jwt = token;

      res.status(HttpCodesHelper.OK).send({ message: 'Authenticated successfully' });
    } catch (error: unknown) {
      if (error instanceof Error) {
        next(new ErrorWithContext({}, error.message, HttpCodesHelper.BAD));
      } else {
        next(new ErrorWithContext({}, 'Unknown error occurred', HttpCodesHelper.BAD));
      }
    }
  }

  async signOut(req: Request, res: Response) {
    req.session.destroy((err: unknown) => {
      if (err) {
        return res.status(HttpCodesHelper.SERVER_ERROR).send({ message: 'Error logging out' });
      }

      res.clearCookie(config.session.cookieName);
      res.status(HttpCodesHelper.OK).send({ message: 'Logged out successfully' });
    });
  }
}
