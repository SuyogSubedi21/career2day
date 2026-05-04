/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const articles = [
    {
      slug: "complete-2026-guide-breaking-into-tech",
      title: "The Complete 2026 Guide to Breaking Into Tech",
      category: "Career",
      author: "Career2Day Team",
      excerpt: "A comprehensive roadmap for landing your first tech job in 2026, from skill-building to your first offer.",
      readingTime: 12,
      publishedAt: "2026-01-15 09:00:00",
      tags: ["career", "beginners", "job-search", "2026"],
      content: `<h2>The Tech Opportunity Is Still There</h2><p>Despite headlines about layoffs, the tech industry added over 450,000 new jobs in 2025. The reality: companies are hiring selectively for high-impact roles while trimming middle management. This guide helps you become exactly what they're hiring for.</p><h2>Step 1: Choose Your Entry Point</h2><p>The most accessible entry points in 2026 are: <strong>Frontend Development</strong> (high demand, visual results), <strong>Data Analytics</strong> (SQL + Excel, no CS degree required), <strong>Cloud/DevOps</strong> (certification-driven), and <strong>QA Engineering</strong> (often overlooked, always needed).</p><h2>Step 2: Build a Focused 90-Day Skill Stack</h2><p>Don't try to learn everything. Pick one path and go deep. For frontend: HTML/CSS → JavaScript → React. For data: Excel → SQL → Python. Consistency beats intensity — 2 hours daily beats 14-hour weekend sessions.</p><h2>Step 3: Build a Portfolio That Gets Interviews</h2><p>Three projects beat ten. Each project should solve a real problem, have a live demo, and have clean, documented code on GitHub. Employers scan portfolios in 90 seconds — make it obvious what you built and why it matters.</p><h2>Step 4: The Job Search System</h2><p>Apply to 5-10 positions daily using a spreadsheet tracker. Customize each cover letter's first paragraph. Follow up after 5 business days. Network on LinkedIn — 70% of tech jobs are filled through referrals. Attend local tech meetups and virtual events.</p><h2>Step 5: Ace the Technical Interview</h2><p>Practice 2 LeetCode problems daily (Easy → Medium). Study system design basics after 3 months. Do mock interviews on Pramp or with friends. Remember: interviewers want to see how you think, not just the answer.</p><h2>Your Timeline</h2><p>Month 1-2: Build skills. Month 3: Build portfolio. Month 4-5: Apply and network. Month 6: Land your first offer. This timeline is realistic if you treat the job search like a part-time job.</p>`
    },
    {
      slug: "system-design-interview-ultimate-guide",
      title: "System Design Interviews: The Ultimate 2026 Guide",
      category: "Interview",
      author: "Senior Engineer, Career2Day",
      excerpt: "Master system design interviews with proven frameworks used at FAANG companies.",
      readingTime: 15,
      publishedAt: "2026-01-22 09:00:00",
      tags: ["interviews", "system-design", "backend", "senior"],
      content: `<h2>Why System Design Interviews Matter</h2><p>System design interviews separate senior engineers from junior ones. They test your ability to think at scale, make tradeoffs, and communicate complex ideas clearly. There's no single correct answer — interviewers want to see your thinking process.</p><h2>The RADIO Framework</h2><p><strong>R</strong>equirements: Clarify functional and non-functional requirements. <strong>A</strong>PI design: Define the interface. <strong>D</strong>ata model: Choose your database and schema. <strong>I</strong>nfrastructure: How does data flow? <strong>O</strong>ptimize: Handle bottlenecks and scale.</p><h2>Key Concepts to Master</h2><p><strong>Load Balancing:</strong> Distribute traffic across servers. Know round-robin, least connections, and consistent hashing. <strong>Caching:</strong> Redis for session/hot data, CDN for static assets. Know cache invalidation strategies. <strong>Database Choice:</strong> SQL for ACID compliance and complex queries. NoSQL for scale and flexible schemas. <strong>Message Queues:</strong> Kafka/RabbitMQ for async processing and decoupling services.</p><h2>Common System Design Questions</h2><p>Design Twitter/X, Design YouTube, Design a URL shortener, Design a rate limiter, Design a notification system. For each: start with requirements, estimate scale (DAU, QPS, storage), design the data model, then the API, then the infrastructure.</p><h2>Scale Numbers to Know</h2><p>1M DAU with average 10 requests/day = 116 QPS. 1KB per request × 1M users = 1GB/day storage. A single server handles ~10,000 concurrent connections. A database handles ~10,000 reads/sec and ~2,000 writes/sec without optimization.</p><h2>How to Practice</h2><p>Do one system design problem per week. Draw on paper or whiteboard first. Then discuss with a friend or record yourself explaining. Use resources like System Design Primer on GitHub and ByteByteGo.</p>`
    },
    {
      slug: "negotiate-salary-increase-real-scripts",
      title: "How to Negotiate Your Tech Salary in 2026 (With Real Scripts)",
      category: "Career",
      author: "Career2Day Team",
      excerpt: "Practical scripts and strategies to negotiate a higher salary at offer time or during your annual review.",
      readingTime: 10,
      publishedAt: "2026-02-05 09:00:00",
      tags: ["salary", "negotiation", "career-growth", "compensation"],
      content: `<h2>The Cost of Not Negotiating</h2><p>If you accept a $10,000 lower starting salary and get 5% raises annually, you'll earn $127,000 less over 10 years. Negotiation isn't rude — it's expected. 85% of hiring managers have room to increase offers. Only 37% of candidates negotiate.</p><h2>Before You Negotiate: Do Your Research</h2><p>Use Levels.fyi for TC (total compensation) data. Use LinkedIn Salary and Glassdoor for base salary. Know the range for your role, level, and location. Have 3 data points ready to cite in the conversation.</p><h2>The Counter-Offer Script</h2><p>"Thank you so much for the offer — I'm very excited about this opportunity. Based on my research of market rates for this role and my [X years] of experience in [specific skill], I was expecting something closer to [target number]. Is there flexibility to get to [number]?" Then be silent and wait.</p><h2>When They Say No</h2><p>Ask about other levers: signing bonus, equity refresh, remote work flexibility, accelerated review timeline (6 months instead of 12), or additional PTO. "I understand base is fixed. Would it be possible to increase the signing bonus to help offset the difference?"</p><h2>For Annual Reviews</h2><p>Document your impact throughout the year. Quantify everything: "Reduced API response time by 40%", "Led migration affecting 500K users", "Mentored 3 junior engineers". Present this 2 weeks before your review. Ask directly: "Based on this impact, I'd like to discuss a [X%] increase."</p><h2>Mindset Shift</h2><p>You're not asking for a favor. You're negotiating a business transaction. The company expects it. The worst they can say is no. The best case: thousands of dollars more per year for a 2-minute conversation.</p>`
    },
    {
      slug: "ai-tools-every-job-seeker-must-use-2026",
      title: "AI Tools Every Job Seeker Must Use in 2026",
      category: "Career",
      author: "Career2Day Team",
      excerpt: "The AI tools that are genuinely transforming the job search — and how to use them effectively.",
      readingTime: 8,
      publishedAt: "2026-02-19 09:00:00",
      tags: ["AI", "job-search", "tools", "productivity"],
      content: `<h2>The AI-Powered Job Seeker</h2><p>In 2026, job seekers using AI tools get 3x more interviews than those who don't. Not because AI does the work for them, but because AI helps them work smarter. Here are the tools making the biggest difference.</p><h2>Resume Optimization</h2><p><strong>Resume.io + ChatGPT:</strong> Paste the job description and your resume into ChatGPT and ask it to identify keyword gaps and suggest improvements. ATS systems filter 75% of resumes before a human sees them. AI helps you pass that filter. Always review and personalize AI suggestions — hiring managers can spot generic AI text.</p><h2>Interview Preparation</h2><p><strong>ChatGPT for mock interviews:</strong> "Act as a senior engineering manager at a Series B startup. Ask me behavioral questions for a Senior Frontend Engineer role and give critical feedback on my answers." This gives you unlimited free mock interview practice. Use Claude for more nuanced feedback on technical explanations.</p><h2>Company Research</h2><p><strong>Perplexity AI:</strong> Before any interview, ask Perplexity for a comprehensive briefing on the company: recent news, funding, competitors, key challenges. This takes 2 minutes and gives you content for smart questions that impress interviewers.</p><h2>Cover Letter Writing</h2><p>Don't use AI to write your entire cover letter. Use it to write a first draft, then heavily personalize. The goal is to sound like you, not like a robot. Prompt: "Write a cover letter for [role] at [company] that emphasizes my experience in [X] and my passion for [Y]. Keep it under 250 words."</p><h2>Networking on LinkedIn</h2><p>Use AI to draft personalized connection messages and follow-up notes. Keep them short and specific. "I saw your post about [topic] and wanted to connect — I'm exploring opportunities in [field] and would love to hear your perspective." Always add a genuine personal touch.</p>`
    },
    {
      slug: "writing-resume-gets-interviews-2026-guide",
      title: "Writing a Resume That Gets Interviews in 2026",
      category: "Resume",
      author: "Career2Day Team",
      excerpt: "A practical guide to writing a tech resume that passes ATS filters and impresses hiring managers.",
      readingTime: 9,
      publishedAt: "2026-04-16 09:00:00",
      tags: ["resume", "job-search", "ATS", "career"],
      content: `<h2>The Brutal Truth About Resumes in 2026</h2><p>75% of resumes are rejected by ATS (Applicant Tracking Systems) before a human ever sees them. Of those that pass, hiring managers spend an average of 6 seconds on initial review. Your resume has two jobs: pass the machine, then pass the human.</p><h2>Format: Simple Beats Creative</h2><p>Use a single-column format. Standard fonts (Calibri, Arial, Georgia). No tables, headers/footers, or text boxes — ATS parsers struggle with these. No photos. No graphics. Margins between 0.5" and 1". File format: PDF unless they ask for Word.</p><h2>The Skills Section</h2><p>Put it near the top. Mirror the language in the job description exactly. If they say "React.js", don't write "ReactJS". If they list "Agile methodologies", include that phrase. ATS keyword matching is literal. Don't lie, but do use their language.</p><h2>Work Experience: The XYZ Formula</h2><p>Every bullet point should follow: "Accomplished [X] as measured by [Y] by doing [Z]." Example: "Reduced page load time by 40% (from 3.2s to 1.9s) by implementing lazy loading and image optimization, improving conversion rate by 12%." Quantify everything possible.</p><h2>Projects Section for New Grads</h2><p>List 2-3 projects with: name, tech stack, one-line description, measurable result if possible, and a live link or GitHub link. Don't just list what you built — explain the impact. "Built a budgeting app used by 200+ students at my university" beats "Built a budgeting web app".</p><h2>Tailoring for Each Application</h2><p>You need two versions: a master resume (comprehensive) and a tailored version (1 page, job-specific). Spend 15 minutes per application adjusting keywords and reordering bullets to match the job description. This alone can triple your callback rate.</p>`
    }
  ];

  const collection = app.findCollectionByNameOrId("blogArticles");
  let added = 0;
  for (const article of articles) {
    try {
      const existing = app.findRecordsByFilter("blogArticles", `slug = "${article.slug}"`, "", 1, 0);
      if (existing.length > 0) {
        app.delete(existing[0]);
      }
      const record = new Record(collection);
      record.set("title", article.title);
      record.set("slug", article.slug);
      record.set("category", article.category);
      record.set("author", article.author);
      record.set("excerpt", article.excerpt);
      record.set("content", article.content);
      record.set("readingTime", article.readingTime);
      record.set("publishedAt", article.publishedAt);
      record.set("tags", article.tags);
      app.save(record);
      added++;
      console.log(`[blog seed] Added: ${article.slug}`);
    } catch (e) {
      console.log(`[blog seed] Error adding ${article.slug}: ${e.message}`);
    }
  }
  console.log(`[blog seed] Done: ${added} articles seeded.`);
});
