import express, { Express } from 'express';
import http from 'http';
import cors from 'cors';
import { config } from './config/default';
import getLogger from './utils/logger';
import './dbconnect/connection';

const { port } = config.server;
const logger = getLogger('server');

// Express server
const app: Express = express();
app.use(cors());
app.use(express.json());
const server = http.createServer(app);

server.listen(port, () => {
  logger.info(`Server is running on port: ${port}`);
});
