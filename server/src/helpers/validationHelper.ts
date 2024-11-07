import { matchedData, validationResult } from 'express-validator';
import { Request } from 'express';

class ValidationHelper {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static checkForNullorUndefined(variableTocheck: any, errorMessage: string = 'Not handled variable') {
    if (variableTocheck === null || variableTocheck === undefined) {
      throw new Error(errorMessage + ' is null or undefined');
    }
  }

  static validateRequest(req: Request) {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      return {
        validationErrors: validationErrors.array(),
        matchedData: null,
      };
    }
    return {
      validationErrors: null,
      matchedData: matchedData(req),
    };
  }

  static isValidPassword(password: string): boolean {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  }
}

export default ValidationHelper;
