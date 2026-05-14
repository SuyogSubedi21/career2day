
import { CAREERS_LIST } from '@/lib/interviewQuestionsData.js';

const option = (id, text) => ({ id, text });
const question = (questionText, options, correctAnswer, explanation) => ({ questionText, options, correctAnswer, explanation });

const easyQuestionBank = (careerName) => [
  question(
    `What is the main responsibility of a ${careerName}?`,
    [option('a', 'To memorize every tool name used in the industry'), option('b', `To solve role-specific problems using the right concepts, tools, and communication`), option('c', 'To avoid documentation and focus only on speed'), option('d', 'To work without testing or feedback')],
    'b',
    `A ${careerName} is expected to solve practical problems, choose suitable tools, explain decisions clearly, and improve work through feedback.`
  ),
  question(
    `Why is clear documentation important for a ${careerName}?`,
    [option('a', 'It replaces the need to understand the work'), option('b', 'It makes decisions, setup steps, and tradeoffs easier for others to verify'), option('c', 'It is only needed after a project fails'), option('d', 'It should only include screenshots')],
    'b',
    'Good documentation helps teammates, reviewers, and future maintainers understand what was built, why choices were made, and how to use or improve it.'
  ),
  question(
    `Which habit best improves day-to-day quality for a ${careerName}?`,
    [option('a', 'Making small changes, testing them, and reviewing the result'), option('b', 'Changing many unrelated things at once'), option('c', 'Skipping requirements to save time'), option('d', 'Copying solutions without understanding them')],
    'a',
    'Small, tested changes reduce risk and make it easier to find mistakes before they become expensive.'
  ),
  question(
    `What should a ${careerName} do first when receiving a vague task?`,
    [option('a', 'Start building immediately'), option('b', 'Clarify the goal, users, constraints, and expected output'), option('c', 'Ignore the unclear parts'), option('d', 'Choose the newest tool available')],
    'b',
    'Clarifying scope and success criteria prevents wasted work and helps the final solution match the real need.'
  ),
  question(
    `Which answer best describes a good project for a ${careerName} portfolio?`,
    [option('a', 'A project with no explanation'), option('b', 'A copied tutorial with changed colors'), option('c', 'A project that states the problem, approach, result, and lessons learned'), option('d', 'A project that only lists technology names')],
    'c',
    'A strong portfolio project explains context, implementation decisions, measurable results, and what the candidate learned.'
  ),
  question(
    `Why should a ${careerName} learn basic version control?`,
    [option('a', 'To track changes, collaborate safely, and recover previous work'), option('b', 'To make files larger'), option('c', 'To avoid code reviews'), option('d', 'To replace testing')],
    'a',
    'Version control keeps a history of changes, supports collaboration, and makes rollback or review much safer.'
  ),
  question(
    `What is the best way to explain a technical decision in a ${careerName} interview?`,
    [option('a', 'Say the tool is popular'), option('b', 'Describe the problem, alternatives, tradeoffs, and why the chosen approach fit'), option('c', 'Use as many buzzwords as possible'), option('d', 'Avoid mentioning limitations')],
    'b',
    'Interviewers look for reasoning. A clear tradeoff explanation shows judgment, not just tool familiarity.'
  ),
  question(
    `Which action shows professional communication for a ${careerName}?`,
    [option('a', 'Reporting blockers early with context and possible next steps'), option('b', 'Waiting silently until the deadline passes'), option('c', 'Blaming tools before investigating'), option('d', 'Sending only one-word updates')],
    'a',
    'Early, specific communication helps teams manage risk and unblock work faster.'
  ),
  question(
    `What does "requirements" usually mean in ${careerName} work?`,
    [option('a', 'The expected behavior, constraints, and success criteria for the work'), option('b', 'Only the colors of the final output'), option('c', 'A list of personal preferences'), option('d', 'Something checked only after launch')],
    'a',
    'Requirements describe what the solution must do, what constraints apply, and how success will be evaluated.'
  ),
  question(
    `Which is the safest response when a ${careerName} finds a mistake in their own work?`,
    [option('a', 'Hide it if nobody noticed'), option('b', 'Document the issue, fix it, test the fix, and share the impact if needed'), option('c', 'Delete unrelated files'), option('d', 'Rewrite everything immediately')],
    'b',
    'Professional handling means understanding impact, correcting the issue, and communicating clearly when others may be affected.'
  ),
  question(
    `Why are measurable outcomes useful for a ${careerName}?`,
    [option('a', 'They make claims easier to evaluate'), option('b', 'They are only useful for managers'), option('c', 'They remove the need for examples'), option('d', 'They should replace all explanations')],
    'a',
    'Metrics and concrete outcomes help recruiters and teammates understand the value and impact of the work.'
  ),
  question(
    `What should a beginner ${careerName} do after completing a project?`,
    [option('a', 'Delete the project and start over'), option('b', 'Review what worked, improve weak parts, and prepare a short explanation'), option('c', 'Never look at it again'), option('d', 'Remove all documentation')],
    'b',
    'Reflection and refinement turn a project into stronger evidence of skill.'
  ),
  question(
    `Which skill supports almost every ${careerName} role?`,
    [option('a', 'Problem decomposition'), option('b', 'Ignoring constraints'), option('c', 'Avoiding feedback'), option('d', 'Only memorizing definitions')],
    'a',
    'Breaking a problem into smaller parts makes planning, implementation, testing, and communication much easier.'
  ),
  question(
    `What is a realistic first step when learning a new tool as a ${careerName}?`,
    [option('a', 'Build a small focused example and read the official basics'), option('b', 'Use it in production immediately'), option('c', 'Assume all tools work the same'), option('d', 'Avoid writing notes')],
    'a',
    'Small examples help verify understanding before using a tool in larger or higher-risk work.'
  ),
  question(
    `What makes feedback useful for a ${careerName}?`,
    [option('a', 'It is specific, tied to the goal, and suggests what to improve'), option('b', 'It only says "good" or "bad"'), option('c', 'It arrives after the project is forgotten'), option('d', 'It avoids the actual work')],
    'a',
    'Specific feedback helps turn effort into improvement.'
  ),
  question(
    `Which practice helps a ${careerName} avoid repeating the same error?`,
    [option('a', 'Writing down the cause, fix, and prevention step'), option('b', 'Changing tools every time'), option('c', 'Ignoring the cause'), option('d', 'Only working faster')],
    'a',
    'A short root-cause note helps convert a mistake into a reusable lesson.'
  ),
  question(
    `Why should a ${careerName} understand the user or stakeholder?`,
    [option('a', 'So the solution fits the real problem and context'), option('b', 'So testing can be skipped'), option('c', 'So documentation is unnecessary'), option('d', 'So every request is accepted without review')],
    'a',
    'Understanding the user or stakeholder helps prioritize the right work and avoid solving the wrong problem.'
  ),
  question(
    `What is the best sign that a ${careerName} is ready for a junior role?`,
    [option('a', 'They can explain and improve their own project work'), option('b', 'They know every advanced term'), option('c', 'They never ask questions'), option('d', 'They only follow tutorials exactly')],
    'a',
    'Junior readiness is shown by practical work, clear explanation, learning ability, and openness to feedback.'
  ),
  question(
    `What should a ${careerName} include in a concise status update?`,
    [option('a', 'Progress, blockers, next step, and any decision needed'), option('b', 'Only a long list of unrelated details'), option('c', 'Nothing until the work is perfect'), option('d', 'Only screenshots without context')],
    'a',
    'A useful status update helps others understand where the work stands and what is needed next.'
  ),
  question(
    `Which mindset is most useful for long-term growth as a ${careerName}?`,
    [option('a', 'Learn, build, test, reflect, and improve repeatedly'), option('b', 'Avoid hard tasks forever'), option('c', 'Only chase tool names'), option('d', 'Stop learning after one project')],
    'a',
    'Consistent cycles of learning and improvement build durable professional skill.'
  )
];

