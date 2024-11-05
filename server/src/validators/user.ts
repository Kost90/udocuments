import { checkSchema, Schema } from 'express-validator';

class UserValidation {
  static create() {
    const schema: Schema = {
      name: {
        isString: {
          errorMessage: 'Name must be a string',
        },
        trim: true,
        notEmpty: {
          errorMessage: 'Name is required',
        },
        isLength: {
          options: { min: 2 },
          errorMessage: 'Name musr be at least 2 character',
        },
      },
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
      phone: {
        isString: {
          errorMessage: 'Phone must be a string',
        },
        isMobilePhone: {
          options: ['any'],
          errorMessage: 'Invalid format of phone',
        },
        trim: true,
        notEmpty: {
          errorMessage: 'Phone is required',
        },
      },
      address: {
        optional: true,
        isString: {
          errorMessage: 'Adress must be a string',
        },
        isLength: {
          options: { max: 250 },
          errorMessage: 'Adress must be not more than 250 character',
        },
        trim: true,
      },
      profile_photo: {
        optional: true,
        isString: {
          errorMessage: 'Profile photo must be a string',
        },
        trim: true,
      },
    };
    return checkSchema(schema);
  }
}

export default UserValidation;
