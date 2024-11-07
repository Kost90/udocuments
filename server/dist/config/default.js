"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function getEnvVar(name) {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Environment variable ${name} is not defined`);
    }
    return value;
}
exports.config = {
    server: {
        port: parseInt(process.env.PORT || '3001', 10),
    },
    db: {
        url: getEnvVar('MONGO_DB_CONNECT'),
    },
    session: {
        secureCookie: getEnvVar('NODE_ENV') === 'production',
        cookieName: 'sid',
        secret: getEnvVar('SESSION_SECRET'),
    },
    apiAuth: {
        key: getEnvVar('API_KEY'),
        name: getEnvVar('API_KEY_NAKE'),
    },
};
