import { Router } from 'express';
import healthCheck from './health-check.js';
import stripeRouter from './stripe.js';
import authRouter from './auth.js';
import scraperRouter from './scraper.js';
import careerDataRouter from './careerData.js';

const router = Router();

export default () => {
    router.get('/health', healthCheck);
    router.use('/stripe', stripeRouter);
    router.use('/auth', authRouter);
    router.use('/', scraperRouter);
    router.use('/', careerDataRouter);

    return router;
};