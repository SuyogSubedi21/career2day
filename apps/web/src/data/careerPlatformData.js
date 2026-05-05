import { machineLearningEngineerCareer } from './careers/machine-learning-engineer.js';
import { aiEngineerCareer } from './careers/ai-engineer.js';
import { generativeAiEngineerCareer } from './careers/generative-ai-engineer.js';
import { aiResearchScientistCareer } from './careers/ai-research-scientist.js';
import { dataScientistCareer } from './careers/data-scientist.js';

const careerNames = [
  'AI Engineer',
  'Machine Learning Engineer',
  'Generative AI Engineer',
  'AI Research Scientist',
  'Data Scientist',
  'Data Engineer',
  'Analytics Engineer',
  'MLOps Engineer',
  'Computer Vision Engineer',
  'NLP Engineer',
  'Cloud Architect',
  'Cloud Engineer',
  'DevOps Engineer',
  'Site Reliability Engineer',
  'Platform Engineer',
  'Solutions Architect',
  'Enterprise Architect',
  'Software Architect',
  'Backend Engineer',
  'Full Stack Engineer',
  'Frontend Engineer',
  'Mobile App Developer',
  'iOS Developer',
  'Android Developer',
  'Blockchain Engineer',
  'Smart Contract Developer',
  'Cybersecurity Engineer',
  'Security Architect',
  'Cloud Security Engineer',
  'Penetration Tester',
  'SOC Analyst',
  'Application Security Engineer',
  'CISO',
  'Technical Product Manager',
  'AI Product Manager',
  'Product Manager',
  'Engineering Manager',
  'Software Engineering Manager',
  'Data Product Manager',
  'UX/UI Designer',
  'UX Researcher',
  'Product Designer',
  'Database Administrator',
  'Database Engineer',
  'Big Data Engineer',
  'Robotics Engineer',
  'Embedded Systems Engineer',
  'AR/VR Developer',
  'Game Developer',
  'QA Automation Engineer'
];

export const slugifyCareer = (value = '') =>
  String(value)
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const allCareerSummaries = careerNames.map((name) => ({
  name,
  slug: slugifyCareer(name),
  unlocked: true,
  status: ['AI Engineer', 'Machine Learning Engineer', 'Generative AI Engineer', 'AI Research Scientist', 'Data Scientist', 'Frontend Engineer'].includes(name) ? 'complete' : 'ready-for-data',
  category: getCategory(name)
}));

const questionBlueprints = {
  beginner: [
    ['Explain {topic} to a teammate who has never used it.', 'Define the concept, name the business problem it solves, and give one small example.'],
    ['What is the difference between {topic} and {contrast}?', 'Compare purpose, inputs, outputs, and when each choice is safer.'],
    ['What should you check before using {tool} for {topic}?', 'Confirm data quality, access, constraints, expected output, and failure modes.'],
    ['How would you debug a beginner mistake in {topic}?', 'Reproduce the issue, inspect assumptions, isolate one variable, and validate the fix.'],
    ['What makes {topic} important for this role?', 'It affects quality, speed, reliability, or user value in day-to-day delivery.']
  ],
  intermediate: [
    ['How would you design a small production workflow for {topic}?', 'Define inputs, validation, processing steps, monitoring, and review criteria.'],
    ['What tradeoffs matter when choosing {tool} for {topic}?', 'Balance maintainability, team skill, cost, performance, and long-term operability.'],
    ['How do you measure whether {topic} is working?', 'Pick metrics tied to user or business outcomes, then review quality and edge cases.'],
    ['Describe a real project where {topic} can reduce risk.', 'Use it where repeated manual work, unclear quality, or scaling pressure exists.'],
    ['What common mistake do teams make with {topic}?', 'They optimize the visible output while ignoring validation, documentation, or user impact.']
  ],
  advanced: [
    ['How would you scale {topic} across multiple teams or products?', 'Standardize interfaces, automate quality gates, document ownership, and monitor adoption.'],
    ['What failure mode would you watch for in advanced {topic} work?', 'Look for silent quality drift, hidden coupling, security gaps, or brittle assumptions.'],
    ['How would you explain the ROI of improving {topic}?', 'Connect the improvement to faster delivery, fewer defects, lower cost, or better decisions.'],
    ['How would you mentor a junior teammate on {topic}?', 'Give a mental model, a small task, review feedback, and a checklist they can reuse.'],
    ['What architecture decision affects {topic} most?', 'The boundary between data, logic, user interface, and operational ownership.']
  ]
};

