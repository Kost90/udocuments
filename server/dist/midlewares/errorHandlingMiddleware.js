"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorHandlingMiddleware;
const errorWithContext_1 = __importDefault(require("../errors/errorWithContext"));
const httpCodesHelpers_1 = __importDefault(require("../helpers/httpCodesHelpers"));
const errorHandler_1 = __importDefault(require("../helpers/errorHandler"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function errorHandlingMiddleware(err, req, res, next) {
    const errorHandler = new errorHandler_1.default();
    if (err instanceof errorWithContext_1.default) {
        if (err.isValidation) {
            errorHandler.validation(err.message, err.statusCode, res);
        }
        else {
            errorHandler.standard(err, err.statusCode, res);
        }
    }
    errorHandler.standard(err, httpCodesHelpers_1.default.SERVER_ERROR, res);
}
