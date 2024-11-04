import { config } from '../config/default';
import expressSession, { CookieOptions } from 'express-session';
import MongoStore from 'connect-mongo';

const coockieParams: CookieOptions = {
  httpOnly: true,
  sameSite: 'strict',
  secure: config.session.secureCookie,
  maxAge: 24 * 60 * 60 * 1000,
};

const sessionStore = MongoStore.create({
  mongoUrl: config.db.url,
});

const sessionMddleware = expressSession({
  secret: config.session.secret,
  name: config.session.cookieName,
  cookie: coockieParams,
  saveUninitialized: false,
  resave: false,
  store: sessionStore,
});

export default sessionMddleware;
