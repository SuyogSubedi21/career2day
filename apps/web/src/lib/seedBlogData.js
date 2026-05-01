
import pb from '@/lib/pocketbaseClient';

export const seedBlogArticlesIfNeeded = async () => {
  try {
    // Check if articles already exist
    const existing = await pb.collection('blog_articles').getList(1, 1, { $autoCancel: false });
    if (existing.totalItems > 0) {
      return; // Already seeded
    }

    const categories = ['interview', 'career', 'cv', 'tech', 'skills'];
    const dummyContent = `
      <h2>Introduction</h2>
      <p>In today's fast-paced tech industry, staying ahead requires continuous learning and strategic preparation. Whether you are preparing for a critical technical interview, optimizing your CV for Applicant Tracking Systems (ATS), or exploring the latest trends in Cloud Computing and AI, having the right resources is essential.</p>
      
      <h2>Key Takeaways</h2>
      <ul>
        <li>Understand the core requirements of your target role.</li>
        <li>Practice consistently with real-world scenarios.</li>
        <li>Leverage tools like <a href="/interview-practice">CareerMastery Interview Practice</a> to sharpen your answers.</li>
        <li>Ensure your resume stands out using professional <a href="/cv-templates">CV Templates</a>.</li>
      </ul>

      <h2>Deep Dive</h2>
      <p>Many professionals struggle not because they lack skills, but because they fail to communicate them effectively. Formatting your experience clearly, quantifying your achievements, and anticipating behavioral questions using the STAR method can drastically improve your success rate.</p>
      
      <h2>Conclusion</h2>
      <p>Commit to your growth. Revisit your fundamentals, stay curious about new technologies, and always be prepared for your next big opportunity.</p>
    `;

    const sampleArticles = [
      { title: "10 Common Interview Questions for Devs", slug: "10-common-interview-questions-devs", category: "interview", excerpt: "Master the most frequently asked questions in software engineering interviews." },
      { title: "Behavioral Interviews: The STAR Method", slug: "behavioral-interviews-star-method", category: "interview", excerpt: "Learn how to structure your behavioral answers perfectly using Situation, Task, Action, Result." },
      { title: "Tackling Technical Coding Problems", slug: "tackling-technical-coding-problems", category: "interview", excerpt: "A guide to breaking down complex algorithmic challenges during live coding rounds." },
      { title: "Salary Negotiation Tactics for IT", slug: "salary-negotiation-tactics-it", category: "interview", excerpt: "Don't leave money on the table. How to negotiate your next tech offer confidently." },
      
      { title: "Career Paths in IT Explained", slug: "career-paths-in-it-explained", category: "career", excerpt: "From DevOps to Data Science, explore which IT career path suits your skills." },
      { title: "Junior to Senior Developer Transition", slug: "junior-to-senior-developer-transition", category: "career", excerpt: "What it actually takes to move from a junior role to a senior engineering position." },
      { title: "Building a Personal Brand in Tech", slug: "building-personal-brand-in-tech", category: "career", excerpt: "Why a strong online presence matters and how developers can build one." },
      { title: "Networking Tips for Introverts", slug: "networking-tips-for-introverts", category: "career", excerpt: "Effective networking strategies for tech professionals who hate networking." },
      
      { title: "Writing a Powerful Professional Summary", slug: "writing-powerful-professional-summary", category: "cv", excerpt: "Hook recruiters in 3 sentences. How to write a standout CV summary." },
      { title: "Quantifying Your IT Achievements", slug: "quantifying-your-it-achievements", category: "cv", excerpt: "Why metrics matter on your resume and how to measure your technical impact." },
      { title: "Making an ATS-Friendly CV", slug: "making-ats-friendly-cv", category: "cv", excerpt: "Beat the robots. Formatting rules to ensure your resume reaches a human." },
      { title: "5 Resume Mistakes to Avoid", slug: "5-resume-mistakes-to-avoid", category: "cv", excerpt: "Common CV errors that immediately disqualify candidates from top tech roles." },
      
      { title: "The Future of AI and Machine Learning", slug: "future-of-ai-and-machine-learning", category: "tech", excerpt: "How AI is reshaping the software development landscape and job market." },
      { title: "Cloud Computing Trends in 2024", slug: "cloud-computing-trends-2024", category: "tech", excerpt: "Serverless, multi-cloud, and what you need to know about cloud infrastructure." },
      { title: "Emerging Cybersecurity Threats", slug: "emerging-cybersecurity-threats", category: "tech", excerpt: "Stay secure. The latest attack vectors and how security engineering is adapting." },
      { title: "DevOps Best Practices for Modern Teams", slug: "devops-best-practices-modern-teams", category: "tech", excerpt: "CI/CD, infrastructure as code, and streamlining your deployment pipeline." },
      
      { title: "Essential Skills Every Developer Needs", slug: "essential-skills-every-developer-needs", category: "skills", excerpt: "Beyond coding: the technical and soft skills required for a successful tech career." },
      { title: "Data Science Learning Path", slug: "data-science-learning-path", category: "skills", excerpt: "A step-by-step roadmap to mastering Python, statistics, and machine learning." },
      { title: "System Design Mastery", slug: "system-design-mastery", category: "skills", excerpt: "How to approach scalable architecture and distributed systems." },
      { title: "Git Best Practices for Teams", slug: "git-best-practices-teams", category: "skills", excerpt: "Branching strategies, clean commits, and professional version control habits." }
    ];

    console.log("Seeding blog articles...");
    for (const article of sampleArticles) {
      await pb.collection('blog_articles').create({
        ...article,
        author: 'Suyog Subedi',
        content: dummyContent,
        read_time: Math.floor(Math.random() * 5) + 5, // 5-9 mins
        published_date: new Date().toISOString(),
        featured_image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800'
      }, { $autoCancel: false });
    }
    console.log("Blog seeding complete.");

  } catch (error) {
    console.error("Error seeding blog:", error);
  }
};
