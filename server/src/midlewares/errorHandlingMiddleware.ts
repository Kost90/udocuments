import { Request, Response, NextFunction } from 'express';
import ErrorWithContext from '../errors/errorWithContext';
import HttpCodesHelper from '../helpers/httpCodesHelpers';
import ErrorHandler from '../helpers/errorHandler';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function errorHandlingMiddleware(err: Error | ErrorWithContext, req: Request, res: Response, next: NextFunction) {
  const errorHandler = new ErrorHandler();

  if (err instanceof ErrorWithContext) {
    if (err.isValidation) {
      errorHandler.validation(err.message, err.statusCode, res);
    } else {
      errorHandler.standard(err, err.statusCode, res);
    }
  }

  errorHandler.standard(err, HttpCodesHelper.SERVER_ERROR, res);
}