const makeQuestions = (career, topics) => {
  const levels = [
    ['beginner', 30],
    ['intermediate', 40],
    ['advanced', 30]
  ];

  let count = 1;
  return levels.flatMap(([difficulty, total]) =>
    Array.from({ length: total }, (_, index) => {
      const topic = topics[index % topics.length];
      const contrast = topics[(index + 3) % topics.length].name;
      const tool = topic.tools[index % topic.tools.length];
      const template = questionBlueprints[difficulty][index % questionBlueprints[difficulty].length];
      const question = template[0]
        .replace('{topic}', topic.name)
        .replace('{contrast}', contrast)
        .replace('{tool}', tool);
      const answerSeed = template[1]
        .replace('{topic}', topic.name)
        .replace('{contrast}', contrast)
        .replace('{tool}', tool);

      return {
        id: `${career.slug}-iq-${count++}`,
        question,
        shortAnswer: answerSeed,
        detailedAnswer: `${answerSeed} For a ${career.name}, a strong answer should mention the expected input, the decision being made, the quality check, and the operational consequence. A practical response also explains what you would measure after shipping and how you would communicate limits to non-specialists.`,
        difficulty,
        topic: topic.name,
        relatedSkill: topic.skill,
        commonMistake: topic.mistake,
        realWorldExample: topic.example,
        unlocked: true
      };
    })
  );
};

const makeQuizzes = (career, topics) => {
  const levels = [
    ['beginner', 10],
    ['intermediate', 10],
    ['advanced', 10]
  ];

  return levels.flatMap(([difficulty, total]) =>
    Array.from({ length: total }, (_, index) => {
      const topic = topics[(index + (difficulty === 'intermediate' ? 2 : difficulty === 'advanced' ? 4 : 0)) % topics.length];
      const correct = topic.quiz.correct;
      const options = rotateOptions([correct, ...topic.quiz.distractors], index);
      return {
        id: `${career.slug}-quiz-${difficulty}-${index + 1}`,
        question: topic.quiz.question.replace('{career}', career.name),
        options,
        correctAnswer: correct,
        explanation: topic.quiz.explanation,
        difficulty,
        topic: topic.name,
        unlocked: true
      };
    })
  );
};

const rotateOptions = (options, shift) => {
  const offset = shift % options.length;
  return [...options.slice(offset), ...options.slice(0, offset)];
};

const aiTopics = [
  {
    name: 'model evaluation',
    skill: 'Evaluation metrics',
    tools: ['scikit-learn', 'Weights & Biases', 'MLflow'],
    mistake: 'Reporting accuracy without checking class balance, leakage, or business cost.',
    example: 'Choosing precision over recall for an alerting model that creates expensive manual reviews.',
    quiz: {
      question: 'Which evaluation habit is most important for a {career} before deploying a model?',
      correct: 'Compare metrics against the real business cost of false positives and false negatives.',
      distractors: ['Use accuracy for every model because it is easy to explain.', 'Deploy after the training loss improves once.', 'Remove difficult examples so the metric is stable.'],
      explanation: 'Production models create different costs for different errors, so evaluation has to match the decision context.'
    }
  },
  {
    name: 'feature engineering',
    skill: 'Data representation',
    tools: ['pandas', 'NumPy', 'feature stores'],
    mistake: 'Creating features with future information that will not exist at prediction time.',
    example: 'Building churn features only from activity that happened before the prediction date.',
    quiz: {
      question: 'What is the safest way to prevent leakage during feature engineering?',
      correct: 'Build features using only data available before the prediction timestamp.',
      distractors: ['Add every correlated column to maximize accuracy.', 'Normalize the target column with the input columns.', 'Tune features on the test set until the score improves.'],
      explanation: 'Leakage makes offline results look excellent while failing in real use.'
    }
  },
  {
    name: 'prompt and LLM system design',
    skill: 'LLM application design',
    tools: ['OpenAI API', 'LangChain', 'vector databases'],
    mistake: 'Treating prompts as the whole system instead of designing retrieval, evaluation, and guardrails.',
    example: 'Building a support assistant that cites indexed policy documents and refuses unsupported claims.',
    quiz: {
      question: 'What makes an LLM workflow production-minded?',
      correct: 'It combines prompts with retrieval, testing, fallback behavior, and monitoring.',
      distractors: ['It uses the longest prompt possible.', 'It hides all uncertainty from the user.', 'It stores user data in prompts permanently.'],
      explanation: 'LLM products need system design around the model, not only clever wording.'
    }
  },
  {
    name: 'MLOps deployment',
    skill: 'Model operations',
    tools: ['Docker', 'FastAPI', 'MLflow'],
    mistake: 'Shipping a notebook result without repeatable packaging or monitoring.',
    example: 'Serving a fraud model through an API with versioned artifacts and latency metrics.',
    quiz: {
      question: 'What should be versioned in an ML deployment?',
      correct: 'Training data reference, code, model artifact, parameters, and evaluation results.',
      distractors: ['Only the final API endpoint.', 'Only the notebook title.', 'Only the dashboard screenshot.'],
      explanation: 'Versioning makes model behavior reproducible and debuggable.'
    }
  },
  {
    name: 'responsible AI',
    skill: 'Bias and risk review',
    tools: ['model cards', 'data sheets', 'fairness checks'],
    mistake: 'Checking aggregate performance while ignoring subgroup behavior.',
    example: 'Auditing a screening model for error rates across experience levels and locations.',
    quiz: {
      question: 'Which responsible AI review is most practical before launch?',
      correct: 'Document intended use, excluded use, known limits, and subgroup performance.',
      distractors: ['Assume the model is fair if the dataset is large.', 'Remove all examples with edge cases.', 'Skip review when the model is internal.'],
      explanation: 'Responsible AI work makes limits visible and reduces avoidable harm.'
    }
  },
  {
    name: 'data pipelines',
    skill: 'Reliable data flow',
    tools: ['Airflow', 'SQL', 'dbt'],
    mistake: 'Training models from unvalidated tables with changing definitions.',
    example: 'Creating a daily feature table with freshness checks and schema validation.',
    quiz: {
      question: 'Why do AI projects need reliable data pipelines?',
      correct: 'Models inherit the quality, freshness, and definition problems of their input data.',
      distractors: ['Pipelines are only needed for dashboards.', 'They replace model evaluation.', 'They make every model explainable automatically.'],
      explanation: 'Bad or unstable input data creates bad model behavior.'
    }
  }
];

