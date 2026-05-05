# Adding Careers to Career2Day

Career content is added in reviewed batches. Batch 1 covers the first five requested careers:

- AI Engineer
- Machine Learning Engineer
- Generative AI Engineer
- AI Research Scientist
- Data Scientist

Data Analyst remains in this folder as a prior reference example, but it is not part of the current exact 50-career public catalog.

## Current Pattern

- Add a career module in `apps/web/src/data/careers/{career-slug}.js`.
- Export a career object with overview, skills, tools, salary analytics, roadmap, projects, CV suggestions, FAQs, SEO, and topic seeds.
- Import the career object in `apps/web/src/data/careerPlatformData.js`.
- Add the career name to `careerNames`.
- Add the name to the complete status list only when the content has been reviewed.

The platform registry generates the 100 interview questions and 30 quiz questions from the career topic seeds through the shared `makeQuestions` and `makeQuizzes` helpers. This keeps the UI consistent while letting each career own accurate topics, tools, mistakes, examples, and quiz explanations.

## Batch Workflow

1. Create or update exactly 5 career files.
2. Import those careers into `careerPlatformData.js`.
3. Mark only those 5 careers as `complete`.
4. Run a production build.
5. Check each career route and interview route.
6. Confirm each career has 100 interview questions and 30 quiz questions.
7. Move to the next batch only after the current batch is functional.

## Quality Rules

- Do one career at a time.
- Keep roadmap steps specific enough that a beginner knows exactly what to learn next.
- Include 4 roadmap phases: Beginner, Intermediate, Advanced, Job-ready.
- Include 3-5 portfolio projects with application value.
- Include salary estimates as global USD ranges and keep the salary uncertainty note visible.
- Include CV suggestions: summary, skills, projects, and ATS keywords.
- Include FAQs and SEO fields for the career page.
- Before marking a career complete, verify:
  - 100 interview questions render on `/interview-questions/{career-slug}`.
  - 30 quiz questions render inside `/careers/{career-slug}`.
  - Roadmap completion updates localStorage.
  - Interview completion updates localStorage.
  - Quiz score updates readiness score.
  - Project upload/rating works locally.

## Data Safety

Career progress, interview practice, quiz answers, CV drafts, and project submissions are stored in browser `localStorage`. Do not add server uploads for CVs or project files unless the product later gets an explicit privacy-reviewed backend workflow.