const mediumQuestionBank = (careerName) => [
  question(`A ${careerName} is asked to deliver faster but quality is dropping. What is the best response?`, [option('a', 'Remove all review steps'), option('b', 'Identify bottlenecks, protect critical checks, and agree on scope tradeoffs'), option('c', 'Work longer without changing the process'), option('d', 'Stop documenting decisions')], 'b', 'The professional response balances speed with risk by finding bottlenecks and negotiating scope or quality gates explicitly.'),
  question(`How should a ${careerName} prioritize several urgent tasks?`, [option('a', 'Do the easiest one first every time'), option('b', 'Rank by user impact, deadline, dependency, and risk'), option('c', 'Pick randomly'), option('d', 'Wait until someone complains')], 'b', 'Good prioritization weighs impact, urgency, dependencies, and risk instead of relying on noise or convenience.'),
  question(`A stakeholder requests a change that conflicts with the original goal. What should a ${careerName} do?`, [option('a', 'Accept it without discussion'), option('b', 'Explain the conflict, offer options, and confirm the decision'), option('c', 'Reject it without context'), option('d', 'Hide the change in the final work')], 'b', 'Tradeoff communication keeps the work aligned and gives stakeholders a clear choice.'),
  question(`What is the strongest way to validate a ${careerName} solution before calling it complete?`, [option('a', 'Check only that it looks finished'), option('b', 'Test against requirements, edge cases, and expected user behavior'), option('c', 'Ask one friend if they like it'), option('d', 'Assume no issues if there are no errors')], 'b', 'Validation should compare the solution with requirements and realistic usage, including important edge cases.'),
  question(`When should a ${careerName} create a small proof of concept?`, [option('a', 'When a risky assumption needs quick validation'), option('b', 'After every task is already complete'), option('c', 'Only when avoiding documentation'), option('d', 'Never, because planning is enough')], 'a', 'A proof of concept is useful when uncertainty is high and a small test can reduce risk.'),
  question(`What makes a ${careerName} project explanation recruiter-ready?`, [option('a', 'A list of tools only'), option('b', 'Problem, role, actions, tradeoffs, result, and evidence'), option('c', 'A very long personal story'), option('d', 'No mention of outcomes')], 'b', 'Recruiters and interviewers need to understand what was done, why it mattered, and what evidence supports the claim.'),
  question(`A ${careerName} notices repeated defects from the same source. What is the best next step?`, [option('a', 'Fix each defect manually forever'), option('b', 'Find the root cause and add a prevention step such as a checklist, test, or process change'), option('c', 'Ignore small defects'), option('d', 'Replace unrelated parts of the project')], 'b', 'Root-cause fixes reduce repeated work and improve quality over time.'),
  question(`Why is peer review valuable for a ${careerName}?`, [option('a', 'It catches issues, spreads knowledge, and improves decisions'), option('b', 'It exists only to slow work down'), option('c', 'It replaces individual responsibility'), option('d', 'It should only check spelling')], 'a', 'Review improves quality and helps teams share context.'),
  question(`How should a ${careerName} handle a tool they do not know during a project?`, [option('a', 'Pretend to know it'), option('b', 'Research official basics, test a small example, and communicate learning time'), option('c', 'Choose it because it is popular'), option('d', 'Avoid the task completely')], 'b', 'Responsible learning is transparent, scoped, and tested before being relied on.'),
  question(`What is the best way to compare two possible solutions?`, [option('a', 'Choose the one with the longest name'), option('b', 'Compare maintainability, cost, risk, user impact, and delivery time'), option('c', 'Always choose the newest'), option('d', 'Avoid writing down the decision')], 'b', 'A mature comparison includes technical and practical tradeoffs.'),
  question(`A ${careerName} is blocked by missing information. What should they send?`, [option('a', 'A clear question with context, what was tried, and the decision needed'), option('b', 'A message saying only "blocked"'), option('c', 'Nothing until the deadline'), option('d', 'A request to cancel the project')], 'a', 'A clear unblock request reduces back-and-forth and helps others answer quickly.'),
  question(`Why should acceptance criteria be agreed before delivery?`, [option('a', 'They define what done means and reduce surprise rework'), option('b', 'They are only useful after launch'), option('c', 'They replace user feedback entirely'), option('d', 'They should be kept secret')], 'a', 'Acceptance criteria align expectations before work is judged complete.'),
  question(`What is a good sign that a ${careerName} solution is maintainable?`, [option('a', 'Future changes can be made without understanding hidden assumptions'), option('b', 'It is organized, documented where needed, and has clear boundaries'), option('c', 'It has no names or structure'), option('d', 'It only works on one machine')], 'b', 'Maintainability depends on clarity, boundaries, documentation, and predictable behavior.'),
  question(`How should a ${careerName} respond to conflicting feedback?`, [option('a', 'Apply all feedback blindly'), option('b', 'Identify the underlying goals, clarify priority, and choose the best tradeoff'), option('c', 'Ignore everyone'), option('d', 'Change unrelated parts')], 'b', 'Conflicting feedback should be resolved by clarifying goals and priorities.'),
  question(`Which metric is most meaningful for a ${careerName} project?`, [option('a', 'A metric tied to the project goal and user outcome'), option('b', 'A random number that looks impressive'), option('c', 'Only the number of files created'), option('d', 'Only hours spent')], 'a', 'Useful metrics connect directly to the intended outcome.'),
  question(`Why should a ${careerName} separate assumptions from confirmed facts?`, [option('a', 'To make risk visible and decide what needs validation'), option('b', 'To make notes longer'), option('c', 'To avoid decision-making'), option('d', 'To hide uncertainty')], 'a', 'Separating assumptions from facts helps teams validate uncertainty before it causes problems.'),
  question(`A delivered solution works but is hard to explain. What should a ${careerName} improve?`, [option('a', 'The clarity of structure, naming, documentation, and decision notes'), option('b', 'Only the color scheme'), option('c', 'Nothing, explanation does not matter'), option('d', 'Make it more complex')], 'a', 'Clear structure and explanation make work easier to review, maintain, and discuss in interviews.'),
  question(`What is the purpose of a retrospective for a ${careerName}?`, [option('a', 'To blame one person'), option('b', 'To identify what worked, what failed, and what process to improve next'), option('c', 'To rewrite the entire project'), option('d', 'To avoid future planning')], 'b', 'A retrospective turns experience into specific improvement actions.'),
  question(`How should a ${careerName} decide whether to automate a repeated task?`, [option('a', 'Automate everything immediately'), option('b', 'Compare frequency, time saved, error reduction, and maintenance cost'), option('c', 'Never automate small tasks'), option('d', 'Automate only if it uses a trendy tool')], 'b', 'Automation is worthwhile when benefits outweigh creation and maintenance cost.'),
  question(`What makes a medium-level ${careerName} different from a beginner?`, [option('a', 'They never need help'), option('b', 'They can handle ambiguity, explain tradeoffs, and improve quality independently'), option('c', 'They only work on bigger screens'), option('d', 'They stop asking questions')], 'b', 'Mid-level growth shows in judgment, independence, communication, and quality ownership.')
];

