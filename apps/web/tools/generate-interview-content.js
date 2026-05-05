import fs from 'node:fs';
import path from 'node:path';

const outputRoot = path.resolve('src/data/interview-prep');
const rolesRoot = path.join(outputRoot, 'roles');

const roleConfigs = [
  {
    slug: 'data-analyst',
    role: 'Data Analyst',
    stack: 'SQL, spreadsheets, Python, BI dashboards, and statistics',
    topics: [
      ['SQL joins', 'SQL', 'combine customer and order tables without losing unmatched records'],
      ['aggregation', 'SQL', 'calculate KPIs such as revenue, churn, and conversion rate'],
      ['data cleaning', 'Excel', 'standardize missing, duplicated, or inconsistent values'],
      ['pivot tables', 'Excel', 'summarize categorical data for business stakeholders'],
      ['descriptive statistics', 'Statistics', 'explain averages, spread, and outliers'],
      ['data visualization', 'Power BI', 'choose the right chart for trends or comparisons'],
      ['dashboard design', 'Tableau', 'build a dashboard that answers one business question'],
      ['Python analysis', 'Python', 'clean and explore a CSV with pandas'],
      ['business metrics', 'Analytics', 'define KPIs before writing queries'],
      ['A/B testing basics', 'Statistics', 'compare two groups using conversion-rate evidence']
    ],
    projects: ['sales KPI dashboard', 'customer churn analysis', 'marketing campaign report']
  },
  {
    slug: 'frontend-developer',
    role: 'Frontend Developer',
    stack: 'HTML, CSS, JavaScript, React, accessibility, and browser APIs',
    topics: [
      ['semantic HTML', 'HTML', 'structure content for accessibility and SEO'],
      ['CSS layout', 'CSS', 'build responsive layouts with flexbox and grid'],
      ['JavaScript state', 'JavaScript', 'update UI based on user interaction'],
      ['React components', 'React', 'split an interface into reusable components'],
      ['props and state', 'React', 'pass data and manage local UI changes'],
      ['forms', 'React', 'validate user input before submission'],
      ['API fetching', 'JavaScript', 'load server data and handle loading errors'],
      ['accessibility', 'ARIA', 'make controls usable by keyboard and screen readers'],
      ['performance', 'Web Performance', 'reduce render and bundle cost'],
      ['testing UI', 'React Testing Library', 'verify components behave correctly']
    ],
    projects: ['responsive SaaS dashboard', 'job tracker app', 'component library']
  },
  {
    slug: 'backend-developer',
    role: 'Backend Developer',
    stack: 'APIs, databases, authentication, caching, queues, and deployment',
    topics: [
      ['REST APIs', 'HTTP', 'design predictable endpoints and status codes'],
      ['database schema design', 'SQL', 'model users, orders, and transactions'],
      ['authentication', 'Security', 'verify identity with sessions or tokens'],
      ['authorization', 'Security', 'restrict actions based on permissions'],
      ['input validation', 'Validation', 'reject unsafe or malformed data'],
      ['transactions', 'Databases', 'keep multi-step writes consistent'],
      ['caching', 'Redis', 'reduce repeated database reads safely'],
      ['background jobs', 'Queues', 'process slow tasks outside the request cycle'],
      ['logging', 'Observability', 'debug production issues with structured logs'],
      ['API testing', 'Testing', 'prove endpoints handle success and failure cases']
    ],
    projects: ['authenticated REST API', 'order processing service', 'background email worker']
  },
  {
    slug: 'full-stack-developer',
    role: 'Full Stack Developer',
    stack: 'frontend UI, backend APIs, databases, authentication, testing, and deployment',
    topics: [
      ['full-stack flow', 'Architecture', 'connect UI actions to database changes'],
      ['React data fetching', 'React', 'show loading, error, and success states'],
      ['API contracts', 'HTTP', 'keep frontend and backend data shapes aligned'],
      ['database relationships', 'SQL', 'model relational data for app features'],
      ['authentication flow', 'Auth', 'protect pages and API routes'],
      ['form validation', 'Validation', 'validate on client and server'],
      ['state management', 'React', 'choose local, URL, or server state'],
      ['file uploads', 'Storage', 'handle user files securely'],
      ['deployment', 'DevOps', 'configure environment variables and hosting'],
      ['end-to-end testing', 'Testing', 'test a user workflow across the stack']
    ],
    projects: ['full-stack task manager', 'subscription dashboard', 'portfolio CMS']
  },
  {
    slug: 'data-scientist',
    role: 'Data Scientist',
    stack: 'Python, statistics, machine learning, model evaluation, SQL, and communication',
    topics: [
      ['exploratory analysis', 'Python', 'understand distributions and missing values'],
      ['feature engineering', 'Machine Learning', 'turn raw variables into model-ready signals'],
      ['train-test split', 'Machine Learning', 'estimate model performance on unseen data'],
      ['classification metrics', 'Statistics', 'evaluate precision, recall, and F1 score'],
      ['regression metrics', 'Statistics', 'interpret MAE, RMSE, and R-squared'],
      ['overfitting', 'Machine Learning', 'detect models that memorize training data'],
      ['model selection', 'Scikit-learn', 'compare baseline and complex models fairly'],
      ['SQL for analysis', 'SQL', 'prepare modeling datasets from relational tables'],
      ['experimentation', 'Statistics', 'design and interpret A/B tests'],
      ['model communication', 'Storytelling', 'explain model results to non-technical teams']
    ],
    projects: ['churn prediction model', 'pricing regression analysis', 'A/B test analysis']
  }
];

