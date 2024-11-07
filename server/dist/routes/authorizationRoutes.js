"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticationMiddleware_1 = __importDefault(require("../midlewares/authenticationMiddleware"));
const user_1 = __importDefault(require("../validators/user"));
const userController_1 = __importDefault(require("../controllers/userController"));
const userController = new userController_1.default();
const authorizationRoute = (0, express_1.Router)();
// TODO: think about authorization middleware
authorizationRoute.post('/register', user_1.default.create(), authenticationMiddleware_1.default.verifyApiKey, (req, res, next) => userController.register(req, res, next));
exports.default = authorizationRoute;
