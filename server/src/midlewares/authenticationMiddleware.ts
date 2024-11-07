import { Request, Response, NextFunction } from 'express';
// import { Jwt } from 'jsonwebtoken';
import { config } from '../config/default';
// import User from '../models/User';
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
}

export default AuthenticationMiddleware;
