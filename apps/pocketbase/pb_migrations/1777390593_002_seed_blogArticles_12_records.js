/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("blogArticles");

  const record0 = new Record(collection);
    record0.set("title", "How to Ace Your Next Interview");
    record0.set("slug", "how-to-ace-interview");
    record0.set("category", "Interview");
    record0.set("author", "Career Coach");
    record0.set("excerpt", "Learn proven techniques to impress interviewers and land your dream job");
    record0.set("content", "Master the art of interviewing with these proven techniques. Start by researching the company thoroughly, understanding their mission, values, and recent news. Practice common interview questions and develop compelling stories that showcase your skills and experience. During the interview, maintain eye contact, speak clearly, and ask thoughtful questions about the role and company. Follow up with a thank you email within 24 hours. Remember, interviews are two-way conversations - you're also evaluating if the company is right for you.");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("title", "Top 10 Interview Questions and Answers");
    record1.set("slug", "top-10-interview-questions");
    record1.set("category", "Interview");
    record1.set("author", "HR Expert");
    record1.set("excerpt", "Master the most common interview questions with expert answers");
    record1.set("content", "Prepare for your interview by mastering these 10 essential questions: 1) Tell me about yourself - Focus on relevant experience and achievements. 2) Why do you want this job? - Show genuine interest in the role and company. 3) What are your strengths? - Highlight skills relevant to the position. 4) What are your weaknesses? - Be honest but frame as areas for growth. 5) Describe a challenging situation - Use the STAR method (Situation, Task, Action, Result). 6) Where do you see yourself in 5 years? - Show ambition and alignment with company goals. 7) Why should we hire you? - Emphasize unique value you bring. 8) What do you know about our company? - Demonstrate thorough research. 9) How do you handle conflict? - Show emotional intelligence and problem-solving skills. 10) Do you have any questions for us? - Ask thoughtful questions about the role and company culture.");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.set("title", "Resume Writing Guide: Stand Out from the Crowd");
    record2.set("slug", "resume-writing-guide");
    record2.set("category", "Resume");
    record2.set("author", "Resume Writer");
    record2.set("excerpt", "Create a compelling resume that gets you noticed by recruiters");
    record2.set("content", "Your resume is your first impression with potential employers. Keep it concise - ideally one page for entry-level, two pages for experienced professionals. Use a clean, professional format with clear sections: contact information, professional summary, experience, education, and skills. Tailor your resume for each job application by highlighting relevant achievements and keywords from the job description. Use action verbs like 'led', 'developed', 'implemented' rather than passive language. Quantify your achievements with metrics and results. Proofread carefully for spelling and grammar errors. Consider using a modern resume template that's ATS-friendly (Applicant Tracking System compatible) to ensure your resume gets past automated screening.");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.set("title", "CV Best Practices for 2026");
    record3.set("slug", "cv-best-practices-2026");
    record3.set("category", "Resume");
    record3.set("author", "Career Advisor");
    record3.set("excerpt", "Modern CV tips and tricks to maximize your chances");
    record3.set("content", "In 2026, CVs need to reflect modern career realities. Include a professional summary that highlights your unique value proposition. Organize your experience chronologically with emphasis on achievements rather than duties. Add a skills section that includes both technical and soft skills relevant to your target role. Include certifications, online courses, and professional development to show continuous learning. Consider adding a portfolio link or GitHub profile if relevant to your field. Use consistent formatting and professional fonts. Keep your CV to 2-3 pages maximum. Customize your CV for each application by emphasizing relevant experience and skills. Include metrics and quantifiable results to demonstrate impact. Finally, ensure your CV is saved as a PDF to preserve formatting across different devices.");
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.set("title", "Career Growth Strategies");
    record4.set("slug", "career-growth-strategies");
    record4.set("category", "Career");
    record4.set("author", "Career Coach");
    record4.set("excerpt", "Accelerate your career with proven growth strategies");
    record4.set("content", "Career growth doesn't happen by accident - it requires intentional planning and action. Start by defining clear career goals and breaking them into actionable steps. Seek mentorship from experienced professionals in your field who can guide your development. Continuously upskill by taking courses, attending workshops, and staying current with industry trends. Build a strong professional network through industry events, online communities, and informational interviews. Take on challenging projects that stretch your abilities and showcase your potential. Document your achievements and communicate your value to your manager. Consider lateral moves that broaden your experience and open new opportunities. Finally, maintain work-life balance to avoid burnout and sustain long-term career success.");
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.set("title", "Navigating Career Transitions");
    record5.set("slug", "navigating-career-transitions");
    record5.set("category", "Career");
    record5.set("author", "Career Counselor");
    record5.set("excerpt", "Successfully transition to a new career path with confidence");
    record5.set("content", "Career transitions can be daunting, but with proper planning they can be incredibly rewarding. Start by assessing your transferable skills - many skills from your current career are valuable in new fields. Research your target industry thoroughly to understand requirements, salary expectations, and growth opportunities. Consider taking relevant courses or certifications to fill skill gaps. Network with professionals in your target field to gain insights and potential opportunities. Be prepared to potentially start at a lower level or accept a lateral move to break into a new industry. Update your resume and cover letter to highlight transferable skills and genuine interest in the new field. Consider informational interviews to learn more about the transition process. Finally, be patient with yourself - career transitions take time, but with persistence and strategic planning, you can successfully move into a new career.");
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.set("title", "Job Interview Preparation Checklist");
    record6.set("slug", "job-interview-prep-checklist");
    record6.set("category", "Interview");
    record6.set("author", "Interview Coach");
    record6.set("excerpt", "Complete checklist to prepare for your next job interview");
    record6.set("content", "Use this comprehensive checklist to prepare for your interview: Research the company - understand their mission, values, products, and recent news. Research the role - understand key responsibilities and required skills. Research the interviewer - find them on LinkedIn and learn about their background. Practice common interview questions - use the STAR method for behavioral questions. Prepare your own questions - ask about role expectations, team dynamics, and company culture. Plan your outfit - dress professionally and appropriately for the company culture. Plan your route - know how to get there and arrive 10-15 minutes early. Prepare documents - bring extra copies of your resume, references, and portfolio. Get good sleep - ensure you're well-rested the night before. Eat a healthy breakfast - fuel your body and mind. Bring a notepad and pen - take notes during the interview. Silence your phone - avoid distractions during the interview. Follow up - send a thank you email within 24 hours.");
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.set("title", "Understanding the Hiring Process");
    record7.set("slug", "understanding-hiring-process");
    record7.set("category", "Interview");
    record7.set("author", "Recruiter");
    record7.set("excerpt", "Demystify the hiring process and understand what employers want");
    record7.set("content", "Understanding the hiring process helps you navigate it more effectively. The typical process starts with job posting and application screening, where recruiters review resumes for basic qualifications. Qualified candidates are invited for phone or video interviews to assess communication skills and cultural fit. Successful candidates advance to in-person interviews with hiring managers and team members. Some companies include technical assessments, case studies, or presentations depending on the role. Final candidates may meet with senior leadership or HR for final approval. Throughout the process, employers are evaluating not just your skills, but your communication, problem-solving abilities, and cultural fit. They want to understand your motivation, work style, and how you handle challenges. Be authentic, ask thoughtful questions, and show genuine interest in the role and company. Remember, the hiring process is also your opportunity to evaluate if the company is right for you.");
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.set("title", "Building Professional Success");
    record8.set("slug", "building-professional-success");
    record8.set("category", "Career");
    record8.set("author", "Success Coach");
    record8.set("excerpt", "Key principles for building a successful professional career");
    record8.set("content", "Professional success is built on several key principles. First, develop a clear vision of what success means to you - it's different for everyone. Set specific, measurable goals and create a roadmap to achieve them. Invest in continuous learning and skill development to stay competitive. Build strong relationships with colleagues, mentors, and industry peers - your network is invaluable. Demonstrate reliability and integrity in all your work - your reputation is your most valuable asset. Take ownership of your work and be accountable for results. Communicate effectively and listen actively to understand others' perspectives. Embrace challenges as opportunities to grow and learn. Maintain a growth mindset and view failures as learning experiences. Finally, remember that success is a journey, not a destination - celebrate small wins along the way and maintain perspective on what truly matters in your career and life.");
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.set("title", "Workplace Skills That Matter");
    record9.set("slug", "workplace-skills-that-matter");
    record9.set("category", "Career");
    record9.set("author", "Skills Expert");
    record9.set("excerpt", "Essential skills employers are looking for in 2026");
    record9.set("content", "In 2026, employers are looking for a mix of technical and soft skills. Technical skills vary by industry but include proficiency with relevant tools, software, and programming languages. However, soft skills are increasingly important: communication skills help you articulate ideas clearly and collaborate effectively. Problem-solving abilities enable you to tackle complex challenges creatively. Emotional intelligence helps you navigate workplace relationships and manage stress. Adaptability is crucial in our rapidly changing work environment. Leadership skills are valuable even in non-management roles. Time management and organizational skills help you stay productive. Critical thinking allows you to analyze information and make sound decisions. Creativity and innovation help you bring fresh ideas to your work. Finally, digital literacy is essential as technology continues to transform workplaces. Employers want well-rounded professionals who combine technical expertise with strong interpersonal and cognitive skills.");
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record10 = new Record(collection);
    record10.set("title", "Mastering Professional Development");
    record10.set("slug", "mastering-professional-development");
    record10.set("category", "Resume");
    record10.set("author", "Development Coach");
    record10.set("excerpt", "Invest in your growth with strategic professional development");
    record10.set("content", "Professional development is an investment in your future. Start by identifying skill gaps and areas for growth based on your career goals. Pursue formal education through degree programs, certifications, or online courses from reputable platforms. Attend industry conferences and workshops to stay current with trends and network with peers. Seek mentorship from experienced professionals who can guide your development. Take on stretch assignments that challenge you and build new capabilities. Join professional associations relevant to your field. Read industry publications and thought leadership content. Participate in webinars and online learning communities. Document your learning and reflect on how you can apply new knowledge. Share your learning with colleagues through presentations or knowledge-sharing sessions. Finally, create a personal development plan with specific goals, timelines, and accountability measures. Remember, professional development is ongoing - commit to lifelong learning to stay competitive and advance your career.");
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    record11.set("title", "Financial Planning for Career Growth");
    record11.set("slug", "financial-planning-career-growth");
    record11.set("category", "Finance");
    record11.set("author", "Finance Advisor");
    record11.set("excerpt", "Smart financial strategies to support your career advancement");
    record11.set("content", "Financial planning plays a crucial role in supporting your career growth. Start by building an emergency fund covering 3-6 months of expenses - this provides security to take calculated career risks. Invest in your education and skill development - courses, certifications, and degrees often lead to higher earning potential. Manage your debt strategically - high-interest debt can limit your career flexibility. Negotiate your salary confidently - research market rates and advocate for fair compensation. Diversify your income streams if possible - freelancing or side projects can provide additional income and skill development. Invest wisely for long-term wealth building - consider retirement accounts and investment portfolios. Track your spending and create a budget that aligns with your career goals. Plan for career transitions - having financial cushion makes it easier to take new opportunities. Consider the total compensation package, not just salary - benefits, flexibility, and growth opportunities matter. Finally, regularly review your financial plan as your career evolves and adjust as needed.");
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})
