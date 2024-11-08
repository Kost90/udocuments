"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const default_1 = require("./config/default");
const logger_1 = __importDefault(require("./utils/logger"));
require("./dbconnect/connection");
const session_1 = __importDefault(require("./session/session"));
const authorizationRoutes_1 = __importDefault(require("./routes/authorizationRoutes"));
const errorHandlingMiddleware_1 = __importDefault(require("./midlewares/errorHandlingMiddleware"));
const { port } = default_1.config.server;
const logger = (0, logger_1.default)('server');
// Express server
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: true,
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(session_1.default);
app.use('/auth', authorizationRoutes_1.default);
app.use(errorHandlingMiddleware_1.default);
const server = http_1.default.createServer(app);
server.listen(port, () => {
    logger.info(`Server is running on port: ${port}`);
});