const frontendTopics = [
  {
    name: 'semantic HTML and accessibility',
    skill: 'Accessible UI',
    tools: ['HTML', 'ARIA', 'Lighthouse'],
    mistake: 'Using divs and click handlers where native buttons, labels, and landmarks would work better.',
    example: 'Building a job filter panel that keyboard users can operate without custom workarounds.',
    quiz: {
      question: 'What is the best first accessibility choice for a {career}?',
      correct: 'Use native semantic elements before adding custom ARIA.',
      distractors: ['Use ARIA roles on every div.', 'Remove focus styles for a cleaner visual design.', 'Use only color to show validation errors.'],
      explanation: 'Native elements bring keyboard behavior, semantics, and browser support by default.'
    }
  },
  {
    name: 'React component design',
    skill: 'Component architecture',
    tools: ['React', 'Vite', 'Storybook'],
    mistake: 'Creating components that mix fetching, formatting, layout, and business rules in one file.',
    example: 'Separating a reusable career card from the page that loads career data.',
    quiz: {
      question: 'What makes a React component easier to reuse?',
      correct: 'Clear props, limited responsibility, and predictable rendering states.',
      distractors: ['Reading every value from global state.', 'Hardcoding copy and API URLs.', 'Putting all page logic into one component.'],
      explanation: 'Reusable components have clean boundaries and do not know too much about their parent page.'
    }
  },
  {
    name: 'state and forms',
    skill: 'Interactive UX',
    tools: ['React Hook Form', 'Zod', 'localStorage'],
    mistake: 'Updating UI state without validation, persistence, or clear empty states.',
    example: 'Saving a CV draft locally while validating required role-specific sections.',
    quiz: {
      question: 'What should a robust form handle besides happy-path typing?',
      correct: 'Validation, loading, errors, empty states, and draft persistence when useful.',
      distractors: ['Only the submit button style.', 'Only desktop screen sizes.', 'Only the final API response.'],
      explanation: 'Real users pause, make mistakes, lose network, and return later.'
    }
  },
  {
    name: 'API integration',
    skill: 'Data fetching',
    tools: ['fetch', 'TanStack Query', 'REST APIs'],
    mistake: 'Rendering fetched data without loading, error, stale, or retry states.',
    example: 'Loading job market data with skeletons and a retry state when the API fails.',
    quiz: {
      question: 'What is a production-ready data fetching state?',
      correct: 'It handles loading, success, empty, error, retry, and stale data behavior.',
      distractors: ['It assumes the network always succeeds.', 'It blocks the entire app for one request.', 'It logs errors only to the console.'],
      explanation: 'Data fetching is part of the user experience, not only a technical detail.'
    }
  },
  {
    name: 'performance',
    skill: 'Frontend performance',
    tools: ['Chrome DevTools', 'Lighthouse', 'React Profiler'],
    mistake: 'Optimizing before measuring or shipping oversized bundles and images.',
    example: 'Lazy-loading a CV preview library and compressing dashboard screenshots.',
    quiz: {
      question: 'What should you do before performance optimization?',
      correct: 'Measure the bottleneck with real tools and realistic user conditions.',
      distractors: ['Rewrite the app in a new framework immediately.', 'Memoize every component.', 'Remove all animations from every page.'],
      explanation: 'Measurement prevents time spent optimizing the wrong thing.'
    }
  },
  {
    name: 'responsive product design',
    skill: 'Responsive layout',
    tools: ['CSS Grid', 'Flexbox', 'Tailwind CSS'],
    mistake: 'Designing only a desktop layout and shrinking it until it breaks on mobile.',
    example: 'Turning a dashboard into stacked scannable panels with stable chart heights on mobile.',
    quiz: {
      question: 'What is the best responsive layout habit?',
      correct: 'Design stable layout rules for common content lengths across mobile and desktop.',
      distractors: ['Scale all font sizes with viewport width.', 'Hide important actions on mobile.', 'Use fixed pixel widths everywhere.'],
      explanation: 'Responsive UI needs planned constraints, not accidental shrinking.'
    }
  }
];

