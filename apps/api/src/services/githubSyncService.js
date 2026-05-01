import 'dotenv/config';
import pb from '../utils/pocketbaseClient.js';
import logger from '../utils/logger.js';

const GITHUB_DATA_URL = 'https://raw.githubusercontent.com/SuyogSubedi21/career-data/refs/heads/main/careerinfo.json';
const SYNC_INTERVAL_MS = 24 * 60 * 60 * 1000; // 24 hours

let syncIntervalId = null;

/**
 * Fetches career data from GitHub repository
 * @returns {Promise<Object>} Parsed career data
 */
async function fetchCareerDataFromGitHub() {
  logger.info('Fetching career data from GitHub...');
  
  const response = await fetch(GITHUB_DATA_URL);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch career data from GitHub: ${response.status} ${response.statusText}`);
  }
  
  const data = await response.json();
  logger.info('Career data fetched successfully from GitHub');
  
  return data;
}

/**
 * Syncs salary data to PocketBase
 * @param {Array} salaryData - Array of salary items
 * @returns {Promise<number>} Count of synced items
 */
async function syncSalaryData(salaryData) {
  if (!Array.isArray(salaryData) || salaryData.length === 0) {
    logger.warn('No salary data to sync');
    return 0;
  }
  
  let syncCount = 0;
  
  for (const salaryItem of salaryData) {
    try {
      const transformedSalary = {
        career: salaryItem.career || salaryItem.name || '',
        entry_level: salaryItem.entry_level || salaryItem.entryLevel || 0,
        mid_level: salaryItem.mid_level || salaryItem.midLevel || 0,
        senior_level: salaryItem.senior_level || salaryItem.seniorLevel || 0,
        data: salaryItem,
      };
      
      // Try to find existing record by career name
      const existingRecord = await pb
        .collection('SalaryData')
        .getFirstListItem(`career = "${transformedSalary.career}"`, { requestKey: null })
        .catch(() => null);
      
      if (existingRecord) {
        await pb.collection('SalaryData').update(existingRecord.id, transformedSalary);
      } else {
        await pb.collection('SalaryData').create(transformedSalary);
      }
      
      syncCount++;
    } catch (error) {
      logger.warn(`Could not sync salary item "${salaryItem.career || salaryItem.name}": ${error.message}`);
    }
  }
  
  logger.info(`Synced ${syncCount} salary records`);
  return syncCount;
}

/**
 * Syncs skills data to PocketBase
 * @param {Array} skillsData - Array of skills items
 * @returns {Promise<number>} Count of synced items
 */
async function syncSkillsData(skillsData) {
  if (!Array.isArray(skillsData) || skillsData.length === 0) {
    logger.warn('No skills data to sync');
    return 0;
  }
  
  let syncCount = 0;
  
  for (const skillItem of skillsData) {
    try {
      const transformedSkill = {
        career: skillItem.career || skillItem.name || '',
        technical_skills: skillItem.technical_skills || skillItem.technicalSkills || [],
        soft_skills: skillItem.soft_skills || skillItem.softSkills || [],
        data: skillItem,
      };
      
      // Try to find existing record by career name
      const existingRecord = await pb
        .collection('Skills')
        .getFirstListItem(`career = "${transformedSkill.career}"`, { requestKey: null })
        .catch(() => null);
      
      if (existingRecord) {
        await pb.collection('Skills').update(existingRecord.id, transformedSkill);
      } else {
        await pb.collection('Skills').create(transformedSkill);
      }
      
      syncCount++;
    } catch (error) {
      logger.warn(`Could not sync skills item "${skillItem.career || skillItem.name}": ${error.message}`);
    }
  }
  
  logger.info(`Synced ${syncCount} skills records`);
  return syncCount;
}

/**
 * Syncs career roadmaps to PocketBase
 * @param {Array} roadmapsData - Array of roadmap items
 * @returns {Promise<number>} Count of synced items
 */
async function syncRoadmapsData(roadmapsData) {
  if (!Array.isArray(roadmapsData) || roadmapsData.length === 0) {
    logger.warn('No roadmaps data to sync');
    return 0;
  }
  
  let syncCount = 0;
  
  for (const roadmapItem of roadmapsData) {
    try {
      const transformedRoadmap = {
        career: roadmapItem.career || roadmapItem.name || '',
        steps: roadmapItem.steps || [],
        duration_months: roadmapItem.duration_months || roadmapItem.durationMonths || 0,
        data: roadmapItem,
      };
      
      // Try to find existing record by career name
      const existingRecord = await pb
        .collection('careerRoadmaps')
        .getFirstListItem(`career = "${transformedRoadmap.career}"`, { requestKey: null })
        .catch(() => null);
      
      if (existingRecord) {
        await pb.collection('careerRoadmaps').update(existingRecord.id, transformedRoadmap);
      } else {
        await pb.collection('careerRoadmaps').create(transformedRoadmap);
      }
      
      syncCount++;
    } catch (error) {
      logger.warn(`Could not sync roadmap item "${roadmapItem.career || roadmapItem.name}": ${error.message}`);
    }
  }
  
  logger.info(`Synced ${syncCount} roadmap records`);
  return syncCount;
}

/**
 * Syncs interview questions to PocketBase
 * @param {Array} questionsData - Array of interview question items
 * @returns {Promise<number>} Count of synced items
 */
async function syncInterviewQuestionsData(questionsData) {
  if (!Array.isArray(questionsData) || questionsData.length === 0) {
    logger.warn('No interview questions data to sync');
    return 0;
  }
  
  let syncCount = 0;
  
  for (const questionItem of questionsData) {
    try {
      const transformedQuestion = {
        career: questionItem.career || questionItem.name || '',
        question: questionItem.question || '',
        answer: questionItem.answer || '',
        difficulty: questionItem.difficulty || 'medium',
        data: questionItem,
      };
      
      // Try to find existing record by career and question
      const existingRecord = await pb
        .collection('interviewQuestionsDatabase')
        .getFirstListItem(`career = "${transformedQuestion.career}" && question = "${transformedQuestion.question}"`, { requestKey: null })
        .catch(() => null);
      
      if (existingRecord) {
        await pb.collection('interviewQuestionsDatabase').update(existingRecord.id, transformedQuestion);
      } else {
        await pb.collection('interviewQuestionsDatabase').create(transformedQuestion);
      }
      
      syncCount++;
    } catch (error) {
      logger.warn(`Could not sync interview question for "${questionItem.career || questionItem.name}": ${error.message}`);
    }
  }
  
  logger.info(`Synced ${syncCount} interview question records`);
  return syncCount;
}

/**
 * Syncs career quizzes to PocketBase
 * @param {Array} quizzesData - Array of quiz items
 * @returns {Promise<number>} Count of synced items
 */
async function syncQuizzesData(quizzesData) {
  if (!Array.isArray(quizzesData) || quizzesData.length === 0) {
    logger.warn('No quizzes data to sync');
    return 0;
  }
  
  let syncCount = 0;
  
  for (const quizItem of quizzesData) {
    try {
      const transformedQuiz = {
        career: quizItem.career || quizItem.name || '',
        title: quizItem.title || '',
        questions: quizItem.questions || [],
        passing_score: quizItem.passing_score || quizItem.passingScore || 70,
        data: quizItem,
      };
      
      // Try to find existing record by career and title
      const existingRecord = await pb
        .collection('careerQuizzes')
        .getFirstListItem(`career = "${transformedQuiz.career}" && title = "${transformedQuiz.title}"`, { requestKey: null })
        .catch(() => null);
      
      if (existingRecord) {
        await pb.collection('careerQuizzes').update(existingRecord.id, transformedQuiz);
      } else {
        await pb.collection('careerQuizzes').create(transformedQuiz);
      }
      
      syncCount++;
    } catch (error) {
      logger.warn(`Could not sync quiz "${quizItem.career || quizItem.name}": ${error.message}`);
    }
  }
  
  logger.info(`Synced ${syncCount} quiz records`);
  return syncCount;
}

/**
 * Main sync function that orchestrates all data syncing
 * @returns {Promise<Object>} Sync counts for each data type
 */
export async function performFullSync() {
  logger.info('═══════════════════════════════════════════════════════════');
  logger.info('🔄 Starting GitHub data sync...');
  logger.info('═══════════════════════════════════════════════════════════');
  
  try {
    const careerData = await fetchCareerDataFromGitHub();
    
    const syncCounts = {
      salary: await syncSalaryData(careerData.salary),
      skills: await syncSkillsData(careerData.skills),
      roadmaps: await syncRoadmapsData(careerData.roadmaps),
      interviewQuestions: await syncInterviewQuestionsData(careerData.interviewQuestions),
      quizzes: await syncQuizzesData(careerData.quiz),
    };
    
    const totalSynced = Object.values(syncCounts).reduce((a, b) => a + b, 0);
    
    logger.info('═══════════════════════════════════════════════════════════');
    logger.info(`✅ GitHub data sync completed successfully`);
    logger.info(`📊 Total records synced: ${totalSynced}`);
    logger.info(`   - Salary: ${syncCounts.salary}`);
    logger.info(`   - Skills: ${syncCounts.skills}`);
    logger.info(`   - Roadmaps: ${syncCounts.roadmaps}`);
    logger.info(`   - Interview Questions: ${syncCounts.interviewQuestions}`);
    logger.info(`   - Quizzes: ${syncCounts.quizzes}`);
    logger.info('═══════════════════════════════════════════════════════════');
    
    return syncCounts;
  } catch (error) {
    logger.error('❌ GitHub data sync failed:', error.message);
    logger.error('Stack:', error.stack);
    throw error;
  }
}

/**
 * Initializes the sync service on app startup
 * Performs an immediate sync and sets up periodic syncing
 */
export async function initializeSyncService() {
  logger.info('🚀 Initializing GitHub sync service...');
  
  try {
    // Perform initial sync on startup
    await performFullSync();
    
    // Set up periodic sync every 24 hours
    syncIntervalId = setInterval(async () => {
      try {
        await performFullSync();
      } catch (error) {
        logger.error('Periodic sync failed:', error.message);
      }
    }, SYNC_INTERVAL_MS);
    
    logger.info(`⏰ Periodic sync scheduled every 24 hours`);
  } catch (error) {
    logger.error('Failed to initialize sync service:', error.message);
    // Don't throw - allow app to start even if initial sync fails
    // Periodic sync will retry in 24 hours
  }
}

/**
 * Stops the periodic sync service
 * Call this during graceful shutdown
 */
export function stopSyncService() {
  if (syncIntervalId) {
    clearInterval(syncIntervalId);
    syncIntervalId = null;
    logger.info('Sync service stopped');
  }
}
