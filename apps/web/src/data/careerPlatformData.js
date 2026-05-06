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
  status: 'complete',
  category: getCategory(name)
}));

const roleContext = (career) => {
  const name = career.name || '';
  const category = career.category || getCategory(name);
  const skills = career.skills || career.requiredSkills || [];
  const tools = career.tools || [];
  const joined = `${name} ${category} ${skills.join(' ')} ${tools.join(' ')}`.toLowerCase();

  if (/security|soc|penetration|ciso|appsec|vulnerability|siem/.test(joined)) {
    return {
      domain: 'security program',
      system: 'a customer-facing SaaS environment with identity, logs, endpoints, and cloud resources',
      artifact: 'incident report, detection rule, remediation plan, threat model, or risk register',
      metric: 'mean time to detect, false-positive rate, exploitability, blast radius, and remediation SLA',
      risk: 'missed detections, privilege escalation, data exposure, compliance gaps, and alert fatigue',
      deployment: 'controlled lab, SIEM content repo, policy-as-code checks, and documented runbooks',
      testing: 'safe lab validation, replayed logs, peer review, and regression checks against known attack paths'
    };
  }

  if (/devops|sre|platform|cloud|kubernetes|terraform|reliability/.test(joined)) {
    return {
      domain: 'production infrastructure',
      system: 'a containerized service running behind CI/CD, infrastructure as code, monitoring, and rollback controls',
      artifact: 'deployment pipeline, Terraform module, Kubernetes manifest, runbook, dashboard, or incident review',
      metric: 'deployment frequency, lead time, error budget burn, recovery time, saturation, and cloud cost',
      risk: 'fragile rollouts, secret leakage, drift, noisy alerts, regional failure, and runaway spend',
      deployment: 'blue-green or rolling deployment with health checks, rollback, observability, and least-privilege access',
      testing: 'pipeline tests, policy checks, smoke tests, load tests, chaos drills, and restore tests'
    };
  }

  if (/data engineer|analytics|database|big data|scientist|mlops|machine learning|\bai\b|nlp|vision|rag|llm/.test(joined)) {
    return {
      domain: 'data and AI workflow',
      system: 'a data product with ingestion, validation, transformation, model or metric logic, and downstream consumers',
      artifact: 'pipeline DAG, feature table, evaluation report, model card, dashboard, or data contract',
      metric: 'freshness, completeness, precision/recall, latency, cost, drift, and business impact',
      risk: 'data leakage, schema drift, stale inputs, hallucination, biased outputs, and broken metric definitions',
      deployment: 'versioned pipeline or service with validation gates, monitoring, reproducible environments, and rollback notes',
      testing: 'unit tests, data quality tests, evaluation sets, backfills, shadow runs, and peer-reviewed assumptions'
    };
  }

  if (/frontend|mobile|ios|android|ux|designer|product designer|ar|vr|game/.test(joined)) {
    return {
      domain: 'user-facing product experience',
      system: 'an accessible client application with forms, navigation, state, API integration, and production build constraints',
      artifact: 'responsive workflow, component library, usability report, release build, or performance audit',
      metric: 'Core Web Vitals, crash-free sessions, task completion, accessibility issues, bundle size, and conversion',
      risk: 'broken accessibility, slow rendering, state bugs, platform inconsistencies, and confusing user flows',
      deployment: 'preview environment, app store or static hosting release, analytics, error tracking, and rollback plan',
      testing: 'unit tests, UI automation, accessibility checks, real-device testing, and performance profiling'
    };
  }

  if (/product manager|engineering manager|architect|manager|ciso/.test(joined)) {
    return {
      domain: 'technical leadership workflow',
      system: 'a cross-functional product or engineering initiative with stakeholders, constraints, delivery risk, and measurable outcomes',
      artifact: 'PRD, architecture decision record, roadmap, operating model, scorecard, or executive briefing',
      metric: 'delivery predictability, adoption, customer impact, risk reduction, quality signals, and team health',
      risk: 'unclear ownership, hidden dependencies, weak prioritization, misaligned stakeholders, and unmeasured outcomes',
      deployment: 'phased rollout with communication plan, decision log, operational readiness, and adoption tracking',
      testing: 'review cycles, pilot feedback, success metrics, risk review, and retrospective learning'
    };
  }

  return {
    domain: 'production software system',
    system: 'a service or product workflow with APIs, persistence, testing, deployment, and operational visibility',
    artifact: 'working application, API contract, architecture note, test suite, dashboard, or deployment guide',
    metric: 'latency, error rate, maintainability, reliability, security, and user impact',
    risk: 'unclear requirements, brittle architecture, poor observability, regressions, and security gaps',
    deployment: 'staged release with tests, monitoring, rollback, and documented operational ownership',
    testing: 'unit tests, integration tests, smoke tests, code review, and production-like validation'
  };
};

const fillTemplate = (template, values) =>
  Object.entries(values).reduce((text, [key, value]) => text.replaceAll(`{${key}}`, value), template);

const interviewBlueprints = {
  beginner: [
    'Walk me through how you would use {topic} in {system}. What would you build first and what would you intentionally leave out?',
    'A teammate implemented {topic} with {tool}, but the output is inconsistent. What would you inspect first?',
    'How would you explain the tradeoff between {topic} and {contrast} to a non-specialist stakeholder?',
    'What signals would tell you that {topic} is working well enough for a junior-level production task?',
    'You inherit a small project using {tool}. What files, logs, tests, or docs would you read before changing {topic}?',
    'Describe a safe debugging workflow when {topic} fails in {system}.',
    'What common beginner mistake in {topic} creates downstream production risk?',
    'How would you turn a small {topic} exercise into a portfolio artifact a hiring manager can trust?',
    'Which quality check would you add before shipping work that depends on {topic}?',
    'Tell me about a time you had to learn a tool like {tool}. How would you prove you learned it beyond a tutorial?'
  ],
  intermediate: [
    'Design a production-minded workflow for {topic} in {system}. Include validation, testing, deployment, and monitoring.',
    'A release involving {topic} increased errors after deployment. How would you triage, rollback, and prevent recurrence?',
    'How would you measure {topic} using {metric}, and what metric would you avoid over-trusting?',
    'What architecture boundary would you draw around {topic} so the system remains maintainable?',
    'How would you review a pull request that changes {topic} and touches security, performance, or reliability?',
    'A stakeholder asks for a faster delivery path that weakens {topic}. How would you explain the risk and propose a compromise?',
    'How would you document {topic} so another engineer or analyst can operate it without you?',
    'What failure mode would you simulate before trusting {topic} in {system}?',
    'How would you compare {tool} with an alternative for {topic} in terms of team skill, cost, lock-in, and operability?',
    'Describe a realistic incident, bug, or outage involving {topic}. What would your postmortem include?'
  ],
  advanced: [
    'How would you scale {topic} across multiple teams while preserving ownership, standards, and local autonomy?',
    'What would your reference architecture for {career} work look like if {system} had strict reliability and security requirements?',
    'How would you reduce operational risk in {topic} without slowing delivery to a halt?',
    'A production dashboard shows healthy top-line metrics, but users still complain. How would you investigate {topic} deeper?',
    'How would you mentor a junior teammate through a hard {topic} issue without taking over the work?',
    'Where would you add automation, policy, or guardrails around {topic}, and where would you keep human review?',
    'How would you plan a migration from a fragile {topic} implementation to a more robust architecture?',
    'What would you include in an executive explanation of {topic}: impact, risk, cost, and next decision?',
    'How would you test disaster recovery, rollback, or fallback behavior for {topic}?',
    'What are the signs that {topic} has become over-engineered for the current product stage?'
  ]
};

const answerBlueprints = {
  beginner: 'A strong answer should identify the business or user outcome, explain the smallest useful implementation, name the main failure mode, and describe one concrete validation step. It should avoid definitions-only answers and show how the candidate would inspect real inputs, logs, tests, or user behavior.',
  intermediate: 'A strong answer should describe the workflow from requirements to production: boundaries, data or request flow, validation, testing, deployment, monitoring, and rollback. It should call out tradeoffs, operational ownership, and how the candidate would communicate risk.',
  advanced: 'A strong answer should reason about scale, maintainability, security, reliability, cost, and team process. It should include a migration or incident perspective, measurable success criteria, and a clear explanation of when simpler solutions are better.'
};