const completeCareers = [
  aiEngineerCareer,
  machineLearningEngineerCareer,
  generativeAiEngineerCareer,
  aiResearchScientistCareer,
  dataScientistCareer,
  {
    slug: 'frontend-engineer',
    name: 'Frontend Engineer',
    category: 'Software Engineering',
    tagline: 'Build fast, accessible, polished product interfaces that turn data and workflows into usable software.',
    description: 'Frontend Engineers own the user-facing layer of software products. They combine React, browser fundamentals, design systems, API integration, accessibility, performance, and product judgment.',
    salaryPotential: '$90k-$165k+',
    demandLevel: 'High',
    beginnerFriendliness: 'High',
    requiredSkills: ['HTML', 'CSS', 'JavaScript', 'React', 'accessibility', 'responsive design', 'state management', 'API integration', 'performance'],
    tools: ['React', 'Vite', 'Tailwind CSS', 'Figma', 'Storybook', 'Chrome DevTools', 'GitHub', 'Lighthouse'],
    accent: 'from-indigo-600 via-sky-500 to-teal-400',
    unlocked: true,
    cv: {
      summary: 'Frontend Engineer with practical experience building responsive React interfaces, reusable components, accessible workflows, API-driven screens, and performance-minded product experiences.',
      skills: ['React', 'JavaScript', 'TypeScript basics', 'Tailwind CSS', 'accessibility', 'API integration', 'forms', 'responsive design', 'performance', 'Git'],
      projects: ['SaaS analytics dashboard with responsive charts', 'Role-aware CV builder with live preview', 'Accessible job tracker with filters and saved application states'],
      atsKeywords: ['Frontend Engineer', 'React', 'JavaScript', 'responsive design', 'accessibility', 'API integration', 'component architecture', 'performance']
    },
    roadmap: [
      {
        phase: 'Beginner',
        timelineWeeks: 4,
        topics: ['semantic HTML', 'CSS layout', 'JavaScript fundamentals', 'Git basics'],
        tools: ['VS Code', 'Chrome DevTools', 'GitHub', 'MDN'],
        miniProject: 'Build a responsive personal portfolio with project cards, contact form, and accessible navigation.',
        outcome: 'You can build clean static interfaces that behave well on mobile and desktop.',
        checklist: ['Use semantic landmarks', 'Build responsive grid', 'Handle form validation', 'Deploy portfolio']
      },
      {
        phase: 'Intermediate',
        timelineWeeks: 5,
        topics: ['React components', 'props and state', 'forms', 'API fetching'],
        tools: ['React', 'Vite', 'Tailwind CSS', 'REST APIs'],
        miniProject: 'Build a job application tracker with filters, notes, status updates, and local draft persistence.',
        outcome: 'You can create interactive screens with real data flow and predictable states.',
        checklist: ['Create reusable components', 'Fetch API data', 'Persist local state', 'Design empty and error states']
      },
      {
        phase: 'Advanced',
        timelineWeeks: 5,
        topics: ['accessibility', 'performance', 'component systems', 'testing basics'],
        tools: ['Storybook', 'Lighthouse', 'React Testing Library', 'Figma'],
        miniProject: 'Create a small design system with buttons, inputs, cards, tabs, and documented states.',
        outcome: 'Your UI work becomes reusable, measurable, accessible, and easier for teams to maintain.',
        checklist: ['Audit keyboard navigation', 'Measure Lighthouse score', 'Write component tests', 'Document component states']
      },
      {
        phase: 'Job-ready',
        timelineWeeks: 4,
        topics: ['portfolio case studies', 'code review practice', 'frontend interview prep', 'ATS CV positioning'],
        tools: ['GitHub', 'Netlify', 'Career2Day CV Builder', 'LinkedIn'],
        miniProject: 'Ship two polished React apps with READMEs, screenshots, performance notes, and product rationale.',
        outcome: 'You can show finished product work and explain technical decisions in interviews.',
        checklist: ['Publish two apps', 'Write technical READMEs', 'Practice 30 interview questions', 'Build Frontend Engineer CV']
      }
    ],
    analytics: {
      learningCurve: [10, 24, 38, 52, 66, 78, 88, 94],
      skills: [
        ['React', 86],
        ['CSS', 82],
        ['A11y', 74],
        ['APIs', 78],
        ['Perf', 70],
        ['UX', 80]
      ],
      salary: [
        ['Entry', 90],
        ['Mid', 120],
        ['Senior', 165],
        ['Lead', 195]
      ]
    },
    topics: frontendTopics
  }
].map((career) => ({
  ...career,
  interviewQuestions: makeQuestions(career, career.topics),
  quizzes: makeQuizzes(career, career.topics)
}));

