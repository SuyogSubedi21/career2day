import express from 'express';
import logger from '../utils/logger.js';

const router = express.Router();

// GET /scrape-career-data
router.get('/scrape-career-data', async (req, res) => {
  const response = await fetch('https://raw.githubusercontent.com/SuyogSubedi21/career-data/refs/heads/main/careerinfo.json');

  if (!response.ok) {
    throw new Error(`Failed to fetch career data: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  logger.info('Career data fetched successfully');
  res.json(data);
});

export default router;