const difficultyCounts = { beginner: 30, intermediate: 40, advanced: 30 };

const verbs = {
  beginner: ['define', 'identify', 'explain', 'use', 'choose', 'validate'],
  intermediate: ['debug', 'design', 'compare', 'optimize', 'implement', 'analyze', 'refactor', 'measure'],
  advanced: ['scale', 'secure', 'diagnose', 'evaluate', 'architect', 'trade off']
};

const contexts = {
  beginner: [
    'during a first portfolio project',
    'when working with a small dataset or feature',
    'before sharing work with a reviewer',
    'when converting a requirement into implementation',
    'while checking your own work'
  ],
  intermediate: [
    'in a production feature',
    'when a stakeholder reports incorrect results',
    'while improving an existing system',
    'before releasing a customer-facing change',
    'when collaborating with another team'
  ],
  advanced: [
    'at high traffic or high data volume',
    'when reliability and correctness both matter',
    'during an architecture review',
    'when a decision affects multiple teams',
    'after a subtle production incident'
  ]
};

const beginnerPatterns = [
  'What is {topic}, and why does a {role} use it {context}?',
  'How would you use {skill} to {task}?',
  'What mistake should you avoid when working with {topic}?',
  'What is the difference between correct and incorrect use of {topic}?',
  'Which first check would you perform before using {topic}?',
  'How do you explain {topic} to a non-technical teammate?'
];

const intermediatePatterns = [
  'How would you debug a problem with {topic} {context}?',
  'How would you design a workflow that uses {skill} to {task}?',
  'What tradeoff matters when applying {topic} {context}?',
  'How would you verify that your {topic} work is correct?',
  'How would you improve an existing implementation of {topic}?',
  'What signals tell you that {topic} is being used poorly?'
];

const advancedPatterns = [
  'How would you scale a solution involving {topic} {context}?',
  'How would you diagnose a subtle failure caused by {topic}?',
  'What architecture decision would you make for {topic} when requirements change?',
  'How would you balance correctness, speed, and maintainability for {topic}?',
  'How would you review another engineer or analyst work involving {topic}?',
  'How would you reduce risk when {topic} affects business-critical decisions?'
];

