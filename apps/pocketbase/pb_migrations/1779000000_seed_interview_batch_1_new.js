/**
 * Migration: Seed 300 interview questions (New careers batch 1)
 */
migrate(async (db) => {
  const collection = await db.collection("careerInterviewQuestions");
  
  const records = [
  {
    "careerSlug": "security-architect",
    "questionNumber": 1,
    "question": "Design a disaster recovery system with security considerations. (Variant 1)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 2,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 2)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 3,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 3)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 4,
    "question": "What are the challenges of securing microservices architecture? (Variant 4)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 5,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 5)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 6,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 6)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 7,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 7)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 8,
    "question": "How would you architect a security monitoring and alerting system? (Variant 8)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 9,
    "question": "Design a secure API authentication and authorization system. (Variant 9)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 10,
    "question": "How do you evaluate and select security tools for an organization? (Variant 10)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 11,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 11)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 12,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 12)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 13,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 13)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 14,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 14)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 15,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 15)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 16,
    "question": "How do you evaluate and select security tools for an organization? (Variant 16)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 17,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 17)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 18,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 18)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 19,
    "question": "How would you architect a security monitoring and alerting system? (Variant 19)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 20,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 20)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 21,
    "question": "Design a disaster recovery system with security considerations. (Variant 21)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 22,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 22)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 23,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 23)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 24,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 24)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 25,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 25)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 26,
    "question": "How do you design a secure key management system? (Variant 26)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 27,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 27)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 28,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 28)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 29,
    "question": "How would you architect a security monitoring and alerting system? (Variant 29)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 30,
    "question": "How would you architect a security monitoring and alerting system? (Variant 30)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 31,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 31)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 32,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 32)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 33,
    "question": "Design a disaster recovery system with security considerations. (Variant 33)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 34,
    "question": "Design a disaster recovery system with security considerations. (Variant 34)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 35,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 35)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 36,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 36)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 37,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 37)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 38,
    "question": "How would you architect a security monitoring and alerting system? (Variant 38)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 39,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 39)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 40,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 40)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 41,
    "question": "How do you evaluate and select security tools for an organization? (Variant 41)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 42,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 42)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 43,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 43)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 44,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 44)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 45,
    "question": "Design a secure API authentication and authorization system. (Variant 45)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 46,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 46)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 47,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 47)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 48,
    "question": "What strategies would you use to secure an API gateway? (Variant 48)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 49,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 49)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 50,
    "question": "How do you design a secure key management system? (Variant 50)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 51,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 51)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 52,
    "question": "How would you implement a certificate-based authentication system? (Variant 52)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 53,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 53)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 54,
    "question": "How do you evaluate and select security tools for an organization? (Variant 54)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 55,
    "question": "How do you design a secure key management system? (Variant 55)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 56,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 56)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 57,
    "question": "What are the challenges of securing microservices architecture? (Variant 57)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 58,
    "question": "How would you architect a security monitoring and alerting system? (Variant 58)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 59,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 59)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 60,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 60)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 61,
    "question": "Design a disaster recovery system with security considerations. (Variant 61)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 62,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 62)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 63,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 63)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 64,
    "question": "How would you architect a security monitoring and alerting system? (Variant 64)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 65,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 65)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 66,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 66)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 67,
    "question": "How would you architect a security monitoring and alerting system? (Variant 67)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 68,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 68)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 69,
    "question": "How would you implement a certificate-based authentication system? (Variant 69)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 70,
    "question": "Design a secure API authentication and authorization system. (Variant 70)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 71,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 71)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 72,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 72)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 73,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 73)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 74,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 74)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 75,
    "question": "How would you architect a security monitoring and alerting system? (Variant 75)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 76,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 76)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 77,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 77)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 78,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 78)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 79,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 79)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 80,
    "question": "Design a secure API authentication and authorization system. (Variant 80)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 81,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 81)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 82,
    "question": "How would you architect a security monitoring and alerting system? (Variant 82)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 83,
    "question": "How do you design a secure key management system? (Variant 83)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 84,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 84)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 85,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 85)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 86,
    "question": "Design a secure API authentication and authorization system. (Variant 86)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 87,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 87)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 88,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 88)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 89,
    "question": "Design a disaster recovery system with security considerations. (Variant 89)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 90,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 90)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 91,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 91)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 92,
    "question": "How do you design a secure key management system? (Variant 92)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 93,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 93)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 94,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 94)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 95,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 95)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 96,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 96)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 97,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 97)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 98,
    "question": "How do you evaluate and select security tools for an organization? (Variant 98)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 99,
    "question": "How do you evaluate and select security tools for an organization? (Variant 99)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "security-architect",
    "questionNumber": 100,
    "question": "Design a disaster recovery system with security considerations. (Variant 100)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 1,
    "question": "How do you handle infrastructure emergencies and outages? (Variant 1)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 2,
    "question": "Tell me about a time you reduced infrastructure costs. (Variant 2)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 3,
    "question": "Design a global infrastructure for low-latency content delivery. (Variant 3)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 4,
    "question": "How would you architect a secure and scalable storage infrastructure? (Variant 4)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 5,
    "question": "Explain infrastructure-as-code and its benefits. (Variant 5)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 6,
    "question": "How would you design a network architecture for a growing company? (Variant 6)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 7,
    "question": "Tell me about the largest infrastructure project you've managed. (Variant 7)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 8,
    "question": "Explain load balancing strategies and algorithms. (Variant 8)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 9,
    "question": "How do you stay current with infrastructure trends? (Variant 9)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 10,
    "question": "What are the considerations for hybrid cloud infrastructure? (Variant 10)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 11,
    "question": "How would you design a CDN and caching infrastructure? (Variant 11)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 12,
    "question": "Design a global infrastructure for low-latency content delivery. (Variant 12)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 13,
    "question": "How do you handle infrastructure emergencies and outages? (Variant 13)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 14,
    "question": "How do you stay current with infrastructure trends? (Variant 14)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 15,
    "question": "How do you stay current with infrastructure trends? (Variant 15)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 16,
    "question": "Design a global infrastructure for low-latency content delivery. (Variant 16)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 17,
    "question": "What are the considerations for hybrid cloud infrastructure? (Variant 17)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 18,
    "question": "Tell me about a time you reduced infrastructure costs. (Variant 18)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 19,
    "question": "Explain the OSI model and how it relates to infrastructure design. (Variant 19)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 20,
    "question": "How would you design a CDN and caching infrastructure? (Variant 20)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 21,
    "question": "Design a highly available database infrastructure for a SaaS platform. (Variant 21)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 22,
    "question": "How would you design a CDN and caching infrastructure? (Variant 22)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 23,
    "question": "Explain infrastructure-as-code and its benefits. (Variant 23)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 24,
    "question": "How would you architect a secure and scalable storage infrastructure? (Variant 24)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 25,
    "question": "Design an infrastructure for handling 1 million concurrent users. (Variant 25)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 26,
    "question": "Explain load balancing strategies and algorithms. (Variant 26)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 27,
    "question": "Explain infrastructure-as-code and its benefits. (Variant 27)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 28,
    "question": "Explain infrastructure-as-code and its benefits. (Variant 28)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 29,
    "question": "How do you handle infrastructure emergencies and outages? (Variant 29)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 30,
    "question": "Explain infrastructure-as-code and its benefits. (Variant 30)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 31,
    "question": "Design an infrastructure for handling 1 million concurrent users. (Variant 31)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 32,
    "question": "How would you architect a secure and scalable storage infrastructure? (Variant 32)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 33,
    "question": "Design a global infrastructure for low-latency content delivery. (Variant 33)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 34,
    "question": "Design a global infrastructure for low-latency content delivery. (Variant 34)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 35,
    "question": "Tell me about a time you reduced infrastructure costs. (Variant 35)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 36,
    "question": "How do you stay current with infrastructure trends? (Variant 36)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 37,
    "question": "How would you architect a secure and scalable storage infrastructure? (Variant 37)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 38,
    "question": "Describe your experience with infrastructure monitoring tools. (Variant 38)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 39,
    "question": "Describe your experience with infrastructure monitoring tools. (Variant 39)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 40,
    "question": "Tell me about the largest infrastructure project you've managed. (Variant 40)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 41,
    "question": "How would you architect a secure and scalable storage infrastructure? (Variant 41)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 42,
    "question": "How would you architect a secure and scalable storage infrastructure? (Variant 42)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 43,
    "question": "How do you stay current with infrastructure trends? (Variant 43)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 44,
    "question": "How would you architect a secure and scalable storage infrastructure? (Variant 44)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 45,
    "question": "How do you optimize cloud costs while maintaining performance? (Variant 45)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 46,
    "question": "How do you stay current with infrastructure trends? (Variant 46)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 47,
    "question": "How would you design a CDN and caching infrastructure? (Variant 47)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 48,
    "question": "Design an infrastructure for handling 1 million concurrent users. (Variant 48)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 49,
    "question": "Explain the OSI model and how it relates to infrastructure design. (Variant 49)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 50,
    "question": "How would you design a CDN and caching infrastructure? (Variant 50)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 51,
    "question": "Explain infrastructure-as-code and its benefits. (Variant 51)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 52,
    "question": "How do you design a highly available infrastructure with 99.99% uptime? (Variant 52)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 53,
    "question": "Describe your experience with infrastructure monitoring tools. (Variant 53)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 54,
    "question": "Explain infrastructure-as-code and its benefits. (Variant 54)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 55,
    "question": "How do you optimize cloud costs while maintaining performance? (Variant 55)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 56,
    "question": "How would you architect a secure and scalable storage infrastructure? (Variant 56)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 57,
    "question": "Tell me about a time you reduced infrastructure costs. (Variant 57)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 58,
    "question": "Design a global infrastructure for low-latency content delivery. (Variant 58)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 59,
    "question": "Tell me about a time you reduced infrastructure costs. (Variant 59)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 60,
    "question": "How would you design a network architecture for a growing company? (Variant 60)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 61,
    "question": "Describe your approach to capacity planning. (Variant 61)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 62,
    "question": "What are the considerations for hybrid cloud infrastructure? (Variant 62)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 63,
    "question": "How would you architect a secure and scalable storage infrastructure? (Variant 63)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 64,
    "question": "What are the differences between horizontal and vertical scaling? (Variant 64)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 65,
    "question": "How do you implement disaster recovery and backup strategies? (Variant 65)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 66,
    "question": "How would you design a CDN and caching infrastructure? (Variant 66)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 67,
    "question": "What are the differences between horizontal and vertical scaling? (Variant 67)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 68,
    "question": "Describe your experience with infrastructure monitoring tools. (Variant 68)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 69,
    "question": "Describe your experience with infrastructure monitoring tools. (Variant 69)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 70,
    "question": "How do you design a highly available infrastructure with 99.99% uptime? (Variant 70)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 71,
    "question": "Tell me about the largest infrastructure project you've managed. (Variant 71)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 72,
    "question": "What are the considerations for hybrid cloud infrastructure? (Variant 72)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 73,
    "question": "Describe your experience with infrastructure monitoring tools. (Variant 73)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 74,
    "question": "How do you optimize cloud costs while maintaining performance? (Variant 74)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 75,
    "question": "How would you architect a secure and scalable storage infrastructure? (Variant 75)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 76,
    "question": "Describe your experience with infrastructure monitoring tools. (Variant 76)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 77,
    "question": "Tell me about a time you reduced infrastructure costs. (Variant 77)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 78,
    "question": "How would you design a network architecture for a growing company? (Variant 78)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 79,
    "question": "Design a global infrastructure for low-latency content delivery. (Variant 79)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 80,
    "question": "How would you architect a secure and scalable storage infrastructure? (Variant 80)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 81,
    "question": "How would you design a CDN and caching infrastructure? (Variant 81)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 82,
    "question": "Design a highly available database infrastructure for a SaaS platform. (Variant 82)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 83,
    "question": "How do you design a highly available infrastructure with 99.99% uptime? (Variant 83)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 84,
    "question": "How do you handle infrastructure emergencies and outages? (Variant 84)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 85,
    "question": "How would you architect a secure and scalable storage infrastructure? (Variant 85)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 86,
    "question": "How do you design a highly available infrastructure with 99.99% uptime? (Variant 86)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 87,
    "question": "How would you architect a secure and scalable storage infrastructure? (Variant 87)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 88,
    "question": "Design a global infrastructure for low-latency content delivery. (Variant 88)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 89,
    "question": "How do you stay current with infrastructure trends? (Variant 89)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 90,
    "question": "Explain load balancing strategies and algorithms. (Variant 90)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 91,
    "question": "How do you handle infrastructure emergencies and outages? (Variant 91)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 92,
    "question": "Explain infrastructure-as-code and its benefits. (Variant 92)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 93,
    "question": "How do you handle infrastructure emergencies and outages? (Variant 93)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 94,
    "question": "Design a highly available database infrastructure for a SaaS platform. (Variant 94)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 95,
    "question": "Describe your experience with infrastructure monitoring tools. (Variant 95)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 96,
    "question": "Tell me about a time you reduced infrastructure costs. (Variant 96)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 97,
    "question": "How do you stay current with infrastructure trends? (Variant 97)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 98,
    "question": "How do you implement disaster recovery and backup strategies? (Variant 98)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 99,
    "question": "Design an infrastructure for handling 1 million concurrent users. (Variant 99)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "questionNumber": 100,
    "question": "Describe your experience with infrastructure monitoring tools. (Variant 100)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 1,
    "question": "Describe your approach to testing in a CI/CD pipeline. (Variant 1)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 2,
    "question": "How do you design a disaster recovery strategy? (Variant 2)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 3,
    "question": "Design a monitoring and alerting system for your infrastructure. (Variant 3)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 4,
    "question": "Design a system for managing configuration across environments. (Variant 4)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 5,
    "question": "Tell me about the most complex CI/CD pipeline you've designed. (Variant 5)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 6,
    "question": "How do you ensure team alignment on DevOps practices? (Variant 6)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 7,
    "question": "How do you design a CI/CD pipeline for microservices? (Variant 7)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 8,
    "question": "Tell me about the most complex CI/CD pipeline you've designed. (Variant 8)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 9,
    "question": "Design a system for managing configuration across environments. (Variant 9)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 10,
    "question": "Design a complete CI/CD system for a 50-microservice application. (Variant 10)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 11,
    "question": "Design a complete CI/CD system for a 50-microservice application. (Variant 11)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 12,
    "question": "How do you implement observability in a DevOps environment? (Variant 12)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 13,
    "question": "Describe your experience with infrastructure automation. (Variant 13)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 14,
    "question": "Tell me about the most complex CI/CD pipeline you've designed. (Variant 14)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 15,
    "question": "Tell me about the most complex CI/CD pipeline you've designed. (Variant 15)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 16,
    "question": "Explain infrastructure-as-code tools and their use cases. (Variant 16)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 17,
    "question": "Tell me about a time you improved deployment frequency. (Variant 17)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 18,
    "question": "Tell me about a time you improved deployment frequency. (Variant 18)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 19,
    "question": "What strategies do you use for blue-green deployments? (Variant 19)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 20,
    "question": "What strategies do you use for blue-green deployments? (Variant 20)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 21,
    "question": "Design a system for managing configuration across environments. (Variant 21)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 22,
    "question": "How would you implement progressive deployment strategies? (Variant 22)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 23,
    "question": "Design a complete CI/CD system for a 50-microservice application. (Variant 23)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 24,
    "question": "Tell me about a time you improved deployment frequency. (Variant 24)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 25,
    "question": "Tell me about a time you improved deployment frequency. (Variant 25)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 26,
    "question": "Tell me about a time you improved deployment frequency. (Variant 26)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 27,
    "question": "Tell me about the most complex CI/CD pipeline you've designed. (Variant 27)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 28,
    "question": "Tell me about the most complex CI/CD pipeline you've designed. (Variant 28)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 29,
    "question": "Describe your experience with infrastructure automation. (Variant 29)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 30,
    "question": "Design a system for managing configuration across environments. (Variant 30)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 31,
    "question": "Design a complete CI/CD system for a 50-microservice application. (Variant 31)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 32,
    "question": "Design a monitoring and alerting system for your infrastructure. (Variant 32)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 33,
    "question": "Tell me about the most complex CI/CD pipeline you've designed. (Variant 33)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 34,
    "question": "How do you design a disaster recovery strategy? (Variant 34)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 35,
    "question": "How would you architect a zero-downtime deployment system? (Variant 35)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 36,
    "question": "Tell me about the most complex CI/CD pipeline you've designed. (Variant 36)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 37,
    "question": "How do you design a CI/CD pipeline for microservices? (Variant 37)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 38,
    "question": "How do you implement GitOps practices? (Variant 38)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 39,
    "question": "How would you architect a zero-downtime deployment system? (Variant 39)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 40,
    "question": "How would you architect a zero-downtime deployment system? (Variant 40)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 41,
    "question": "What are the best practices for container security? (Variant 41)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 42,
    "question": "Tell me about the most complex CI/CD pipeline you've designed. (Variant 42)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 43,
    "question": "Design a monitoring and alerting system for your infrastructure. (Variant 43)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 44,
    "question": "Tell me about the most complex CI/CD pipeline you've designed. (Variant 44)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 45,
    "question": "Design a complete CI/CD system for a 50-microservice application. (Variant 45)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 46,
    "question": "How do you ensure team alignment on DevOps practices? (Variant 46)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 47,
    "question": "How do you handle deployment failures? (Variant 47)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 48,
    "question": "Design a monitoring and alerting system for your infrastructure. (Variant 48)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 49,
    "question": "Design a monitoring and alerting system for your infrastructure. (Variant 49)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 50,
    "question": "Describe your approach to testing in a CI/CD pipeline. (Variant 50)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 51,
    "question": "How do you handle secrets management in production? (Variant 51)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 52,
    "question": "How do you handle secrets management in production? (Variant 52)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 53,
    "question": "How do you ensure team alignment on DevOps practices? (Variant 53)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 54,
    "question": "How would you implement progressive deployment strategies? (Variant 54)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 55,
    "question": "Design a complete CI/CD system for a 50-microservice application. (Variant 55)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 56,
    "question": "Design a monitoring and alerting system for your infrastructure. (Variant 56)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 57,
    "question": "Explain containerization and orchestration technologies. (Variant 57)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 58,
    "question": "Describe your experience with infrastructure automation. (Variant 58)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 59,
    "question": "Describe your experience with infrastructure automation. (Variant 59)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 60,
    "question": "How do you handle secrets management in production? (Variant 60)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 61,
    "question": "How do you handle secrets management in production? (Variant 61)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 62,
    "question": "How do you design a disaster recovery strategy? (Variant 62)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 63,
    "question": "Design a system for managing configuration across environments. (Variant 63)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 64,
    "question": "Design a system for managing configuration across environments. (Variant 64)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 65,
    "question": "Describe your experience with infrastructure automation. (Variant 65)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 66,
    "question": "How do you design a CI/CD pipeline for microservices? (Variant 66)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 67,
    "question": "How do you handle secrets management in production? (Variant 67)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 68,
    "question": "Tell me about the most complex CI/CD pipeline you've designed. (Variant 68)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 69,
    "question": "How would you implement progressive deployment strategies? (Variant 69)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 70,
    "question": "Tell me about the most complex CI/CD pipeline you've designed. (Variant 70)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 71,
    "question": "Explain containerization and orchestration technologies. (Variant 71)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 72,
    "question": "How do you design a CI/CD pipeline for microservices? (Variant 72)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 73,
    "question": "Describe your experience with infrastructure automation. (Variant 73)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 74,
    "question": "How do you handle deployment failures? (Variant 74)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 75,
    "question": "How do you handle deployment failures? (Variant 75)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 76,
    "question": "Tell me about a time you improved deployment frequency. (Variant 76)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 77,
    "question": "Describe your experience with infrastructure automation. (Variant 77)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 78,
    "question": "How do you handle deployment failures? (Variant 78)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 79,
    "question": "How would you architect a zero-downtime deployment system? (Variant 79)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 80,
    "question": "How do you design a CI/CD pipeline for microservices? (Variant 80)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 81,
    "question": "How would you implement progressive deployment strategies? (Variant 81)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 82,
    "question": "Design a system for managing configuration across environments. (Variant 82)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 83,
    "question": "How would you architect a zero-downtime deployment system? (Variant 83)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 84,
    "question": "Design a monitoring and alerting system for your infrastructure. (Variant 84)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 85,
    "question": "How would you implement progressive deployment strategies? (Variant 85)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 86,
    "question": "Design a system for managing configuration across environments. (Variant 86)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 87,
    "question": "Design a complete CI/CD system for a 50-microservice application. (Variant 87)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 88,
    "question": "Design a monitoring and alerting system for your infrastructure. (Variant 88)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 89,
    "question": "Tell me about a time you improved deployment frequency. (Variant 89)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 90,
    "question": "How do you design a disaster recovery strategy? (Variant 90)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 91,
    "question": "Describe your experience with infrastructure automation. (Variant 91)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 92,
    "question": "Tell me about a time you improved deployment frequency. (Variant 92)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 93,
    "question": "How do you design a disaster recovery strategy? (Variant 93)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 94,
    "question": "Tell me about the most complex CI/CD pipeline you've designed. (Variant 94)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 95,
    "question": "Design a monitoring and alerting system for your infrastructure. (Variant 95)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 96,
    "question": "Explain infrastructure-as-code tools and their use cases. (Variant 96)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 97,
    "question": "Explain containerization and orchestration technologies. (Variant 97)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 98,
    "question": "Tell me about a time you improved deployment frequency. (Variant 98)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 99,
    "question": "Describe your experience with infrastructure automation. (Variant 99)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "devops-architect",
    "questionNumber": 100,
    "question": "How do you ensure team alignment on DevOps practices? (Variant 100)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  }
];
  
  for (const record of records) {
    await collection.create(record);
  }
  
  console.log(`Seeded ${records.length} careerInterviewQuestions records.`);
}, (db) => {
  // This is a one-way migration
});