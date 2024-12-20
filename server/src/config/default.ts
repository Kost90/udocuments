import dotenv from 'dotenv';
import { IConfig } from '../types/types';
dotenv.config();

function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable ${name} is not defined`);
  }
  return value;
}

export const config: IConfig = {
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
