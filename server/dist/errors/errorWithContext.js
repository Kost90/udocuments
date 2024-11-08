"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorWithContext extends Error {
    constructor(context, message, statusCode, isValidation = false) {
        super();
        this.context = context;
        this.context.type = 'context';
        this.message = message;
        this.statusCode = statusCode;
        this.isValidation = isValidation;
    }
}
exports.default = ErrorWithContext;
