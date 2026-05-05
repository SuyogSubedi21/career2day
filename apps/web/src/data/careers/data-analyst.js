export const dataAnalystTopics = [
  {
    name: 'spreadsheet analysis and cleaning',
    skill: 'Excel and Google Sheets',
    tools: ['Excel', 'Google Sheets', 'Power Query'],
    mistake: 'Changing raw data directly without keeping an auditable original copy.',
    example: 'Cleaning monthly sales exports, standardizing date formats, removing duplicates, and documenting every transformation before reporting revenue trends.',
    quiz: {
      question: 'What is the safest first step when receiving a messy spreadsheet for analysis?',
      correct: 'Save a raw copy, inspect columns and data types, then clean in a separate working sheet.',
      distractors: ['Delete columns that look unnecessary before checking requirements.', 'Create charts immediately to find patterns.', 'Convert all values to text so formulas do not fail.'],
      explanation: 'Keeping the raw file intact protects auditability and lets you recover if a cleaning decision was wrong.'
    }
  },
  {
    name: 'SQL querying and joins',
    skill: 'SQL',
    tools: ['PostgreSQL', 'BigQuery', 'SQL Server'],
    mistake: 'Joining tables without checking grain, keys, and row counts before and after the join.',
    example: 'Combining orders, customers, and refunds to calculate true net revenue without duplicating order rows.',
    quiz: {
      question: 'Why should a Data Analyst check row counts after a SQL join?',
      correct: 'A join can accidentally duplicate or remove records if the key relationship is misunderstood.',
      distractors: ['Row counts only matter for database administrators.', 'SQL joins always preserve the same number of rows.', 'Checking row counts replaces business validation.'],
      explanation: 'Unexpected row changes are one of the fastest signals that the join logic or table grain is wrong.'
    }
  },
  {
    name: 'descriptive statistics',
    skill: 'Statistics',
    tools: ['Excel', 'Python', 'R'],
    mistake: 'Reporting averages without checking outliers, distribution shape, or sample size.',
    example: 'Explaining that median delivery time is more useful than average delivery time when a few extreme delays skew the mean.',
    quiz: {
      question: 'When is the median usually more helpful than the mean?',
      correct: 'When the data has strong outliers or a skewed distribution.',
      distractors: ['When every value is identical.', 'When the dataset has no missing values.', 'When a dashboard needs more colors.'],
      explanation: 'The median is less affected by extreme values and can better represent a typical case in skewed data.'
    }
  },
  {
    name: 'data visualization',
    skill: 'Chart selection and storytelling',
    tools: ['Tableau', 'Power BI', 'Looker Studio'],
    mistake: 'Choosing visually impressive charts that hide the comparison or decision the audience needs.',
    example: 'Using a simple bar chart to compare conversion rate by channel instead of a decorative chart that makes values hard to read.',
    quiz: {
      question: 'What should drive chart selection in a business dashboard?',
      correct: 'The comparison, trend, or decision the user needs to understand quickly.',
      distractors: ['The most complex chart available in the BI tool.', 'The chart with the largest number of colors.', 'The chart type used in the last report.'],
      explanation: 'Good visualization starts with the decision and uses the simplest chart that makes the message clear.'
    }
  },
  {
    name: 'dashboard design',
    skill: 'BI dashboarding',
    tools: ['Power BI', 'Tableau', 'Looker Studio'],
    mistake: 'Building one crowded dashboard for every possible audience instead of designing around one workflow.',
    example: 'Creating an executive sales dashboard with revenue, margin, pipeline, and region filters that answers weekly leadership questions.',
    quiz: {
      question: 'What makes a dashboard useful to stakeholders?',
      correct: 'It is designed around a specific audience, decision cadence, and set of trusted metrics.',
      distractors: ['It includes every available metric.', 'It hides definitions to save space.', 'It updates manually only when someone asks.'],
      explanation: 'A focused dashboard reduces confusion and helps users make repeatable decisions.'
    }
  },
  {
    name: 'business metrics and KPIs',
    skill: 'Metric design',
    tools: ['dbt', 'Metric dictionaries', 'BI tools'],
    mistake: 'Using a KPI without defining the numerator, denominator, filters, and owner.',
    example: 'Defining active users consistently so product, marketing, and finance do not report different numbers in the same meeting.',
    quiz: {
      question: 'What should every important KPI definition include?',
      correct: 'Formula, filters, data source, refresh cadence, owner, and business interpretation.',
      distractors: ['Only a short label and a chart color.', 'A screenshot from the dashboard.', 'A target number with no source.'],
      explanation: 'Clear definitions prevent metric disputes and make analysis trustworthy.'
    }
  },
  {
    name: 'Python for analysis',
    skill: 'Python analytics',
    tools: ['Python', 'pandas', 'Jupyter'],
    mistake: 'Writing notebook code that cannot be rerun cleanly from top to bottom.',
    example: 'Using pandas to analyze customer retention cohorts and exporting a clean summary table for a dashboard.',
    quiz: {
      question: 'What makes an analysis notebook reliable?',
      correct: 'It can rerun from top to bottom with clear inputs, transformations, and outputs.',
      distractors: ['It has many hidden manual edits.', 'It only works after running cells in a secret order.', 'It stores final numbers as typed text.'],
      explanation: 'Reproducible notebooks make reviews, updates, and error correction much safer.'
    }
  },
  {
    name: 'data quality validation',
    skill: 'Data validation',
    tools: ['SQL tests', 'Power Query', 'Great Expectations'],
    mistake: 'Trusting data because it loaded successfully instead of validating completeness, uniqueness, and freshness.',
    example: 'Adding checks that transaction IDs are unique, order dates are valid, and yesterday data arrived before publishing a revenue dashboard.',
    quiz: {
      question: 'Which validation check is most important before publishing a daily dashboard?',
      correct: 'Confirm the source data is fresh, complete, and matches expected row counts or totals.',
      distractors: ['Change colors to make missing data less noticeable.', 'Remove filters that reveal gaps.', 'Publish first and validate next month.'],
      explanation: 'Freshness and completeness checks catch silent data failures before stakeholders make decisions from bad numbers.'
    }
  },
  {
    name: 'stakeholder requirements',
    skill: 'Business communication',
    tools: ['Briefs', 'Metric specs', 'Meeting notes'],
    mistake: 'Starting analysis before clarifying the decision, audience, deadline, and acceptable assumptions.',
    example: 'Turning a vague request like "analyze churn" into a scoped question about which customer segment, time window, and action options matter.',
    quiz: {
      question: 'What should a Data Analyst clarify before starting a stakeholder analysis request?',
      correct: 'The decision being made, audience, deadline, data source, and assumptions allowed.',
      distractors: ['Only the chart type the stakeholder likes.', 'Only whether the request sounds urgent.', 'Only the file format for export.'],
      explanation: 'Clarifying the decision prevents wasted analysis and makes the final recommendation useful.'
    }
  },
  {
    name: 'experimentation and A/B testing',
    skill: 'Experiment analysis',
    tools: ['SQL', 'Python', 'Experiment platforms'],
    mistake: 'Calling a winner before checking sample size, assignment, metric definition, and practical significance.',
    example: 'Evaluating an onboarding experiment by comparing activation rate, guardrail metrics, and segment-level effects before recommending rollout.',
    quiz: {
      question: 'What should be checked before recommending an A/B test winner?',
      correct: 'Randomization, sample size, primary metric, guardrails, and practical business impact.',
      distractors: ['Only whether the test variant has a higher raw number.', 'Only the first day of results.', 'Only the most positive segment.'],
      explanation: 'Experiment results need statistical and business validation before they should influence product decisions.'
    }
  }
];

