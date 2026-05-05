import { makeAiFamilyCareer } from './ai-family-career-builder.js';

export const aiEngineerCareer = makeAiFamilyCareer({
  slug: 'ai-engineer',
  name: 'AI Engineer',
  tagline: 'Build practical AI products that move from model idea to reliable user workflow.',
  description: 'AI Engineers design, evaluate, ship, and monitor AI-powered features. The role blends machine learning fundamentals, software engineering, data quality, model evaluation, LLM workflows, and responsible AI judgment.',
  demand: 'Very high',
  difficulty: 'Advanced',
  beginnerFit: 'Moderate',
  time: '24-32 weeks',
  salaryLabel: '$115k-$190k+',
  salary: [{ level: 'Entry', low: 115, high: 135 }, { level: 'Mid', low: 135, high: 170 }, { level: 'Senior', low: 170, high: 220 }, { level: 'Lead', low: 210, high: 270 }],
  responsibilities: ['Turn product problems into AI workflows with measurable success criteria.', 'Build ML, LLM, and retrieval features behind reliable APIs.', 'Evaluate model quality, failure modes, latency, and cost.', 'Document limitations, monitoring needs, and responsible-use boundaries.'],
  core: ['Python', 'machine learning', 'model evaluation', 'LLM workflows'],
  technical: ['RAG systems', 'API engineering', 'data pipelines', 'MLOps', 'responsible AI'],
  tools: ['Python', 'scikit-learn', 'PyTorch', 'OpenAI API', 'FastAPI', 'Docker', 'MLflow', 'PostgreSQL', 'vector databases'],
  soft: ['product judgment', 'technical storytelling', 'risk communication'],
  biggestMistake: 'Shipping impressive AI demos without evaluation, source grounding, monitoring, or clear product success criteria.',
  roadmap: [
    phase('Beginner', 4, ['Python fundamentals for data structures, functions, files, environments, and notebooks', 'Statistics basics: distributions, train/test split, precision, recall, and error analysis', 'Supervised learning with clean baselines and leakage checks', 'Data cleaning with pandas and documented assumptions'], ['Python', 'pandas', 'scikit-learn', 'Jupyter'], 'Train a churn classifier, compare precision and recall, and write a one-page error analysis.', 'You can train simple models and explain whether the metric supports the product decision.', 'Move on after you can explain false positives, false negatives, and leakage.'),
    phase('Intermediate', 6, ['Feature engineering with time-aware data and validation', 'LLM prompting with structured output and test examples', 'API basics for wrapping AI logic in a service', 'Experiment tracking and model cards'], ['FastAPI', 'OpenAI API', 'PostgreSQL', 'Weights & Biases'], 'Create an API that classifies support tickets and stores predictions for review.', 'You can wrap model logic in a usable service and inspect mistakes.', 'Add a small evaluation set before improving the model.'),
    phase('Advanced', 6, ['RAG systems with chunking, metadata, citations, and refusal behavior', 'Model monitoring for drift, latency, cost, and quality', 'Versioning prompts, data, model artifacts, and APIs', 'Responsible AI reviews for bias, privacy, and unsafe outputs'], ['vector database', 'MLflow', 'Docker', 'Airflow'], 'Build a retrieval assistant that cites sources, refuses unsupported answers, and tracks answer quality.', 'You can ship an AI workflow with quality gates and operational thinking.', 'Document failure modes and rollback behavior.'),
    phase('Job-ready', 4, ['Portfolio architecture diagrams and deployment notes', 'AI system design interview practice', 'ATS CV positioning for AI Engineer roles', 'Project walkthroughs with metrics and tradeoffs'], ['GitHub', 'Loom', 'Career2Day CV Builder', 'LinkedIn'], 'Publish two AI case studies with architecture diagrams, evaluation results, and deployment notes.', 'You have proof of skill, interview stories, and a role-specific CV ready for applications.', 'Practise 100 questions and apply with focused case studies.')
  ],
  projects: [
    project('RAG Support Assistant', 'Build an assistant that cites internal documents, refuses unsupported answers, and reports evaluation scores.', ['RAG', 'LLM evaluation', 'API design'], ['OpenAI API', 'vector database', 'FastAPI']),
    project('Churn Prediction API', 'Train a churn model, package it behind an API, and document precision/recall tradeoffs.', ['ML evaluation', 'feature engineering', 'deployment'], ['Python', 'scikit-learn', 'Docker']),
    project('Document Classifier with Error Dashboard', 'Classify documents and create an error analysis dashboard for review.', ['classification', 'monitoring', 'data validation'], ['PyTorch', 'MLflow', 'PostgreSQL']),
    project('Responsible AI Review Pack', 'Create a model card, risk review, and monitoring checklist for one AI workflow.', ['responsible AI', 'documentation', 'quality review'], ['model cards', 'dashboards'])
  ],
  analytics: { learningCurve: [8, 18, 30, 45, 58, 70, 82, 91], skills: [['Python', 88], ['ML', 80], ['MLOps', 68], ['LLM', 84], ['Data', 76], ['Product', 72]] },
  topics: [
    t('model evaluation', 'Evaluation metrics', ['scikit-learn', 'MLflow'], 'Reporting accuracy without checking class balance, leakage, or business cost.', 'Choose precision over recall for an alerting model that creates expensive manual reviews.', 'Compare metrics against the real business cost of false positives and false negatives.'),
    t('feature engineering', 'Data representation', ['pandas', 'NumPy'], 'Creating features with future information.', 'Build churn features only from activity before the prediction date.', 'Use only data available before prediction time.'),
    t('prompt and LLM system design', 'LLM application design', ['OpenAI API', 'LangChain'], 'Treating prompts as the whole system.', 'Build a support assistant that cites indexed policy documents.', 'Combine prompts with retrieval, testing, fallback behavior, and monitoring.'),
    t('MLOps deployment', 'Model operations', ['Docker', 'FastAPI', 'MLflow'], 'Shipping a notebook without repeatable packaging.', 'Serve a fraud model through an API with versioned artifacts.', 'Version training data reference, code, model artifact, parameters, and evaluation results.'),
    t('responsible AI', 'Bias and risk review', ['model cards', 'fairness checks'], 'Checking aggregate performance only.', 'Audit screening error rates across experience levels and locations.', 'Document intended use, excluded use, known limits, and subgroup performance.'),
    t('data pipelines', 'Reliable data flow', ['Airflow', 'SQL', 'dbt'], 'Training models from unvalidated tables.', 'Create a daily feature table with freshness checks.', 'Models inherit the quality and freshness of their input data.'),
    t('RAG source grounding', 'Retrieval quality', ['vector databases', 'embeddings'], 'Returning fluent answers without citations.', 'Ground answers in policy documents.', 'Validate retrieval and require source-backed answers.'),
    t('AI API design', 'Service architecture', ['FastAPI', 'PostgreSQL'], 'Mixing model calls, persistence, and UI logic without boundaries.', 'Create an AI classification endpoint with logs.', 'Separate validation, model call, persistence, and response handling.'),
    t('AI monitoring', 'Production quality', ['Grafana', 'logs'], 'Monitoring uptime only.', 'Track answer quality, latency, cost, and fallbacks.', 'Monitor quality, cost, latency, safety, and user feedback.'),
    t('AI product tradeoffs', 'Product judgment', ['analytics', 'experiments'], 'Optimizing demo impressiveness over user trust.', 'Choose when to automate, assist, or ask for human review.', 'Match AI behavior to user risk and workflow needs.')
  ]
});

function phase(phase, timelineWeeks, topics, tools, miniProject, expectedOutcome, nextAction) { return { phase, timelineWeeks, topics, tools, miniProject, expectedOutcome, nextAction }; }
function project(title, description, skillsUsed, toolsUsed) { return { title, description, skillsUsed, toolsUsed }; }
function t(name, skill, tools, mistake, example, correct) { return { name, skill, tools, mistake, example, correct }; }
