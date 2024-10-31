"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const default_1 = require("../config/default");
// import mongodb from "mongodb";
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("../utils/logger"));
const logger = (0, logger_1.default)('DbConnections');
mongoose_1.default.connect(default_1.config.db.url);
mongoose_1.default.connection.on('connected', () => {
    logger.info('Successfully connected to MongoDB');
});
// Логирование ошибки подключения
mongoose_1.default.connection.on('error', (err) => {
    logger.error('Error connecting to MongoDB:', err);
});
// Логирование при отключении
mongoose_1.default.connection.on('disconnected', () => {
    logger.warn('Disconnected from MongoDB');
});
mongoose_1.default.Promise = global.Promise;
exports.default = mongoose_1.default;