const hardQuestionBank = (careerName) => [
  question(`A ${careerName} must choose between a fast short-term fix and a slower durable fix. What is the best decision process?`, [option('a', 'Always choose the fast fix'), option('b', 'Assess user impact, failure risk, deadline pressure, reversibility, and long-term maintenance cost'), option('c', 'Always choose the slowest fix'), option('d', 'Avoid documenting the decision')], 'b', 'Senior-quality decisions consider context, risk, reversibility, and maintenance cost instead of applying one rule everywhere.'),
  question(`How should a ${careerName} design work when requirements are likely to change?`, [option('a', 'Build rigidly around the first request'), option('b', 'Keep boundaries clear, avoid premature complexity, and isolate likely change areas'), option('c', 'Add every possible feature'), option('d', 'Avoid testing because changes are coming')], 'b', 'Good design handles change by keeping the solution understandable and isolating volatile areas.'),
  question(`A production-impacting issue appears after release. What should a ${careerName} do first?`, [option('a', 'Guess and make random changes'), option('b', 'Triage severity, stabilize users, gather evidence, and communicate status'), option('c', 'Delete recent work immediately'), option('d', 'Wait for more complaints')], 'b', 'Incident response starts with impact assessment, stabilization, evidence, and communication.'),
  question(`What is the strongest way to justify a technical tradeoff to leadership?`, [option('a', 'Use technical jargon only'), option('b', 'Connect options to business impact, risk, cost, timeline, and user outcome'), option('c', 'Say the team prefers it'), option('d', 'Avoid mentioning downsides')], 'b', 'Leadership decisions need impact, risk, cost, and timeline in understandable terms.'),
  question(`A ${careerName} inherits a messy system. What is the safest improvement strategy?`, [option('a', 'Rewrite everything immediately'), option('b', 'Map risks, add safety checks, improve the most painful areas incrementally'), option('c', 'Never touch it'), option('d', 'Remove documentation to simplify it')], 'b', 'Incremental improvement with safety checks reduces risk while steadily improving maintainability.'),
  question(`How should a ${careerName} evaluate whether a solution scales?`, [option('a', 'Assume it scales if it works once'), option('b', 'Test realistic volume, identify bottlenecks, and understand resource limits'), option('c', 'Only check the UI'), option('d', 'Use a bigger server without analysis')], 'b', 'Scalability requires realistic testing and knowledge of bottlenecks and constraints.'),
  question(`What is a good approach to reducing hidden dependencies?`, [option('a', 'Make data flow, ownership, and interfaces explicit'), option('b', 'Share everything globally'), option('c', 'Avoid naming responsibilities'), option('d', 'Rely on memory')], 'a', 'Explicit ownership and interfaces make systems easier to reason about and change.'),
  question(`A team disagrees on architecture. What should a ${careerName} facilitate?`, [option('a', 'A decision based on goals, constraints, evidence, and documented tradeoffs'), option('b', 'A vote without context'), option('c', 'The loudest opinion wins'), option('d', 'No decision until perfect certainty')], 'a', 'Architecture decisions should be evidence-based and tied to goals and constraints.'),
  question(`What is the risk of over-engineering for a ${careerName}?`, [option('a', 'It can add complexity, slow delivery, and make future changes harder'), option('b', 'It always improves quality'), option('c', 'It removes all maintenance'), option('d', 'It only affects documentation')], 'a', 'Over-engineering creates unnecessary complexity that can reduce speed and maintainability.'),
  question(`How should a ${careerName} handle sensitive or high-risk data?`, [option('a', 'Collect as much as possible'), option('b', 'Minimize collection, protect access, document purpose, and follow policy or legal requirements'), option('c', 'Store it in plain text for convenience'), option('d', 'Share it in status updates')], 'b', 'Responsible data handling minimizes risk and follows security, privacy, and compliance expectations.'),
  question(`What is the best way to make expert knowledge reusable across a team?`, [option('a', 'Keep it informal and undocumented'), option('b', 'Turn repeated decisions into guides, checklists, examples, or templates'), option('c', 'Require everyone to ask the same person'), option('d', 'Hide context in private notes')], 'b', 'Reusable knowledge reduces dependency on individuals and improves consistency.'),
  question(`How should a ${careerName} measure whether an improvement actually worked?`, [option('a', 'Define a baseline, change one meaningful thing, and compare results'), option('b', 'Rely only on opinion'), option('c', 'Measure unrelated numbers'), option('d', 'Avoid measuring negative outcomes')], 'a', 'A baseline and relevant measurement help distinguish real improvement from guesswork.'),
  question(`A solution has passed tests but users are still confused. What should a ${careerName} investigate?`, [option('a', 'User workflow, terminology, expectations, and feedback signals'), option('b', 'Only code formatting'), option('c', 'Nothing, tests passed'), option('d', 'Whether users are wrong')], 'a', 'Functional correctness is not enough if the workflow or communication does not match user expectations.'),
  question(`Which approach best manages technical debt?`, [option('a', 'Track debt, explain impact, prioritize high-risk items, and pay it down during related work'), option('b', 'Ignore it until a rewrite'), option('c', 'Call all unfinished work technical debt'), option('d', 'Stop feature delivery completely')], 'a', 'Technical debt needs visibility, impact assessment, and planned reduction.'),
  question(`How should a ${careerName} respond when a metric improves but user complaints increase?`, [option('a', 'Trust only the metric'), option('b', 'Investigate whether the metric is incomplete or creating unintended behavior'), option('c', 'Ignore complaints'), option('d', 'Remove the metric')], 'b', 'Metrics can be incomplete or incentivize the wrong behavior, so qualitative feedback matters too.'),
  question(`What does strong ownership look like for a senior ${careerName}?`, [option('a', 'Doing every task alone'), option('b', 'Clarifying outcomes, aligning people, managing risks, and improving the system around the work'), option('c', 'Avoiding delegation'), option('d', 'Only reviewing finished work')], 'b', 'Senior ownership includes outcomes, collaboration, risk management, and process improvement.'),
  question(`When is it appropriate to challenge a requirement?`, [option('a', 'When evidence suggests it harms the goal, user, timeline, security, or maintainability'), option('b', 'Whenever it is inconvenient'), option('c', 'Never'), option('d', 'Only after delivery')], 'a', 'Requirements should be challenged respectfully when they conflict with important goals or constraints.'),
  question(`How should a ${careerName} plan a high-risk migration?`, [option('a', 'Move everything at once without rollback'), option('b', 'Use stages, validation, backups, rollback plans, and clear owner communication'), option('c', 'Avoid testing until after the migration'), option('d', 'Keep users uninformed')], 'b', 'High-risk migrations need staged execution, validation, rollback, and communication.'),
  question(`What is the best way to mentor a junior ${careerName}?`, [option('a', 'Give answers without context'), option('b', 'Explain reasoning, provide examples, review work constructively, and gradually increase ownership'), option('c', 'Avoid feedback'), option('d', 'Only point out mistakes')], 'b', 'Good mentoring builds judgment and independence, not just task completion.'),
  question(`What distinguishes a hard-level ${careerName} question from an easy one?`, [option('a', 'It has longer wording only'), option('b', 'It requires tradeoff analysis, risk judgment, and context-aware decision-making'), option('c', 'It has no correct answer'), option('d', 'It avoids real scenarios')], 'b', 'Advanced questions test judgment under constraints, not just definitions.')
];

