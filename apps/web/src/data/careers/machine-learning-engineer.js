import { buildCareer } from './career-template-builder.js';

const topics = [
  topic('supervised learning', 'Model training', ['Python', 'scikit-learn', 'Jupyter'], 'Tuning models before validating data quality, leakage, and baseline performance.', 'Build a customer churn model and compare logistic regression, random forest, and gradient boosting against a simple baseline.', 'Choose evaluation metrics that match the business cost of false positives and false negatives.'),
  topic('feature engineering', 'Data representation', ['pandas', 'NumPy', 'feature stores'], 'Creating features with information that would not exist at prediction time.', 'Create time-aware customer activity features using only events before the prediction date.', 'Use only data available before the prediction timestamp.'),
  topic('model evaluation', 'Experiment design', ['scikit-learn', 'MLflow', 'Weights & Biases'], 'Reporting one score without confidence, segment checks, or error analysis.', 'Compare recall, precision, calibration, and segment-level errors for a fraud alert model.', 'Evaluate errors by metric, segment, and decision impact.'),
  topic('deep learning fundamentals', 'Neural networks', ['PyTorch', 'TensorFlow', 'CUDA'], 'Using deep learning where a simpler model would be cheaper and easier to explain.', 'Train a small image classifier and document when it beats a classical baseline.', 'Start with a baseline before adding neural network complexity.'),
  topic('production model serving', 'ML APIs', ['FastAPI', 'Docker', 'Kubernetes'], 'Shipping notebook code without versioned artifacts, input validation, or monitoring.', 'Serve a trained model behind an API with schema validation and latency logging.', 'Version model artifacts, inputs, code, and evaluation results.'),
  topic('model monitoring', 'MLOps quality', ['Evidently', 'Prometheus', 'Grafana'], 'Monitoring only uptime while ignoring data drift and prediction quality.', 'Track feature drift and prediction distribution changes for a lead scoring model.', 'Monitor data, model behavior, latency, and business outcomes.'),
  topic('data pipelines for ML', 'Reliable training data', ['Airflow', 'dbt', 'SQL'], 'Training from tables with changing definitions and no freshness checks.', 'Create a daily training table with schema, freshness, and null-rate checks.', 'Validate data before training or scoring.'),
  topic('responsible ML', 'Bias and model risk', ['model cards', 'fairness checks', 'SHAP'], 'Checking only aggregate accuracy while subgroups fail badly.', 'Audit a loan default model for error rates across income bands and regions.', 'Document intended use, limits, subgroup performance, and known risks.'),
  topic('recommendation systems', 'Ranking models', ['implicit', 'LightFM', 'Spark'], 'Optimizing offline ranking metrics without checking product or user outcomes.', 'Build a product recommender and compare precision@k with conversion and diversity.', 'Evaluate ranking quality and real product tradeoffs.'),
  topic('ML system design', 'Architecture judgment', ['MLflow', 'Docker', 'cloud storage'], 'Describing algorithms without explaining data flow, ownership, retraining, and rollback.', 'Design a model lifecycle from raw events to training, registry, API serving, monitoring, and rollback.', 'Explain inputs, outputs, ownership, monitoring, and failure recovery.')
];