export const dataAnalystCareer = {
  slug: 'data-analyst',
  name: 'Data Analyst',
  category: 'AI and Data',
  tagline: 'Turn messy business data into clear decisions, trusted dashboards, and practical recommendations.',
  description: 'Data Analysts collect, clean, analyze, visualize, and explain data so teams can make better decisions. The role combines spreadsheets, SQL, statistics, dashboards, business thinking, and clear communication.',
  salaryPotential: '$45k-$120k+',
  demandLevel: 'High',
  beginnerFriendliness: 'High',
  difficultyLevel: 'Moderate',
  timeToJobReady: '18-24 weeks',
  salaryNote: 'Salaries vary by country, company, experience and market conditions. These are realistic global USD estimates, not guarantees.',
  requiredSkills: ['Excel', 'SQL', 'data cleaning', 'statistics', 'dashboarding', 'business metrics', 'Python basics', 'data storytelling', 'stakeholder communication'],
  tools: ['Excel', 'Google Sheets', 'SQL', 'PostgreSQL', 'Power BI', 'Tableau', 'Looker Studio', 'Python', 'pandas', 'Jupyter'],
  responsibilities: [
    'Clean, validate, and combine data from spreadsheets, databases, product tools, and business systems.',
    'Write SQL queries to answer business questions and investigate trends, anomalies, and performance changes.',
    'Build dashboards that track KPIs and make metric definitions clear to non-technical stakeholders.',
    'Present findings with recommendations, assumptions, limitations, and next steps.'
  ],
  industries: ['Technology', 'Finance', 'Healthcare', 'Retail and ecommerce', 'SaaS', 'Logistics', 'Marketing agencies', 'Education', 'Public sector'],
  skillsDetailed: {
    core: [
      { name: 'Data cleaning', explanation: 'Identify missing values, duplicates, inconsistent formats, invalid categories, and outliers before analysis.', whyItMatters: 'Most analyst mistakes come from trusting messy data too early.' },
      { name: 'Business question framing', explanation: 'Translate vague requests into a specific decision, metric, segment, and time window.', whyItMatters: 'Clear framing makes analysis useful instead of just interesting.' },
      { name: 'Metric interpretation', explanation: 'Understand how KPIs are calculated and what behavior they encourage.', whyItMatters: 'Teams rely on analysts to prevent misleading numbers from driving bad decisions.' }
    ],
    technical: [
      { name: 'SQL joins and aggregation', explanation: 'Use joins, filters, grouping, window functions, and CTEs to produce reliable datasets.', whyItMatters: 'SQL is the main way analysts access production business data.' },
      { name: 'Statistics fundamentals', explanation: 'Use averages, medians, distributions, confidence intervals, correlation, and experiment basics correctly.', whyItMatters: 'Statistics helps you separate signal from noise.' },
      { name: 'Dashboard development', explanation: 'Create filtered, documented, refreshable dashboards with clear metric definitions.', whyItMatters: 'Dashboards turn repeated analysis into a reusable decision tool.' },
      { name: 'Python analysis basics', explanation: 'Use pandas notebooks for repeatable analysis, cleaning, and lightweight automation.', whyItMatters: 'Python helps when spreadsheets become too manual or too large.' }
    ],
    tools: [
      { name: 'Excel or Google Sheets', explanation: 'Formulas, pivot tables, lookup functions, cleaning, and quick analysis.', whyItMatters: 'Spreadsheets remain the fastest tool for many business questions.' },
      { name: 'Power BI or Tableau', explanation: 'Data modeling, visual design, filters, calculated fields, and dashboard publishing.', whyItMatters: 'BI tools make analysis accessible to teams without asking for new reports every day.' },
      { name: 'PostgreSQL or BigQuery', explanation: 'Query relational and warehouse data with correct table grain and validation.', whyItMatters: 'Real analyst roles expect SQL fluency.' }
    ],
    soft: [
      { name: 'Stakeholder communication', explanation: 'Ask clarifying questions, explain assumptions, and tailor findings to the audience.', whyItMatters: 'The value of analysis is realized only when people understand and act on it.' },
      { name: 'Analytical judgment', explanation: 'Know when a number is probably wrong, incomplete, biased, or not decision-ready.', whyItMatters: 'Good analysts protect teams from false confidence.' },
      { name: 'Written storytelling', explanation: 'Summarize context, method, finding, recommendation, and limitation in plain language.', whyItMatters: 'Hiring managers look for analysts who can influence decisions, not just produce charts.' }
    ]
  },
  projects: [
    {
      title: 'Sales Performance Dashboard',
      description: 'Analyze monthly sales by product, region, channel, and salesperson. Build a dashboard with revenue, margin, conversion rate, top products, and underperforming segments.',
      skillsUsed: ['SQL aggregation', 'data cleaning', 'KPI design', 'dashboard layout'],
      toolsUsed: ['SQL', 'Power BI or Tableau', 'Excel'],
      applicationValue: 'Shows employers you can connect raw business data to executive reporting and commercial decisions.'
    },
    {
      title: 'Customer Churn Analysis',
      description: 'Investigate which customer groups churn most often, what behaviors appear before cancellation, and which retention actions should be tested.',
      skillsUsed: ['cohort analysis', 'segmentation', 'descriptive statistics', 'recommendation writing'],
      toolsUsed: ['SQL', 'Python pandas', 'Jupyter'],
      applicationValue: 'Creates a strong interview story about turning analysis into business action.'
    },
    {
      title: 'Marketing Campaign ROI Report',
      description: 'Combine spend, leads, conversions, and revenue data to compare campaign performance and identify channels with the best payback.',
      skillsUsed: ['joins', 'metric definitions', 'data validation', 'visual storytelling'],
      toolsUsed: ['Excel', 'SQL', 'Looker Studio'],
      applicationValue: 'Demonstrates practical analytics for marketing, ecommerce, and SaaS roles.'
    },
    {
      title: 'A/B Test Readout',
      description: 'Analyze a product experiment with a primary metric, guardrail metrics, segments, confidence framing, and a rollout recommendation.',
      skillsUsed: ['experiment analysis', 'statistics', 'business communication'],
      toolsUsed: ['SQL', 'Python', 'Slides'],
      applicationValue: 'Signals readiness for product analytics and modern tech company analytics work.'
    },
    {
      title: 'Data Quality Audit',
      description: 'Audit a messy dataset, document issues, create cleaning rules, validate final totals, and publish a before/after quality report.',
      skillsUsed: ['data profiling', 'validation checks', 'documentation', 'quality assurance'],
      toolsUsed: ['Excel Power Query', 'SQL', 'Great Expectations optional'],
      applicationValue: 'Proves you understand the unglamorous work that makes analysis trustworthy.'
    }
  ],
  roadmap: [
    {
      phase: 'Beginner',
      timelineWeeks: 5,
      topics: ['Excel formulas, pivot tables, lookup functions, and basic data cleaning', 'Business metrics such as revenue, margin, conversion rate, churn, retention, and average order value', 'Descriptive statistics: mean, median, percentiles, outliers, correlation, and distribution shape', 'Basic chart selection for comparisons, trends, parts-to-whole, and distributions'],
      tools: ['Excel', 'Google Sheets', 'Power Query', 'Looker Studio'],
      miniProject: 'Clean a messy sales spreadsheet, build pivot tables, calculate revenue and conversion KPIs, and create a one-page sales summary.',
      outcome: 'You can clean spreadsheet data, calculate common business metrics, and explain trends without overclaiming.',
      nextAction: 'Move to SQL only after you can explain each spreadsheet transformation and KPI definition.',
      checklist: ['Create a raw-data backup before cleaning', 'Use formulas and pivot tables to summarize sales by product and month', 'Document missing values, duplicates, and cleaning decisions', 'Create 4 clear charts with labels and business takeaways', 'Write a short recommendation based on the cleaned analysis']
    },
    {
      phase: 'Intermediate',
      timelineWeeks: 6,
      topics: ['SQL SELECT, WHERE, GROUP BY, HAVING, joins, CTEs, and window functions', 'Table grain, primary keys, foreign keys, and row-count validation', 'Dashboard planning around audience, KPI definitions, filters, and refresh cadence', 'Stakeholder requirement gathering and analysis scoping'],
      tools: ['PostgreSQL', 'BigQuery sandbox', 'Power BI', 'Tableau'],
      miniProject: 'Query an ecommerce database, validate joins, create a customer and revenue dataset, and publish an interactive dashboard.',
      outcome: 'You can retrieve business data safely, validate logic, and turn repeated reporting into a dashboard.',
      nextAction: 'Start building portfolio projects with README files that explain your assumptions and validation checks.',
      checklist: ['Write SQL queries using joins and CTEs', 'Check row counts before and after every join', 'Define KPIs in a metric dictionary', 'Build a dashboard with filters and a clear update cadence', 'Present findings as decision-ready recommendations']
    },
    {
      phase: 'Advanced',
      timelineWeeks: 7,
      topics: ['Python pandas for repeatable cleaning, exploration, and cohort analysis', 'Experiment analysis, practical significance, guardrail metrics, and segment review', 'Data quality tests for completeness, uniqueness, validity, and freshness', 'Executive storytelling with assumptions, limitations, risks, and next steps'],
      tools: ['Python', 'pandas', 'Jupyter', 'SQL tests', 'Great Expectations optional'],
      miniProject: 'Analyze customer churn using SQL and Python, create cohorts, identify risk segments, and recommend retention experiments.',
      outcome: 'You can handle larger analysis problems, explain uncertainty, and defend your conclusions in interviews.',
      nextAction: 'Convert your best analysis into a public case study with code, charts, written recommendation, and business context.',
      checklist: ['Build a notebook that reruns from top to bottom', 'Create cohorts or segments with clear definitions', 'Use at least three validation checks', 'Explain correlation versus causation carefully', 'Write an executive summary with recommended action']
    },
    {
      phase: 'Job-ready',
      timelineWeeks: 6,
      topics: ['Portfolio case studies with business problem, dataset, method, result, limitation, and recommendation', 'Interview preparation for SQL, dashboards, metrics, experiments, and stakeholder scenarios', 'ATS CV positioning for Data Analyst roles', 'Capstone project packaging with screenshots, README, demo, and presentation'],
      tools: ['GitHub', 'Career2Day CV Builder', 'LinkedIn', 'Power BI or Tableau Public'],
      miniProject: 'Publish a complete Data Analyst capstone: cleaned dataset, SQL logic, dashboard, written recommendation, and 5-minute walkthrough.',
      outcome: 'You have a focused portfolio, interview answers, and a role-specific CV that match real Data Analyst job requirements.',
      nextAction: 'Build your Data Analyst CV, practise the 100 interview questions, and apply to roles with one portfolio link.',
      checklist: ['Publish 3 portfolio projects with business context', 'Practise 100 Data Analyst interview questions', 'Score at least 80% on all quiz levels', 'Build an ATS-friendly Data Analyst CV', 'Record a short walkthrough of your capstone']
    }
  ],
  analytics: {
    learningCurve: [8, 18, 30, 44, 58, 70, 82, 92],
    skills: [
      ['Excel', 90],
      ['SQL', 86],
      ['Statistics', 74],
      ['Dashboards', 84],
      ['Python', 62],
      ['Storytelling', 80]
    ],
    salary: [
      ['Entry', 45],
      ['Mid', 75],
      ['Senior', 105],
      ['Lead', 125]
    ]
  },
  cv: {
    summary: 'Data Analyst with hands-on experience cleaning datasets, writing SQL, building dashboards, validating business metrics, and translating analysis into clear recommendations.',
    skills: ['SQL', 'Excel', 'Power BI', 'Tableau', 'Python pandas', 'data cleaning', 'dashboard design', 'KPI reporting', 'statistics', 'stakeholder communication'],
    projects: ['Sales performance dashboard with KPI definitions', 'Customer churn analysis with cohorts and recommendations', 'Marketing ROI report with campaign comparison'],
    atsKeywords: ['Data Analyst', 'SQL', 'Excel', 'Power BI', 'Tableau', 'data visualization', 'dashboard', 'KPI', 'data cleaning', 'business analysis', 'Python', 'pandas']
  },
  faqs: [
    { question: 'Can I become a Data Analyst without a computer science degree?', answer: 'Yes. Hiring managers usually care more about SQL, spreadsheets, dashboards, business thinking, and portfolio proof than a specific degree.' },
    { question: 'Should I learn Python before SQL?', answer: 'For most Data Analyst roles, learn spreadsheet analysis and SQL first. Add Python when you can already answer business questions with clean data.' },
    { question: 'How many projects do I need?', answer: 'Three strong projects are better than ten shallow ones: one dashboard, one SQL-heavy analysis, and one business recommendation case study.' },
    { question: 'What is the hardest part of becoming job-ready?', answer: 'The hardest part is usually not charts. It is learning to validate data, define metrics, communicate assumptions, and recommend a decision.' }
  ],
  seo: {
    title: 'Data Analyst Roadmap, Skills, Interview Questions and Quiz | Career2Day',
    description: 'Follow a practical Data Analyst roadmap with skills, tools, salary ranges, projects, 100 interview questions, quiz practice, and CV guidance.',
    canonical: 'https://career2day.com/careers/data-analyst',
    ogTitle: 'Data Analyst Career Path: Roadmap, Skills, Interview Questions and Quiz',
    ogDescription: 'A complete Data Analyst career path with practical roadmap phases, portfolio projects, interview practice, quiz questions, and readiness scoring.'
  },
  topics: dataAnalystTopics,
  unlocked: true
};
