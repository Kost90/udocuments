import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import ErrorWithContext from '../errors/errorWithContext';
import ValidationHelper from '../helpers/validationHelper';
import HttpCodesHelper from '../helpers/httpCodesHelpers';
import { IUserWithOptionalFields } from '../types/userTypes';
import UserService from '../services/userService';

class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }
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

      const savedUser = await this.userService.save(user);

      res.status(HttpCodesHelper.OK).json(savedUser);
    } catch (error: unknown) {
      if (error instanceof Error) {
        next(new ErrorWithContext({}, error.message, HttpCodesHelper.BAD));
      } else {
        next(new ErrorWithContext({}, 'Unknown error occurred', HttpCodesHelper.BAD));
      }
    }
  }

  // TODO:think bout changing these method and fetch all information about user - user created before documents
  async findUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = req.user;

      ValidationHelper.checkForNullorUndefined(user, `${this.constructor.name}: user`);

      res.status(HttpCodesHelper.OK).json(user);
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