// Base generator to ensure every career has 20 real questions per difficulty.
const generateQuestionsForCareer = (careerSlug, careerName) => {
  const banks = {
    easy: easyQuestionBank(careerName),
    medium: mediumQuestionBank(careerName),
    hard: hardQuestionBank(careerName)
  };

  return Object.entries(banks).flatMap(([difficulty, bank]) =>
    bank.map((item, index) => ({
      id: `${careerSlug}-${difficulty}-${index + 1}`,
      careerSlug,
      difficulty,
      ...item
    }))
  );
};

// Specific questions for Frontend Developer
const frontendQuestions = [
  // Simple (10)
  { id: 'fe-s-1', careerSlug: 'frontend-developer', difficulty: 'simple', questionText: 'What does HTML stand for?', options: [{ id: 'a', text: 'Hyper Text Preprocessor' }, { id: 'b', text: 'Hyper Text Markup Language' }, { id: 'c', text: 'Hyper Text Multiple Language' }, { id: 'd', text: 'Hyper Tool Multi Language' }], correctAnswer: 'b', explanation: 'HTML stands for Hyper Text Markup Language. It is the standard markup language for creating Web pages.' },
  { id: 'fe-s-2', careerSlug: 'frontend-developer', difficulty: 'simple', questionText: 'Which property is used to change the background color in CSS?', options: [{ id: 'a', text: 'bgcolor' }, { id: 'b', text: 'color' }, { id: 'c', text: 'background-color' }, { id: 'd', text: 'bg-color' }], correctAnswer: 'c', explanation: 'The background-color property is used in CSS to specify the background color of an element.' },
  { id: 'fe-s-3', careerSlug: 'frontend-developer', difficulty: 'simple', questionText: 'Inside which HTML element do we put the JavaScript?', options: [{ id: 'a', text: '<script>' }, { id: 'b', text: '<js>' }, { id: 'c', text: '<javascript>' }, { id: 'd', text: '<scripting>' }], correctAnswer: 'a', explanation: 'The <script> tag is used to embed a client-side script (JavaScript).' },
  { id: 'fe-s-4', careerSlug: 'frontend-developer', difficulty: 'simple', questionText: 'How do you write "Hello World" in an alert box?', options: [{ id: 'a', text: 'msg("Hello World");' }, { id: 'b', text: 'alert("Hello World");' }, { id: 'c', text: 'msgBox("Hello World");' }, { id: 'd', text: 'console.log("Hello World");' }], correctAnswer: 'b', explanation: 'The alert() method displays an alert box with a specified message and an OK button.' },
  { id: 'fe-s-5', careerSlug: 'frontend-developer', difficulty: 'simple', questionText: 'Which CSS property controls the text size?', options: [{ id: 'a', text: 'font-size' }, { id: 'b', text: 'text-style' }, { id: 'c', text: 'text-size' }, { id: 'd', text: 'font-style' }], correctAnswer: 'a', explanation: 'The font-size property sets the size of the font.' },
  { id: 'fe-s-6', careerSlug: 'frontend-developer', difficulty: 'simple', questionText: 'How do you create a function in JavaScript?', options: [{ id: 'a', text: 'function:myFunction()' }, { id: 'b', text: 'function myFunction()' }, { id: 'c', text: 'function = myFunction()' }, { id: 'd', text: 'create myFunction()' }], correctAnswer: 'b', explanation: 'A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().' },
  { id: 'fe-s-7', careerSlug: 'frontend-developer', difficulty: 'simple', questionText: 'What is the correct HTML for adding a background color?', options: [{ id: 'a', text: '<body bg="yellow">' }, { id: 'b', text: '<background>yellow</background>' }, { id: 'c', text: '<body style="background-color:yellow;">' }, { id: 'd', text: '<body color="yellow">' }], correctAnswer: 'c', explanation: 'Inline styles are applied using the style attribute, e.g., style="background-color:yellow;".' },
  { id: 'fe-s-8', careerSlug: 'frontend-developer', difficulty: 'simple', questionText: 'Choose the correct HTML element to define important text', options: [{ id: 'a', text: '<important>' }, { id: 'b', text: '<strong>' }, { id: 'c', text: '<b>' }, { id: 'd', text: '<i>' }], correctAnswer: 'b', explanation: 'The <strong> tag is used to define text with strong importance.' },
  { id: 'fe-s-9', careerSlug: 'frontend-developer', difficulty: 'simple', questionText: 'How do you add a comment in CSS?', options: [{ id: 'a', text: '/* this is a comment */' }, { id: 'b', text: '// this is a comment' }, { id: 'c', text: '<!-- this is a comment -->' }, { id: 'd', text: "' this is a comment" }], correctAnswer: 'a', explanation: 'CSS comments are placed inside the /* and */ characters.' },
  { id: 'fe-s-10', careerSlug: 'frontend-developer', difficulty: 'simple', questionText: 'Which event occurs when the user clicks on an HTML element?', options: [{ id: 'a', text: 'onmouseover' }, { id: 'b', text: 'onclick' }, { id: 'c', text: 'onmouseclick' }, { id: 'd', text: 'onchange' }], correctAnswer: 'b', explanation: 'The onclick attribute fires on a mouse click on the element.' },
  
  // Medium (10)
  { id: 'fe-m-1', careerSlug: 'frontend-developer', difficulty: 'medium', questionText: 'What is a Closure in JavaScript?', options: [{ id: 'a', text: 'A function having access to the parent scope even after the parent function has closed.' }, { id: 'b', text: 'A built-in method to close browser tabs.' }, { id: 'c', text: 'A strict mode enforcement tool.' }, { id: 'd', text: 'A way to block variable scope.' }], correctAnswer: 'a', explanation: 'A closure gives you access to an outer function’s scope from an inner function.' },
  { id: 'fe-m-2', careerSlug: 'frontend-developer', difficulty: 'medium', questionText: 'What does CSS flex-wrap property do?', options: [{ id: 'a', text: 'Centers the items.' }, { id: 'b', text: 'Forces flex items into a single line.' }, { id: 'c', text: 'Specifies whether flex items are forced onto one line or can wrap onto multiple lines.' }, { id: 'd', text: 'Reverses the flex direction.' }], correctAnswer: 'c', explanation: 'The flex-wrap property specifies whether the flexible items should wrap or not.' },
  { id: 'fe-m-3', careerSlug: 'frontend-developer', difficulty: 'medium', questionText: 'Explain the concept of Semantic HTML.', options: [{ id: 'a', text: 'Using <div> for all elements.' }, { id: 'b', text: 'Writing HTML tags that describe their meaning to both the browser and the developer.' }, { id: 'c', text: 'A deprecated HTML4 standard.' }, { id: 'd', text: 'Using inline CSS styles.' }], correctAnswer: 'b', explanation: 'Semantic HTML introduces meaning to the web page rather than just presentation (e.g., <header>, <article>).' },
  { id: 'fe-m-4', careerSlug: 'frontend-developer', difficulty: 'medium', questionText: 'What is the Virtual DOM in React?', options: [{ id: 'a', text: 'A plugin for 3D graphics.' }, { id: 'b', text: 'A lightweight JavaScript object representation of the real DOM.' }, { id: 'c', text: 'A new HTML standard element.' }, { id: 'd', text: 'A direct manipulation of the browser DOM.' }], correctAnswer: 'b', explanation: 'React uses a Virtual DOM to optimize DOM manipulation by diffing changes before updating the real DOM.' },
  { id: 'fe-m-5', careerSlug: 'frontend-developer', difficulty: 'medium', questionText: 'Which method creates a new array populated with the results of calling a provided function on every element?', options: [{ id: 'a', text: 'forEach()' }, { id: 'b', text: 'filter()' }, { id: 'c', text: 'map()' }, { id: 'd', text: 'reduce()' }], correctAnswer: 'c', explanation: 'The map() method creates a new array with the results of calling a provided function on every element in the calling array.' },
  { id: 'fe-m-6', careerSlug: 'frontend-developer', difficulty: 'medium', questionText: 'How do you center a block element horizontally using CSS?', options: [{ id: 'a', text: 'margin: 0 auto;' }, { id: 'b', text: 'text-align: center;' }, { id: 'c', text: 'padding: auto;' }, { id: 'd', text: 'align: center;' }], correctAnswer: 'a', explanation: 'Setting the left and right margins to auto horizontally centers a block-level element.' },
  { id: 'fe-m-7', careerSlug: 'frontend-developer', difficulty: 'medium', questionText: 'What is the purpose of the `useEffect` hook in React?', options: [{ id: 'a', text: 'To update the state directly.' }, { id: 'b', text: 'To perform side effects in functional components.' }, { id: 'c', text: 'To render the UI.' }, { id: 'd', text: 'To bind methods.' }], correctAnswer: 'b', explanation: 'useEffect lets you perform side effects (fetching data, subscriptions, DOM manipulation) in function components.' },
  { id: 'fe-m-8', careerSlug: 'frontend-developer', difficulty: 'medium', questionText: 'Explain event delegation in JavaScript.', options: [{ id: 'a', text: 'Attaching an event listener to a parent element to manage events for its children.' }, { id: 'b', text: 'Delegating events to a Web Worker.' }, { id: 'c', text: 'Passing events from the backend to the frontend.' }, { id: 'd', text: 'Using setTimeout to delay events.' }], correctAnswer: 'a', explanation: 'Event delegation utilizes event bubbling to handle events at a higher level in the DOM rather than on individual children.' },
  { id: 'fe-m-9', careerSlug: 'frontend-developer', difficulty: 'medium', questionText: 'What does the `z-index` property do in CSS?', options: [{ id: 'a', text: 'Sets the zoom level.' }, { id: 'b', text: 'Sets the z-order (stack level) of a positioned element.' }, { id: 'c', text: 'Creates a 3D transformation.' }, { id: 'd', text: 'Aligns text vertically.' }], correctAnswer: 'b', explanation: 'z-index specifies the stack order of an element. Elements with a higher stack order are always in front of elements with a lower stack order.' },
  { id: 'fe-m-10', careerSlug: 'frontend-developer', difficulty: 'medium', questionText: 'What is the difference between `let` and `var`?', options: [{ id: 'a', text: '`var` is block-scoped, `let` is function-scoped.' }, { id: 'b', text: '`let` is block-scoped, `var` is function-scoped.' }, { id: 'c', text: 'They are exactly the same.' }, { id: 'd', text: '`let` cannot be reassigned.' }], correctAnswer: 'b', explanation: 'Variables declared with `let` are limited to the block in which they are declared, whereas `var` is scoped to the entire function.' },
  
  // Hard (10)
  { id: 'fe-h-1', careerSlug: 'frontend-developer', difficulty: 'hard', questionText: 'Explain the critical rendering path.', options: [{ id: 'a', text: 'The steps the browser goes through to convert HTML, CSS, and JS into pixels on the screen.' }, { id: 'b', text: 'The process of minifying JS files.' }, { id: 'c', text: 'The routing mechanism in a SPA.' }, { id: 'd', text: 'The sequence of API calls.' }], correctAnswer: 'a', explanation: 'The critical rendering path involves building the DOM and CSSOM, combining them into a render tree, computing layout, and painting the pixels.' },
  { id: 'fe-h-2', careerSlug: 'frontend-developer', difficulty: 'hard', questionText: 'What is the purpose of the `requestAnimationFrame` method?', options: [{ id: 'a', text: 'To make an AJAX request.' }, { id: 'b', text: 'To tell the browser you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint.' }, { id: 'c', text: 'To fetch CSS animations.' }, { id: 'd', text: 'To delay code execution.' }], correctAnswer: 'b', explanation: 'requestAnimationFrame synchronizes your animation updates with the browser’s refresh rate, leading to smoother animations.' },
  { id: 'fe-h-3', careerSlug: 'frontend-developer', difficulty: 'hard', questionText: 'How does React\'s Reconciliation algorithm work?', options: [{ id: 'a', text: 'It replaces the entire DOM on every state change.' }, { id: 'b', text: 'It uses a heuristic O(n) algorithm to compare two trees based on element types and keys to determine the minimal DOM updates.' }, { id: 'c', text: 'It relies completely on the browser\'s layout engine.' }, { id: 'd', text: 'It parses HTML strings to generate UI.' }], correctAnswer: 'b', explanation: 'React implements a heuristic algorithm based on two assumptions: elements of different types produce different trees, and the developer can hint which child elements may be stable across different renders with a key prop.' },
  { id: 'fe-h-4', careerSlug: 'frontend-developer', difficulty: 'hard', questionText: 'What are Web Workers used for?', options: [{ id: 'a', text: 'Running scripts in background threads, separating them from the main UI thread.' }, { id: 'b', text: 'Automating CSS styling.' }, { id: 'c', text: 'Creating UI components.' }, { id: 'd', text: 'Handling HTTP routing.' }], correctAnswer: 'a', explanation: 'Web Workers provide a simple means for web content to run scripts in background threads, keeping the UI responsive during heavy computation.' },
  { id: 'fe-h-5', careerSlug: 'frontend-developer', difficulty: 'hard', questionText: 'Explain the difference between Reflow and Repaint.', options: [{ id: 'a', text: 'They are the same thing.' }, { id: 'b', text: 'Reflow calculates the layout of the page; Repaint draws pixels on the screen.' }, { id: 'c', text: 'Reflow is for CSS, Repaint is for JS.' }, { id: 'd', text: 'Reflow only happens on page load.' }], correctAnswer: 'b', explanation: 'A reflow computes the layout of the page (positions and sizes). A repaint draws the visual elements (colors, shadows) that do not affect layout.' },
  { id: 'fe-h-6', careerSlug: 'frontend-developer', difficulty: 'hard', questionText: 'What is the significance of the `this` keyword in JavaScript arrow functions?', options: [{ id: 'a', text: 'It refers to the calling object.' }, { id: 'b', text: 'It always refers to the global object.' }, { id: 'c', text: 'Arrow functions do not have their own `this`, they inherit it from the enclosing lexical context.' }, { id: 'd', text: 'It binds to the event target.' }], correctAnswer: 'c', explanation: 'Arrow functions do not create their own `this` context, making them particularly useful for callbacks and methods inside classes.' },
  { id: 'fe-h-7', careerSlug: 'frontend-developer', difficulty: 'hard', questionText: 'How do Service Workers facilitate offline functionality?', options: [{ id: 'a', text: 'By acting as a network proxy that intercepts requests and can serve cached responses.' }, { id: 'b', text: 'By automatically downloading the entire internet.' }, { id: 'c', text: 'By running a local Node.js server.' }, { id: 'd', text: 'By compressing HTML files.' }], correctAnswer: 'a', explanation: 'Service workers intercept network requests and can use the Cache API to serve previously cached assets when the user is offline.' },
  { id: 'fe-h-8', careerSlug: 'frontend-developer', difficulty: 'hard', questionText: 'What is Cross-Site Scripting (XSS) and how do you prevent it in React?', options: [{ id: 'a', text: 'A database injection attack. Prevented by hashing passwords.' }, { id: 'b', text: 'A network sniffing attack. Prevented by HTTPS.' }, { id: 'c', text: 'Injecting malicious scripts. React prevents it by automatically escaping string variables in JSX.' }, { id: 'd', text: 'A CSS override attack.' }], correctAnswer: 'c', explanation: 'XSS involves injecting malicious scripts. React automatically sanitizes values embedded in JSX, mitigating most basic XSS attacks.' },
  { id: 'fe-h-9', careerSlug: 'frontend-developer', difficulty: 'hard', questionText: 'What are CSS Custom Properties (Variables) and how do they differ from preprocessor variables (like SASS)?', options: [{ id: 'a', text: 'They are exactly the same.' }, { id: 'b', text: 'Custom properties are resolved in the browser, cascade, and can be updated via JavaScript.' }, { id: 'c', text: 'Custom properties only work in Internet Explorer.' }, { id: 'd', text: 'SASS variables can be modified by JavaScript, CSS variables cannot.' }], correctAnswer: 'b', explanation: 'Unlike SASS variables which compile to static values, CSS Custom Properties are live in the browser, follow the cascade, and can be manipulated dynamically with JS.' },
  { id: 'fe-h-10', careerSlug: 'frontend-developer', difficulty: 'hard', questionText: 'Explain the concept of Server-Side Rendering (SSR) vs Static Site Generation (SSG).', options: [{ id: 'a', text: 'SSR renders HTML on request; SSG renders HTML at build time.' }, { id: 'b', text: 'SSR runs entirely in the browser; SSG runs on a Node server.' }, { id: 'c', text: 'There is no difference.' }, { id: 'd', text: 'SSG requires a database connection on every request.' }], correctAnswer: 'a', explanation: 'SSR computes the HTML for a page on every incoming request, while SSG pre-builds the HTML once during the build process, serving static files thereafter.' }
];

