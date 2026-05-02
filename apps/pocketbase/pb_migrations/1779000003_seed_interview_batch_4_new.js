/**
 * Migration: Seed 300 interview questions (New careers batch 4)
 */
migrate(async (db) => {
  const collection = await db.collection("careerInterviewQuestions");
  
  const records = [
  {
    "careerSlug": "release-engineer",
    "questionNumber": 1,
    "question": "How do you design a secure key management system? (Variant 1)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 2,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 2)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 3,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 3)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 4,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 4)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 5,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 5)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 6,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 6)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 7,
    "question": "How do you design a secure key management system? (Variant 7)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 8,
    "question": "How do you design a secure key management system? (Variant 8)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 9,
    "question": "What strategies would you use to secure an API gateway? (Variant 9)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 10,
    "question": "What strategies would you use to secure an API gateway? (Variant 10)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 11,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 11)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 12,
    "question": "What are the challenges of securing microservices architecture? (Variant 12)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 13,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 13)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 14,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 14)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 15,
    "question": "Design a secure API authentication and authorization system. (Variant 15)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 16,
    "question": "How do you evaluate and select security tools for an organization? (Variant 16)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 17,
    "question": "Design a disaster recovery system with security considerations. (Variant 17)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 18,
    "question": "Design a secure API authentication and authorization system. (Variant 18)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 19,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 19)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 20,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 20)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 21,
    "question": "How would you architect a security monitoring and alerting system? (Variant 21)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 22,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 22)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 23,
    "question": "Design a disaster recovery system with security considerations. (Variant 23)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 24,
    "question": "Design a secure API authentication and authorization system. (Variant 24)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 25,
    "question": "How would you implement a certificate-based authentication system? (Variant 25)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 26,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 26)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 27,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 27)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 28,
    "question": "How would you architect a security monitoring and alerting system? (Variant 28)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 29,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 29)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 30,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 30)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 31,
    "question": "Design a disaster recovery system with security considerations. (Variant 31)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 32,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 32)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 33,
    "question": "How do you evaluate and select security tools for an organization? (Variant 33)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 34,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 34)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 35,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 35)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 36,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 36)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 37,
    "question": "How would you architect a security monitoring and alerting system? (Variant 37)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 38,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 38)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 39,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 39)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 40,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 40)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 41,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 41)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 42,
    "question": "What strategies would you use to secure an API gateway? (Variant 42)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 43,
    "question": "Design a disaster recovery system with security considerations. (Variant 43)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 44,
    "question": "How do you evaluate and select security tools for an organization? (Variant 44)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 45,
    "question": "Design a disaster recovery system with security considerations. (Variant 45)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 46,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 46)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 47,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 47)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 48,
    "question": "How do you evaluate and select security tools for an organization? (Variant 48)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 49,
    "question": "Design a disaster recovery system with security considerations. (Variant 49)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 50,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 50)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 51,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 51)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 52,
    "question": "What are the challenges of securing microservices architecture? (Variant 52)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 53,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 53)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 54,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 54)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 55,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 55)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 56,
    "question": "How would you architect a security monitoring and alerting system? (Variant 56)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 57,
    "question": "How would you implement a certificate-based authentication system? (Variant 57)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 58,
    "question": "How do you design a secure key management system? (Variant 58)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 59,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 59)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 60,
    "question": "What strategies would you use to secure an API gateway? (Variant 60)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 61,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 61)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 62,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 62)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 63,
    "question": "How do you design a secure key management system? (Variant 63)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 64,
    "question": "How do you design a secure key management system? (Variant 64)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 65,
    "question": "What strategies would you use to secure an API gateway? (Variant 65)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 66,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 66)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 67,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 67)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 68,
    "question": "How would you architect a security monitoring and alerting system? (Variant 68)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 69,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 69)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 70,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 70)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 71,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 71)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 72,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 72)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 73,
    "question": "What strategies would you use to secure an API gateway? (Variant 73)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 74,
    "question": "Design a disaster recovery system with security considerations. (Variant 74)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 75,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 75)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 76,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 76)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 77,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 77)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 78,
    "question": "How do you design a secure key management system? (Variant 78)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 79,
    "question": "How would you architect a security monitoring and alerting system? (Variant 79)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 80,
    "question": "How do you design a secure key management system? (Variant 80)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 81,
    "question": "Design a secure API authentication and authorization system. (Variant 81)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 82,
    "question": "What are the challenges of securing microservices architecture? (Variant 82)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 83,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 83)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 84,
    "question": "How would you architect a security monitoring and alerting system? (Variant 84)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 85,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 85)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 86,
    "question": "How do you design a secure key management system? (Variant 86)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 87,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 87)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 88,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 88)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 89,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 89)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 90,
    "question": "How would you architect a security monitoring and alerting system? (Variant 90)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 91,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 91)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 92,
    "question": "Design a disaster recovery system with security considerations. (Variant 92)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 93,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 93)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 94,
    "question": "How do you evaluate and select security tools for an organization? (Variant 94)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 95,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 95)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 96,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 96)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 97,
    "question": "How do you design a secure key management system? (Variant 97)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 98,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 98)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 99,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 99)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "release-engineer",
    "questionNumber": 100,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 100)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 1,
    "question": "What are the challenges of securing microservices architecture? (Variant 1)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 2,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 2)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 3,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 3)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 4,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 4)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 5,
    "question": "Design a secure API authentication and authorization system. (Variant 5)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 6,
    "question": "How would you implement a certificate-based authentication system? (Variant 6)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 7,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 7)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 8,
    "question": "How do you design a secure key management system? (Variant 8)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 9,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 9)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 10,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 10)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 11,
    "question": "What are the challenges of securing microservices architecture? (Variant 11)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 12,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 12)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 13,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 13)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 14,
    "question": "How would you architect a security monitoring and alerting system? (Variant 14)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 15,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 15)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 16,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 16)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 17,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 17)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 18,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 18)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 19,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 19)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 20,
    "question": "What strategies would you use to secure an API gateway? (Variant 20)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 21,
    "question": "How do you design a secure key management system? (Variant 21)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 22,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 22)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 23,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 23)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 24,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 24)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 25,
    "question": "Design a disaster recovery system with security considerations. (Variant 25)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 26,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 26)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 27,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 27)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 28,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 28)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 29,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 29)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 30,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 30)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 31,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 31)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 32,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 32)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 33,
    "question": "How do you evaluate and select security tools for an organization? (Variant 33)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 34,
    "question": "Design a disaster recovery system with security considerations. (Variant 34)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 35,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 35)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 36,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 36)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 37,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 37)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 38,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 38)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 39,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 39)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 40,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 40)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 41,
    "question": "How would you architect a security monitoring and alerting system? (Variant 41)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 42,
    "question": "How do you design a secure key management system? (Variant 42)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 43,
    "question": "How would you implement a certificate-based authentication system? (Variant 43)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 44,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 44)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 45,
    "question": "How would you implement a certificate-based authentication system? (Variant 45)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 46,
    "question": "What strategies would you use to secure an API gateway? (Variant 46)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 47,
    "question": "Design a secure API authentication and authorization system. (Variant 47)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 48,
    "question": "Design a secure API authentication and authorization system. (Variant 48)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 49,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 49)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 50,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 50)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 51,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 51)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 52,
    "question": "Design a secure API authentication and authorization system. (Variant 52)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 53,
    "question": "How would you architect a security monitoring and alerting system? (Variant 53)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 54,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 54)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 55,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 55)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 56,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 56)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 57,
    "question": "How would you architect a security monitoring and alerting system? (Variant 57)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 58,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 58)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 59,
    "question": "How would you architect a security monitoring and alerting system? (Variant 59)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 60,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 60)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 61,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 61)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 62,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 62)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 63,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 63)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 64,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 64)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 65,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 65)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 66,
    "question": "What are the challenges of securing microservices architecture? (Variant 66)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 67,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 67)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 68,
    "question": "Design a secure API authentication and authorization system. (Variant 68)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 69,
    "question": "What strategies would you use to secure an API gateway? (Variant 69)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 70,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 70)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 71,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 71)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 72,
    "question": "Design a secure API authentication and authorization system. (Variant 72)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 73,
    "question": "Design a disaster recovery system with security considerations. (Variant 73)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 74,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 74)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 75,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 75)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 76,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 76)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 77,
    "question": "How would you architect a security monitoring and alerting system? (Variant 77)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 78,
    "question": "Design a disaster recovery system with security considerations. (Variant 78)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 79,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 79)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 80,
    "question": "How do you design a secure key management system? (Variant 80)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 81,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 81)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 82,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 82)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 83,
    "question": "What are the challenges of securing microservices architecture? (Variant 83)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 84,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 84)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 85,
    "question": "What are the challenges of securing microservices architecture? (Variant 85)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 86,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 86)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 87,
    "question": "How would you architect a security monitoring and alerting system? (Variant 87)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 88,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 88)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 89,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 89)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 90,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 90)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 91,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 91)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 92,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 92)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 93,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 93)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 94,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 94)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 95,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 95)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 96,
    "question": "How do you evaluate and select security tools for an organization? (Variant 96)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 97,
    "question": "How would you architect a security monitoring and alerting system? (Variant 97)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 98,
    "question": "How do you evaluate and select security tools for an organization? (Variant 98)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 99,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 99)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "siem-analyst",
    "questionNumber": 100,
    "question": "How would you architect a security monitoring and alerting system? (Variant 100)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 1,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 1)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 2,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 2)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 3,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 3)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 4,
    "question": "Design a disaster recovery system with security considerations. (Variant 4)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 5,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 5)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 6,
    "question": "Design a disaster recovery system with security considerations. (Variant 6)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 7,
    "question": "How do you design a secure key management system? (Variant 7)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 8,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 8)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 9,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 9)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 10,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 10)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 11,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 11)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 12,
    "question": "How would you architect a security monitoring and alerting system? (Variant 12)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 13,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 13)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 14,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 14)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 15,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 15)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 16,
    "question": "How do you design a secure key management system? (Variant 16)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 17,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 17)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 18,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 18)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 19,
    "question": "How do you evaluate and select security tools for an organization? (Variant 19)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 20,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 20)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 21,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 21)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 22,
    "question": "How do you evaluate and select security tools for an organization? (Variant 22)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 23,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 23)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 24,
    "question": "How do you design a secure key management system? (Variant 24)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 25,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 25)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 26,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 26)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 27,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 27)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 28,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 28)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 29,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 29)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 30,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 30)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 31,
    "question": "Design a disaster recovery system with security considerations. (Variant 31)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 32,
    "question": "How would you implement a certificate-based authentication system? (Variant 32)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 33,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 33)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 34,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 34)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 35,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 35)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 36,
    "question": "How do you design a secure key management system? (Variant 36)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 37,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 37)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 38,
    "question": "How would you implement a certificate-based authentication system? (Variant 38)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 39,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 39)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 40,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 40)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 41,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 41)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 42,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 42)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 43,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 43)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 44,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 44)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 45,
    "question": "How do you evaluate and select security tools for an organization? (Variant 45)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 46,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 46)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 47,
    "question": "What strategies would you use to secure an API gateway? (Variant 47)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 48,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 48)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 49,
    "question": "What strategies would you use to secure an API gateway? (Variant 49)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 50,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 50)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 51,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 51)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 52,
    "question": "How do you design a secure key management system? (Variant 52)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 53,
    "question": "How would you architect a security monitoring and alerting system? (Variant 53)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 54,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 54)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 55,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 55)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 56,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 56)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 57,
    "question": "How would you architect a security monitoring and alerting system? (Variant 57)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 58,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 58)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 59,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 59)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 60,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 60)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 61,
    "question": "Design a secure API authentication and authorization system. (Variant 61)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 62,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 62)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 63,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 63)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 64,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 64)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 65,
    "question": "How would you implement a certificate-based authentication system? (Variant 65)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 66,
    "question": "Design a disaster recovery system with security considerations. (Variant 66)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 67,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 67)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 68,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 68)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 69,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 69)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 70,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 70)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 71,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 71)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 72,
    "question": "Design a disaster recovery system with security considerations. (Variant 72)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 73,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 73)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 74,
    "question": "How would you architect a security monitoring and alerting system? (Variant 74)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 75,
    "question": "Design a secure API authentication and authorization system. (Variant 75)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 76,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 76)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 77,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 77)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 78,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 78)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 79,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 79)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 80,
    "question": "How would you implement a certificate-based authentication system? (Variant 80)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 81,
    "question": "How would you architect a security monitoring and alerting system? (Variant 81)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 82,
    "question": "Design a disaster recovery system with security considerations. (Variant 82)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 83,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 83)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 84,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 84)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 85,
    "question": "Design a secure API authentication and authorization system. (Variant 85)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 86,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 86)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 87,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 87)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 88,
    "question": "How would you architect a security monitoring and alerting system? (Variant 88)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 89,
    "question": "What strategies would you use to secure an API gateway? (Variant 89)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 90,
    "question": "How would you architect a security monitoring and alerting system? (Variant 90)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 91,
    "question": "Design a disaster recovery system with security considerations. (Variant 91)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 92,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 92)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 93,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 93)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 94,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 94)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 95,
    "question": "Design a disaster recovery system with security considerations. (Variant 95)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 96,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 96)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 97,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 97)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 98,
    "question": "Design a secure API authentication and authorization system. (Variant 98)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 99,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 99)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "systems-administrator",
    "questionNumber": 100,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 100)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
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