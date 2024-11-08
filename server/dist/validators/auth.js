"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class AuthorizationValidation {
    static login() {
        const schema = {
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
        return (0, express_validator_1.checkSchema)(schema);
    }
}
exports.default = AuthorizationValidation;
