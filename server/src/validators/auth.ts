import { checkSchema, Schema } from 'express-validator';

export default class AuthorizationValidation {
  static login() {
    const schema: Schema = {
      email: {
        isEmail: {
          errorMessage: 'Invalid email format',
        },
        trim: true,
        notEmpty: {
          errorMessage: 'Email is required',
        },
        normalizeEmail: true,
      },
      password: {
        isString: {
          errorMessage: 'Password must be a string',
        },
        trim: true,
        notEmpty: {
          errorMessage: 'Password is required',
        },
      },
    };
    return checkSchema(schema);
  }
}
