import express from 'express';
import pb from '../utils/pocketbaseClient.js';
import logger from '../utils/logger.js';

const router = express.Router();

// GET /scrape-career-data
router.get('/scrape-career-data', async (req, res) => {
  const response = await fetch('https://raw.githubusercontent.com/SuyogSubedi21/career-data/refs/heads/main/careerinfo.json');

  if (!response.ok) {
    throw new Error(`Failed to fetch career data: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  // Extract relevant data from the JSON structure
  const extractedData = {
    salary: data.salary || [],
    skills: data.skills || [],
    roadmaps: data.roadmaps || [],
    interviewQuestions: data.interviewQuestions || [],
    quiz: data.quiz || [],
  };

  logger.info('Career data scraped successfully');
  res.json(extractedData);
});

// POST /sync-career-data
router.post('/sync-career-data', async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(400).json({ error: 'Authorization header is required' });
  }

  // Verify admin token by setting it in PocketBase
  pb.authStore.save(authHeader.replace('Bearer ', ''));

  // Fetch fresh career data
  const careerResponse = await fetch('https://raw.githubusercontent.com/SuyogSubedi21/career-data/refs/heads/main/careerinfo.json');

  if (!careerResponse.ok) {
    throw new Error(`Failed to fetch career data for sync: ${careerResponse.status} ${careerResponse.statusText}`);
  }

  const careerData = await careerResponse.json();

  let syncCounts = {
    salary: 0,
    skills: 0,
    roadmaps: 0,
    interviewQuestions: 0,
    quiz: 0,
  };

  // Sync Salary Data
  if (careerData.salary && Array.isArray(careerData.salary)) {
    for (const salaryItem of careerData.salary) {
      const transformedSalary = {
        career: salaryItem.career || salaryItem.name || '',
        entry_level: salaryItem.entry_level || salaryItem.entryLevel || 0,
        mid_level: salaryItem.mid_level || salaryItem.midLevel || 0,
        senior_level: salaryItem.senior_level || salaryItem.seniorLevel || 0,
        data: salaryItem,
      };

      try {
        await pb.collection('SalaryData').create(transformedSalary);
        syncCounts.salary++;
      } catch (error) {
        logger.warn(`Could not sync salary item: ${error.message}`);
      }
    }
  }

  // Sync Skills Data
  if (careerData.skills && Array.isArray(careerData.skills)) {
    for (const skillItem of careerData.skills) {
      const transformedSkill = {
        career: skillItem.career || skillItem.name || '',
        technical_skills: skillItem.technical_skills || skillItem.technicalSkills || [],
        soft_skills: skillItem.soft_skills || skillItem.softSkills || [],
        data: skillItem,
      };

      try {
        await pb.collection('Skills').create(transformedSkill);
        syncCounts.skills++;
      } catch (error) {
        logger.warn(`Could not sync skill item: ${error.message}`);
      }
    }
  }

  // Sync Career Roadmaps
  if (careerData.roadmaps && Array.isArray(careerData.roadmaps)) {
    for (const roadmapItem of careerData.roadmaps) {
      const transformedRoadmap = {
        career: roadmapItem.career || roadmapItem.name || '',
        steps: roadmapItem.steps || [],
        duration_months: roadmapItem.duration_months || roadmapItem.durationMonths || 0,
        data: roadmapItem,
      };

      try {
        await pb.collection('careerRoadmaps').create(transformedRoadmap);
        syncCounts.roadmaps++;
      } catch (error) {
        logger.warn(`Could not sync roadmap item: ${error.message}`);
      }
    }
  }

  // Sync Interview Questions
  if (careerData.interviewQuestions && Array.isArray(careerData.interviewQuestions)) {
    for (const questionItem of careerData.interviewQuestions) {
      const transformedQuestion = {
        career: questionItem.career || questionItem.name || '',
        question: questionItem.question || '',
        answer: questionItem.answer || '',
        difficulty: questionItem.difficulty || 'medium',
        data: questionItem,
      };

      try {
        await pb.collection('interviewQuestionsDatabase').create(transformedQuestion);
        syncCounts.interviewQuestions++;
      } catch (error) {
        logger.warn(`Could not sync interview question: ${error.message}`);
      }
    }
  }

  // Sync Career Quizzes
  if (careerData.quiz && Array.isArray(careerData.quiz)) {
    for (const quizItem of careerData.quiz) {
      const transformedQuiz = {
        career: quizItem.career || quizItem.name || '',
        title: quizItem.title || '',
        questions: quizItem.questions || [],
        passing_score: quizItem.passing_score || quizItem.passingScore || 70,
        data: quizItem,
      };

      try {
        await pb.collection('careerQuizzes').create(transformedQuiz);
        syncCounts.quiz++;
      } catch (error) {
        logger.warn(`Could not sync quiz item: ${error.message}`);
      }
    }
  }

  logger.info(`Career data synced successfully: ${JSON.stringify(syncCounts)}`);

  res.json({
    success: true,
    message: 'Career data synced successfully',
    syncCounts,
  });
});

export default router;
