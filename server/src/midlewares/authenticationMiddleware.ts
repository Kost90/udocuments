import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/default';
import HttpCodesHelper from '../helpers/httpCodesHelpers';
import ErrorWithContext from '../errors/errorWithContext';
import UserService from '../services/userService';

interface AuthTokenPayload extends jwt.JwtPayload {
  userId: string;
}

class AuthenticationMiddleware {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static verifyApiKey = function (req: Request, res: Response, next: NextFunction) {
    const authKey = req.header('x-auth-key');
    const authUser = req.header('x-auth-user');

    if (!(authKey == config.apiAuth.key && authUser == config.apiAuth.name)) {
      return next(new ErrorWithContext({}, 'Unathorized access is not allowed', HttpCodesHelper.UNATHORIZED, true));
    }
    next();
  };

  async verifyAccesse(req: Request, res: Response, next: NextFunction): Promise<void> {
    const token = req.session.jwt;

    if (!token) {
      return next(new ErrorWithContext({}, 'Access denied. No token provided.', HttpCodesHelper.FORBIDDEN));
    }

    try {
      const decoded = jwt.verify(token, config.session.secret) as AuthTokenPayload;

      if (decoded.userId) {
        // TODO:Think maybe using User model and make method static?
        const user = await this.userService.findOne(decoded.userId);

        if (!user) {
          return next(new ErrorWithContext({}, 'User not found', HttpCodesHelper.UNATHORIZED));
        }

        req.user = user;

        next();
      }

      next(new ErrorWithContext({}, 'Invalid token payload', HttpCodesHelper.UNATHORIZED));
    } catch (error: unknown) {
      if (error instanceof Error) {
        next(new ErrorWithContext({}, 'Invalid token', HttpCodesHelper.UNATHORIZED));
      }
    }
  }
}

export default AuthenticationMiddleware;
