import manifest from './manifest.json';
import dataAnalyst from './roles/data-analyst.json';
import frontendDeveloper from './roles/frontend-developer.json';
import backendDeveloper from './roles/backend-developer.json';
import fullStackDeveloper from './roles/full-stack-developer.json';
import dataScientist from './roles/data-scientist.json';

const roleContent = {
  'data-analyst': dataAnalyst,
  'frontend-developer': frontendDeveloper,
  'backend-developer': backendDeveloper,
  'full-stack-developer': fullStackDeveloper,
  'data-scientist': dataScientist
};

export const interviewPrepManifest = manifest;

export const getInterviewRoles = () => manifest.roles;

export const getInterviewRoleContent = (careerSlug) => roleContent[careerSlug] || null;

export const getInterviewQuestions = (careerSlug) => roleContent[careerSlug]?.questions || [];

export const getDifficultyCounts = (questions = []) => questions.reduce((acc, question) => {
  acc[question.difficulty] = (acc[question.difficulty] || 0) + 1;
  return acc;
}, {});

export const calculateReadiness = ({ completedCount = 0, totalQuestions = 100, quizScore = 0 }) => {
  const studyProgress = totalQuestions ? completedCount / totalQuestions : 0;
  const quizProgress = quizScore / 100;
  return Math.round((studyProgress * 60) + (quizProgress * 40));
};
