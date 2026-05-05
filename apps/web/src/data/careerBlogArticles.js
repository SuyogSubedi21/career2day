const articleWrap = (intro, sections, checklistTitle = 'Practical takeaway') => `
<p>${intro}</p>
${sections.map((section) => `
<h2>${section.title}</h2>
${section.body.map((paragraph) => `<p>${paragraph}</p>`).join('')}
${section.items ? `<ul>${section.items.map((item) => `<li>${item}</li>`).join('')}</ul>` : ''}
`).join('')}
<h2>${checklistTitle}</h2>
<ul>
  <li>Choose one clear next action before opening another tutorial.</li>
  <li>Turn every learning block into a project, note, CV bullet, or interview story.</li>
  <li>Review progress weekly so your preparation becomes visible and measurable.</li>
</ul>`;

export const careerBlogArticles = [
  {
    id: 'local-career-roadmap',
    slug: 'how-to-follow-a-career-roadmap-without-getting-overwhelmed',
    title: 'How to Follow a Career Roadmap Without Getting Overwhelmed',
    excerpt: 'A practical way to move from beginner learning to portfolio proof without collecting endless courses.',
    category: 'Career',
    author: 'Career2Day Editorial',
    readingTime: 12,
    publishedAt: '2026-05-05',
    tags: 'career roadmap,learning plan,job ready',
    content: articleWrap(
      'Career roadmaps are helpful only when they reduce decisions. A weak roadmap gives you a long list of topics. A strong roadmap tells you what to learn, what to build, how to measure progress, and when to move forward.',
      [
        {
          title: 'Start with the outcome, not the course list',
          body: [
            'Most beginners get overwhelmed because they collect resources before defining the result they want. A career roadmap should begin with a target role and a practical definition of readiness. For example, a Frontend Engineer is not job-ready because they watched a React course. They are job-ready when they can build responsive interfaces, handle forms, fetch data, manage loading and error states, explain accessibility choices, and present finished work clearly.',
            'Before starting a roadmap, write one sentence: by the end of this path, I should be able to do X for a real team. That sentence becomes your filter. If a topic does not help you build, explain, or apply for the role, it can wait.'
          ],
          items: [
            'Define the target role.',
            'List the core work that role performs.',
            'Identify the proof employers expect.',
            'Remove resources that do not support that proof.'
          ]
        },
        {
          title: 'Use four phases instead of endless topics',
          body: [
            'A roadmap should feel like a sequence. The four-phase model works because each stage has a different purpose. Beginner learning builds vocabulary and confidence. Intermediate learning connects tools into workflows. Advanced learning improves quality and production thinking. Job-ready preparation turns the work into applications, CV bullets, and interview answers.',
            'This structure prevents a common mistake: learning advanced tools before you can use basic concepts well. It also gives you permission to move forward when a phase has done its job. You do not need to master everything before building proof.'
          ],
          items: [
            'Beginner: understand fundamentals and basic language.',
            'Intermediate: build small workflows with real tools.',
            'Advanced: add quality, scale, testing, and tradeoffs.',
            'Job-ready: polish portfolio, CV, interview answers, and applications.'
          ]
        },
        {
          title: 'Ship one proof point per phase',
          body: [
            'The fastest way to make learning useful is to produce evidence. A proof point can be a deployed app, a dashboard, a written case study, a GitHub repository, a Loom walkthrough, or a technical explanation. The format matters less than the clarity of what it proves.',
            'For each phase, ask what a recruiter or hiring manager could understand from your work. If they cannot see the skill, the project needs better documentation. If you cannot explain the tradeoffs, the project needs reflection.'
          ]
        },
        {
          title: 'Review progress every week',
          body: [
            'Weekly review turns vague effort into momentum. At the end of each week, write down what you learned, what you built, what confused you, and what belongs on your CV. This habit is simple but powerful because it keeps your preparation connected to employment outcomes.',
            'If you did not produce anything visible during the week, do not panic. Use that as a signal to make the next week smaller and more concrete.'
          ]
        }
      ],
      'Weekly roadmap checklist'
    )
  },
  {
    id: 'local-cv-mistakes',
    slug: 'cv-mistakes-that-stop-good-candidates-getting-interviews',
    title: 'CV Mistakes That Stop Good Candidates Getting Interviews',
    excerpt: 'The most common resume problems are usually clarity problems, not talent problems.',
    category: 'Resume',
    author: 'Career2Day Editorial',
    readingTime: 13,
    publishedAt: '2026-05-05',
    tags: 'cv,resume,ats,job search',
    content: articleWrap(
      'Many capable candidates lose interviews because their CV does not make their value easy to understand. A recruiter may spend only a short time scanning the document. The job of the CV is not to tell your whole life story. It is to make role fit obvious.',
      [
        {
          title: 'Your CV is not a biography',
          body: [
            'A biography moves through your history. A CV should move through relevance. Start with the role you want, the skills that match that role, and the strongest evidence you have. If your first page spends too much space on unrelated education, generic personal traits, or old responsibilities, the reader may miss the reason to interview you.',
            'This is especially important for career switchers. You do not need to hide your past, but you do need to translate it. Customer service becomes stakeholder communication. Teaching becomes explanation and documentation. Operations becomes process improvement.'
          ]
        },
        {
          title: 'Replace vague claims with evidence',
          body: [
            'Phrases like hardworking, passionate, detail-oriented, and fast learner are common but weak. They may be true, but they do not prove anything. Evidence-based bullets are stronger because they include a task, tool, result, or context.',
            'Instead of writing "good at data analysis", write "cleaned a 20,000-row sales dataset with SQL and built a Power BI dashboard showing revenue, margin, and product trends." The second version gives the reader something concrete to trust.'
          ],
          items: [
            'Weak: Built dashboards.',
            'Better: Built a Power BI dashboard tracking revenue, churn, and customer segments.',
            'Weak: Worked with React.',
            'Better: Built a React job tracker with filters, saved status, form validation, and responsive layouts.'
          ]
        },
        {
          title: 'Make projects readable',
          body: [
            'Projects are often the strongest section for beginners, but they are usually written too vaguely. Every project should answer four questions: what problem did you solve, what tools did you use, what did you build, and what did the result prove?',
            'A project does not need to be huge. A small project with clear documentation is better than a large project that nobody can understand.'
          ]
        },
        {
          title: 'Keep formatting calm',
          body: [
            'A professional CV should be easy to scan. Use consistent headings, sensible spacing, readable font sizes, and restrained color. Heavy graphics, oversized icons, bright colors, and unusual layouts may look interesting but often reduce trust.',
            'If you are applying through online systems, keep at least one ATS-friendly version. If you are sending a portfolio PDF directly, you can use a slightly more designed version, but content clarity still matters most.'
          ]
        }
      ],
      'CV improvement checklist'
    )
  },
  {
    id: 'local-interview-practice',
    slug: 'how-to-practice-interview-questions-so-answers-sound-real',
    title: 'How to Practice Interview Questions So Your Answers Sound Real',
    excerpt: 'Interview preparation works best when you connect answers to projects, tradeoffs, and mistakes.',
    category: 'Interview',
    author: 'Career2Day Editorial',
    readingTime: 12,
    publishedAt: '2026-05-05',
    tags: 'interview questions,practice,career prep',
    content: articleWrap(
      'Interview practice fails when it becomes memorization. Strong answers sound real because they are connected to actual work, specific decisions, and honest tradeoffs. The goal is not to sound perfect. The goal is to sound clear, prepared, and trustworthy.',
      [
        {
          title: 'Do not memorize paragraphs',
          body: [
            'Memorized answers often collapse when the interviewer asks a follow-up question. Instead of memorizing full paragraphs, prepare answer structures. A useful structure is context, action, tradeoff, result. This lets you adapt the answer while keeping it organized.',
            'For example, if asked about API integration, you can describe the project context, the endpoint or data you consumed, the loading and error states you handled, the tradeoff you made, and the final user experience.'
          ]
        },
        {
          title: 'Use your projects as anchors',
          body: [
            'Every technical answer becomes stronger when you can connect it to a project. If you are asked about accessibility, mention where you used labels, keyboard navigation, focus states, or semantic HTML. If you are asked about model evaluation, mention a project where you compared precision and recall and explained why one metric mattered more.',
            'This approach makes your answers specific. It also helps interviewers understand that you have used the concept rather than only read about it.'
          ]
        },
        {
          title: 'Prepare common mistakes',
          body: [
            'Good candidates can explain what goes wrong. Great candidates can explain how they would notice, debug, and prevent it. For each topic, prepare one common mistake and one prevention strategy.',
            'For example, a frontend candidate might say that a common mistake is hiding focus outlines because they look messy, which harms keyboard users. A data candidate might mention leakage in feature engineering. An AI candidate might mention evaluating only aggregate accuracy while ignoring subgroup performance.'
          ]
        },
        {
          title: 'Record short answers',
          body: [
            'Recording yourself is uncomfortable, but it works. Keep answers under two minutes. Listen for vague phrases such as "basically", "stuff", or "things". Replace them with concrete nouns and actions.',
            'You do not need studio-quality delivery. You need calm structure, useful examples, and the ability to explain your thinking without drifting.'
          ]
        }
      ],
      'Interview practice checklist'
    )
  },
  {
    id: 'local-ai-engineer',
    slug: 'how-to-become-an-ai-engineer-with-a-job-ready-portfolio',
    title: 'How to Become an AI Engineer With a Job-Ready Portfolio',
    excerpt: 'AI engineering is not only model training. Employers want evaluated workflows, APIs, and product judgment.',
    category: 'Career',
    author: 'Career2Day Editorial',
    readingTime: 14,
    publishedAt: '2026-05-05',
    tags: 'AI Engineer,portfolio,MLOps,LLM',
    content: articleWrap(
      'AI Engineering is one of the most exciting career paths, but it is also one of the easiest to misunderstand. Employers rarely want someone who can only run a notebook. They want people who can turn AI capability into reliable product workflows.',
      [
        {
          title: 'Build systems, not demos',
          body: [
            'A demo proves that something can work once. A system proves that you understand quality, failure, and users. A strong AI portfolio should show how data enters the system, how output quality is checked, how errors are handled, and how the user knows what to trust.',
            'For LLM projects, this means showing retrieval, citations, refusal behavior, prompt versioning, and an evaluation set. For classic machine learning projects, it means showing train-test splits, metrics, error analysis, and deployment thinking.'
          ]
        },
        {
          title: 'Include one classic ML project',
          body: [
            'Classic machine learning still matters because it teaches evaluation discipline. Build a project such as churn prediction, fraud review prioritization, or lead scoring. Do not stop at model accuracy. Explain the cost of false positives and false negatives. Show what metric you chose and why.',
            'The best project writeups include a short business context, data description, modeling approach, evaluation results, and next steps.'
          ]
        },
        {
          title: 'Include one LLM workflow',
          body: [
            'A modern AI Engineer should understand LLM workflows. Build a retrieval assistant that answers questions from a controlled document set. Require citations. Add a fallback when the answer is not supported. Create ten to twenty evaluation questions and manually inspect the results.',
            'This project proves you understand that LLM applications are product systems, not just prompt experiments.'
          ]
        },
        {
          title: 'Show deployment and operations thinking',
          body: [
            'Even if you do not deploy a large system, show that you understand deployment concerns. Package your model behind an API, document environment variables, include a simple logging plan, and explain what you would monitor in production.',
            'Hiring teams notice when a candidate thinks beyond the notebook.'
          ]
        }
      ],
      'AI Engineer portfolio checklist'
    )
  },
  {
    id: 'local-frontend',
    slug: 'frontend-engineer-roadmap-from-html-to-production-ui',
    title: 'Frontend Engineer Roadmap: From HTML to Production UI',
    excerpt: 'A professional frontend path covers accessibility, state, APIs, performance, and product polish.',
    category: 'Career',
    author: 'Career2Day Editorial',
    readingTime: 13,
    publishedAt: '2026-05-05',
    tags: 'frontend,React,accessibility,portfolio',
    content: articleWrap(
      'Frontend Engineering is not only about making screens look good. Professional frontend work turns product requirements into accessible, responsive, reliable interfaces that users can operate repeatedly.',
      [
        {
          title: 'Start with browser fundamentals',
          body: [
            'HTML, CSS, and JavaScript remain the foundation. React does not replace semantic HTML, layout knowledge, or browser behavior. If you skip fundamentals, you will struggle to debug real interfaces.',
            'Focus on semantic structure, flexbox, grid, responsive constraints, forms, events, and basic accessibility. These skills make every framework easier.'
          ]
        },
        {
          title: 'Build real workflows',
          body: [
            'A portfolio should include workflows, not just static pages. Build a job tracker, dashboard, CV builder, booking form, or admin table. Include loading states, empty states, error states, form validation, filters, and saved data.',
            'These details show that you understand product work. A beautiful page is good. A usable workflow is better.'
          ]
        },
        {
          title: 'Care about accessibility',
          body: [
            'Accessibility is a professional signal. Use labels, semantic buttons, keyboard navigation, visible focus states, and sufficient color contrast. Do not rely only on color to communicate errors or status.',
            'You do not need to be an accessibility expert at the start, but you should show that you respect users with different devices and needs.'
          ]
        },
        {
          title: 'Show polish without overdesigning',
          body: [
            'Polish comes from spacing, hierarchy, alignment, responsive behavior, and clear states. Avoid random gradients, oversized cards, and decorative clutter. Make the product easy to scan.',
            'In your README, explain the tradeoffs: why you chose a layout, how you handled state, what you would improve, and how you tested the experience.'
          ]
        }
      ],
      'Frontend portfolio checklist'
    )
  },
  {
    id: 'local-quiz',
    slug: 'why-quizzes-improve-career-readiness-when-used-correctly',
    title: 'Why Quizzes Improve Career Readiness When Used Correctly',
    excerpt: 'Quizzes are not just scoring tools. They reveal gaps and guide the next learning action.',
    category: 'Career',
    author: 'Career2Day Editorial',
    readingTime: 9,
    publishedAt: '2026-05-05',
    tags: 'quiz,learning,readiness score',
    content: articleWrap(
      'Quizzes are often treated as a final test, but they are more useful as a feedback system. A good quiz shows what you understand, what you guessed, and what you need to practice next.',
      [
        {
          title: 'Use quizzes to find weak spots',
          body: [
            'A missed question is not a failure. It is a signal. If you miss a question about API error states, your next action should not be to retake the quiz immediately. Your next action should be to build or revise a small feature that handles loading, error, retry, and empty states.',
            'The value of a quiz is highest when every wrong answer becomes a practical learning task.'
          ]
        },
        {
          title: 'Read explanations carefully',
          body: [
            'The explanation matters more than the score. It helps you understand why the correct answer is correct and why the distractors are risky. This is especially important in technical careers where multiple answers may sound plausible.',
            'After reading an explanation, write a one-sentence rule you can reuse. For example: "Accuracy is not enough when class imbalance changes the cost of errors."'
          ]
        },
        {
          title: 'Retake after building, not immediately',
          body: [
            'Retaking too quickly often measures memory instead of learning. A better cycle is quiz, review, build, explain, then retake. This creates durable understanding.',
            'For career readiness, your goal is not just to choose the right answer. Your goal is to use the concept in work and explain it under pressure.'
          ]
        }
      ],
      'Quiz-based learning checklist'
    )
  },
  {
    id: 'local-projects',
    slug: 'portfolio-projects-that-make-a-cv-stronger',
    title: 'Portfolio Projects That Make a CV Stronger',
    excerpt: 'The best portfolio projects create CV bullets, interview stories, and proof of practical judgment.',
    category: 'Resume',
    author: 'Career2Day Editorial',
    readingTime: 11,
    publishedAt: '2026-05-05',
    tags: 'portfolio,projects,cv',
    content: articleWrap(
      'Portfolio projects are not decorations. They are evidence. A good project helps your CV, gives you interview stories, and proves that you can turn learning into useful work.',
      [
        {
          title: 'Projects should match the role',
          body: [
            'The best project depends on the job. An AI Engineer project should show evaluation, data flow, and failure handling. A Frontend Engineer project should show accessible UI, state management, responsive design, and API integration. A Product Manager project should show user problems, prioritization, tradeoffs, and outcomes.',
            'Generic projects are less powerful because they do not answer the recruiter question: can this person do this role?'
          ]
        },
        {
          title: 'Document the work like a professional',
          body: [
            'Documentation turns a project from a code folder into a professional artifact. Include a README with the problem, tools, setup, screenshots, key decisions, limitations, and next steps.',
            'If possible, include a short walkthrough video. A two-minute explanation can make your project much easier to understand.'
          ]
        },
        {
          title: 'Turn projects into CV bullets',
          body: [
            'A project bullet should be specific. Use the pattern: built X using Y to demonstrate or improve Z. Add scale or quality signals when possible.',
            'For example: "Built a React dashboard with filterable tables, loading states, and responsive charts to track weekly application progress." This is clearer than "Created dashboard project."'
          ]
        },
        {
          title: 'Prepare interview stories from each project',
          body: [
            'For each project, prepare answers for what was hard, what you changed, what you would improve, and what tradeoff you made. These stories make interviews more natural.'
          ]
        }
      ],
      'Portfolio project checklist'
    )
  },
  {
    id: 'local-ats',
    slug: 'ats-keywords-without-making-your-cv-sound-robotic',
    title: 'ATS Keywords Without Making Your CV Sound Robotic',
    excerpt: 'ATS optimization works best when keywords are placed inside honest, evidence-based statements.',
    category: 'Resume',
    author: 'Career2Day Editorial',
    readingTime: 10,
    publishedAt: '2026-05-05',
    tags: 'ATS,keywords,resume writing',
    content: articleWrap(
      'Applicant tracking systems can influence whether your CV gets seen, but keyword stuffing is not the answer. The best ATS strategy is honest alignment: use the language of the role while proving the skill with examples.',
      [
        {
          title: 'Use keywords naturally',
          body: [
            'Keywords belong in skills, project bullets, and experience descriptions. If a job asks for SQL, Python, dashboards, and stakeholder communication, those words should appear where they are supported by real work.',
            'Avoid dumping a long keyword list at the bottom of the CV. It may pass a simple scan, but it weakens trust when a human reads it.'
          ]
        },
        {
          title: 'Mirror the job description carefully',
          body: [
            'Read three to five job descriptions for your target role and highlight repeated words. These repeated terms are usually the core language of the market. Then map each term to proof from your experience or projects.',
            'If you cannot connect a keyword to proof, either build that proof or leave the keyword out.'
          ]
        },
        {
          title: 'Make formatting ATS-friendly',
          body: [
            'Use standard section headings such as Summary, Skills, Projects, Experience, Education, and Certifications. Avoid putting essential text inside images. Keep columns simple if you are applying through large job portals.',
            'You can still have a designed CV for direct outreach, but keep a clean ATS version for online applications.'
          ]
        },
        {
          title: 'Stay truthful',
          body: [
            'ATS can help you get noticed, but interviews reveal whether your experience is real. Do not claim tools you cannot discuss. A smaller honest CV is stronger than an inflated one.'
          ]
        }
      ],
      'ATS optimization checklist'
    )
  },
  {
    id: 'local-job-ready',
    slug: 'what-job-ready-really-means-for-beginners',
    title: 'What Job-Ready Really Means for Beginners',
    excerpt: 'Job-ready does not mean expert. It means you can do useful junior work and explain your decisions.',
    category: 'Career',
    author: 'Career2Day Editorial',
    readingTime: 11,
    publishedAt: '2026-05-05',
    tags: 'job ready,beginner,career switch',
    content: articleWrap(
      'Beginners often think job-ready means expert. It does not. Job-ready means you can contribute to scoped work, communicate clearly, learn inside a team, and show evidence that you can keep improving.',
      [
        {
          title: 'Job-ready is practical',
          body: [
            'A junior candidate is not expected to know everything. They are expected to understand fundamentals, complete reasonable tasks, ask precise questions, and respond well to feedback.',
            'For technical roles, this means you can build small features, debug with guidance, read documentation, and explain your decisions. For product or design roles, it means you can understand user problems, document choices, and present clear work.'
          ]
        },
        {
          title: 'You need proof',
          body: [
            'Proof can be a portfolio, case study, GitHub repository, dashboard, deployed app, technical writeup, or interview story. Without proof, your CV depends too heavily on claims.',
            'The proof does not need to be perfect. It needs to be understandable, relevant, and connected to the role.'
          ]
        },
        {
          title: 'You need communication',
          body: [
            'Many beginners learn tools but cannot explain their work. Communication is part of readiness. Practice explaining what you built, why you built it, what tradeoffs you made, and what you would improve.',
            'A candidate who can explain a modest project clearly often appears stronger than a candidate with a large project they cannot discuss.'
          ]
        },
        {
          title: 'You need application materials',
          body: [
            'Job readiness includes a targeted CV, a simple portfolio, prepared interview answers, and a list of roles that match your current level. Learning without application preparation can become an endless loop.'
          ]
        }
      ],
      'Job-ready checklist'
    )
  },
  {
    id: 'local-first-90-days',
    slug: 'how-to-prepare-for-your-first-90-days-in-a-tech-role',
    title: 'How to Prepare for Your First 90 Days in a Tech Role',
    excerpt: 'Getting hired is the start. The first 90 days are about trust, learning, and useful contribution.',
    category: 'Career',
    author: 'Career2Day Editorial',
    readingTime: 12,
    publishedAt: '2026-05-05',
    tags: 'first job,onboarding,tech career',
    content: articleWrap(
      'Getting the job is not the finish line. The first 90 days are where you build trust, learn the real system, and become useful without trying to prove everything at once.',
      [
        {
          title: 'Learn the system before changing it',
          body: [
            'Every team has context that is not visible from the outside. Spend the first weeks understanding workflows, naming conventions, product goals, code structure, data definitions, design systems, stakeholders, and review habits.',
            'New hires sometimes rush to suggest changes before understanding why things work the way they do. Curiosity creates more trust than premature certainty.'
          ]
        },
        {
          title: 'Make small reliable contributions',
          body: [
            'Trust grows through consistency. Fix a small bug, improve documentation, clean up a confusing workflow, write a test, or clarify a dashboard. Small contributions show that you can finish work and respect the team’s process.',
            'Reliability matters more than dramatic output in the first month.'
          ]
        },
        {
          title: 'Ask precise questions',
          body: [
            'A precise question shows what you tried, what you observed, and where you are stuck. Instead of asking "How does this work?", ask "I traced the data from this endpoint to this component, but I do not understand where the status value is transformed. Is this handled in the service layer?"',
            'This kind of question helps teammates help you faster.'
          ]
        },
        {
          title: 'Keep a wins document',
          body: [
            'Track tasks completed, feedback received, tools learned, and outcomes created. This helps with performance reviews and future CV updates. It also helps you notice progress during weeks that feel slow.',
            'At the end of 90 days, your wins document becomes a map of your growth.'
          ]
        }
      ],
      'First 90 days checklist'
    )
  }
];

export const getCareerBlogArticle = (slug) => careerBlogArticles.find((article) => article.slug === slug);

export const getRelatedCareerBlogArticles = (article) =>
  careerBlogArticles.filter((item) => item.slug !== article.slug && item.category === article.category).slice(0, 3);
