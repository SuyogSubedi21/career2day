
import pb from '@/lib/pocketbaseClient.js';

const articles = [
  {
    title: 'Top 10 Career Development Tips for 2026',
    slug: 'top-10-career-development-tips-2026',
    author: 'Career2Day Team',
    category: 'career',
    excerpt: 'Discover the most effective strategies to accelerate your career growth and stay relevant in the rapidly evolving 2026 job market.',
    content: `The professional landscape is shifting faster than ever. To stay ahead in 2026, you need more than just hard skills; you need adaptability, strategic networking, and a proactive approach to your career development.

1. Embrace Continuous Learning
The half-life of learned skills is shrinking. Dedicate at least two hours a week to learning a new tool, framework, or methodology relevant to your field.

2. Build a Personal Brand
Your digital footprint is your new resume. Share your insights on LinkedIn, contribute to open-source projects, or start a professional blog.

3. Master AI Collaboration
AI is no longer a novelty; it's a co-worker. Learn how to prompt effectively and integrate AI tools into your daily workflow to 10x your productivity.

4. Cultivate Emotional Intelligence
As automation handles routine tasks, uniquely human traits like empathy, leadership, and complex problem-solving become your most valuable assets.

5. Network Horizontally
Don't just network with seniors. Build strong relationships with your peers. Today's junior developer is tomorrow's CTO.

6. Seek Cross-Functional Experience
Siloed expertise is risky. Understand how your role impacts marketing, sales, and product development to become an indispensable team member.

7. Prioritize Adaptability
Be willing to pivot. The ability to unlearn outdated practices and quickly adopt new paradigms is crucial.

8. Find a Mentor and Be a Mentor
Mentorship accelerates growth. Find someone who has the career you want, and solidify your own knowledge by mentoring someone junior.

9. Negotiate Strategically
Understand your market value. Don't just negotiate salary; consider equity, flexible hours, and learning stipends.

10. Protect Your Well-being
Burnout halts career progression. Set boundaries, take your PTO, and remember that a sustainable pace wins the marathon.`,
    read_time: 4,
    published_date: new Date().toISOString(),
    tags: ['career growth', 'tips', '2026 trends']
  },
  {
    title: 'The Complete Guide to Resume Writing',
    slug: 'complete-guide-to-resume-writing',
    author: 'Sarah Jenkins',
    category: 'cv',
    excerpt: 'Learn how to craft an ATS-friendly resume that highlights your achievements and catches the eye of top recruiters.',
    content: `Your resume is often your first, and sometimes only, chance to make an impression. In an era where Applicant Tracking Systems (ATS) filter out up to 75% of applications before a human ever sees them, knowing how to write a modern resume is non-negotiable.

Understanding the ATS
An ATS parses your resume for keywords, experience, and formatting. To pass the ATS:
- Use standard section headings (Experience, Education, Skills).
- Avoid complex formatting like tables, columns, or obscure fonts.
- Tailor your keywords to match the job description exactly.

The Professional Summary
Ditch the outdated "Objective" statement. Instead, write a 3-4 sentence Professional Summary that highlights your years of experience, top achievements, and unique value proposition.

Experience: Focus on Impact, Not Duties
Don't just list what you did; highlight what you achieved. Use the XYZ formula: "Accomplished [X] as measured by [Y], by doing [Z]."
Instead of: "Responsible for managing social media."
Use: "Grew social media following by 150% over 6 months by implementing a data-driven content strategy."

Skills Section
Keep it relevant. If you're applying for a senior developer role, you don't need to list "Microsoft Word." Group skills logically (e.g., Languages, Frameworks, Tools).

Keep it Concise
Unless you have over 10 years of highly relevant experience, keep your resume to one page. Recruiters spend an average of 7 seconds scanning a resume—make every word count.`,
    read_time: 5,
    published_date: new Date(Date.now() - 86400000 * 2).toISOString(),
    tags: ['resume', 'cv', 'ats', 'job search']
  },
  {
    title: 'Mastering the Job Interview: Proven Strategies',
    slug: 'mastering-job-interview-proven-strategies',
    author: 'David Chen',
    category: 'interview',
    excerpt: 'From behavioral questions to technical assessments, discover the frameworks that will help you ace your next interview.',
    content: `Interviews can be nerve-wracking, but with the right preparation framework, you can transform anxiety into confidence. Here is a comprehensive guide to mastering the modern job interview.

The STAR Method for Behavioral Questions
When asked "Tell me about a time when...", always use the STAR method:
- Situation: Set the scene and provide context.
- Task: Describe your specific responsibility in that situation.
- Action: Explain the exact steps YOU took to address it.
- Result: Share the positive outcome, using quantifiable metrics if possible.

Research the Company Deeply
Don't just read the "About Us" page. Read their recent press releases, understand their business model, and identify their main competitors. Bring this knowledge into the conversation to show genuine interest.

Prepare Your Own Questions
An interview is a two-way street. When they ask, "Do you have any questions for us?", never say no. Ask strategic questions like:
- "What does success look like in this role after 90 days?"
- "How does this team measure its impact on the broader company goals?"
- "Can you describe the team's approach to overcoming recent challenges?"

Technical Assessments
For technical roles, practice is key. Use platforms like LeetCode or HackerRank, but more importantly, practice communicating your thought process out loud. A suboptimal solution explained well is often better than a perfect solution written in silence.

Follow-Up
Send a concise, personalized thank-you email within 24 hours. Reiterate your interest in the role and briefly mention a specific topic you enjoyed discussing during the interview.`,
    read_time: 6,
    published_date: new Date(Date.now() - 86400000 * 5).toISOString(),
    tags: ['interview', 'preparation', 'star method']
  },
  {
    title: 'LinkedIn Profile Optimization: Stand Out to Recruiters',
    slug: 'linkedin-profile-optimization',
    author: 'Career2Day Team',
    category: 'skills',
    excerpt: 'Transform your LinkedIn profile from a static digital resume into a dynamic magnet for recruiters and opportunities.',
    content: `With over 900 million users, LinkedIn is the premier platform for professional networking. However, simply having a profile isn't enough. You need to optimize it to ensure recruiters find you.

The Headline: Your Billboard
Your headline defaults to your current job title, but it should be much more. Use it to highlight your expertise and value. 
Example: "Senior Frontend Engineer | React & TypeScript Specialist | Building Scalable Web Applications"

The About Section: Tell Your Story
Don't just paste your resume summary. Write in the first person. Explain why you do what you do, what you're passionate about, and what kind of opportunities you're looking for. Include a call to action (e.g., "Feel free to connect or message me at...").

Optimize for Search (SEO)
Recruiters use LinkedIn Recruiter to search for specific keywords. Ensure the skills and technologies relevant to your target role are naturally sprinkled throughout your Headline, About section, and Experience descriptions.

Engage with Content
A static profile is a dead profile. Comment on industry news, share articles, and write your own posts. Engagement increases your profile's visibility in the algorithm, making you more likely to appear in recruiter searches.

Recommendations and Endorsements
Social proof matters. Reach out to former colleagues or managers and ask for a specific recommendation highlighting a project you worked on together. Return the favor by writing recommendations for them.`,
    read_time: 4,
    published_date: new Date(Date.now() - 86400000 * 7).toISOString(),
    tags: ['linkedin', 'networking', 'personal branding']
  },
  {
    title: 'Salary Negotiation: How to Get What You Deserve',
    slug: 'salary-negotiation-get-what-you-deserve',
    author: 'Marcus Johnson',
    category: 'career',
    excerpt: 'Stop leaving money on the table. Learn the psychological tactics and data-driven approaches to negotiate your best compensation package.',
    content: `Negotiating your salary is one of the most high-ROI conversations you will ever have. A successful 10-minute negotiation can result in thousands of dollars in additional income per year. Here is how to approach it.

1. Do Your Market Research
Never enter a negotiation without data. Use tools like Glassdoor, Levels.fyi, and industry salary reports to determine the market rate for your role, experience level, and location.

2. Don't Anchor First
Try to avoid giving a specific number first. If pressed for your expectations early in the process, pivot: "I'm more focused on finding the right fit right now. I'm sure if we decide to move forward, we can agree on a competitive number."

3. Negotiate Total Compensation
Salary is just one lever. If the base pay is rigid, negotiate other aspects:
- Sign-on bonuses
- Equity or stock options
- Extra paid time off (PTO)
- Remote work flexibility
- Professional development stipends

4. Use the "Flinch" and Silence
When presented with an offer, pause. Silence makes people uncomfortable and often leads them to negotiate against themselves. A simple "Hmm, that's a bit lower than I was expecting based on my research" followed by silence can be incredibly effective.

5. Get It In Writing
Never resign from your current job based on a verbal offer. Ensure all negotiated terms (base, bonus, equity, start date) are clearly outlined in the official offer letter before you sign.`,
    read_time: 5,
    published_date: new Date(Date.now() - 86400000 * 10).toISOString(),
    tags: ['salary', 'negotiation', 'compensation']
  },
  {
    title: 'Industry Trends Shaping Tech Careers in 2026',
    slug: 'industry-trends-shaping-tech-careers-2026',
    author: 'Elena Rodriguez',
    category: 'tech',
    excerpt: 'Explore the emerging technologies and workplace shifts that are redefining what it means to work in the tech industry.',
    content: `The tech industry is in a state of perpetual motion. As we navigate through 2026, several key trends are fundamentally altering career trajectories and skill requirements.

1. The AI-Augmented Developer
Generative AI hasn't replaced developers; it has elevated them. The most sought-after engineers are those who can effectively use AI coding assistants to write boilerplate, debug faster, and focus on high-level system architecture. "Prompt engineering" is now a standard skill.

2. Cybersecurity as a Baseline
With the proliferation of distributed systems and remote work, cybersecurity is no longer just for security specialists. Every developer, product manager, and IT professional is expected to understand basic security principles and implement "security by design."

3. The Rise of Green Tech and Sustainability
Companies are facing strict environmental regulations. Tech professionals who understand how to optimize cloud infrastructure for lower carbon footprints (GreenOps) are seeing massive demand.

4. Spatial Computing and AR/VR
With major hardware releases from tech giants, spatial computing is moving from niche to mainstream. Developers skilled in 3D modeling, Unity, Unreal Engine, and spatial UX design are finding lucrative opportunities outside of traditional gaming.

5. The Shift to Skills-Based Hiring
Top tech companies are increasingly dropping degree requirements in favor of skills-based assessments. Certifications, robust GitHub portfolios, and proven project experience are outweighing traditional four-year degrees.`,
    read_time: 6,
    published_date: new Date(Date.now() - 86400000 * 12).toISOString(),
    tags: ['trends', 'tech', 'future of work', 'ai']
  },
  {
    title: 'Networking Strategies That Actually Work',
    slug: 'networking-strategies-that-actually-work',
    author: 'Career2Day Team',
    category: 'skills',
    excerpt: 'Move beyond awkward small talk. Learn how to build genuine, mutually beneficial professional relationships.',
    content: `Networking often feels transactional and forced. However, when done correctly, it is simply the process of building genuine relationships with people who share your professional interests.

1. Give Before You Ask
The golden rule of networking is to provide value before requesting a favor. Share an interesting article, offer feedback on a project, or introduce two people who could benefit from knowing each other.

2. The Informational Interview
Instead of asking for a job, ask for advice. Reach out to professionals in roles you aspire to and ask for a 15-minute virtual coffee to discuss their career journey. People love talking about themselves, and this often leads to organic job referrals.

3. Leverage Alumni Networks
Your university or bootcamp alumni network is a warm audience. Reach out on LinkedIn with a message like: "Hi [Name], I saw we both graduated from [School]. I'm currently exploring roles in [Field] and would love to hear about your experience at [Company]."

4. Be Active in Niche Communities
Move beyond LinkedIn. Join specialized Slack groups, Discord channels, or subreddits related to your specific tech stack or industry. Answer questions, participate in discussions, and become a recognized contributor.

5. Follow Up and Stay in Touch
Meeting someone is just the first step. The real networking happens in the follow-up. Send a quick note after meeting, and set reminders to check in every few months with a relevant article or a quick "hope you're doing well."`,
    read_time: 4,
    published_date: new Date(Date.now() - 86400000 * 15).toISOString(),
    tags: ['networking', 'relationships', 'career growth']
  },
  {
    title: 'Work-Life Balance: Maintaining Wellness in Your Career',
    slug: 'work-life-balance-maintaining-wellness',
    author: 'Dr. Amanda Foster',
    category: 'career',
    excerpt: 'Burnout is a career killer. Discover actionable strategies to maintain your mental health while achieving your professional goals.',
    content: `In a hyper-connected world, the line between work and personal life has blurred, leading to an epidemic of professional burnout. Maintaining wellness isn't just about feeling good; it's a strategic necessity for long-term career success.

1. Define Your Boundaries
You teach people how to treat you. If you answer emails at 11 PM, you set the expectation that you are always available. Set clear working hours, communicate them to your team, and stick to them.

2. The Power of the "Digital Sunset"
Implement a digital sunset—a specific time each evening when you turn off all work-related notifications. Disconnecting allows your brain to recover and process the day's information.

3. Prioritize Ruthlessly
You cannot do everything. Use frameworks like the Eisenhower Matrix to distinguish between what is urgent and what is important. Focus your energy on high-impact tasks and learn to delegate or drop the rest.

4. Take Real Vacations
A "working vacation" is an oxymoron. When you take time off, actually take time off. Delete Slack from your phone, set a firm out-of-office reply, and trust your team to handle things in your absence.

5. Recognize the Signs of Burnout
Burnout doesn't happen overnight. Watch for early warning signs: chronic fatigue, cynicism towards your job, and a drop in professional efficacy. If you notice these, it's time to step back and reassess your workload before your body forces you to.`,
    read_time: 5,
    published_date: new Date(Date.now() - 86400000 * 18).toISOString(),
    tags: ['wellness', 'mental health', 'burnout', 'balance']
  },
  {
    title: 'Cover Letter Writing: Make Your Application Stand Out',
    slug: 'cover-letter-writing-stand-out',
    author: 'Career2Day Team',
    category: 'cv',
    excerpt: 'Are cover letters dead? Not if you write them correctly. Learn how to craft a compelling narrative that complements your resume.',
    content: `While some recruiters skip cover letters, hiring managers often read them closely when deciding between top candidates. A great cover letter doesn't just repeat your resume; it tells the story of why you are the perfect fit for this specific role.

1. Hook Them in the First Paragraph
Skip the generic "I am writing to apply for..." Start with a hook. Mention a recent company achievement, a shared connection, or a brief, impactful statement about your passion for their mission.

2. Connect the Dots
Your resume shows what you did; your cover letter explains how it applies to them. Pick 2-3 key requirements from the job description and provide brief, narrative examples of how you've successfully handled similar challenges in the past.

3. Show Culture Fit
Companies hire people, not just skill sets. Use the cover letter to showcase your personality and align your values with the company's core mission. If they value rapid iteration, talk about your experience in agile environments.

4. Address the Elephant in the Room
If you have an employment gap, are changing careers, or are relocating, the cover letter is the place to briefly and positively address it. Control the narrative before they make assumptions.

5. Keep It Brief and Professional
Aim for 3-4 paragraphs, maximum 300 words. End with a strong call to action expressing your enthusiasm for an interview. Proofread meticulously—a typo in a cover letter can be an instant disqualifier.`,
    read_time: 4,
    published_date: new Date(Date.now() - 86400000 * 20).toISOString(),
    tags: ['cover letter', 'application', 'writing']
  },
  {
    title: 'Career Transitions: How to Successfully Change Paths',
    slug: 'career-transitions-successfully-change-paths',
    author: 'Michael Chang',
    category: 'career',
    excerpt: 'Pivoting to a new industry can be daunting. Here is a step-by-step guide to leveraging your transferable skills for a successful career change.',
    content: `The days of picking one career at 22 and sticking with it until retirement are over. Career transitions are common, but they require strategic planning to execute successfully without starting completely from scratch.

1. Identify Transferable Skills
You have more relevant experience than you think. Skills like project management, client communication, data analysis, and leadership are highly transferable. Map your current skills to the requirements of your target role.

2. Bridge the Knowledge Gap
Identify the specific technical skills you lack and bridge the gap efficiently. You don't always need a new degree; targeted bootcamps, certifications, and self-directed portfolio projects are often enough to prove your competence.

3. Rebrand Your Narrative
Update your resume and LinkedIn to reflect where you are going, not just where you have been. Rewrite your professional summary to highlight how your unique background gives you a fresh perspective in your new chosen field.

4. Network in Your Target Industry
You need insiders to vouch for you. Attend industry meetups, join relevant online communities, and conduct informational interviews. A referral is the most powerful tool for a career changer.

5. Be Prepared to Take a Step Back (Temporarily)
You may need to accept a lateral move or a slightly lower title to get your foot in the door of a new industry. View this as an investment; once you prove yourself in the new context, your previous experience will often accelerate your promotion trajectory.`,
    read_time: 5,
    published_date: new Date(Date.now() - 86400000 * 22).toISOString(),
    tags: ['career change', 'pivot', 'transferable skills']
  },
  {
    title: 'The Future of Remote Work and Hybrid Careers',
    slug: 'future-of-remote-work-hybrid-careers',
    author: 'Career2Day Team',
    category: 'tech',
    excerpt: 'As companies finalize their return-to-office policies, discover how to navigate and thrive in the permanent hybrid work landscape.',
    content: `The remote work experiment of the early 2020s has settled into a permanent, albeit complex, hybrid reality. Understanding how to navigate this landscape is crucial for career progression in 2026.

1. The "Proximity Bias" Challenge
In hybrid environments, employees in the office often receive more visibility and impromptu opportunities than remote workers. If you work remotely, you must proactively manage your visibility. Over-communicate your wins, schedule regular video check-ins with leadership, and ensure your contributions are documented.

2. Asynchronous Communication is King
The best remote workers are masters of asynchronous communication. Learn to write clear, comprehensive documentation, record quick Loom videos to explain complex issues, and minimize the need for synchronous meetings.

3. The Rise of the "Digital Nomad" Visa
More countries are offering digital nomad visas, allowing tech workers to combine travel with their careers. However, navigating the tax and legal implications requires careful planning and transparent communication with your employer.

4. Designing Your Home Office for Productivity
Working from the couch is no longer sustainable. Invest in an ergonomic setup, high-quality audio/video equipment for meetings, and establish physical boundaries between your workspace and living space.

5. Evaluating Company Remote Policies
When interviewing, dig deep into a company's remote culture. Ask: "How do you ensure remote employees are considered for promotions?" or "What percentage of the leadership team works remotely?" Their answers will tell you if it's a truly remote-first culture or just remote-tolerant.`,
    read_time: 5,
    published_date: new Date(Date.now() - 86400000 * 25).toISOString(),
    tags: ['remote work', 'hybrid', 'future of work']
  },
  {
    title: 'Professional Development: Investing in Your Skills',
    slug: 'professional-development-investing-in-skills',
    author: 'Lisa Wang',
    category: 'skills',
    excerpt: 'Stop waiting for your employer to train you. Take control of your professional development with these high-impact learning strategies.',
    content: `Relying solely on your employer for professional development is a risky strategy. To maintain a competitive edge, you must treat yourself as a business and actively invest in your own skill set.

1. The T-Shaped Professional
Aim to become a "T-shaped" professional: possess deep expertise in one specific area (the vertical bar) while maintaining a broad understanding of related disciplines (the horizontal bar). This makes you an expert who can collaborate effectively across teams.

2. Create a Personal Learning Budget
Allocate a specific percentage of your income (e.g., 3-5%) to your professional development. Use this for books, courses, conference tickets, or premium subscriptions to industry publications.

3. Learn by Building
Tutorial hell is real. The fastest way to learn a new skill is to build a project with it. If you're learning a new programming language, build a small app. If you're learning data analysis, scrape a dataset and publish your findings.

4. Teach to Learn
The Feynman Technique states that the best way to understand a concept is to explain it simply. Start a blog, give a lunch-and-learn presentation to your team, or mentor a junior colleague. Teaching forces you to identify and fill gaps in your own knowledge.

5. Track Your ROI
Treat your learning like an investment. After completing a course or certification, actively look for ways to apply it in your current role. Document the impact (e.g., "Used new AWS skills to reduce server costs by 15%") and use it as leverage in your next performance review.`,
    read_time: 4,
    published_date: new Date(Date.now() - 86400000 * 28).toISOString(),
    tags: ['learning', 'development', 'upskilling']
  }
];

export const seedBlogArticles = async () => {
  try {
    // Check if articles already exist to prevent duplicates
    const existing = await pb.collection('blog_articles').getList(1, 1, {
      $autoCancel: false
    });

    if (existing.totalItems > 0) {
      console.log('Blog articles already seeded.');
      return;
    }

    console.log('Seeding blog articles...');
    for (const article of articles) {
      await pb.collection('blog_articles').create(article, {
        $autoCancel: false
      });
    }
    console.log('Successfully seeded blog articles.');
  } catch (error) {
    console.error('Error seeding blog articles:', error);
  }
};
