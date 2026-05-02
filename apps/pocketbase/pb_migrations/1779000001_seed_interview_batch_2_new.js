/**
 * Migration: Seed 300 interview questions (New careers batch 2)
 */
migrate(async (db) => {
  const collection = await db.collection("careerInterviewQuestions");
  
  const records = [
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 1,
    "question": "Explain concept drift and how you'd handle it. (Variant 1)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 2,
    "question": "Tell me about a time a model failed in production. How did you handle it? (Variant 2)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 3,
    "question": "How would you architect a system for ML model serving at scale? (Variant 3)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 4,
    "question": "How would you build a system for managing ML experiments? (Variant 4)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 5,
    "question": "Describe your approach to A/B testing in ML systems. (Variant 5)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 6,
    "question": "Tell me about the largest ML project you've operationalized. (Variant 6)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 7,
    "question": "How do you implement model retraining workflows? (Variant 7)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 8,
    "question": "How do you communicate with data scientists about operational requirements? (Variant 8)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 9,
    "question": "Design a feature store architecture. (Variant 9)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 10,
    "question": "How do you design a machine learning model deployment pipeline? (Variant 10)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 11,
    "question": "Tell me about a time a model failed in production. How did you handle it? (Variant 11)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 12,
    "question": "How would you architect a system for ML model serving at scale? (Variant 12)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 13,
    "question": "Tell me about the largest ML project you've operationalized. (Variant 13)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 14,
    "question": "How do you manage dependencies for ML projects? (Variant 14)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 15,
    "question": "How would you build a system for managing ML experiments? (Variant 15)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 16,
    "question": "How do you handle model versioning and rollbacks? (Variant 16)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 17,
    "question": "Explain concept drift and how you'd handle it. (Variant 17)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 18,
    "question": "Explain concept drift and how you'd handle it. (Variant 18)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 19,
    "question": "Describe your experience with ML frameworks and libraries. (Variant 19)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 20,
    "question": "How do you implement model retraining workflows? (Variant 20)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 21,
    "question": "How do you manage dependencies for ML projects? (Variant 21)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 22,
    "question": "How do you monitor model performance in production? (Variant 22)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 23,
    "question": "Tell me about a time a model failed in production. How did you handle it? (Variant 23)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 24,
    "question": "Explain the difference between model training and model serving. (Variant 24)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 25,
    "question": "Tell me about a time a model failed in production. How did you handle it? (Variant 25)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 26,
    "question": "How do you handle model versioning and rollbacks? (Variant 26)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 27,
    "question": "Design an end-to-end ML pipeline for real-time predictions. (Variant 27)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 28,
    "question": "How do you communicate with data scientists about operational requirements? (Variant 28)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 29,
    "question": "Design a monitoring system for detecting model degradation. (Variant 29)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 30,
    "question": "Describe your experience with ML frameworks and libraries. (Variant 30)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 31,
    "question": "Describe your experience with ML frameworks and libraries. (Variant 31)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 32,
    "question": "How would you architect a system for ML model serving at scale? (Variant 32)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 33,
    "question": "Design a monitoring system for detecting model degradation. (Variant 33)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 34,
    "question": "What tools and frameworks do you use for ML pipelines? (Variant 34)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 35,
    "question": "Tell me about the largest ML project you've operationalized. (Variant 35)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 36,
    "question": "How do you stay current with MLOps tools and practices? (Variant 36)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 37,
    "question": "Design a feature store architecture. (Variant 37)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 38,
    "question": "How do you stay current with MLOps tools and practices? (Variant 38)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 39,
    "question": "Design an end-to-end ML pipeline for real-time predictions. (Variant 39)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 40,
    "question": "Design an end-to-end ML pipeline for real-time predictions. (Variant 40)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 41,
    "question": "What strategies do you use for feature engineering at scale? (Variant 41)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 42,
    "question": "How do you communicate with data scientists about operational requirements? (Variant 42)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 43,
    "question": "Design an end-to-end ML pipeline for real-time predictions. (Variant 43)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 44,
    "question": "How would you architect a system for ML model serving at scale? (Variant 44)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 45,
    "question": "How do you monitor model performance in production? (Variant 45)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 46,
    "question": "Design a feature store architecture. (Variant 46)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 47,
    "question": "Design a feature store architecture. (Variant 47)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 48,
    "question": "How do you implement model retraining workflows? (Variant 48)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 49,
    "question": "Design an end-to-end ML pipeline for real-time predictions. (Variant 49)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 50,
    "question": "Tell me about a time a model failed in production. How did you handle it? (Variant 50)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 51,
    "question": "Design an end-to-end ML pipeline for real-time predictions. (Variant 51)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 52,
    "question": "How do you stay current with MLOps tools and practices? (Variant 52)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 53,
    "question": "Tell me about the largest ML project you've operationalized. (Variant 53)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 54,
    "question": "How do you monitor model performance in production? (Variant 54)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 55,
    "question": "How do you design a machine learning model deployment pipeline? (Variant 55)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 56,
    "question": "Explain the difference between model training and model serving. (Variant 56)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 57,
    "question": "What tools and frameworks do you use for ML pipelines? (Variant 57)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 58,
    "question": "What strategies do you use for feature engineering at scale? (Variant 58)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 59,
    "question": "Design an end-to-end ML pipeline for real-time predictions. (Variant 59)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 60,
    "question": "What tools and frameworks do you use for ML pipelines? (Variant 60)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 61,
    "question": "How would you architect a system for ML model serving at scale? (Variant 61)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 62,
    "question": "How do you handle model versioning and rollbacks? (Variant 62)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 63,
    "question": "How do you handle model versioning and rollbacks? (Variant 63)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 64,
    "question": "Design a monitoring system for detecting model degradation. (Variant 64)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 65,
    "question": "Describe your experience with ML frameworks and libraries. (Variant 65)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 66,
    "question": "What strategies do you use for feature engineering at scale? (Variant 66)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 67,
    "question": "How do you design a machine learning model deployment pipeline? (Variant 67)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 68,
    "question": "Tell me about a time a model failed in production. How did you handle it? (Variant 68)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 69,
    "question": "Design an end-to-end ML pipeline for real-time predictions. (Variant 69)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 70,
    "question": "Explain the difference between model training and model serving. (Variant 70)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 71,
    "question": "Tell me about the largest ML project you've operationalized. (Variant 71)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 72,
    "question": "Design an end-to-end ML pipeline for real-time predictions. (Variant 72)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 73,
    "question": "How do you implement model retraining workflows? (Variant 73)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 74,
    "question": "Design a feature store architecture. (Variant 74)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 75,
    "question": "Explain the difference between model training and model serving. (Variant 75)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 76,
    "question": "Design a monitoring system for detecting model degradation. (Variant 76)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 77,
    "question": "What tools and frameworks do you use for ML pipelines? (Variant 77)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 78,
    "question": "How do you design a machine learning model deployment pipeline? (Variant 78)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 79,
    "question": "Tell me about a time a model failed in production. How did you handle it? (Variant 79)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 80,
    "question": "How would you build a system for managing ML experiments? (Variant 80)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 81,
    "question": "How do you implement model retraining workflows? (Variant 81)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 82,
    "question": "How do you monitor model performance in production? (Variant 82)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 83,
    "question": "Design a feature store architecture. (Variant 83)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 84,
    "question": "Design a monitoring system for detecting model degradation. (Variant 84)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 85,
    "question": "How do you manage dependencies for ML projects? (Variant 85)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 86,
    "question": "Explain the difference between model training and model serving. (Variant 86)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 87,
    "question": "Tell me about the largest ML project you've operationalized. (Variant 87)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 88,
    "question": "Explain concept drift and how you'd handle it. (Variant 88)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 89,
    "question": "How would you architect a system for ML model serving at scale? (Variant 89)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 90,
    "question": "Explain concept drift and how you'd handle it. (Variant 90)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 91,
    "question": "Tell me about the largest ML project you've operationalized. (Variant 91)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 92,
    "question": "How do you manage dependencies for ML projects? (Variant 92)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 93,
    "question": "Design an end-to-end ML pipeline for real-time predictions. (Variant 93)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 94,
    "question": "How would you build a system for managing ML experiments? (Variant 94)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 95,
    "question": "Design an end-to-end ML pipeline for real-time predictions. (Variant 95)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 96,
    "question": "Explain the difference between model training and model serving. (Variant 96)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 97,
    "question": "How do you communicate with data scientists about operational requirements? (Variant 97)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 98,
    "question": "Explain the difference between model training and model serving. (Variant 98)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 99,
    "question": "How do you communicate with data scientists about operational requirements? (Variant 99)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "mlops-engineer",
    "questionNumber": 100,
    "question": "How would you build a system for managing ML experiments? (Variant 100)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 1,
    "question": "Tell me about a time you had to refactor a legacy system. (Variant 1)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 2,
    "question": "Design a payment processing backend. (Variant 2)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 3,
    "question": "Design a backend for a social media platform with 100M users. (Variant 3)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 4,
    "question": "Explain eventual consistency and when to use it. (Variant 4)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 5,
    "question": "Tell me about a backend system you've architected. (Variant 5)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 6,
    "question": "What patterns do you use for asynchronous processing? (Variant 6)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 7,
    "question": "How would you architect a recommendation engine backend? (Variant 7)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 8,
    "question": "How do you approach performance optimization? (Variant 8)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 9,
    "question": "Explain database sharding strategies and their tradeoffs. (Variant 9)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 10,
    "question": "How would you architect a real-time notification system? (Variant 10)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 11,
    "question": "Design a backend for a video streaming platform. (Variant 11)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 12,
    "question": "How do you handle rate limiting and throttling? (Variant 12)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 13,
    "question": "Design a backend for a social media platform with 100M users. (Variant 13)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 14,
    "question": "How do you approach performance optimization? (Variant 14)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 15,
    "question": "How do you approach performance optimization? (Variant 15)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 16,
    "question": "Design a backend for a video streaming platform. (Variant 16)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 17,
    "question": "How do you handle rate limiting and throttling? (Variant 17)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 18,
    "question": "How do you handle technical debt? (Variant 18)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 19,
    "question": "How do you approach performance optimization? (Variant 19)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 20,
    "question": "Explain the CAP theorem and its implications. (Variant 20)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 21,
    "question": "Design a backend for a video streaming platform. (Variant 21)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 22,
    "question": "How do you design for fault tolerance? (Variant 22)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 23,
    "question": "Design a payment processing backend. (Variant 23)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 24,
    "question": "How would you architect a recommendation engine backend? (Variant 24)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 25,
    "question": "Describe your experience with distributed systems. (Variant 25)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 26,
    "question": "Design a payment processing backend. (Variant 26)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 27,
    "question": "How would you architect a recommendation engine backend? (Variant 27)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 28,
    "question": "Explain database sharding strategies and their tradeoffs. (Variant 28)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 29,
    "question": "How do you handle distributed transactions? (Variant 29)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 30,
    "question": "How do you approach performance optimization? (Variant 30)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 31,
    "question": "Design a backend for a video streaming platform. (Variant 31)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 32,
    "question": "Describe your experience with distributed systems. (Variant 32)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 33,
    "question": "Describe your experience with distributed systems. (Variant 33)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 34,
    "question": "How would you architect a recommendation engine backend? (Variant 34)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 35,
    "question": "Describe your experience with distributed systems. (Variant 35)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 36,
    "question": "Tell me about a backend system you've architected. (Variant 36)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 37,
    "question": "How do you handle distributed transactions? (Variant 37)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 38,
    "question": "Describe your experience with distributed systems. (Variant 38)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 39,
    "question": "How do you design a scalable backend system? (Variant 39)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 40,
    "question": "How do you handle rate limiting and throttling? (Variant 40)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 41,
    "question": "Describe your experience with distributed systems. (Variant 41)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 42,
    "question": "Design a backend for a social media platform with 100M users. (Variant 42)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 43,
    "question": "Describe your experience with distributed systems. (Variant 43)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 44,
    "question": "Tell me about a backend system you've architected. (Variant 44)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 45,
    "question": "Design a payment processing backend. (Variant 45)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 46,
    "question": "How do you design a scalable backend system? (Variant 46)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 47,
    "question": "How do you handle technical debt? (Variant 47)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 48,
    "question": "Tell me about a time you had to refactor a legacy system. (Variant 48)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 49,
    "question": "How do you implement caching strategies? (Variant 49)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 50,
    "question": "Describe your approach to API design. (Variant 50)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 51,
    "question": "Tell me about a time you had to refactor a legacy system. (Variant 51)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 52,
    "question": "How do you design a scalable backend system? (Variant 52)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 53,
    "question": "Describe your experience with distributed systems. (Variant 53)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 54,
    "question": "How do you design for fault tolerance? (Variant 54)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 55,
    "question": "Tell me about a time you had to refactor a legacy system. (Variant 55)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 56,
    "question": "Tell me about a time you had to refactor a legacy system. (Variant 56)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 57,
    "question": "What patterns do you use for asynchronous processing? (Variant 57)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 58,
    "question": "How would you architect a real-time notification system? (Variant 58)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 59,
    "question": "Describe your experience with distributed systems. (Variant 59)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 60,
    "question": "Tell me about a time you had to refactor a legacy system. (Variant 60)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 61,
    "question": "Tell me about a time you had to refactor a legacy system. (Variant 61)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 62,
    "question": "How do you handle technical debt? (Variant 62)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 63,
    "question": "Tell me about a backend system you've architected. (Variant 63)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 64,
    "question": "How would you architect a real-time notification system? (Variant 64)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 65,
    "question": "How would you architect a real-time notification system? (Variant 65)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 66,
    "question": "How do you implement caching strategies? (Variant 66)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 67,
    "question": "Design a backend for a social media platform with 100M users. (Variant 67)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 68,
    "question": "Explain eventual consistency and when to use it. (Variant 68)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 69,
    "question": "How do you handle distributed transactions? (Variant 69)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 70,
    "question": "How would you architect a real-time notification system? (Variant 70)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 71,
    "question": "How do you design for fault tolerance? (Variant 71)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 72,
    "question": "How do you approach performance optimization? (Variant 72)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 73,
    "question": "How would you architect a real-time notification system? (Variant 73)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 74,
    "question": "How do you design a scalable backend system? (Variant 74)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 75,
    "question": "Describe your experience with distributed systems. (Variant 75)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 76,
    "question": "Design a backend for a social media platform with 100M users. (Variant 76)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 77,
    "question": "How would you architect a real-time notification system? (Variant 77)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 78,
    "question": "How would you architect a recommendation engine backend? (Variant 78)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 79,
    "question": "How would you architect a real-time notification system? (Variant 79)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 80,
    "question": "Design a backend for a video streaming platform. (Variant 80)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 81,
    "question": "Design a payment processing backend. (Variant 81)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 82,
    "question": "Explain the CAP theorem and its implications. (Variant 82)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 83,
    "question": "Tell me about a time you had to refactor a legacy system. (Variant 83)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 84,
    "question": "Design a backend for a social media platform with 100M users. (Variant 84)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 85,
    "question": "How do you handle distributed transactions? (Variant 85)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 86,
    "question": "Describe your experience with distributed systems. (Variant 86)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 87,
    "question": "How do you design for fault tolerance? (Variant 87)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 88,
    "question": "How do you approach performance optimization? (Variant 88)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 89,
    "question": "Design a payment processing backend. (Variant 89)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 90,
    "question": "How would you architect a recommendation engine backend? (Variant 90)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 91,
    "question": "How do you design for fault tolerance? (Variant 91)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 92,
    "question": "Tell me about a time you had to refactor a legacy system. (Variant 92)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 93,
    "question": "Design a backend for a video streaming platform. (Variant 93)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 94,
    "question": "Describe your experience with distributed systems. (Variant 94)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 95,
    "question": "Explain eventual consistency and when to use it. (Variant 95)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 96,
    "question": "Tell me about a time you had to refactor a legacy system. (Variant 96)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 97,
    "question": "How would you architect a recommendation engine backend? (Variant 97)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 98,
    "question": "Explain eventual consistency and when to use it. (Variant 98)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 99,
    "question": "Tell me about a backend system you've architected. (Variant 99)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "backend-architect",
    "questionNumber": 100,
    "question": "How do you design a scalable backend system? (Variant 100)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 1,
    "question": "How would you implement a certificate-based authentication system? (Variant 1)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 2,
    "question": "What are the challenges of securing microservices architecture? (Variant 2)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 3,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 3)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 4,
    "question": "Design a disaster recovery system with security considerations. (Variant 4)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 5,
    "question": "Design a secure API authentication and authorization system. (Variant 5)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 6,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 6)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 7,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 7)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 8,
    "question": "How would you architect a security monitoring and alerting system? (Variant 8)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 9,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 9)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 10,
    "question": "How would you architect a security monitoring and alerting system? (Variant 10)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 11,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 11)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 12,
    "question": "Design a disaster recovery system with security considerations. (Variant 12)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 13,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 13)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 14,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 14)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 15,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 15)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 16,
    "question": "How do you design a secure key management system? (Variant 16)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 17,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 17)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 18,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 18)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 19,
    "question": "What are the key components of a security architecture and how do they interact? (Variant 19)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 20,
    "question": "How would you architect a security monitoring and alerting system? (Variant 20)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 21,
    "question": "How do you design a secure key management system? (Variant 21)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 22,
    "question": "How do you design a secure key management system? (Variant 22)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 23,
    "question": "What strategies would you use to secure an API gateway? (Variant 23)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 24,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 24)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 25,
    "question": "Design a secure API authentication and authorization system. (Variant 25)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 26,
    "question": "How would you architect a security monitoring and alerting system? (Variant 26)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 27,
    "question": "What are the challenges of securing microservices architecture? (Variant 27)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 28,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 28)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 29,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 29)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 30,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 30)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 31,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 31)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 32,
    "question": "How would you implement a certificate-based authentication system? (Variant 32)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 33,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 33)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 34,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 34)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 35,
    "question": "What strategies would you use to secure an API gateway? (Variant 35)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 36,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 36)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 37,
    "question": "How do you design a secure key management system? (Variant 37)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 38,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 38)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 39,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 39)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 40,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 40)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 41,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 41)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 42,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 42)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 43,
    "question": "How would you implement a certificate-based authentication system? (Variant 43)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 44,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 44)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 45,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 45)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 46,
    "question": "Design a secure API authentication and authorization system. (Variant 46)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 47,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 47)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 48,
    "question": "Design a secure API authentication and authorization system. (Variant 48)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 49,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 49)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 50,
    "question": "How do you evaluate and select security tools for an organization? (Variant 50)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 51,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 51)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 52,
    "question": "What strategies would you use to secure an API gateway? (Variant 52)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 53,
    "question": "Design a disaster recovery system with security considerations. (Variant 53)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 54,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 54)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 55,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 55)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 56,
    "question": "How do you design a secure key management system? (Variant 56)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 57,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 57)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 58,
    "question": "Design a disaster recovery system with security considerations. (Variant 58)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 59,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 59)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 60,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 60)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 61,
    "question": "Tell me about a time you had to balance security requirements with business needs. (Variant 61)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 62,
    "question": "Design a disaster recovery system with security considerations. (Variant 62)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 63,
    "question": "Design a secure API authentication and authorization system. (Variant 63)",
    "category": "System Design",
    "difficulty": "Beginner",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 64,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 64)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 65,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 65)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 66,
    "question": "How do you evaluate and select security tools for an organization? (Variant 66)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 67,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 67)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 68,
    "question": "Explain the differences between symmetric and asymmetric encryption and when to use each. (Variant 68)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 69,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 69)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 70,
    "question": "How would you implement a secure VPN infrastructure for remote workers? (Variant 70)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 71,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 71)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 72,
    "question": "How do you evaluate and select security tools for an organization? (Variant 72)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 73,
    "question": "Design a disaster recovery system with security considerations. (Variant 73)",
    "category": "System Design",
    "difficulty": "Intermediate",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 74,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 74)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 75,
    "question": "How do you evaluate and select security tools for an organization? (Variant 75)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 76,
    "question": "How would you implement a certificate-based authentication system? (Variant 76)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 77,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 77)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 78,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 78)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 79,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 79)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 80,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 80)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 81,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 81)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 82,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 82)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 83,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 83)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 84,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 84)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 85,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 85)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 86,
    "question": "Tell me about a time you discovered a critical security vulnerability. How did you handle it? (Variant 86)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 87,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 87)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 88,
    "question": "What strategies would you use to secure an API gateway? (Variant 88)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 89,
    "question": "How do you stay updated with the latest security threats and vulnerabilities? (Variant 89)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 90,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 90)",
    "category": "Behavioral",
    "difficulty": "Intermediate",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 91,
    "question": "How do you communicate security risks to non-technical stakeholders? (Variant 91)",
    "category": "Behavioral",
    "difficulty": "Beginner",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 92,
    "question": "Describe your experience with security compliance frameworks like SOC2 or ISO 27001. (Variant 92)",
    "category": "Behavioral",
    "difficulty": "Advanced",
    "explanation": "This is a behavioral question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 93,
    "question": "How do you evaluate and select security tools for an organization? (Variant 93)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 94,
    "question": "How do you design a zero-trust security model for a distributed system? (Variant 94)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 95,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 95)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 96,
    "question": "How do you evaluate and select security tools for an organization? (Variant 96)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 97,
    "question": "Describe your approach to conducting a security threat modeling exercise. (Variant 97)",
    "category": "Technical",
    "difficulty": "Advanced",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 98,
    "question": "What strategies would you use to secure an API gateway? (Variant 98)",
    "category": "Technical",
    "difficulty": "Beginner",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 99,
    "question": "Design a secure system for handling sensitive customer data across multiple regions. (Variant 99)",
    "category": "System Design",
    "difficulty": "Advanced",
    "explanation": "This is a system design question that tests understanding of key concepts in this career path."
  },
  {
    "careerSlug": "enterprise-architect",
    "questionNumber": 100,
    "question": "Explain the principle of least privilege and how you'd implement it. (Variant 100)",
    "category": "Technical",
    "difficulty": "Intermediate",
    "explanation": "This is a technical question that tests understanding of key concepts in this career path."
  }
];
  
  for (const record of records) {
    await collection.create(record);
  }
  
  console.log(`Seeded ${records.length} careerInterviewQuestions records.`);
}, (db) => {
  // This is a one-way migration
});