// Generate the full database programmatically
let allQuestions = [...frontendQuestions];

// Populate the rest using the base generator
const formatNameFromSlug = (slug) => slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

CAREERS_LIST.forEach(careerSlug => {
  if (careerSlug !== 'frontend-developer') {
    const careerName = formatNameFromSlug(careerSlug);
    allQuestions = allQuestions.concat(generateQuestionsForCareer(careerSlug, careerName));
  }
});

export const quizDatabase = allQuestions;

export const getQuizQuestions = (careerSlug, difficulty) => {
  const normalizedDifficulty = difficulty === 'simple' ? 'easy' : difficulty;
  const legacyDifficulty = normalizedDifficulty === 'easy' ? 'simple' : normalizedDifficulty;
  const careerName = formatNameFromSlug(careerSlug);
  const existing = quizDatabase
    .filter(q => q.careerSlug === careerSlug && (q.difficulty === normalizedDifficulty || q.difficulty === legacyDifficulty))
    .map(q => ({ ...q, difficulty: normalizedDifficulty }));

  if (existing.length >= 20) return existing.slice(0, 20);

  const generated = generateQuestionsForCareer(careerSlug, careerName)
    .filter(q => q.difficulty === normalizedDifficulty)
    .filter(q => !existing.some(existingQuestion => existingQuestion.id === q.id));

  return [...existing, ...generated].slice(0, 20);
};
