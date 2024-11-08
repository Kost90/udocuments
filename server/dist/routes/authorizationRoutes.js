"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticationMiddleware_1 = __importDefault(require("../midlewares/authenticationMiddleware"));
const user_1 = __importDefault(require("../validators/user"));
const auth_1 = __importDefault(require("../validators/auth"));
const userController_1 = __importDefault(require("../controllers/userController"));
const authorizationController_1 = __importDefault(require("../controllers/authorizationController"));
const userController = new userController_1.default();
const authorizationController = new authorizationController_1.default();
const authorizationRoute = (0, express_1.Router)();
authorizationRoute.post('/register', user_1.default.create(), authenticationMiddleware_1.default.verifyApiKey, (req, res, next) => userController.register(req, res, next));
authorizationRoute.post('/login', auth_1.default.login(), authenticationMiddleware_1.default.verifyApiKey, (req, res, next) => authorizationController.signIn(req, res, next));
authorizationRoute.post('/logout', authenticationMiddleware_1.default.verifyApiKey, (req, res) => authorizationController.signOut(req, res));
exports.default = authorizationRoute;
