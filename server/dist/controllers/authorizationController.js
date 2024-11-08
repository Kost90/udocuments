"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errorWithContext_1 = __importDefault(require("../errors/errorWithContext"));
const validationHelper_1 = __importDefault(require("../helpers/validationHelper"));
const httpCodesHelpers_1 = __importDefault(require("../helpers/httpCodesHelpers"));
const userService_1 = __importDefault(require("../services/userService"));
const autorizationService_1 = __importDefault(require("../services/autorizationService"));
const default_1 = require("../config/default");
const userService = new userService_1.default();
const authorizationService = new autorizationService_1.default();
class AuthorizationContoller {
    signIn(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { validationErrors, matchedData } = validationHelper_1.default.validateRequest(req);
                if (validationErrors !== null) {
                    const errorMessage = validationErrors.map((error) => error.msg).join(', ');
                    return next(new errorWithContext_1.default({}, errorMessage, httpCodesHelpers_1.default.BAD, true));
                }
                const user = yield userService.findOne(matchedData.email);
                const isPasswordCorrect = authorizationService.comparePassword(matchedData.password, user.password);
                if (!isPasswordCorrect) {
                    next(new errorWithContext_1.default({ userId: user.id }, 'Password incorrect', httpCodesHelpers_1.default.FORBIDDEN));
                }
                // TODO:Change for jwt secret
                const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, default_1.config.session.secret, { expiresIn: '1d' });
                req.session.jwt = token;
                res.status(httpCodesHelpers_1.default.OK).send({ message: 'Authenticated successfully' });
            }
            catch (error) {
                if (error instanceof Error) {
                    next(new errorWithContext_1.default({}, error.message, httpCodesHelpers_1.default.BAD));
                }
                else {
                    next(new errorWithContext_1.default({}, 'Unknown error occurred', httpCodesHelpers_1.default.BAD));
                }
            }
        });
    }
    signOut(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.session.destroy((err) => {
                if (err) {
                    return res.status(httpCodesHelpers_1.default.SERVER_ERROR).send({ message: 'Error logging out' });
                }
                res.clearCookie(default_1.config.session.cookieName);
                res.status(httpCodesHelpers_1.default.OK).send({ message: 'Logged out successfully' });
            });
        });
    }
}
exports.default = AuthorizationContoller;
