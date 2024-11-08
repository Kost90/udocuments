"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const validationHelper_1 = __importDefault(require("../helpers/validationHelper"));
class AuthorizationService {
    comparePassword(password, userPassword) {
        validationHelper_1.default.checkForNullorUndefined(password, `${this.constructor.name}: password`);
        validationHelper_1.default.checkForNullorUndefined(userPassword, `${this.constructor.name}: userPassword`);
        return bcrypt_1.default.compareSync(password, userPassword);
    }
}
exports.default = AuthorizationService;
