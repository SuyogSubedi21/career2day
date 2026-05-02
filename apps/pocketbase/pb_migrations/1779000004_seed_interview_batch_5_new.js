/**
 * Migration: Seed 300 interview questions (New careers batch 5)
 */
migrate(async (db) => {
  const collection = await db.collection("careerInterviewQuestions");
  
  const records = [
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 1,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 1)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 2,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 2)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 3,
    "question": "Design a secure API authentication and authorization system. (Variant 3)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 4,
    "question": "How do you evaluate and select security tools for an organization? (Variant 4)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 5,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 5)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 6,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 6)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 7,
    "question": "Design a secure API authentication and authorization system. (Variant 7)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 8,
    "question": "Design a disaster recovery system with security considerations. (Variant 8)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 9,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 9)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 10,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 10)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 11,
    "question": "Design a secure API authentication and authorization system. (Variant 11)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 12,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 12)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 13,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 13)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 14,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 14)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 15,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 15)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 16,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 16)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 17,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 17)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 18,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 18)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 19,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 19)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 20,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 20)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 21,
    "question": "Design a secure API authentication and authorization system. (Variant 21)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 22,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 22)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 23,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 23)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 24,
    "question": "Design a disaster recovery system with security considerations. (Variant 24)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 25,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 25)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 26,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 26)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 27,
    "question": "How do you design a secure key management system? (Variant 27)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 28,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 28)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 29,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 29)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 30,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 30)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 31,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 31)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 32,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 32)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 33,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 33)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 34,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 34)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 35,
    "question": "How do you evaluate and select security tools for an organization? (Variant 35)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 36,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 36)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 37,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 37)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 38,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 38)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 39,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 39)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 40,
    "question": "How would you architect a security monitoring and alerting system? (Variant 40)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 41,
    "question": "What strategies would you use to secure an API gateway? (Variant 41)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 42,
    "question": "What are the challenges of securing microservices architecture? (Variant 42)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 43,
    "question": "What are the challenges of securing microservices architecture? (Variant 43)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 44,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 44)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 45,
    "question": "How would you implement a certificate-based authentication system? (Variant 45)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 46,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 46)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 47,
    "question": "Design a secure API authentication and authorization system. (Variant 47)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 48,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 48)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 49,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 49)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 50,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 50)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 51,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 51)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 52,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 52)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 53,
    "question": "Design a secure API authentication and authorization system. (Variant 53)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 54,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 54)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 55,
    "question": "How would you architect a security monitoring and alerting system? (Variant 55)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 56,
    "question": "How would you architect a security monitoring and alerting system? (Variant 56)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 57,
    "question": "What strategies would you use to secure an API gateway? (Variant 57)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 58,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 58)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 59,
    "question": "How would you implement a certificate-based authentication system? (Variant 59)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 60,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 60)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 61,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 61)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 62,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 62)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 63,
    "question": "Design a disaster recovery system with security considerations. (Variant 63)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 64,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 64)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 65,
    "question": "How would you architect a security monitoring and alerting system? (Variant 65)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 66,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 66)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 67,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 67)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 68,
    "question": "How would you architect a security monitoring and alerting system? (Variant 68)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 69,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 69)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 70,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 70)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 71,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 71)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 72,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 72)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 73,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 73)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 74,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 74)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 75,
    "question": "Design a secure API authentication and authorization system. (Variant 75)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 76,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 76)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 77,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 77)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 78,
    "question": "What are the challenges of securing microservices architecture? (Variant 78)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 79,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 79)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 80,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 80)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 81,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 81)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 82,
    "question": "Design a disaster recovery system with security considerations. (Variant 82)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 83,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 83)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 84,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 84)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 85,
    "question": "How do you evaluate and select security tools for an organization? (Variant 85)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 86,
    "question": "Design a secure API authentication and authorization system. (Variant 86)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 87,
    "question": "What strategies would you use to secure an API gateway? (Variant 87)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 88,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 88)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 89,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 89)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 90,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 90)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 91,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 91)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 92,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 92)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 93,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 93)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 94,
    "question": "What strategies would you use to secure an API gateway? (Variant 94)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 95,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 95)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 96,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 96)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 97,
    "question": "How would you architect a security monitoring and alerting system? (Variant 97)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 98,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 98)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 99,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 99)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "questionNumber": 100,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 100)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 1,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 1)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 2,
    "question": "Design a secure API authentication and authorization system. (Variant 2)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 3,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 3)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 4,
    "question": "What strategies would you use to secure an API gateway? (Variant 4)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 5,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 5)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 6,
    "question": "Design a disaster recovery system with security considerations. (Variant 6)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 7,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 7)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 8,
    "question": "What strategies would you use to secure an API gateway? (Variant 8)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 9,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 9)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 10,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 10)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 11,
    "question": "Design a secure API authentication and authorization system. (Variant 11)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 12,
    "question": "Design a disaster recovery system with security considerations. (Variant 12)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 13,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 13)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 14,
    "question": "Design a secure API authentication and authorization system. (Variant 14)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 15,
    "question": "How do you evaluate and select security tools for an organization? (Variant 15)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 16,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 16)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 17,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 17)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 18,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 18)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 19,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 19)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 20,
    "question": "What strategies would you use to secure an API gateway? (Variant 20)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 21,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 21)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 22,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 22)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 23,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 23)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 24,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 24)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 25,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 25)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 26,
    "question": "How do you design a secure key management system? (Variant 26)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 27,
    "question": "Design a disaster recovery system with security considerations. (Variant 27)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 28,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 28)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 29,
    "question": "Design a secure API authentication and authorization system. (Variant 29)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 30,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 30)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 31,
    "question": "How do you design a secure key management system? (Variant 31)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 32,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 32)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 33,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 33)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 34,
    "question": "Design a secure API authentication and authorization system. (Variant 34)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 35,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 35)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 36,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 36)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 37,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 37)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 38,
    "question": "Design a disaster recovery system with security considerations. (Variant 38)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 39,
    "question": "How would you implement a certificate-based authentication system? (Variant 39)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 40,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 40)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 41,
    "question": "How would you architect a security monitoring and alerting system? (Variant 41)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 42,
    "question": "What are the challenges of securing microservices architecture? (Variant 42)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 43,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 43)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 44,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 44)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 45,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 45)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 46,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 46)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 47,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 47)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 48,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 48)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 49,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 49)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 50,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 50)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 51,
    "question": "What are the challenges of securing microservices architecture? (Variant 51)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 52,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 52)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 53,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 53)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 54,
    "question": "Design a disaster recovery system with security considerations. (Variant 54)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 55,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 55)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 56,
    "question": "How would you implement a certificate-based authentication system? (Variant 56)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 57,
    "question": "How do you design a secure key management system? (Variant 57)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 58,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 58)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 59,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 59)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 60,
    "question": "How would you architect a security monitoring and alerting system? (Variant 60)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 61,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 61)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 62,
    "question": "Design a secure API authentication and authorization system. (Variant 62)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 63,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 63)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 64,
    "question": "How do you design a secure key management system? (Variant 64)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 65,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 65)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 66,
    "question": "Design a secure API authentication and authorization system. (Variant 66)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 67,
    "question": "What are the challenges of securing microservices architecture? (Variant 67)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 68,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 68)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 69,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 69)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 70,
    "question": "Design a disaster recovery system with security considerations. (Variant 70)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 71,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 71)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 72,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 72)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 73,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 73)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 74,
    "question": "How would you architect a security monitoring and alerting system? (Variant 74)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 75,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 75)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 76,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 76)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 77,
    "question": "What are the challenges of securing microservices architecture? (Variant 77)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 78,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 78)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 79,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 79)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 80,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 80)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 81,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 81)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 82,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 82)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 83,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 83)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 84,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 84)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 85,
    "question": "What are the challenges of securing microservices architecture? (Variant 85)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 86,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 86)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 87,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 87)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 88,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 88)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 89,
    "question": "Design a secure API authentication and authorization system. (Variant 89)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 90,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 90)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 91,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 91)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 92,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 92)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 93,
    "question": "What are the challenges of securing microservices architecture? (Variant 93)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 94,
    "question": "How do you evaluate and select security tools for an organization? (Variant 94)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 95,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 95)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 96,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 96)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 97,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 97)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 98,
    "question": "How do you design a secure key management system? (Variant 98)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 99,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 99)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "api-developer",
    "questionNumber": 100,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 100)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 1,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 1)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 2,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 2)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 3,
    "question": "Design a secure API authentication and authorization system. (Variant 3)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 4,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 4)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 5,
    "question": "How would you implement a certificate-based authentication system? (Variant 5)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 6,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 6)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 7,
    "question": "Design a secure API authentication and authorization system. (Variant 7)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 8,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 8)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 9,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 9)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 10,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 10)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 11,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 11)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 12,
    "question": "How do you design a secure key management system? (Variant 12)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 13,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 13)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 14,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 14)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 15,
    "question": "How would you architect a security monitoring and alerting system? (Variant 15)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 16,
    "question": "How would you architect a security monitoring and alerting system? (Variant 16)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 17,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 17)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 18,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 18)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 19,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 19)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 20,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 20)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 21,
    "question": "How do you design a secure key management system? (Variant 21)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 22,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 22)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 23,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 23)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 24,
    "question": "How do you evaluate and select security tools for an organization? (Variant 24)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 25,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 25)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 26,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 26)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 27,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 27)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 28,
    "question": "What strategies would you use to secure an API gateway? (Variant 28)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 29,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 29)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 30,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 30)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 31,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 31)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 32,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 32)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 33,
    "question": "Design a secure API authentication and authorization system. (Variant 33)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 34,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 34)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 35,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 35)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 36,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 36)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 37,
    "question": "What are the challenges of securing microservices architecture? (Variant 37)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 38,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 38)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 39,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 39)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 40,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 40)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 41,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 41)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 42,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 42)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 43,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 43)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 44,
    "question": "How do you evaluate and select security tools for an organization? (Variant 44)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 45,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 45)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 46,
    "question": "How do you design a secure key management system? (Variant 46)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 47,
    "question": "What strategies would you use to secure an API gateway? (Variant 47)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 48,
    "question": "How would you implement a certificate-based authentication system? (Variant 48)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 49,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 49)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 50,
    "question": "How would you architect a security monitoring and alerting system? (Variant 50)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 51,
    "question": "How would you architect a security monitoring and alerting system? (Variant 51)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 52,
    "question": "Design a secure API authentication and authorization system. (Variant 52)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 53,
    "question": "Design a disaster recovery system with security considerations. (Variant 53)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 54,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 54)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 55,
    "question": "How would you architect a security monitoring and alerting system? (Variant 55)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 56,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 56)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 57,
    "question": "Design a disaster recovery system with security considerations. (Variant 57)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 58,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 58)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 59,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 59)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 60,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 60)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 61,
    "question": "Design a secure API authentication and authorization system. (Variant 61)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 62,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 62)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 63,
    "question": "Design a disaster recovery system with security considerations. (Variant 63)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 64,
    "question": "How would you architect a security monitoring and alerting system? (Variant 64)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 65,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 65)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 66,
    "question": "Design a secure API authentication and authorization system. (Variant 66)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 67,
    "question": "How do you evaluate and select security tools for an organization? (Variant 67)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 68,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 68)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 69,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 69)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 70,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 70)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 71,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 71)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 72,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 72)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 73,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 73)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 74,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 74)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 75,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 75)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 76,
    "question": "What strategies would you use to secure an API gateway? (Variant 76)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 77,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 77)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 78,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 78)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 79,
    "question": "Design a secure API authentication and authorization system. (Variant 79)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 80,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 80)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 81,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 81)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 82,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 82)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 83,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 83)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 84,
    "question": "Design a disaster recovery system with security considerations. (Variant 84)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 85,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 85)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 86,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 86)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 87,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 87)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 88,
    "question": "How do you evaluate and select security tools for an organization? (Variant 88)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 89,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 89)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 90,
    "question": "How would you architect a security monitoring and alerting system? (Variant 90)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 91,
    "question": "What strategies would you use to secure an API gateway? (Variant 91)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 92,
    "question": "What are the challenges of securing microservices architecture? (Variant 92)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 93,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 93)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 94,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 94)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 95,
    "question": "Design a secure API authentication and authorization system. (Variant 95)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 96,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 96)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 97,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 97)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 98,
    "question": "How would you implement a certificate-based authentication system? (Variant 98)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 99,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 99)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "questionNumber": 100,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 100)",
    "category": "Behavioral",
    "difficulty": "Beginner",
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