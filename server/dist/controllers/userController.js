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
const bcrypt_1 = __importDefault(require("bcrypt"));
const errorWithContext_1 = __importDefault(require("../errors/errorWithContext"));
const validationHelper_1 = __importDefault(require("../helpers/validationHelper"));
const httpCodesHelpers_1 = __importDefault(require("../helpers/httpCodesHelpers"));
const userService_1 = __importDefault(require("../services/userService"));
const userService = new userService_1.default();
class UserController {
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { validationErrors, matchedData } = validationHelper_1.default.validateRequest(req);
                if (validationErrors !== null) {
                    const errorMessage = validationErrors.map((error) => error.msg).join(', ');
                    return next(new errorWithContext_1.default({}, errorMessage, httpCodesHelpers_1.default.BAD, true));
                }
                if (!validationHelper_1.default.isValidPassword(matchedData.password)) {
                    return next(new errorWithContext_1.default({}, 'Password is too weak', httpCodesHelpers_1.default.BAD, true));
                }
                const salt = yield bcrypt_1.default.genSalt(10);
                const hashedPass = yield bcrypt_1.default.hash(matchedData.password, salt);
                const user = Object.assign(Object.assign({}, req.body), { password: hashedPass });
                const savedUser = yield userService.save(user);
                res.status(httpCodesHelpers_1.default.OK).json(savedUser);
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
}
exports.default = UserController;