const interviewScenarios = {
  beginner: [
    'use a small sample project with one happy path and one realistic error case',
    'assume the work must be reviewed by a senior teammate tomorrow',
    'assume the project must run from a clean checkout on another machine'
  ],
  intermediate: [
    'assume the change affects real users during business hours',
    'assume two teams depend on the output and disagree on priorities',
    'assume the system has partial monitoring but weak ownership',
    'assume a rollback is possible but expensive'
  ],
  advanced: [
    'assume the decision will become a reference pattern for future teams',
    'assume strict security, compliance, and reliability constraints',
    'assume the current system is fragile but still business-critical'
  ]
};

const makeQuestions = (career, topics) => {
  const levels = [
    ['beginner', 30],
    ['intermediate', 40],
    ['advanced', 30]
  ];
  const context = roleContext(career);
  const safeTopics = topics?.length ? topics : buildTopics(career);

  let count = 1;
  return levels.flatMap(([difficulty, total]) =>
    Array.from({ length: total }, (_, index) => {
      const templateSet = interviewBlueprints[difficulty];
      const scenarioSet = interviewScenarios[difficulty];
      const cycle = Math.floor(index / templateSet.length);
      const topic = safeTopics[(index + cycle) % safeTopics.length];
      const contrast = safeTopics[(index + cycle + 3) % safeTopics.length]?.name || career.requiredSkills?.[0] || 'the alternative approach';
      const tools = topic.tools?.length ? topic.tools : career.tools || ['documentation'];
      const tool = tools[(index + cycle) % tools.length];
      const template = templateSet[index % templateSet.length];
      const scenario = scenarioSet[cycle % scenarioSet.length];
      const values = {
        career: career.name,
        topic: topic.name,
        contrast,
        tool,
        ...context
      };
      const question = `${fillTemplate(template, values)} Scenario: ${scenario}.`;

      return {
        id: `${career.slug}-iq-${count++}`,
        question,
        shortAnswer: `${answerBlueprints[difficulty]} For ${career.name}, anchor the answer in ${context.artifact} and use ${context.metric} as evidence.`,
        detailedAnswer: `${answerBlueprints[difficulty]} A production-quality response should mention ${context.testing}, describe how the work reaches ${context.deployment}, and acknowledge risks such as ${context.risk}. The best candidates connect ${topic.name} to a concrete ${career.name} workflow rather than treating it as isolated theory.`,
        difficulty,
        topic: topic.name,
        relatedSkill: topic.skill || topic.name,
        commonMistake: topic.mistake || `Treating ${topic.name} as a checklist item instead of validating it in a real ${career.name} workflow.`,
        realWorldExample: topic.example || `Using ${topic.name} inside ${context.system}.`,
        unlocked: true
      };
    })
  );
};

const quizBlueprints = {
  beginner: [
    {
      q: 'A junior {career} is asked to prove their {topic} work is not just a copied tutorial. What is the strongest evidence?',
      correct: 'A working implementation with a README, screenshots or logs, tradeoffs, and validation notes.',
      distractors: ['A list of buzzwords copied from job posts.', "A project that only runs on the author's laptop with no setup notes.", 'A definition of the tool without any applied example.'],
      explanation: 'Hiring teams trust applied evidence: reproducible work, clear decisions, and proof that the candidate can explain limits.'
    },
    {
      q: '{topic} fails during local testing with {tool}. What should you do first?',
      correct: 'Reproduce the issue, inspect the exact input and error output, then isolate the smallest failing step.',
      distractors: ['Rewrite the whole project immediately.', 'Ignore the error if the final screen looks acceptable.', 'Deploy first and wait for user reports.'],
      explanation: 'Professional debugging starts with reproduction and isolation before broad rewrites.'
    },
    {
      q: 'Which habit makes {topic} safer in an early {career} project?',
      correct: 'Use version control, small commits, and a short note explaining assumptions and checks.',
      distractors: ['Keep all changes uncommitted until the project is finished.', 'Avoid documenting assumptions so the project looks simple.', 'Use only the newest framework regardless of fit.'],
      explanation: 'Small commits and assumptions make the work reviewable and recoverable.'
    },
    {
      q: 'What is the best way to explain {topic} in an interview?',
      correct: 'Connect it to a project, a decision, a failure mode, and the outcome you measured.',
      distractors: ['Recite a memorized textbook definition.', 'Say it is important without giving an example.', 'Focus only on the tool logo used.'],
      explanation: 'Interviewers listen for applied judgment, not just vocabulary.'
    },
    {
      q: 'A project using {topic} works once but cannot be repeated. What is missing?',
      correct: 'Setup instructions, fixed inputs or fixtures, and a repeatable validation step.',
      distractors: ['More decorative screenshots.', 'A longer project title.', 'Removing all tests to reduce complexity.'],
      explanation: 'Repeatability is a basic production habit even for beginner portfolio work.'
    }
  ],
  intermediate: [
    {
      q: '{system} has a production issue related to {topic}. Which response is most professional?',
      correct: 'Check recent changes, logs or metrics, reproduce impact, mitigate safely, then document the root cause.',
      distractors: ['Blame the tool and switch platforms immediately.', 'Keep retrying deployments without reading logs.', 'Disable all monitoring to reduce noise.'],
      explanation: 'Incident response should reduce user impact while preserving evidence for root-cause analysis.'
    },
    {
      q: 'Which review comment is most useful for a change involving {topic}?',
      correct: 'Ask about edge cases, security or reliability impact, tests, rollback, and ownership.',
      distractors: ['Only comment on variable names.', 'Approve because the code compiles once.', 'Reject it because it uses a tool you have not used.'],
      explanation: 'Useful review focuses on risk, correctness, maintainability, and operability.'
    },
    {
      q: 'What should be monitored after deploying {topic}?',
      correct: '{metric}, error patterns, user impact, and any known failure mode from testing.',
      distractors: ['Only the number of Git commits.', 'Only whether the homepage loads.', 'Nothing if the deployment command succeeded.'],
      explanation: 'Deployment success is not the same as production health.'
    },
    {
      q: 'A stakeholder wants speed over quality for {topic}. What is the best compromise?',
      correct: 'Ship a scoped version with explicit risk, minimum checks, monitoring, and a follow-up hardening plan.',
      distractors: ['Ship everything with no checks.', 'Refuse all changes until the ideal architecture is built.', 'Hide the risk from stakeholders.'],
      explanation: 'Real teams balance delivery and risk transparently.'
    },
    {
      q: 'Which documentation makes {topic} maintainable for another teammate?',
      correct: 'Purpose, setup, dependencies, operational checks, known limits, and recovery steps.',
      distractors: ['A screenshot with no context.', 'Only a personal note in a private file.', 'A list of acronyms without workflow details.'],
      explanation: 'Maintainable documentation helps someone operate and debug the work without the original author.'
    }
  ],
  advanced: [
    {
      q: 'How should a senior {career} scale {topic} across teams?',
      correct: 'Create standards, ownership boundaries, reusable patterns, quality gates, and room for justified exceptions.',
      distractors: ['Force every team into identical implementation details.', 'Let every team invent its own production rules.', 'Centralize all decisions in one person forever.'],
      explanation: 'Senior work balances consistency with team autonomy and operational accountability.'
    },
    {
      q: 'What is the best signal that {topic} may be over-engineered?',
      correct: 'The architecture adds cost, cognitive load, or failure modes without measurable user or operational benefit.',
      distractors: ['It uses fewer services than a conference demo.', 'It is easy for the current team to understand.', 'It has clear rollback and monitoring.'],
      explanation: 'Good architecture is proportional to risk, scale, and team capacity.'
    },
    {
      q: 'A migration involving {topic} has to happen without downtime. What matters most?',
      correct: 'Backward compatibility, phased rollout, observability, rollback, data or state validation, and communication.',
      distractors: ['A single big-bang release on Friday evening.', 'Skipping monitoring to reduce noise.', 'Deleting the old path before the new one is validated.'],
      explanation: 'No-downtime migrations require incremental control and evidence.'
    },
    {
      q: 'What belongs in an executive explanation of a serious {topic} risk?',
      correct: 'User or business impact, likelihood, evidence, mitigation options, cost, and decision needed.',
      distractors: ['A stack trace with no translation.', 'Only personal opinions about tools.', 'A long history of unrelated implementation details.'],
      explanation: 'Leaders need decision-ready risk framing, not raw technical noise.'
    },
    {
      q: 'Which guardrail most improves production confidence in {topic}?',
      correct: 'Automated checks plus human review for high-risk changes and clear rollback ownership.',
      distractors: ['Trusting manual memory for every release.', 'Removing approval steps from sensitive changes.', 'Only testing in production with real users.'],
      explanation: 'Guardrails should prevent common failure while preserving delivery flow.'
    }
  ]
};