export const machineLearningEngineerCareer = buildCareer({
  batch: 1,
  slug: 'machine-learning-engineer',
  name: 'Machine Learning Engineer',
  category: 'AI and Data',
  tagline: 'Design, train, deploy, and monitor machine learning systems that reliably improve product and business decisions.',
  overview: {
    description: 'Machine Learning Engineers turn data and modeling ideas into production systems. They combine software engineering, statistics, model evaluation, data pipelines, deployment, and monitoring.',
    demandLevel: 'Very high',
    difficultyLevel: 'Advanced',
    beginnerFriendliness: 'Moderate',
    estimatedTimeToJobReady: '28-36 weeks',
    responsibilities: ['Build training datasets and validate data quality.', 'Train and evaluate models against business objectives.', 'Package models behind APIs or batch scoring pipelines.', 'Monitor model drift, latency, cost, and prediction quality.'],
    industries: ['SaaS', 'Finance', 'Healthcare', 'Retail', 'Ad tech', 'Logistics', 'Cybersecurity', 'AI startups']
  },
  salary: salary('USD', '$95k-$190k+', [['Entry', 95, 125], ['Mid', 125, 165], ['Senior', 165, 220], ['Lead', 210, 260]]),
  skills: skills({
    core: ['Machine learning fundamentals', 'Model evaluation', 'Feature engineering'],
    technical: ['Python production code', 'Deep learning basics', 'MLOps deployment', 'Data pipeline validation'],
    tools: ['Python', 'scikit-learn', 'PyTorch', 'MLflow', 'Docker', 'FastAPI', 'SQL', 'Airflow'],
    soft: ['Technical communication', 'Experiment judgment', 'Risk-aware decision making']
  }),
  roadmap: roadmap('Machine Learning Engineer', [
    ['Beginner', 6, ['Python data structures, functions, files, virtual environments, and testing basics', 'Statistics for ML: distributions, sampling, correlation, bias, variance, and confidence', 'scikit-learn workflows: train/test split, preprocessing, baseline models, and metrics'], ['Python', 'pandas', 'scikit-learn', 'Jupyter'], 'Train three baseline models for churn prediction and explain the metric tradeoffs.', 'You can build simple models, avoid leakage, and explain model quality clearly.', 'Move forward when you can beat a baseline and explain why the metric matters.'],
    ['Intermediate', 8, ['Feature engineering with time-aware data, text, categories, and missing values', 'Model selection, cross-validation, calibration, threshold tuning, and error analysis', 'SQL and pipeline basics for repeatable training datasets'], ['SQL', 'pandas', 'MLflow', 'Weights & Biases'], 'Create a repeatable training pipeline with tracked experiments and a model card.', 'You can compare models responsibly and reproduce your results.', 'Convert one notebook into a clean repository with scripts and documented inputs.'],
    ['Advanced', 10, ['Model serving APIs, Docker packaging, batch scoring, and inference latency', 'Monitoring feature drift, prediction drift, business outcomes, and alert thresholds', 'Responsible ML, explainability, subgroup performance, and rollback planning'], ['FastAPI', 'Docker', 'Evidently', 'Prometheus'], 'Deploy a prediction API with validation, logging, drift checks, and a rollback note.', 'You can ship a model workflow that survives real operational pressure.', 'Add monitoring screenshots and failure-mode notes to your portfolio.'],
    ['Job-ready', 8, ['ML system design interviews, production tradeoffs, and architecture diagrams', 'Portfolio case studies with metrics, model cards, and deployment notes', 'Role-specific CV, GitHub cleanup, and interview practice'], ['GitHub', 'Loom', 'Career2Day CV Builder', 'LinkedIn'], 'Publish two production-style ML projects with READMEs, diagrams, evaluation, and monitoring plans.', 'You can explain ML work like an engineer, not only a notebook user.', 'Practise 100 questions and apply with a portfolio link.']
  ]),
  projects: projects('Machine Learning Engineer', ['Churn Prediction API', 'Fraud Alert Model', 'Product Recommendation System', 'Model Drift Monitor']),
  analytics: { learningCurve: [6, 14, 26, 40, 56, 70, 84, 93], skills: [['Python', 88], ['ML', 90], ['MLOps', 76], ['Data', 82], ['Systems', 74], ['Risk', 70]] },
  cv: cv('Machine Learning Engineer', ['Python', 'scikit-learn', 'PyTorch', 'MLflow', 'Docker', 'FastAPI', 'SQL', 'model evaluation', 'feature engineering', 'monitoring']),
  faqs: faqs('Machine Learning Engineer', 'SQL, Python, statistics, model evaluation, and deployment basics'),
  seo: seo('Machine Learning Engineer'),
  topics
});

function topic(name, skill, tools, mistake, example, correct) {
  return { name, skill, tools, mistake, example, quiz: { question: `What is the most production-minded habit for ${name}?`, correct, distractors: ['Use the newest algorithm before creating a baseline.', 'Ignore edge cases until after launch.', 'Optimize one offline score without checking data quality.'], explanation: `${name} matters only when the model remains valid, explainable, and useful in the real workflow.` } };
}
function salary(currency, label, ranges) { return { currency, label, note: 'Salaries vary by country, company, experience and market conditions. These are realistic global USD estimates, not guarantees.', ranges: ranges.map(([level, low, high]) => ({ level, low, high })) }; }
function skills(groups) { return Object.fromEntries(Object.entries(groups).map(([key, values]) => [key, values.map((name) => ({ name, explanation: `${name} is a practical capability used repeatedly in professional ML work.`, whyItMatters: 'Hiring teams look for evidence that you can use this skill to reduce risk and ship reliable outcomes.' }))])); }
function roadmap(role, rows) { return rows.map(([phase, timelineWeeks, topics, tools, miniProject, expectedOutcome, nextAction]) => ({ phase, timelineWeeks, topics, tools, miniProject, expectedOutcome, nextAction, checklist: topics.map((item) => `Practise and document: ${item}`) })); }
function projects(role, names) { return names.map((title) => ({ title, description: `Build a ${title.toLowerCase()} with clean data, reproducible code, documented assumptions, and a short business recommendation.`, skillsUsed: ['data validation', 'model evaluation', 'system design'], toolsUsed: ['Python', 'SQL', 'Docker'], applicationValue: `Shows employers you can deliver ${role} work with practical engineering discipline.` })); }
function cv(role, skills) { return { summary: `${role} with hands-on experience building evaluated models, reliable data workflows, and production-minded ML services.`, skills, projects: ['Production-style prediction API', 'Tracked experiment portfolio project', 'Monitoring and model card case study'], atsKeywords: [role, ...skills] }; }
function faqs(role, focus) { return [{ question: `What should I learn first for ${role}?`, answer: `Start with ${focus}, then build projects that prove you can apply them.` }, { question: `How do I stand out as a ${role}?`, answer: 'Show clean repositories, evaluation discipline, deployment notes, and honest tradeoff discussion.' }]; }
function seo(role) { return { title: `${role} Roadmap, Skills, Interview Questions and Quiz | Career2Day`, description: `Follow a practical ${role} roadmap with skills, tools, salary ranges, projects, interview questions, quiz practice, and CV guidance.`, canonical: `https://career2day.com/careers/${role.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`, ogTitle: `${role} Career Path`, ogDescription: `A complete ${role} preparation path with roadmap, projects, interview practice, quiz, and readiness scoring.` }; }
