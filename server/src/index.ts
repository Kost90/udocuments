import express, { Express } from 'express';
import http from 'http';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { config } from './config/default';
import getLogger from './utils/logger';
import './dbconnect/connection';
import sessionMddleware from './session/session';

const { port } = config.server;
const logger = getLogger('server');

// Express server
const app: Express = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

app.use(cookieParser());

app.use(express.json());
app.use(sessionMddleware);

const server = http.createServer(app);

server.listen(port, () => {
  logger.info(`Server is running on port: ${port}`);
});
