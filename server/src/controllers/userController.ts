import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import ErrorWithContext from '../errors/errorWithContext';
import ValidationHelper from '../helpers/validationHelper';
import HttpCodesHelper from '../helpers/httpCodesHelpers';
import { IUserWithOptionalFields } from '../types/userTypes';
import UserService from '../services/userService';

const userService = new UserService();

class UserController {
  async register(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { validationErrors, matchedData } = ValidationHelper.validateRequest(req);

      if (validationErrors !== null) {
        const errorMessage: string = validationErrors.map((error) => error.msg).join(', ');
        return next(new ErrorWithContext({}, errorMessage, HttpCodesHelper.BAD, true));
      }

      if (!ValidationHelper.isValidPassword(matchedData.password)) {
        return next(new ErrorWithContext({}, 'Password is too weak', HttpCodesHelper.BAD, true));
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(matchedData.password, salt);

      const user: IUserWithOptionalFields = {
        ...(req.body as IUserWithOptionalFields),
        password: hashedPass,
      };

      const savedUser = await userService.save(user);

      res.status(HttpCodesHelper.OK).json(savedUser);
    } catch (error: unknown) {
      if (error instanceof Error) {
        next(new ErrorWithContext({}, error.message, HttpCodesHelper.BAD));
      } else {
        next(new ErrorWithContext({}, 'Unknown error occurred', HttpCodesHelper.BAD));
      }
    }
  }
}

export default UserController;