const makeQuizzes = (career, topics) => {
  const levels = [
    ['beginner', 10],
    ['intermediate', 10],
    ['advanced', 10]
  ];
  const context = roleContext(career);
  const safeTopics = topics?.length ? topics : buildTopics(career);
  const quizScenarios = [
    'during local development',
    'during code review',
    'after a failed deployment',
    'while debugging production-like data',
    'when explaining the work to a hiring manager',
    'while reducing operational risk',
    'when choosing between two tools',
    'during a security or privacy review',
    'while improving performance',
    'before publishing the portfolio project'
  ];

  return levels.flatMap(([difficulty, total], levelIndex) =>
    Array.from({ length: total }, (_, index) => {
      const topic = safeTopics[(index + levelIndex * 3) % safeTopics.length];
      const tools = topic.tools?.length ? topic.tools : career.tools || ['documentation'];
      const tool = tools[index % tools.length];
      const blueprint = quizBlueprints[difficulty][index % quizBlueprints[difficulty].length];
      const scenario = quizScenarios[(index + levelIndex * 2) % quizScenarios.length];
      const values = {
        career: career.name,
        topic: topic.name,
        tool,
        ...context
      };
      const correct = fillTemplate(topic.quiz?.correct || blueprint.correct, values);
      const baseDistractors = topic.quiz?.distractors?.length >= 3 ? topic.quiz.distractors : blueprint.distractors;
      const options = rotateOptions([correct, ...baseDistractors.map((item) => fillTemplate(item, values))], index + levelIndex + 1);
      return {
        id: `${career.slug}-quiz-${difficulty}-${index + 1}`,
        question: `${fillTemplate(topic.quiz?.question || blueprint.q, values)} Consider this ${scenario}. Difficulty focus: ${difficulty}.`,
        options,
        correctAnswer: correct,
        explanation: `${fillTemplate(topic.quiz?.explanation || blueprint.explanation, values)} This is why the scenario matters for ${career.name} work.`,
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

const uniqueList = (items = []) => Array.from(new Set(items.filter(Boolean)));

const getProjectText = (project, fallback = '') => {
  if (!project) return fallback;
  if (typeof project === 'string') return project;
  return project.description || project.title || fallback;
};

const cleanProjectTitle = (project, career, index) => {
  if (project && typeof project === 'object' && project.title) return project.title;
  const text = getProjectText(project, `${career.name} portfolio project ${index + 1}`);
  return text.split(':')[0].replace(/\.$/, '');
};

const projectDifficulty = ['Beginner', 'Intermediate', 'Advanced'];

const expandProject = (career, project, index) => {
  const context = roleContext(career);
  const skills = career.skills || career.requiredSkills || [];
  const tools = career.tools || [];
  const difficulty = projectDifficulty[Math.min(index, 2)] || 'Advanced';
  const selectedSkills = uniqueList([...(project?.skillsUsed || []), ...skills.slice(index, index + 4), skills[(index + 4) % skills.length]]).slice(0, 5);
  const selectedTools = uniqueList([...(project?.toolsUsed || []), ...tools.slice(index, index + 4), tools[(index + 4) % tools.length]]).slice(0, 5);
  const title = cleanProjectTitle(project, career, index);
  const description = getProjectText(
    project,
    `Build a ${career.name} portfolio project that demonstrates ${selectedSkills.slice(0, 3).join(', ')} in ${context.system}.`
  );

  return {
    title,
    description:
      project?.description ||
      `${description}. Include realistic inputs, documented assumptions, failure handling, and evidence that the work can be reviewed by another practitioner.`,
    skillsUsed: selectedSkills,
    toolsUsed: selectedTools,
    technologies: selectedTools,
    difficulty,
    deployment:
      project?.deployment ||
      `${context.deployment}. Publish the code with environment setup, sample data or fixtures, and a short operational note.`,
    learningOutcomes:
      project?.learningOutcomes || [
        `Apply ${selectedSkills[0] || career.name} to a realistic ${context.domain}.`,
        `Validate quality with ${context.testing}.`,
        `Explain tradeoffs using ${context.metric}.`
      ],
    applicationValue:
      project?.applicationValue ||
      `Shows employers that you can deliver ${difficulty.toLowerCase()} ${career.name} work with realistic constraints, documentation, and reviewable evidence.`
  };
};

const buildTopics = (career) => {
  const context = roleContext(career);
  const skills = career.skills || career.requiredSkills || [];
  const tools = career.tools?.length ? career.tools : ['GitHub', 'documentation', 'testing tools'];
  const topics = uniqueList([...skills, ...(career.requiredSkills || [])]).slice(0, 10);

  return topics.map((skill, index) => {
    const topicTools = uniqueList([
      tools[index % tools.length],
      tools[(index + 1) % tools.length],
      tools[(index + 2) % tools.length]
    ]);

    return {
      name: skill,
      skill,
      tools: topicTools,
      mistake:
        career.skillMistakes?.[skill] ||
        `Practicing ${skill} as isolated theory without showing how it affects ${context.metric} in a real ${career.name} workflow.`,
      example:
        career.examples?.[index % (career.examples?.length || 1)] ||
        `Using ${skill} to produce a reviewable ${context.artifact} for ${context.system}.`,
      quiz: {
        question: `A ${career.name} portfolio uses ${skill}. What would make it credible to an interviewer?`,
        correct: `A working artifact with realistic inputs, documented tradeoffs, ${context.testing}, and clear impact on ${context.metric}.`,
        distractors: [
          'A copied tutorial with renamed variables and no setup notes.',
          'A tool list with no finished workflow or evidence.',
          'A definition memorized without showing operational consequences.'
        ],
        explanation: `${skill} becomes job-ready when it is connected to implementation, verification, deployment, and role-specific impact.`
      }
    };
  });
};

const makeSkillDetails = (career) => {
  const context = roleContext(career);
  const skills = career.skills || career.requiredSkills || [];
  const tools = career.tools || [];

  return {
    core: skills.slice(0, 4).map((name) => ({
      name,
      explanation:
        career.skillNotes?.[name] ||
        `${name} is used by ${career.name}s to turn ambiguous requirements into a reliable ${context.artifact}.`,
      whyItMatters: `Hiring teams look for proof that you can apply ${name} under real constraints such as ${context.risk}.`
    })),
    technical: skills.slice(4, 8).map((name) => ({
      name,
      explanation:
        career.skillNotes?.[name] ||
        `${name} helps you improve quality, scale, security, or maintainability once the basic ${career.name} workflow works.`,
      whyItMatters: `It separates tutorial-level work from production work by improving ${context.metric}.`
    })),
    tools: tools.slice(0, 6).map((name, index) => ({
      name,
      explanation: `${name} is commonly used to build, inspect, automate, or operate ${career.name} work involving ${skills[index % (skills.length || 1)] || context.domain}.`,
      whyItMatters: `Tool fluency matters when you can use it inside ${context.deployment}, not just open it locally.`
    })),
    soft: (career.softSkills || ['Communication', 'Problem solving', 'Documentation', 'Stakeholder collaboration']).map((name) => ({
      name,
      explanation: `${name} helps you make technical choices understandable, reviewable, and easier for others to operate.`,
      whyItMatters: `Strong ${career.name}s can explain risk, tradeoffs, and evidence without hiding behind buzzwords.`
    }))
  };
};

const buildRoadmap = (career) => {
  const context = roleContext(career);
  const projects = [0, 1, 2].map((index) => expandProject(career, career.projects?.[index], index));
  const totalWeeks = (career.weeks || [4, 5, 6]).slice(0, 3);

  return [
    {
      phase: 'Beginner',
      timelineWeeks: totalWeeks[0] || 4,
      topics: career.skills.slice(0, 4),
      tools: career.tools.slice(0, 4),
      miniProject: projects[0].description,
      outcome: `You can explain the core ${career.name} workflow, build a small but complete artifact, and verify it with basic checks.`,
      nextAction: 'Publish the first project with setup steps, screenshots or logs, and a short explanation of what you validated.',
      checklist: [
        `Learn the foundations: ${career.foundation}`,
        `Use Git and small commits while practicing ${career.tools.slice(0, 2).join(' and ')}`,
        'Build one complete workflow from input to output',
        'Debug common setup, data, environment, or API errors',
        'Add a README with assumptions, commands, and limitations',
        `Validate the result with ${context.testing}`
      ]
    },
    {
      phase: 'Intermediate',
      timelineWeeks: totalWeeks[1] || 5,
      topics: career.skills.slice(2, 6),
      tools: career.tools.slice(1, 6),
      miniProject: projects[1].description,
      outcome: `You can connect multiple tools, handle realistic failure modes, and show how the work would fit into ${context.system}.`,
      nextAction: 'Add tests, error handling, realistic data or user flows, and a short architecture note.',
      checklist: [
        `Practice the workflow: ${career.workflow}`,
        'Add role-specific tests, checks, or evaluation criteria',
        'Handle retries, bad inputs, missing permissions, or edge cases',
        'Document architecture boundaries and ownership',
        `Measure quality with ${context.metric}`,
        'Prepare a concise interview story about a tradeoff you made'
      ]
    },
    {
      phase: 'Advanced',
      timelineWeeks: (totalWeeks[2] || 6) + (career.weeks?.[3] || 0),
      topics: uniqueList([...career.skills.slice(4, 8), ...career.skills.slice(0, 2)]),
      tools: uniqueList([...career.tools.slice(2, 8), 'GitHub', 'Career2Day CV Builder']),
      miniProject: projects[2].description,
      outcome: `You can design, ship, monitor, and explain production-minded ${career.name} work with clear risk management.`,
      nextAction: 'Turn the strongest project into CV bullets, an interview demo, and a decision log that explains your tradeoffs.',
      checklist: [
        `Improve production quality: ${career.quality}`,
        `Deploy or package the work using ${context.deployment}`,
        'Add observability, security review, performance checks, or evaluation reporting',
        'Create a diagram, ADR, threat model, model card, runbook, or research summary where appropriate',
        `Address risks such as ${context.risk}`,
        `Prepare a portfolio story: ${career.portfolio}`
      ]
    }
  ];
};

const buildGeneratedCareer = (career) => {
  const slug = slugifyCareer(career.name);
  const topics = buildTopics(career);
  return {
    slug,
    name: career.name,
    category: getCategory(career.name),
    tagline: career.tagline,
    description: career.description,
    salaryPotential: `$${career.salary[0]}k-$${career.salary[3]}k+`,
    salaryNote: 'Estimated global USD ranges for tech markets. Compensation varies by region, company size, industry, seniority, and equity.',
    demandLevel: career.demand || 'High',
    beginnerFriendliness: career.beginner || 'Moderate',
    requiredSkills: career.skills,
    skillsDetailed: makeSkillDetails(career),
    tools: career.tools,
    responsibilities: career.responsibilities,
    industries: career.industries,
    projects: [0, 1, 2].map((index) => expandProject(career, career.projects[index], index)),
    cv: {
      summary: `${career.name} with practical portfolio experience in ${career.skills.slice(0, 4).join(', ')}, using ${career.tools.slice(0, 4).join(', ')} to deliver reliable work.`,
      skills: career.skills,
      projects: [0, 1, 2].map((index) => getProjectText(career.projects[index], `${career.name} portfolio project ${index + 1}`)),
      atsKeywords: [career.name, ...career.skills.slice(0, 8), ...career.tools.slice(0, 6)]
    },
    analytics: {
      learningCurve: [10, 22, 36, 50, 64, 76, 86, 94],
      skills: career.skills.slice(0, 6).map((skill, index) => [skill, 88 - index * 4]),
      salary: [
        ['Entry', career.salary[0]],
        ['Mid', career.salary[1]],
        ['Senior', career.salary[2]],
        ['Lead', career.salary[3]]
      ]
    },
    roadmap: buildRoadmap(career),
    topics,
    faqs: [
      { question: `How long does it take to become a ${career.name}?`, answer: `Most learners need ${career.weeks?.reduce((sum, value) => sum + value, 0) || 18} focused weeks to build foundations, finish portfolio proof, and prepare interviews. Prior experience can shorten that.` },
      { question: `What should I build for a ${career.name} portfolio?`, answer: `Build projects that show ${career.skills.slice(0, 3).join(', ')}, plus documentation, tradeoffs, and measurable results.` },
      { question: `Which tools matter most for ${career.name}s?`, answer: career.tools.slice(0, 6).join(', ') }
    ],
    seo: {
      title: `${career.name} Roadmap, Skills, Interview Questions and Quiz | Career2Day`,
      description: `Follow a practical ${career.name} roadmap with real skills, tools, salary ranges, projects, interview questions, quiz practice, and CV guidance.`,
      canonical: `https://career2day.com/careers/${slug}`,
      ogTitle: `${career.name} Career Path`,
      ogDescription: `A complete ${career.name} preparation path with roadmap, skills, projects, interview practice, quiz, and readiness scoring.`
    },
    unlocked: true
  };
};

const completePhaseChecklist = (career, phase, index) => {
  const project = phase.miniProject || `Build a ${career.name} project for this step.`;
  const topics = phase.topics || career.requiredSkills?.slice(0, 4) || career.skills?.slice(0, 4) || [];
  const tools = phase.tools || career.tools?.slice(0, 4) || [];
  const context = roleContext(career);
  const base = [
    `Learn: ${topics.join(', ')}`,
    tools.length ? `Practise with: ${tools.join(', ')}` : 'Practise the main tools for this role',
    `Build: ${project}`,
    `Validate with: ${context.testing}`,
    `Plan release or delivery: ${context.deployment}`,
    'Write notes with setup steps, assumptions, tradeoffs, and what you would improve next',
    index === 2 ? 'Turn this work into CV bullet points and an interview story' : 'Explain this step out loud using realistic inputs and failure cases'
  ];
  return Array.from(new Set([...(phase.checklist || []), ...base])).slice(0, 8);
};

const completePhase = (career, phase, index) => {
  const skills = career.skills || career.requiredSkills || [];
  const tools = career.tools || [];

  return {
    ...phase,
    phase: projectDifficulty[index] || phase.phase || `Phase ${index + 1}`,
    timelineWeeks: phase.timelineWeeks || career.weeks?.[index] || [4, 5, 6][index],
    topics: phase.topics?.length ? phase.topics : skills.slice(index * 2, index * 2 + 4),
    tools: phase.tools?.length ? phase.tools : tools.slice(index, index + 5),
    miniProject: phase.miniProject || getProjectText(career.projects?.[index], `Build a ${career.name} project for this step.`),
    outcome:
      phase.outcome ||
      phase.expectedOutcome ||
      `You can use ${skills[index] || career.name} in a realistic ${career.name} workflow and explain the production tradeoffs.`,
    nextAction:
      phase.nextAction ||
      (index === 2
        ? 'Prepare a portfolio demo, CV bullets, and interview story from this work.'
        : 'Write what you validated, what failed, and what you will improve next.'),
    checklist: completePhaseChecklist(career, phase, index)
  };
};

const ensureThreePhaseRoadmap = (career) => {
  const source = career.roadmap?.length ? career.roadmap : buildRoadmap(career);
  const phases = ['Beginner', 'Intermediate', 'Advanced'].map((phaseName, index) => {
    const direct = source.find((phase) => phase.phase === phaseName);
    return completePhase(career, direct || source[index] || buildRoadmap(career)[index], index);
  });

  const extra = source.slice(3);
  if (extra.length) {
    phases[2] = {
      ...phases[2],
      timelineWeeks: phases[2].timelineWeeks + extra.reduce((sum, phase) => sum + (phase.timelineWeeks || 0), 0),
      topics: uniqueList([...phases[2].topics, ...extra.flatMap((phase) => phase.topics || [])]).slice(0, 10),
      tools: uniqueList([...phases[2].tools, ...extra.flatMap((phase) => phase.tools || [])]).slice(0, 10),
      checklist: uniqueList([...phases[2].checklist, ...extra.flatMap((phase) => phase.checklist || [])]).slice(0, 8),
      outcome: `${phases[2].outcome} You also have portfolio evidence, CV-ready stories, and a delivery plan for real applications.`
    };
  }

  return phases;
};

const normalizeCareer = (career) => {
  const skills = career.skills || career.requiredSkills || [];
  const tools = career.tools || [];
  const projectSource = career.projects?.length ? career.projects : (career.roadmap || []).map((phase) => phase.miniProject);
  const generatedTopics = buildTopics({ ...career, skills, tools });
  const preparedTopics = [
    ...(career.topics || []),
    ...generatedTopics.filter((topic) => !(career.topics || []).some((existing) => existing.name === topic.name))
  ].slice(0, 12);
  const normalized = {
    ...career,
    requiredSkills: career.requiredSkills || skills,
    skills,
    tools,
    projects: [0, 1, 2].map((index) => expandProject({ ...career, skills, tools }, projectSource[index], index)),
    roadmap: ensureThreePhaseRoadmap({ ...career, skills, tools, projects: projectSource }),
    topics: preparedTopics
  };

  return {
    ...normalized,
    skillsDetailed: makeSkillDetails(normalized),
    interviewQuestions: makeQuestions(normalized, preparedTopics),
    quizzes: makeQuizzes(normalized, preparedTopics)
  };
};

const roleProfiles = [
  {
    name: 'Data Engineer',
    tagline: 'Design reliable data pipelines and platforms that make analytics, AI, and product decisions trustworthy.',
    description: 'Data Engineers build batch and streaming pipelines, model data for analytics, manage orchestration, and improve data quality, reliability, and cost.',
    skills: ['SQL', 'Python', 'data modeling', 'ETL/ELT pipelines', 'orchestration', 'data quality', 'warehouse design', 'streaming basics'],
    tools: ['SQL', 'Python', 'Airflow', 'dbt', 'Snowflake', 'BigQuery', 'Kafka', 'Docker'],
    softSkills: ['Documentation', 'Systems thinking', 'Stakeholder communication', 'Reliability mindset'],
    foundation: 'SQL, Python, file formats, relational modeling, and data warehouse concepts',
    workflow: 'ingestion, transformation, quality checks, orchestration, and analytics-ready tables',
    quality: 'schema tests, freshness checks, lineage, idempotent jobs, and cost-aware warehouse design',
    portfolio: 'two tested pipelines with lineage, data quality checks, and dashboard-ready models',
    projects: ['CSV-to-warehouse pipeline with validation and dbt models', 'Analytics mart for product usage with Airflow scheduling', 'Streaming event pipeline with Kafka and late-arriving data handling', 'End-to-end data platform case study with README, lineage, and cost notes'],
    responsibilities: ['Build and maintain reliable data pipelines', 'Model data for analytics and downstream systems', 'Monitor freshness, quality, and job failures', 'Partner with analysts, ML teams, and product teams'],
    industries: ['SaaS', 'Finance', 'Retail', 'Healthcare', 'AI platforms'],
    salary: [90, 130, 175, 210],
    weeks: [4, 5, 6, 4]
  },
  {
    name: 'Analytics Engineer',
    tagline: 'Turn raw data into trusted metrics, semantic models, and decision-ready analytics layers.',
    description: 'Analytics Engineers combine data modeling, SQL, dbt, metric definitions, BI workflows, and stakeholder communication to make company data usable.',
    skills: ['SQL', 'dbt modeling', 'metric design', 'data testing', 'BI dashboards', 'warehouse performance', 'documentation', 'stakeholder analysis'],
    tools: ['dbt', 'SQL', 'BigQuery', 'Snowflake', 'Looker', 'Tableau', 'GitHub', 'Airflow'],
    softSkills: ['Business communication', 'Documentation', 'Metric discipline', 'Analytical thinking'],
    foundation: 'SQL, dimensional modeling, metric definitions, and BI fundamentals',
    workflow: 'raw tables into tested marts, documented metrics, and stakeholder dashboards',
    quality: 'metric consistency, model tests, source freshness, lineage, and dashboard performance',
    portfolio: 'a documented analytics layer with dbt tests, metric definitions, and BI screenshots',
    projects: ['Revenue metrics model with source tests and documentation', 'Executive dashboard backed by dbt marts', 'Metric consistency audit across two dashboards', 'Analytics engineering portfolio with lineage and stakeholder notes'],
    responsibilities: ['Create trusted analytics models', 'Define business metrics clearly', 'Test and document data transformations', 'Support analysts and business teams'],
    industries: ['SaaS', 'E-commerce', 'Fintech', 'Marketing analytics', 'Operations'],
    salary: [85, 120, 160, 190],
    weeks: [4, 5, 5, 4]
  },
  {
    name: 'MLOps Engineer',
    tagline: 'Productionize machine learning with repeatable training, deployment, monitoring, and governance workflows.',
    description: 'MLOps Engineers connect ML, DevOps, data pipelines, model registries, CI/CD, infrastructure, and observability so models can run safely in production.',
    skills: ['Python', 'Docker', 'CI/CD', 'model registry', 'feature pipelines', 'model serving', 'monitoring', 'cloud infrastructure'],
    tools: ['Python', 'Docker', 'Kubernetes', 'MLflow', 'GitHub Actions', 'FastAPI', 'Terraform', 'Prometheus'],
    softSkills: ['Reliability mindset', 'Cross-team collaboration', 'Incident communication', 'Documentation'],
    foundation: 'Python packaging, containers, ML artifacts, APIs, and cloud basics',
    workflow: 'training pipelines, artifact versioning, deployment, and model monitoring',
    quality: 'reproducibility, rollback, latency, drift checks, and incident runbooks',
    portfolio: 'a model deployment with registry, CI/CD, monitoring dashboard, and rollback notes',
    projects: ['Serve a trained model with FastAPI and Docker', 'MLflow experiment tracking and model registry workflow', 'CI/CD deployment with drift and latency monitoring', 'Production ML case study with runbook and rollback plan'],
    responsibilities: ['Automate training and deployment workflows', 'Manage model artifacts and environments', 'Monitor drift, latency, and failures', 'Partner with data scientists and platform teams'],
    industries: ['AI products', 'Fintech', 'Healthcare AI', 'Retail personalization', 'Cloud platforms'],
    salary: [105, 150, 195, 230],
    weeks: [5, 6, 6, 4]
  },
  {
    name: 'Computer Vision Engineer',
    tagline: 'Build image and video systems that detect, classify, track, segment, and inspect real-world visual data.',
    description: 'Computer Vision Engineers work with image data, deep learning, annotation pipelines, model evaluation, edge constraints, and deployment workflows.',
    skills: ['Python', 'image processing', 'CNNs', 'object detection', 'segmentation', 'data annotation', 'model evaluation', 'edge deployment'],
    tools: ['OpenCV', 'PyTorch', 'TensorFlow', 'Label Studio', 'Roboflow', 'ONNX', 'Docker', 'NVIDIA CUDA'],
    foundation: 'Python, image formats, OpenCV operations, labeling, and evaluation metrics',
    workflow: 'dataset creation, augmentation, model training, evaluation, and deployment',
    quality: 'class imbalance checks, IoU/mAP evaluation, inference speed, and edge-case review',
    portfolio: 'a vision model with labeled data, evaluation report, demo app, and deployment notes',
    projects: ['Image classifier with augmentation and confusion matrix', 'Object detection demo with mAP report', 'Defect detection pipeline with annotation guidelines', 'Vision portfolio with model cards and deployment tradeoffs'],
    responsibilities: ['Prepare and label image datasets', 'Train and evaluate vision models', 'Optimize inference speed and accuracy', 'Deploy demos or production services'],
    industries: ['Manufacturing', 'Autonomous systems', 'Healthcare imaging', 'Retail', 'Robotics'],
    salary: [100, 145, 190, 225],
    weeks: [5, 6, 6, 4]
  },
  {
    name: 'NLP Engineer',
    tagline: 'Build language systems for search, classification, extraction, summarization, chat, and retrieval workflows.',
    description: 'NLP Engineers combine text preprocessing, embeddings, transformers, evaluation, retrieval, and deployment to create language-aware applications.',
    skills: ['Python', 'text preprocessing', 'embeddings', 'transformers', 'information retrieval', 'LLM evaluation', 'RAG systems', 'model serving'],
    tools: ['Python', 'Hugging Face', 'spaCy', 'OpenAI API', 'FAISS', 'Pinecone', 'FastAPI', 'MLflow'],
    foundation: 'tokenization, text cleaning, embeddings, classification, and retrieval basics',
    workflow: 'dataset preparation, model selection, retrieval, evaluation, and API delivery',
    quality: 'hallucination checks, retrieval quality, latency, privacy, and error analysis',
    portfolio: 'a language app with evaluation examples, citations, and clear failure handling',
    projects: ['Text classifier with error analysis', 'Semantic search over documents with embeddings', 'RAG assistant with citations and refusal behavior', 'NLP portfolio with evaluation set and model card'],
    responsibilities: ['Build text and language workflows', 'Evaluate model and retrieval quality', 'Deploy language models behind APIs', 'Document limitations and failure modes'],
    industries: ['Search', 'Customer support', 'Legal tech', 'Healthcare', 'AI products'],
    salary: [100, 145, 190, 225],
    weeks: [5, 6, 6, 4]
  }
];

const p = ({
  name,
  skills,
  tools,
  projects,
  salary,
  demand = 'High',
  beginner = 'Moderate',
  softSkills = ['Communication', 'Problem solving', 'Documentation', 'Cross-functional collaboration'],
  industries = ['SaaS', 'Finance', 'Healthcare', 'E-commerce', 'Enterprise technology'],
  responsibilities,
  foundation,
  workflow,
  quality,
  portfolio,
  tagline,
  description
}) => ({
  name,
  tagline: tagline || `Build practical ${name} skills through real tools, portfolio work, and interview-ready projects.`,
  description: description || `${name}s solve role-specific problems using ${skills.slice(0, 4).join(', ')} and tools such as ${tools.slice(0, 4).join(', ')}.`,
  skills,
  tools,
  softSkills,
  foundation: foundation || `${skills.slice(0, 4).join(', ')}`,
  workflow: workflow || `${skills.slice(2, 6).join(', ')}`,
  quality: quality || `${skills.slice(4, 8).join(', ')}`,
  portfolio: portfolio || `${projects[3]}`,
  projects,
  responsibilities: responsibilities || [
    `Deliver reliable ${name} work from requirements to production-ready output`,
    `Use ${tools.slice(0, 3).join(', ')} to build, test, document, and improve solutions`,
    'Communicate tradeoffs, risks, progress, and impact to stakeholders',
    'Maintain quality through reviews, measurement, documentation, and iteration'
  ],
  industries,
  salary,
  demand,
  beginner,
  weeks: [4, 5, 5, 4]
});

roleProfiles.push(
  p({ name: 'Cloud Architect', skills: ['cloud strategy', 'network architecture', 'identity and access', 'resilience design', 'cost optimization', 'migration planning', 'security architecture', 'governance'], tools: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'CloudWatch', 'IAM', 'Lucidchart'], projects: ['Cloud landing zone with IAM, networking, and tagging standards', 'Three-tier app migration plan with cost and risk model', 'High-availability architecture with backup and disaster recovery', 'Cloud architecture portfolio with diagrams, ADRs, and cost notes'], salary: [120, 165, 220, 260], beginner: 'Low', responsibilities: ['Design secure and scalable cloud architectures', 'Create migration, governance, and cost strategies', 'Review cloud patterns with engineering teams', 'Document decisions, risks, and operational requirements'] }),
  p({ name: 'Cloud Engineer', skills: ['Linux', 'cloud networking', 'IAM', 'compute services', 'storage services', 'infrastructure as code', 'monitoring', 'automation'], tools: ['AWS', 'Azure', 'Linux', 'Terraform', 'Docker', 'GitHub Actions', 'CloudWatch', 'Bash'], projects: ['Deploy a secure web app on cloud compute and storage', 'Terraform network with IAM roles and monitoring', 'Automated backup and alerting workflow', 'Cloud operations portfolio with runbook and cost report'], salary: [90, 125, 165, 200] }),
  p({ name: 'DevOps Engineer', skills: ['Linux', 'CI/CD', 'containers', 'infrastructure as code', 'observability', 'release automation', 'cloud networking', 'incident response'], tools: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'AWS', 'Prometheus', 'Grafana', 'Helm'], projects: ['CI/CD pipeline for a containerized API', 'Kubernetes deployment with health checks and rollbacks', 'Infrastructure as code environment with monitoring', 'DevOps portfolio with pipeline diagrams and incident runbook'], salary: [95, 135, 180, 215] }),
  p({ name: 'Site Reliability Engineer', skills: ['service reliability', 'SLOs and SLIs', 'incident response', 'observability', 'capacity planning', 'automation', 'distributed systems', 'error budgets'], tools: ['Prometheus', 'Grafana', 'Kubernetes', 'Terraform', 'PagerDuty', 'Python', 'Linux', 'OpenTelemetry'], projects: ['SLO dashboard for a mock production API', 'Incident response runbook and postmortem package', 'Autoscaling service with load testing and alerts', 'SRE portfolio with error budget and reliability report'], salary: [105, 150, 200, 240], beginner: 'Low' }),
  p({ name: 'Platform Engineer', skills: ['developer platforms', 'Kubernetes', 'CI/CD templates', 'infrastructure APIs', 'secrets management', 'observability', 'self-service workflows', 'internal documentation'], tools: ['Kubernetes', 'Backstage', 'Terraform', 'GitHub Actions', 'Argo CD', 'Vault', 'Docker', 'Helm'], projects: ['Internal developer portal with service catalog', 'Reusable CI/CD template and deployment workflow', 'Kubernetes golden path with secrets and monitoring', 'Platform portfolio with docs and adoption metrics'], salary: [110, 155, 200, 235] }),
  p({ name: 'Solutions Architect', skills: ['requirements discovery', 'system design', 'cloud services', 'integration design', 'security basics', 'cost modeling', 'technical demos', 'stakeholder communication'], tools: ['AWS', 'Azure', 'Lucidchart', 'Postman', 'Terraform', 'CRM', 'OpenAPI', 'Confluence'], projects: ['Customer architecture proposal with tradeoffs', 'API integration proof of concept', 'Cloud cost and migration plan', 'Solutions portfolio with diagrams and executive summary'], salary: [115, 160, 215, 250] }),
  p({ name: 'Enterprise Architect', skills: ['enterprise strategy', 'capability mapping', 'governance', 'integration architecture', 'portfolio rationalization', 'security alignment', 'cloud strategy', 'stakeholder facilitation'], tools: ['ArchiMate', 'TOGAF', 'LeanIX', 'Lucidchart', 'Confluence', 'ServiceNow', 'Azure', 'AWS'], projects: ['Enterprise capability map with target architecture', 'Application rationalization roadmap', 'Integration standards and governance playbook', 'Enterprise architecture portfolio with executive narratives'], salary: [130, 175, 230, 275], beginner: 'Low' }),
  p({ name: 'Software Architect', skills: ['system design', 'domain modeling', 'API design', 'scalability', 'security design', 'technical leadership', 'architecture decisions', 'legacy modernization'], tools: ['C4 Model', 'OpenAPI', 'PostgreSQL', 'Kubernetes', 'Redis', 'Kafka', 'AWS', 'GitHub'], projects: ['Architecture design for a scalable SaaS product', 'API and database modernization plan', 'Event-driven system with tradeoff document', 'Software architecture portfolio with ADRs and diagrams'], salary: [125, 170, 225, 265], beginner: 'Low' }),
  p({ name: 'Backend Engineer', skills: ['API design', 'databases', 'authentication', 'server-side programming', 'testing', 'caching', 'queues', 'observability'], tools: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'OpenAPI', 'GitHub Actions', 'AWS'], projects: ['REST API with auth, validation, and tests', 'Queue-backed background job system', 'Scalable backend with caching and monitoring', 'Backend portfolio with API docs and deployment notes'], salary: [90, 130, 175, 210], beginner: 'High' }),
  p({ name: 'Full Stack Engineer', skills: ['frontend development', 'backend APIs', 'databases', 'authentication', 'state management', 'testing', 'deployment', 'product debugging'], tools: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Vite', 'Docker', 'Vercel', 'GitHub'], projects: ['Full-stack job tracker with auth and database', 'SaaS dashboard with API and charts', 'Subscription-ready app with tests and deployment', 'Full-stack portfolio with product case studies'], salary: [90, 130, 175, 215], beginner: 'High' }),
  p({ name: 'Mobile App Developer', skills: ['mobile UI', 'navigation', 'local storage', 'API integration', 'push notifications', 'offline states', 'testing', 'app release'], tools: ['React Native', 'Expo', 'Flutter', 'Firebase', 'Xcode', 'Android Studio', 'GitHub', 'Figma'], projects: ['Mobile habit tracker with offline storage', 'API-driven mobile job search app', 'Push notification workflow with analytics', 'Mobile portfolio with release checklist and screenshots'], salary: [80, 120, 160, 195] }),
  p({ name: 'iOS Developer', skills: ['Swift', 'SwiftUI', 'UIKit basics', 'iOS navigation', 'Core Data', 'networking', 'App Store release', 'accessibility'], tools: ['Swift', 'SwiftUI', 'Xcode', 'Core Data', 'URLSession', 'TestFlight', 'Firebase', 'GitHub'], projects: ['SwiftUI productivity app with local persistence', 'API-driven iOS app with loading and error states', 'TestFlight-ready app with accessibility review', 'iOS portfolio with App Store release notes'], salary: [90, 130, 175, 210] }),
  p({ name: 'Android Developer', skills: ['Kotlin', 'Jetpack Compose', 'Android lifecycle', 'Room database', 'API integration', 'Material Design', 'testing', 'Play Store release'], tools: ['Kotlin', 'Android Studio', 'Jetpack Compose', 'Room', 'Retrofit', 'Firebase', 'Gradle', 'GitHub'], projects: ['Compose app with local database', 'API-backed Android dashboard', 'Release-ready app with tests and analytics', 'Android portfolio with Play Store checklist'], salary: [85, 125, 170, 205] }),
  p({ name: 'Blockchain Engineer', skills: ['distributed ledgers', 'smart contracts', 'cryptography basics', 'wallet integration', 'consensus concepts', 'token standards', 'security review', 'web3 APIs'], tools: ['Solidity', 'Ethereum', 'Hardhat', 'Ethers.js', 'Foundry', 'The Graph', 'IPFS', 'MetaMask'], projects: ['Token and wallet interaction demo', 'Decentralized app with indexed events', 'Gas and security optimization review', 'Blockchain portfolio with contract tests and threat model'], salary: [100, 145, 190, 230] }),
  p({ name: 'Smart Contract Developer', skills: ['Solidity', 'contract testing', 'access control', 'token standards', 'gas optimization', 'upgrade patterns', 'security auditing', 'DeFi primitives'], tools: ['Solidity', 'Foundry', 'Hardhat', 'OpenZeppelin', 'Slither', 'Ethers.js', 'Remix', 'Tenderly'], projects: ['ERC-20 or ERC-721 contract with tests', 'Escrow contract with access control and events', 'Security review and gas optimization report', 'Smart contract portfolio with audit notes and deployment scripts'], salary: [105, 150, 200, 240], beginner: 'Low' }),
  p({ name: 'Cybersecurity Engineer', skills: ['network security', 'endpoint security', 'vulnerability management', 'SIEM', 'identity security', 'incident response', 'cloud security', 'security automation'], tools: ['Splunk', 'Wireshark', 'Nmap', 'Burp Suite', 'CrowdStrike', 'AWS IAM', 'Python', 'MITRE ATT&CK'], projects: ['Home lab vulnerability management workflow', 'SIEM detection rule and alert triage', 'Cloud IAM hardening assessment', 'Cybersecurity portfolio with incident report and remediation plan'], salary: [90, 130, 175, 215] }),
  p({ name: 'Security Architect', skills: ['security architecture', 'threat modeling', 'zero trust', 'IAM design', 'network segmentation', 'cloud security', 'risk assessment', 'governance'], tools: ['OWASP', 'MITRE ATT&CK', 'AWS IAM', 'Azure AD', 'Lucidchart', 'NIST CSF', 'Terraform', 'SIEM'], projects: ['Threat model and control design for SaaS app', 'Zero trust architecture blueprint', 'Cloud security reference architecture', 'Security architecture portfolio with risk register'], salary: [120, 165, 220, 260], beginner: 'Low' }),
  p({ name: 'Cloud Security Engineer', skills: ['cloud IAM', 'network security', 'CSPM', 'container security', 'logging', 'policy as code', 'incident response', 'compliance controls'], tools: ['AWS IAM', 'Azure Security Center', 'Terraform', 'Kubernetes', 'Wiz', 'Prisma Cloud', 'CloudTrail', 'OPA'], projects: ['Cloud IAM least-privilege assessment', 'Policy-as-code guardrails for cloud resources', 'Container security scan and remediation workflow', 'Cloud security portfolio with controls map and runbook'], salary: [105, 150, 200, 235] }),
  p({ name: 'Penetration Tester', skills: ['reconnaissance', 'web app testing', 'network testing', 'privilege escalation', 'report writing', 'exploit validation', 'burp workflows', 'remediation guidance'], tools: ['Kali Linux', 'Burp Suite', 'Nmap', 'Metasploit', 'OWASP ZAP', 'ffuf', 'Wireshark', 'Python'], projects: ['Legal lab web application test report', 'Network enumeration and remediation plan', 'OWASP Top 10 exploit validation lab', 'Pentest portfolio with sanitized findings and risk ratings'], salary: [80, 120, 165, 200] }),
  p({ name: 'SOC Analyst', skills: ['alert triage', 'SIEM search', 'log analysis', 'incident escalation', 'threat intelligence', 'endpoint investigation', 'phishing analysis', 'case documentation'], tools: ['Splunk', 'Microsoft Sentinel', 'Wireshark', 'VirusTotal', 'CrowdStrike', 'MITRE ATT&CK', 'Sigma', 'TheHive'], projects: ['Phishing investigation report', 'SIEM detection and triage workflow', 'Endpoint suspicious activity investigation', 'SOC portfolio with cases and escalation notes'], salary: [65, 90, 125, 155], beginner: 'High' }),
  p({ name: 'Application Security Engineer', skills: ['secure code review', 'threat modeling', 'SAST/DAST', 'API security', 'authentication security', 'dependency risk', 'OWASP Top 10', 'developer enablement'], tools: ['Burp Suite', 'Semgrep', 'Snyk', 'OWASP ZAP', 'GitHub Advanced Security', 'Postman', 'Threat Dragon', 'Jira'], projects: ['Secure code review of sample app', 'API security test plan and findings', 'CI security checks for dependencies and SAST', 'AppSec portfolio with threat model and developer guidance'], salary: [105, 145, 190, 230] }),
  p({ name: 'CISO', skills: ['security strategy', 'risk management', 'governance', 'incident leadership', 'budget planning', 'compliance', 'executive communication', 'security culture'], tools: ['NIST CSF', 'ISO 27001', 'GRC platforms', 'SIEM dashboards', 'Risk registers', 'Board decks', 'ServiceNow', 'Tabletop exercises'], projects: ['Security program maturity assessment', 'Board-level cyber risk presentation', 'Incident tabletop plan and executive briefing', 'CISO portfolio with strategy roadmap and KPI dashboard'], salary: [170, 230, 300, 380], beginner: 'Low' }),
  p({ name: 'Technical Product Manager', skills: ['product discovery', 'technical requirements', 'API understanding', 'roadmapping', 'prioritization', 'analytics', 'stakeholder management', 'delivery coordination'], tools: ['Jira', 'Figma', 'Postman', 'Amplitude', 'SQL', 'Confluence', 'Miro', 'Productboard'], projects: ['Technical PRD for API-based product feature', 'Prioritized roadmap with tradeoff rationale', 'Analytics-backed feature launch review', 'TPM portfolio with specs and stakeholder comms'], salary: [100, 145, 190, 230] }),
  p({ name: 'AI Product Manager', skills: ['AI product strategy', 'model limitations', 'evaluation design', 'data requirements', 'prompt workflows', 'risk management', 'experimentation', 'user research'], tools: ['OpenAI API', 'Weights & Biases', 'Figma', 'Amplitude', 'SQL', 'Notion', 'Jira', 'LangSmith'], projects: ['AI feature PRD with evaluation plan', 'RAG product prototype and risk review', 'Experiment dashboard for AI feature quality', 'AI PM portfolio with model limits and launch checklist'], salary: [115, 160, 210, 250] }),
  p({ name: 'Product Manager', skills: ['customer discovery', 'prioritization', 'roadmapping', 'analytics', 'experimentation', 'go-to-market thinking', 'stakeholder management', 'requirements writing'], tools: ['Jira', 'Figma', 'Amplitude', 'Mixpanel', 'SQL', 'Notion', 'Miro', 'Productboard'], projects: ['User research synthesis and opportunity map', 'Feature PRD with success metrics', 'A/B test plan and launch review', 'Product portfolio with roadmap and decision logs'], salary: [95, 135, 180, 220] }),
  p({ name: 'Engineering Manager', skills: ['people management', 'delivery planning', 'technical judgment', 'hiring', 'coaching', 'performance feedback', 'incident leadership', 'cross-functional alignment'], tools: ['Jira', 'GitHub', 'Linear', 'Confluence', '1:1 docs', 'Datadog', 'Slack', 'Architecture docs'], projects: ['Team delivery health dashboard', 'Hiring scorecard and interview plan', 'Incident review and process improvement plan', 'Engineering manager portfolio with coaching and delivery examples'], salary: [140, 185, 240, 290], beginner: 'Low' }),
  p({ name: 'Software Engineering Manager', skills: ['software delivery', 'technical planning', 'code review culture', 'team coaching', 'roadmap execution', 'quality metrics', 'hiring', 'stakeholder communication'], tools: ['GitHub', 'Jira', 'Linear', 'Datadog', 'Confluence', 'Architecture docs', 'Slack', 'CI dashboards'], projects: ['Delivery planning system for a product team', 'Code review and quality improvement playbook', 'Hiring loop and onboarding plan', 'SEM portfolio with metrics and team rituals'], salary: [145, 190, 245, 300], beginner: 'Low' }),
  p({ name: 'Data Product Manager', skills: ['data strategy', 'metric design', 'analytics products', 'data governance', 'stakeholder discovery', 'experimentation', 'SQL literacy', 'dashboard requirements'], tools: ['SQL', 'Looker', 'Tableau', 'dbt', 'Jira', 'Figma', 'Amplitude', 'Confluence'], projects: ['Data product PRD for self-service analytics', 'Metric dictionary and governance workflow', 'Dashboard launch plan with adoption metrics', 'Data PM portfolio with roadmap and stakeholder narratives'], salary: [105, 145, 190, 230] }),
  p({ name: 'UX/UI Designer', skills: ['visual design', 'wireframing', 'prototyping', 'design systems', 'usability testing', 'responsive design', 'accessibility', 'handoff'], tools: ['Figma', 'FigJam', 'Maze', 'Miro', 'Notion', 'Storybook', 'Loom', 'Zeroheight'], projects: ['Responsive landing and dashboard redesign', 'Design system with components and usage rules', 'Usability test and iteration report', 'UX/UI portfolio with before-after case study'], salary: [75, 105, 145, 175], beginner: 'High' }),
  p({ name: 'UX Researcher', skills: ['research planning', 'interviewing', 'survey design', 'usability testing', 'synthesis', 'personas', 'journey mapping', 'stakeholder storytelling'], tools: ['Dovetail', 'UserTesting', 'Maze', 'FigJam', 'Miro', 'Qualtrics', 'Notion', 'Lookback'], projects: ['Moderated usability study with findings report', 'Customer interview synthesis and opportunity map', 'Survey analysis with product recommendations', 'UX research portfolio with methods and impact'], salary: [80, 115, 155, 190] }),
  p({ name: 'Product Designer', skills: ['product thinking', 'interaction design', 'prototyping', 'user flows', 'visual systems', 'accessibility', 'usability testing', 'design critique'], tools: ['Figma', 'FigJam', 'Framer', 'Maze', 'Miro', 'Storybook', 'Notion', 'Loom'], projects: ['End-to-end SaaS workflow redesign', 'Interactive prototype with usability results', 'Design system extension for product flows', 'Product design portfolio with problem, process, and impact'], salary: [85, 120, 165, 200] }),
  p({ name: 'Database Administrator', skills: ['SQL administration', 'backup and restore', 'performance tuning', 'permissions', 'replication', 'monitoring', 'disaster recovery', 'patch management'], tools: ['PostgreSQL', 'MySQL', 'SQL Server', 'pgAdmin', 'CloudWatch', 'Bash', 'Terraform', 'Grafana'], projects: ['Database backup and restore lab', 'Performance tuning report for slow queries', 'Role-based access and audit workflow', 'DBA portfolio with DR plan and monitoring dashboard'], salary: [80, 115, 155, 185] }),
  p({ name: 'Database Engineer', skills: ['database design', 'query optimization', 'schema migration', 'replication', 'distributed databases', 'indexing', 'data reliability', 'API data access'], tools: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'Prisma', 'Liquibase', 'Kafka', 'Grafana'], projects: ['Relational schema for SaaS app with migrations', 'Query optimization and indexing case study', 'Read replica and cache design for high traffic', 'Database engineering portfolio with benchmark results'], salary: [95, 135, 180, 215] }),
  p({ name: 'Big Data Engineer', skills: ['distributed processing', 'Spark', 'data lakes', 'batch pipelines', 'streaming', 'partitioning', 'cost optimization', 'data quality'], tools: ['Spark', 'Databricks', 'Kafka', 'Airflow', 'S3', 'Delta Lake', 'Python', 'SQL'], projects: ['Large-scale batch pipeline with Spark', 'Data lake table design with partitioning', 'Streaming ingestion and aggregation workflow', 'Big data portfolio with performance and cost notes'], salary: [100, 145, 190, 225] }),
  p({ name: 'Robotics Engineer', skills: ['robot kinematics', 'sensors', 'control systems', 'ROS', 'computer vision', 'path planning', 'simulation', 'embedded integration'], tools: ['ROS 2', 'Python', 'C++', 'Gazebo', 'OpenCV', 'Arduino', 'Raspberry Pi', 'MATLAB'], projects: ['ROS robot simulation with sensor data', 'Line-following or navigation robot prototype', 'Computer vision object tracking for robot control', 'Robotics portfolio with demo video and system diagram'], salary: [90, 130, 175, 210] }),
  p({ name: 'Embedded Systems Engineer', skills: ['C/C++', 'microcontrollers', 'RTOS basics', 'hardware interfaces', 'firmware debugging', 'power constraints', 'communication protocols', 'testing'], tools: ['C', 'C++', 'STM32', 'Arduino', 'FreeRTOS', 'Oscilloscope', 'I2C/SPI/UART', 'PlatformIO'], projects: ['Sensor firmware with serial communication', 'RTOS task scheduling demo', 'Low-power embedded device prototype', 'Embedded portfolio with schematics, firmware, and test notes'], salary: [85, 120, 165, 200] }),
  p({ name: 'AR/VR Developer', skills: ['3D interaction', 'spatial UI', 'Unity development', 'performance optimization', 'XR input', '3D math', 'asset pipelines', 'user comfort'], tools: ['Unity', 'C#', 'Unreal Engine', 'Blender', 'ARKit', 'ARCore', 'Meta Quest SDK', 'GitHub'], projects: ['AR object placement app', 'VR interaction prototype with comfort settings', 'Optimized 3D scene with performance profiling', 'XR portfolio with gameplay video and design notes'], salary: [80, 120, 165, 200] }),
  p({ name: 'Game Developer', skills: ['game loops', 'physics', 'input systems', 'level design', 'game AI', 'performance', 'asset integration', 'debugging'], tools: ['Unity', 'C#', 'Unreal Engine', 'C++', 'Godot', 'Blender', 'GitHub', 'Steamworks'], projects: ['2D game with polished controls and UI', '3D prototype with enemy AI and levels', 'Performance optimization pass with profiling notes', 'Game developer portfolio with playable builds and devlog'], salary: [70, 105, 150, 185] }),
  p({ name: 'QA Automation Engineer', skills: ['test planning', 'UI automation', 'API testing', 'CI integration', 'test data', 'bug reporting', 'regression strategy', 'quality metrics'], tools: ['Playwright', 'Cypress', 'Selenium', 'Postman', 'GitHub Actions', 'Jira', 'Allure', 'JavaScript'], projects: ['Automated UI test suite for demo app', 'API test collection with CI reporting', 'Regression test strategy and bug report pack', 'QA automation portfolio with flaky test analysis'], salary: [75, 110, 150, 180], beginner: 'High' })
);

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
  },
  ...roleProfiles.map(buildGeneratedCareer)
].map(normalizeCareer);

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
        phase: 'Beginner | Intermediate | Advanced',
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
