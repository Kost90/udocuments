"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Jwt } from 'jsonwebtoken';
const default_1 = require("../config/default");
// import User from '../models/User';
const httpCodesHelpers_1 = __importDefault(require("../helpers/httpCodesHelpers"));
const errorWithContext_1 = __importDefault(require("../errors/errorWithContext"));
class AuthenticationMiddleware {
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
AuthenticationMiddleware.verifyApiKey = function (req, res, next) {
    const authKey = req.header('x-auth-key');
    const authUser = req.header('x-auth-user');
    if (!(authKey == default_1.config.apiAuth.key && authUser == default_1.config.apiAuth.name)) {
        return next(new errorWithContext_1.default({}, 'Unathorized access is not allowed', httpCodesHelpers_1.default.UNATHORIZED, true));
    }
    next();
};
exports.default = AuthenticationMiddleware;