export const careerPlatformData = completeCareers;

export const getCareerPlatformBySlug = (slug) =>
  careerPlatformData.find((career) => career.slug === slug) || null;

export const getFeaturedPlatformCareers = () => careerPlatformData;

export const getReadinessLevel = (score) => {
  if (score >= 85) return 'Job-Ready';
  if (score >= 70) return 'Almost Job-Ready';
  if (score >= 40) return 'Preparing';
  return 'Beginner';
};

export const calculateReadinessScore = ({ roadmapCompletion = 0, quizScore = 0, interviewCompletion = 0 }) => {
  const score = Math.round(roadmapCompletion * 0.4 + quizScore * 0.35 + interviewCompletion * 0.25);
  return {
    score,
    level: getReadinessLevel(score)
  };
};

export const careerDataSchema = {
  career: {
    slug: 'string',
    name: 'string',
    category: 'string',
    unlocked: 'boolean',
    description: 'string',
    salaryPotential: 'string',
    demandLevel: 'string',
    beginnerFriendliness: 'string',
    requiredSkills: ['string'],
    tools: ['string'],
    roadmap: [
      {
        phase: 'Beginner | Intermediate | Advanced | Job-ready',
        timelineWeeks: 'number',
        topics: ['string'],
        tools: ['string'],
        miniProject: 'string',
        outcome: 'string',
        checklist: ['string']
      }
    ],
    interviewQuestions: [
      {
        question: 'string',
        shortAnswer: 'string',
        detailedAnswer: 'string',
        difficulty: 'beginner | intermediate | advanced',
        topic: 'string',
        relatedSkill: 'string',
        commonMistake: 'string',
        realWorldExample: 'string'
      }
    ],
    quizzes: [
      {
        question: 'string',
        options: ['string'],
        correctAnswer: 'string',
        explanation: 'string',
        difficulty: 'beginner | intermediate | advanced',
        topic: 'string'
      }
    ],
    cv: {
      summary: 'string',
      skills: ['string'],
      projects: ['string'],
      atsKeywords: ['string']
    },
    analytics: {
      learningCurve: ['number'],
      skills: [['label', 'score']],
      salary: [['level', 'salaryInThousands']]
    }
  },
  monetization: {
    unlocked: true,
    premiumTemplate: false,
    paddleProductId: null,
    paddlePriceId: null
  }
};

function getCategory(name) {
  if (name.includes('AI') || name.includes('Machine Learning') || name.includes('Data') || name.includes('MLOps') || name.includes('NLP') || name.includes('Vision')) return 'AI and Data';
  if (name.includes('Cloud') || name.includes('DevOps') || name.includes('Site Reliability') || name.includes('Platform')) return 'Cloud and Infrastructure';
  if (name.includes('Security') || name.includes('Penetration') || name.includes('SOC') || name.includes('CISO')) return 'Cybersecurity';
  if (name.includes('Product') || name.includes('Manager')) return 'Product and Leadership';
  if (name.includes('Designer') || name.includes('UX')) return 'Design';
  return 'Software Engineering';
}
