export function buildCareer(config) {
  const skillNames = [
    ...config.skills.core.map((item) => item.name),
    ...config.skills.technical.map((item) => item.name),
    ...config.skills.tools.map((item) => item.name)
  ];

  return {
    slug: config.slug,
    name: config.name,
    category: config.category,
    tagline: config.tagline,
    description: config.overview.description,
    salaryPotential: config.salary.label,
    demandLevel: config.overview.demandLevel,
    beginnerFriendliness: config.overview.beginnerFriendliness,
    difficultyLevel: config.overview.difficultyLevel,
    timeToJobReady: config.overview.estimatedTimeToJobReady,
    salaryNote: config.salary.note,
    requiredSkills: skillNames.slice(0, 10),
    tools: config.skills.tools.map((item) => item.name),
    responsibilities: config.overview.responsibilities,
    industries: config.overview.industries,
    skillsDetailed: config.skills,
    projects: config.projects,
    roadmap: config.roadmap.map((phase) => ({
      phase: phase.phase,
      timelineWeeks: phase.timelineWeeks,
      topics: phase.topics,
      tools: phase.tools,
      miniProject: phase.miniProject,
      outcome: phase.expectedOutcome,
      nextAction: phase.nextAction,
      checklist: phase.checklist
    })),
    analytics: {
      learningCurve: config.analytics.learningCurve,
      skills: config.analytics.skills,
      salary: config.salary.ranges.map((item) => [item.level, Math.round((item.low + item.high) / 2)])
    },
    cv: config.cv,
    faqs: config.faqs,
    seo: config.seo,
    topics: config.topics,
    unlocked: true,
    source: 'career2day-batch-content',
    quality: {
      batch: config.batch,
      reviewRecommended: Boolean(config.reviewRecommended),
      notes: config.reviewRecommended ? 'Review recommended before using for regulated salary, compliance, or hiring-policy claims.' : 'Reviewed for practical career preparation use.'
    }
  };
}