const letterOrder = [
  ['A', 'B', 'C', 'D'],
  ['B', 'C', 'D', 'A'],
  ['C', 'D', 'A', 'B'],
  ['D', 'A', 'B', 'C']
];

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function sentence(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function makeAnswer({ role, stack, topic, skill, task, difficulty, project }) {
  const foundation = `${sentence(topic)} means using ${skill} to ${task}. For a ${role}, the key is to start from the business or user goal, apply the technique carefully, and check the result before presenting it.`;
  const levelDetail = {
    beginner: `A strong beginner answer should mention the purpose, the basic steps, and one simple validation check. In practice, you would define the expected result, apply ${skill}, compare the output with a small known example, and explain the result in plain language.`,
    intermediate: `A strong intermediate answer should include design, validation, and failure handling. In practice, you would document assumptions, implement the workflow, test edge cases, review the output against source data or requirements, and make the result easy for teammates to maintain.`,
    advanced: `A strong advanced answer should discuss tradeoffs, reliability, and long-term ownership. In practice, you would evaluate alternatives, identify failure modes, add monitoring or review checkpoints, and choose an approach that stays correct as data volume, traffic, or team complexity grows.`
  }[difficulty];

  return {
    shortAnswer: foundation,
    detailedAnswer: `${foundation}\n\n${levelDetail}\n\nFor example, in a ${project}, you should use ${stack} only where it directly supports the goal. Avoid guessing: inspect inputs, name assumptions, validate outputs, and communicate limitations. This makes the answer technically accurate and interview-ready because it shows both execution and judgment.`
  };
}

function makeOptions({ role, topic, skill, task, index }) {
  const correct = `Use ${skill} to ${task}, then validate the result against requirements or source data.`;
  const distractors = [
    `Apply ${topic} only at the end, without checking assumptions or edge cases.`,
    `Choose the newest tool first, then adjust the problem to match that tool.`,
    `Skip validation if the output looks visually clean or the code runs without errors.`
  ];
  const order = letterOrder[index % letterOrder.length];
  const values = {};
  values[order[0]] = correct;
  values[order[1]] = distractors[0];
  values[order[2]] = distractors[1];
  values[order[3]] = distractors[2];
  return {
    options: values,
    correctAnswer: order[0],
    explanation: `The best answer for a ${role} is ${order[0]} because ${topic} is useful only when it solves the actual task and the result is validated. The other options ignore assumptions, tool fit, or correctness checks.`
  };
}

function buildQuestion(roleConfig, difficulty, ordinal, globalNumber) {
  const topicItem = roleConfig.topics[(ordinal - 1) % roleConfig.topics.length];
  const [topic, skill, task] = topicItem;
  const patternList = difficulty === 'beginner' ? beginnerPatterns : difficulty === 'intermediate' ? intermediatePatterns : advancedPatterns;
  const pattern = patternList[(ordinal - 1) % patternList.length];
  const context = contexts[difficulty][(ordinal - 1) % contexts[difficulty].length];
  const project = roleConfig.projects[(ordinal - 1) % roleConfig.projects.length];
  const questionCore = pattern
    .replace('{topic}', topic)
    .replace('{skill}', skill)
    .replace('{task}', task)
    .replace('{role}', roleConfig.role)
    .replace('{context}', context);
  const question = `${questionCore} Frame your answer around a ${project}, checkpoint ${ordinal}.`;
  const answer = makeAnswer({ ...roleConfig, topic, skill, task, difficulty, project });
  const quiz = makeOptions({ ...roleConfig, topic, skill, task, index: globalNumber });

  return {
    id: `${roleConfig.slug}-${difficulty}-${String(ordinal).padStart(2, '0')}`,
    role: roleConfig.role,
    careerSlug: roleConfig.slug,
    questionNumber: globalNumber,
    question,
    shortAnswer: answer.shortAnswer,
    detailedAnswer: answer.detailedAnswer,
    difficulty,
    topic,
    relatedSkill: skill,
    quizOptions: quiz.options,
    correctAnswer: quiz.correctAnswer,
    explanation: quiz.explanation
  };
}

function buildRole(roleConfig) {
  const questions = [];
  let questionNumber = 1;
  Object.entries(difficultyCounts).forEach(([difficulty, count]) => {
    for (let i = 1; i <= count; i += 1) {
      questions.push(buildQuestion(roleConfig, difficulty, i, questionNumber));
      questionNumber += 1;
    }
  });

  const questionSet = new Set(questions.map((item) => item.question));
  if (questions.length !== 100 || questionSet.size !== 100) {
    throw new Error(`${roleConfig.role} generated ${questions.length} questions with ${questionSet.size} unique questions.`);
  }

  return {
    schemaVersion: '1.0.0',
    careerSlug: roleConfig.slug,
    role: roleConfig.role,
    totalQuestions: 100,
    distribution: difficultyCounts,
    generatedFrom: 'apps/web/tools/generate-interview-content.js',
    questions
  };
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

fs.mkdirSync(rolesRoot, { recursive: true });

const schema = {
  '$schema': 'https://json-schema.org/draft/2020-12/schema',
  title: 'Career2Day Interview Prep Role Content',
  type: 'object',
  required: ['schemaVersion', 'careerSlug', 'role', 'totalQuestions', 'distribution', 'questions'],
  properties: {
    schemaVersion: { type: 'string' },
    careerSlug: { type: 'string' },
    role: { type: 'string' },
    totalQuestions: { const: 100 },
    distribution: {
      type: 'object',
      required: ['beginner', 'intermediate', 'advanced'],
      properties: {
        beginner: { const: 30 },
        intermediate: { const: 40 },
        advanced: { const: 30 }
      }
    },
    questions: {
      type: 'array',
      minItems: 100,
      maxItems: 100,
      items: {
        type: 'object',
        required: ['id', 'role', 'careerSlug', 'questionNumber', 'question', 'shortAnswer', 'detailedAnswer', 'difficulty', 'topic', 'relatedSkill', 'quizOptions', 'correctAnswer', 'explanation'],
        properties: {
          id: { type: 'string' },
          role: { type: 'string' },
          careerSlug: { type: 'string' },
          questionNumber: { type: 'integer', minimum: 1, maximum: 100 },
          question: { type: 'string' },
          shortAnswer: { type: 'string' },
          detailedAnswer: { type: 'string' },
          difficulty: { enum: ['beginner', 'intermediate', 'advanced'] },
          topic: { type: 'string' },
          relatedSkill: { type: 'string' },
          quizOptions: {
            type: 'object',
            required: ['A', 'B', 'C', 'D'],
            properties: {
              A: { type: 'string' },
              B: { type: 'string' },
              C: { type: 'string' },
              D: { type: 'string' }
            }
          },
          correctAnswer: { enum: ['A', 'B', 'C', 'D'] },
          explanation: { type: 'string' }
        }
      }
    }
  }
};

writeJson(path.join(outputRoot, 'schema.json'), schema);

const manifest = roleConfigs.map((role) => ({
  slug: role.slug,
  role: role.role,
  totalQuestions: 100,
  distribution: difficultyCounts,
  file: `./roles/${role.slug}.json`
}));

roleConfigs.forEach((role) => {
  writeJson(path.join(rolesRoot, `${slugify(role.slug)}.json`), buildRole(role));
});

writeJson(path.join(outputRoot, 'manifest.json'), {
  schemaVersion: '1.0.0',
  roles: manifest
});

console.log(`Generated ${roleConfigs.length} role files in ${path.relative(process.cwd(), outputRoot)}`);
