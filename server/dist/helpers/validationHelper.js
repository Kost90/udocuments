"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class ValidationHelper {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static checkForNullorUndefined(variableTocheck, errorMessage = 'Not handled variable') {
        if (variableTocheck === null || variableTocheck === undefined) {
            throw new Error(errorMessage + ' is null or undefined');
        }
    }
    static validateRequest(req) {
        const validationErrors = (0, express_validator_1.validationResult)(req);
        if (!validationErrors.isEmpty()) {
            return {
                validationErrors: validationErrors.array(),
                matchedData: null,
            };
        }
        return {
            validationErrors: null,
            matchedData: (0, express_validator_1.matchedData)(req),
        };
    }
    static isValidPassword(password) {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(password);
    }
}
exports.default = ValidationHelper;
