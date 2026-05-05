import { buildCareer } from './career-template-builder.js';

export function makeAiFamilyCareer(config) {
  return buildCareer({
    batch: 1,
    slug: config.slug,
    name: config.name,
    category: 'AI and Data',
    tagline: config.tagline,
    overview: {
      description: config.description,
      demandLevel: config.demand || 'High',
      difficultyLevel: config.difficulty || 'Advanced',
      beginnerFriendliness: config.beginnerFit || 'Moderate',
      estimatedTimeToJobReady: config.time || '28-40 weeks',
      responsibilities: config.responsibilities,
      industries: ['AI startups', 'SaaS', 'Finance', 'Healthcare', 'Retail', 'Education technology', 'Enterprise software', 'Research labs']
    },
    salary: {
      currency: 'USD',
      label: config.salaryLabel,
      note: 'Salaries vary by country, company, experience and market conditions. These are realistic global USD estimates, not guarantees.',
      ranges: config.salary
    },
    skills: {
      core: config.core.map(skillCard),
      technical: config.technical.map(skillCard),
      tools: config.tools.map(skillCard),
      soft: config.soft.map(skillCard)
    },
    roadmap: config.roadmap.map((phase) => ({
      ...phase,
      checklist: phase.topics.map((topic) => `Build evidence for: ${topic}`)
    })),
    projects: config.projects.map((project) => ({
      ...project,
      applicationValue: project.applicationValue || `Shows employers you can perform practical ${config.name} work with clear decisions, metrics, and tradeoffs.`
    })),
    analytics: config.analytics,
    cv: {
      summary: `${config.name} with practical experience across ${config.core.slice(0, 3).join(', ')}, production workflows, documentation, and stakeholder-ready communication.`,
      skills: [...config.core, ...config.technical, ...config.tools].slice(0, 12),
      projects: config.projects.slice(0, 3).map((item) => item.title),
      atsKeywords: [config.name, ...config.core, ...config.technical, ...config.tools]
    },
    faqs: [
      { question: `How long does it take to become a ${config.name}?`, answer: `Most learners need ${config.time || '28-40 weeks'} of focused practice plus portfolio projects that prove applied skill.` },
      { question: `What should I build for a ${config.name} portfolio?`, answer: `Build projects with clear problem framing, reproducible code or process, evaluation, limitations, and a short business or research recommendation.` },
      { question: `What is the biggest beginner mistake?`, answer: config.biggestMistake }
    ],
    seo: {
      title: `${config.name} Roadmap, Skills, Interview Questions and Quiz | Career2Day`,
      description: `Follow a practical ${config.name} roadmap with salary ranges, tools, projects, 100 interview questions, quiz practice, and CV guidance.`,
      canonical: `https://career2day.com/careers/${config.slug}`,
      ogTitle: `${config.name} Career Path`,
      ogDescription: `A complete ${config.name} preparation path with roadmap, projects, interview practice, quiz, and readiness scoring.`
    },
    topics: config.topics.map(topicCard)
  });
}

function skillCard(name) {
  return {
    name,
    explanation: `${name} is used in real delivery work, not just theory.`,
    whyItMatters: 'Hiring teams look for evidence that you can apply this skill with quality, judgment, and clear communication.'
  };
}

function topicCard(item) {
  return {
    name: item.name,
    skill: item.skill,
    tools: item.tools,
    mistake: item.mistake,
    example: item.example,
    quiz: {
      question: item.quizQuestion || `What is the best professional habit when working on ${item.name}?`,
      correct: item.correct,
      distractors: item.distractors || ['Use the newest tool without defining the problem.', 'Skip validation because the output looks polished.', 'Optimize for demos while ignoring limitations.'],
      explanation: item.explanation || `${item.name} creates value when it is validated, documented, and connected to a real decision.`
    }
  };
}
