import { config } from '../config/default';
import mongoose from 'mongoose';
import getLogger from '../utils/logger';

const logger = getLogger('DbConnections');

mongoose.connect(config.db.url);

mongoose.connection.on('connected', () => {
  logger.info('Successfully connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  logger.error('Error connecting to MongoDB:', err);
});

mongoose.connection.on('disconnected', () => {
  logger.warn('Disconnected from MongoDB');
});
mongoose.Promise = global.Promise;

export default mongoose;
