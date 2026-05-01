import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import routes from './routes/index.js';
import { errorMiddleware } from './middleware/error.js';
import { globalRateLimit } from './middleware/global-rate-limit.js';
import logger from './utils/logger.js';
import { BodyLimit } from './constants/common.js';
import { initializeSyncService, stopSyncService } from './services/githubSyncService.js';

const app = express();

app.set('trust proxy', true);

process.on('uncaughtException', (error) => {
	logger.error('Uncaught exception:', error);
});
  
process.on('unhandledRejection', (reason, promise) => {
	logger.error('Unhandled rejection at:', promise, 'reason:', reason);
});

process.on('SIGINT', async () => {
	logger.info('Interrupted');
	stopSyncService();
	process.exit(0);
});

process.on('SIGTERM', async () => {
	logger.info('SIGTERM signal received');
	stopSyncService();

	await new Promise(resolve => setTimeout(resolve, 3000));

	logger.info('Exiting');
	process.exit();
});

app.use(helmet());
app.use(cors({
	origin: process.env.CORS_ORIGIN,
	credentials: true,
}));
app.use(morgan('combined'));
app.use(globalRateLimit);
app.use(express.json({
	limit: BodyLimit,
}));
app.use(express.urlencoded({ 
	extended: true,
	limit: BodyLimit,
}));

app.use('/', routes());

app.use(errorMiddleware);

app.use((req, res) => {
	res.status(404).json({ error: 'Route not found' });
});

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
	logger.info('═══════════════════════════════════════════════════════════');
	logger.info(`🚀 API Server is running and ready to accept requests`);
	logger.info(`📍 Server URL: http://localhost:${port}`);
	logger.info(`🔗 Health Check: http://localhost:${port}/health`);
	logger.info(`🔐 Auth Endpoints: http://localhost:${port}/auth/*`);
	logger.info(`💳 Stripe Endpoints: http://localhost:${port}/stripe/*`);
	logger.info(`⏱️  Server started at: ${new Date().toISOString()}`);
	logger.info('═══════════════════════════════════════════════════════════');

	// Initialize GitHub sync service after server starts
	initializeSyncService().catch(error => {
		logger.error('Failed to initialize sync service:', error.message);
	});
});

// Keep-alive mechanism to prevent timeout
server.keepAliveTimeout = 65000;
server.headersTimeout = 66000;

// Graceful shutdown
process.on('SIGTERM', () => {
	logger.info('SIGTERM received, closing server gracefully...');
	stopSyncService();
	server.close(() => {
		logger.info('Server closed');
		process.exit(0);
	});
});

export default app;
