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
};
