import { makeAiFamilyCareer } from './ai-family-career-builder.js';

export const dataScientistCareer = makeAiFamilyCareer({
  slug: 'data-scientist',
  name: 'Data Scientist',
  tagline: 'Use statistics, experimentation, machine learning, and business context to turn data into decisions and predictive products.',
  description: 'Data Scientists analyze complex datasets, design experiments, build predictive models, and communicate recommendations. The role sits between analytics, statistics, product thinking, and machine learning.',
  demand: 'High',
  difficulty: 'Advanced',
  beginnerFit: 'Moderate',
  time: '30-42 weeks',
  salaryLabel: '$90k-$185k+',
  salary: [{ level: 'Entry', low: 90, high: 120 }, { level: 'Mid', low: 120, high: 155 }, { level: 'Senior', low: 155, high: 205 }, { level: 'Lead', low: 195, high: 250 }],
  responsibilities: ['Frame ambiguous business questions as measurable analysis plans.', 'Build datasets with SQL and validate quality.', 'Analyze experiments, cohorts, forecasts, and predictive models.', 'Present findings, assumptions, uncertainty, and recommended action.'],
  core: ['statistics', 'SQL analytics', 'business problem framing', 'data storytelling'],
  technical: ['Python pandas', 'machine learning', 'experiment analysis', 'causal thinking', 'forecasting'],
  tools: ['Python', 'SQL', 'pandas', 'scikit-learn', 'Jupyter', 'Tableau', 'Power BI', 'dbt'],
  soft: ['stakeholder communication', 'product judgment', 'executive storytelling'],
  biggestMistake: 'Jumping into modeling before defining the decision, data quality checks, baseline, and success metric.',
  roadmap: [
    phase('Beginner', 6, ['SQL joins, aggregation, CTEs, and window functions for analysis datasets', 'Statistics: distributions, sampling, confidence intervals, correlation, and hypothesis testing', 'Python pandas for cleaning, exploration, grouping, and visualization'], ['SQL', 'Python', 'pandas', 'Jupyter'], 'Analyze customer revenue and retention trends with SQL and pandas.', 'You can clean data, summarize patterns, and explain uncertainty.', 'Build one repeatable notebook with clear assumptions.'),
    phase('Intermediate', 8, ['Experiment analysis: randomization, sample size, guardrails, practical significance', 'Predictive modeling: train/test split, baselines, metrics, calibration, and error analysis', 'Business dashboards and written recommendations'], ['scikit-learn', 'Tableau', 'Power BI'], 'Evaluate an onboarding A/B test and recommend rollout or iteration.', 'You can connect statistical evidence to business decisions.', 'Add a stakeholder memo for each project.'),
    phase('Advanced', 10, ['Causal inference basics, confounding, matching intuition, and limitations', 'Forecasting trends, seasonality, backtesting, and business planning', 'Model interpretation, feature importance, subgroup analysis, and responsible use'], ['statsmodels', 'Prophet optional', 'SHAP'], 'Build a churn model and explain which retention actions should be tested.', 'You can handle predictive and causal questions with mature judgment.', 'Document limits and avoid unsupported causal claims.'),
    phase('Job-ready', 8, ['Portfolio case studies: problem, method, result, limitation, recommendation', 'Data science interviews: SQL, stats, experiments, ML, product cases', 'Role-aware CV and project storytelling'], ['GitHub', 'Career2Day CV Builder', 'LinkedIn'], 'Publish three case studies: experiment readout, predictive model, and business analysis.', 'You can prove decision-making value, not only technical output.', 'Practise interviews and apply with a focused portfolio.')
  ],
  projects: [
    project('Customer Churn Modeling Case Study', 'Build and interpret a churn model with cohort analysis, calibration, and retention recommendations.', ['classification', 'cohorts', 'model interpretation'], ['Python', 'SQL', 'scikit-learn']),
    project('A/B Test Readout', 'Analyze experiment results with guardrail metrics, segment checks, and a rollout decision.', ['experiment analysis', 'statistics', 'product judgment'], ['SQL', 'Python']),
    project('Revenue Forecasting Project', 'Forecast revenue with seasonality, backtesting, and planning caveats.', ['forecasting', 'time series', 'business communication'], ['Python', 'statsmodels']),
    project('Product Usage Segmentation', 'Cluster or segment users and translate patterns into onboarding recommendations.', ['segmentation', 'visualization', 'storytelling'], ['pandas', 'Tableau'])
  ],
  analytics: { learningCurve: [7, 18, 31, 45, 60, 74, 86, 94], skills: [['Stats', 90], ['SQL', 86], ['Python', 84], ['ML', 78], ['Product', 76], ['Story', 82]] },
  topics: [
    t('SQL analytics', 'Data extraction', ['SQL', 'dbt'], 'Writing joins without checking table grain.', 'Build a customer revenue dataset from orders and refunds.', 'Validate joins, row counts, and metric definitions.'),
    t('statistical inference', 'Statistics', ['Python', 'SciPy'], 'Treating noisy differences as meaningful without uncertainty.', 'Compare conversion rates with confidence framing.', 'Use uncertainty to avoid overclaiming.'),
    t('experiment analysis', 'A/B testing', ['SQL', 'Python'], 'Calling a winner from raw lift alone.', 'Analyze onboarding experiment guardrails.', 'Check randomization, sample, primary metric, and business impact.'),
    t('predictive modeling', 'Machine learning', ['scikit-learn'], 'Optimizing accuracy without a baseline or error analysis.', 'Predict churn and review false positives.', 'Compare against baselines and inspect errors.'),
    t('feature engineering', 'Model inputs', ['pandas', 'SQL'], 'Using future data that would not exist at prediction time.', 'Create pre-churn behavior features.', 'Build features only from available historical data.'),
    t('forecasting', 'Time series', ['statsmodels', 'Python'], 'Ignoring seasonality and backtesting.', 'Forecast monthly revenue with trend and seasonality.', 'Backtest forecasts and communicate uncertainty.'),
    t('causal thinking', 'Decision science', ['DAG notes', 'SQL'], 'Confusing correlation with causation.', 'Evaluate whether discounts caused retention changes.', 'Identify confounders and limits before making causal claims.'),
    t('data storytelling', 'Communication', ['slides', 'dashboards'], 'Showing every analysis instead of the decision path.', 'Present one recommendation with evidence and caveats.', 'Lead with the decision and support it with evidence.'),
    t('model interpretation', 'Explainability', ['SHAP', 'sklearn'], 'Treating feature importance as causal explanation.', 'Explain churn model drivers responsibly.', 'Separate predictive signals from causal claims.'),
    t('portfolio case studies', 'Career proof', ['GitHub', 'Tableau'], 'Publishing notebooks without business context.', 'Write a case study from question to recommendation.', 'Show problem, method, result, limits, and action.')
  ]
});

function phase(phase, timelineWeeks, topics, tools, miniProject, expectedOutcome, nextAction) { return { phase, timelineWeeks, topics, tools, miniProject, expectedOutcome, nextAction }; }
function project(title, description, skillsUsed, toolsUsed) { return { title, description, skillsUsed, toolsUsed }; }
function t(name, skill, tools, mistake, example, correct) { return { name, skill, tools, mistake, example, correct }; }
