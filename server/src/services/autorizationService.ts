import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import ErrorWithContext from '../errors/errorWithContext';
import ValidationHelper from '../helpers/validationHelper';
import HttpCodesHelper from '../helpers/httpCodesHelpers';

export default class AuthorizationService {
  comparePassword(password: string, userPassword: string): boolean {
    ValidationHelper.checkForNullorUndefined(password, `${this.constructor.name}: password`);
    ValidationHelper.checkForNullorUndefined(userPassword, `${this.constructor.name}: userPassword`);

    return bcrypt.compareSync(password, userPassword);
  }
}
