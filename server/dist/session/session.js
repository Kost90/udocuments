"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const default_1 = require("../config/default");
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const coockieParams = {
    // httpOnly: true,
    // sameSite: 'strict',
    // secure: config.session.secureCookie,
    // maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true, // cookie не доступна JavaScript на клиенте
    sameSite: 'lax', // установите 'lax' для отправки cookie с кросс-доменными запросами в Postman
    secure: false, // false для локальной среды, true для HTTPS
    maxAge: 24 * 60 * 60 * 1000,
};
const sessionStore = connect_mongo_1.default.create({
    mongoUrl: default_1.config.db.url,
});
const sessionMddleware = (0, express_session_1.default)({
    secret: default_1.config.session.secret,
    name: default_1.config.session.cookieName,
    cookie: coockieParams,
    saveUninitialized: false,
    resave: false,
    store: sessionStore,
});
exports.default = sessionMddleware;
