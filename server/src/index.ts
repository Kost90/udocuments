import express, { Express } from 'express';
import http from 'http';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { config } from './config/default';
import getLogger from './utils/logger';
import './dbconnect/connection';
import sessionMddleware from './session/session';
import authorizationRoute from './routes/authorizationRoutes';
import errorHandlingMiddleware from './midlewares/errorHandlingMiddleware';

const { port } = config.server;
const logger = getLogger('server');

// Express server
const app: Express = express();

app.use(cors());

app.use(cookieParser());

app.use(express.json());
app.use(sessionMddleware);
app.use('/auth', authorizationRoute);
app.use(errorHandlingMiddleware);

const server = http.createServer(app);

server.listen(port, () => {
  logger.info(`Server is running on port: ${port}`);
});
