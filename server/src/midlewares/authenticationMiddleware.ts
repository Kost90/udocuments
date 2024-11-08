import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/default';
import HttpCodesHelper from '../helpers/httpCodesHelpers';
import ErrorWithContext from '../errors/errorWithContext';

class AuthenticationMiddleware {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static verifyApiKey = function (req: Request, res: Response, next: NextFunction) {
    const authKey = req.header('x-auth-key');
    const authUser = req.header('x-auth-user');

    if (!(authKey == config.apiAuth.key && authUser == config.apiAuth.name)) {
      return next(new ErrorWithContext({}, 'Unathorized access is not allowed', HttpCodesHelper.UNATHORIZED, true));
    }
    next();
  };

  authenticateSessionToken(req: Request, res: Response, next: NextFunction) {
    const token = req.session.jwt;

    if (!token) {
      return res.status(HttpCodesHelper.FORBIDDEN).json('Access denied. No token provided.');
    }

    try {
      const decoded = jwt.verify(token, config.session.secret);

      req.user = decoded;

      next();
    } catch (error: unknown) {
      if (error instanceof Error) {
        next(new ErrorWithContext({}, 'Invalid token', HttpCodesHelper.UNATHORIZED));
      }
    }
  }
}

export default AuthenticationMiddleware;
