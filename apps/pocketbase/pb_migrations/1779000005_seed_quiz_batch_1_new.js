/**
 * Migration: Seed 225 quiz questions (New careers batch 1)
 */
migrate(async (db) => {
  const collection = await db.collection("careerQuizzes");
  
  const records = [
  {
    "careerSlug": "security-architect",
    "difficulty": "Basic",
    "questionNumber": 1,
    "question": "Basic level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core security architect concepts."
  },
  {
    "careerSlug": "security-architect",
    "difficulty": "Basic",
    "questionNumber": 2,
    "question": "Basic level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core security architect concepts."
  },
  {
    "careerSlug": "security-architect",
    "difficulty": "Basic",
    "questionNumber": 3,
    "question": "Basic level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core security architect concepts."
  },
  {
    "careerSlug": "security-architect",
    "difficulty": "Basic",
    "questionNumber": 4,
    "question": "Basic level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core security architect concepts."
  },
  {
    "careerSlug": "security-architect",
    "difficulty": "Basic",
    "questionNumber": 5,
    "question": "Basic level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core security architect concepts."
  },
  {
    "careerSlug": "security-architect",
    "difficulty": "Medium",
    "questionNumber": 1,
    "question": "Medium level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core security architect concepts."
  },
  {
    "careerSlug": "security-architect",
    "difficulty": "Medium",
    "questionNumber": 2,
    "question": "Medium level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core security architect concepts."
  },
  {
    "careerSlug": "security-architect",
    "difficulty": "Medium",
    "questionNumber": 3,
    "question": "Medium level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core security architect concepts."
  },
  {
    "careerSlug": "security-architect",
    "difficulty": "Medium",
    "questionNumber": 4,
    "question": "Medium level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core security architect concepts."
  },
  {
    "careerSlug": "security-architect",
    "difficulty": "Medium",
    "questionNumber": 5,
    "question": "Medium level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core security architect concepts."
  },
  {
    "careerSlug": "security-architect",
    "difficulty": "Hard",
    "questionNumber": 1,
    "question": "Hard level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core security architect concepts."
  },
  {
    "careerSlug": "security-architect",
    "difficulty": "Hard",
    "questionNumber": 2,
    "question": "Hard level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core security architect concepts."
  },
  {
    "careerSlug": "security-architect",
    "difficulty": "Hard",
    "questionNumber": 3,
    "question": "Hard level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core security architect concepts."
  },
  {
    "careerSlug": "security-architect",
    "difficulty": "Hard",
    "questionNumber": 4,
    "question": "Hard level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core security architect concepts."
  },
  {
    "careerSlug": "security-architect",
    "difficulty": "Hard",
    "questionNumber": 5,
    "question": "Hard level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core security architect concepts."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "difficulty": "Basic",
    "questionNumber": 1,
    "question": "Basic level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core infrastructure engineer concepts."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "difficulty": "Basic",
    "questionNumber": 2,
    "question": "Basic level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core infrastructure engineer concepts."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "difficulty": "Basic",
    "questionNumber": 3,
    "question": "Basic level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core infrastructure engineer concepts."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "difficulty": "Basic",
    "questionNumber": 4,
    "question": "Basic level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core infrastructure engineer concepts."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "difficulty": "Basic",
    "questionNumber": 5,
    "question": "Basic level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core infrastructure engineer concepts."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "difficulty": "Medium",
    "questionNumber": 1,
    "question": "Medium level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core infrastructure engineer concepts."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "difficulty": "Medium",
    "questionNumber": 2,
    "question": "Medium level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core infrastructure engineer concepts."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "difficulty": "Medium",
    "questionNumber": 3,
    "question": "Medium level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core infrastructure engineer concepts."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "difficulty": "Medium",
    "questionNumber": 4,
    "question": "Medium level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core infrastructure engineer concepts."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "difficulty": "Medium",
    "questionNumber": 5,
    "question": "Medium level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core infrastructure engineer concepts."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "difficulty": "Hard",
    "questionNumber": 1,
    "question": "Hard level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core infrastructure engineer concepts."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "difficulty": "Hard",
    "questionNumber": 2,
    "question": "Hard level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core infrastructure engineer concepts."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "difficulty": "Hard",
    "questionNumber": 3,
    "question": "Hard level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core infrastructure engineer concepts."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "difficulty": "Hard",
    "questionNumber": 4,
    "question": "Hard level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core infrastructure engineer concepts."
  },
  {
    "careerSlug": "infrastructure-engineer",
    "difficulty": "Hard",
    "questionNumber": 5,
    "question": "Hard level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core infrastructure engineer concepts."
  },
  {
    "careerSlug": "devops-architect",
    "difficulty": "Basic",
    "questionNumber": 1,
    "question": "Basic level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core devops architect concepts."
  },
  {
    "careerSlug": "devops-architect",
    "difficulty": "Basic",
    "questionNumber": 2,
    "question": "Basic level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core devops architect concepts."
  },
  {
    "careerSlug": "devops-architect",
    "difficulty": "Basic",
    "questionNumber": 3,
    "question": "Basic level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core devops architect concepts."
  },
  {
    "careerSlug": "devops-architect",
    "difficulty": "Basic",
    "questionNumber": 4,
    "question": "Basic level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core devops architect concepts."
  },
  {
    "careerSlug": "devops-architect",
    "difficulty": "Basic",
    "questionNumber": 5,
    "question": "Basic level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core devops architect concepts."
  },
  {
    "careerSlug": "devops-architect",
    "difficulty": "Medium",
    "questionNumber": 1,
    "question": "Medium level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core devops architect concepts."
  },
  {
    "careerSlug": "devops-architect",
    "difficulty": "Medium",
    "questionNumber": 2,
    "question": "Medium level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core devops architect concepts."
  },
  {
    "careerSlug": "devops-architect",
    "difficulty": "Medium",
    "questionNumber": 3,
    "question": "Medium level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core devops architect concepts."
  },
  {
    "careerSlug": "devops-architect",
    "difficulty": "Medium",
    "questionNumber": 4,
    "question": "Medium level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core devops architect concepts."
  },
  {
    "careerSlug": "devops-architect",
    "difficulty": "Medium",
    "questionNumber": 5,
    "question": "Medium level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core devops architect concepts."
  },
  {
    "careerSlug": "devops-architect",
    "difficulty": "Hard",
    "questionNumber": 1,
    "question": "Hard level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core devops architect concepts."
  },
  {
    "careerSlug": "devops-architect",
    "difficulty": "Hard",
    "questionNumber": 2,
    "question": "Hard level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core devops architect concepts."
  },
  {
    "careerSlug": "devops-architect",
    "difficulty": "Hard",
    "questionNumber": 3,
    "question": "Hard level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core devops architect concepts."
  },
  {
    "careerSlug": "devops-architect",
    "difficulty": "Hard",
    "questionNumber": 4,
    "question": "Hard level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core devops architect concepts."
  },
  {
    "careerSlug": "devops-architect",
    "difficulty": "Hard",
    "questionNumber": 5,
    "question": "Hard level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core devops architect concepts."
  },
  {
    "careerSlug": "mlops-engineer",
    "difficulty": "Basic",
    "questionNumber": 1,
    "question": "Basic level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core mlops engineer concepts."
  },
  {
    "careerSlug": "mlops-engineer",
    "difficulty": "Basic",
    "questionNumber": 2,
    "question": "Basic level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core mlops engineer concepts."
  },
  {
    "careerSlug": "mlops-engineer",
    "difficulty": "Basic",
    "questionNumber": 3,
    "question": "Basic level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core mlops engineer concepts."
  },
  {
    "careerSlug": "mlops-engineer",
    "difficulty": "Basic",
    "questionNumber": 4,
    "question": "Basic level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core mlops engineer concepts."
  },
  {
    "careerSlug": "mlops-engineer",
    "difficulty": "Basic",
    "questionNumber": 5,
    "question": "Basic level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core mlops engineer concepts."
  },
  {
    "careerSlug": "mlops-engineer",
    "difficulty": "Medium",
    "questionNumber": 1,
    "question": "Medium level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core mlops engineer concepts."
  },
  {
    "careerSlug": "mlops-engineer",
    "difficulty": "Medium",
    "questionNumber": 2,
    "question": "Medium level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core mlops engineer concepts."
  },
  {
    "careerSlug": "mlops-engineer",
    "difficulty": "Medium",
    "questionNumber": 3,
    "question": "Medium level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core mlops engineer concepts."
  },
  {
    "careerSlug": "mlops-engineer",
    "difficulty": "Medium",
    "questionNumber": 4,
    "question": "Medium level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core mlops engineer concepts."
  },
  {
    "careerSlug": "mlops-engineer",
    "difficulty": "Medium",
    "questionNumber": 5,
    "question": "Medium level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core mlops engineer concepts."
  },
  {
    "careerSlug": "mlops-engineer",
    "difficulty": "Hard",
    "questionNumber": 1,
    "question": "Hard level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core mlops engineer concepts."
  },
  {
    "careerSlug": "mlops-engineer",
    "difficulty": "Hard",
    "questionNumber": 2,
    "question": "Hard level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core mlops engineer concepts."
  },
  {
    "careerSlug": "mlops-engineer",
    "difficulty": "Hard",
    "questionNumber": 3,
    "question": "Hard level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core mlops engineer concepts."
  },
  {
    "careerSlug": "mlops-engineer",
    "difficulty": "Hard",
    "questionNumber": 4,
    "question": "Hard level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core mlops engineer concepts."
  },
  {
    "careerSlug": "mlops-engineer",
    "difficulty": "Hard",
    "questionNumber": 5,
    "question": "Hard level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core mlops engineer concepts."
  },
  {
    "careerSlug": "backend-architect",
    "difficulty": "Basic",
    "questionNumber": 1,
    "question": "Basic level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core backend architect concepts."
  },
  {
    "careerSlug": "backend-architect",
    "difficulty": "Basic",
    "questionNumber": 2,
    "question": "Basic level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core backend architect concepts."
  },
  {
    "careerSlug": "backend-architect",
    "difficulty": "Basic",
    "questionNumber": 3,
    "question": "Basic level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core backend architect concepts."
  },
  {
    "careerSlug": "backend-architect",
    "difficulty": "Basic",
    "questionNumber": 4,
    "question": "Basic level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core backend architect concepts."
  },
  {
    "careerSlug": "backend-architect",
    "difficulty": "Basic",
    "questionNumber": 5,
    "question": "Basic level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core backend architect concepts."
  },
  {
    "careerSlug": "backend-architect",
    "difficulty": "Medium",
    "questionNumber": 1,
    "question": "Medium level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core backend architect concepts."
  },
  {
    "careerSlug": "backend-architect",
    "difficulty": "Medium",
    "questionNumber": 2,
    "question": "Medium level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core backend architect concepts."
  },
  {
    "careerSlug": "backend-architect",
    "difficulty": "Medium",
    "questionNumber": 3,
    "question": "Medium level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core backend architect concepts."
  },
  {
    "careerSlug": "backend-architect",
    "difficulty": "Medium",
    "questionNumber": 4,
    "question": "Medium level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core backend architect concepts."
  },
  {
    "careerSlug": "backend-architect",
    "difficulty": "Medium",
    "questionNumber": 5,
    "question": "Medium level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core backend architect concepts."
  },
  {
    "careerSlug": "backend-architect",
    "difficulty": "Hard",
    "questionNumber": 1,
    "question": "Hard level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core backend architect concepts."
  },
  {
    "careerSlug": "backend-architect",
    "difficulty": "Hard",
    "questionNumber": 2,
    "question": "Hard level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core backend architect concepts."
  },
  {
    "careerSlug": "backend-architect",
    "difficulty": "Hard",
    "questionNumber": 3,
    "question": "Hard level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core backend architect concepts."
  },
  {
    "careerSlug": "backend-architect",
    "difficulty": "Hard",
    "questionNumber": 4,
    "question": "Hard level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core backend architect concepts."
  },
  {
    "careerSlug": "backend-architect",
    "difficulty": "Hard",
    "questionNumber": 5,
    "question": "Hard level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core backend architect concepts."
  },
  {
    "careerSlug": "enterprise-architect",
    "difficulty": "Basic",
    "questionNumber": 1,
    "question": "Basic level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core enterprise architect concepts."
  },
  {
    "careerSlug": "enterprise-architect",
    "difficulty": "Basic",
    "questionNumber": 2,
    "question": "Basic level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core enterprise architect concepts."
  },
  {
    "careerSlug": "enterprise-architect",
    "difficulty": "Basic",
    "questionNumber": 3,
    "question": "Basic level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core enterprise architect concepts."
  },
  {
    "careerSlug": "enterprise-architect",
    "difficulty": "Basic",
    "questionNumber": 4,
    "question": "Basic level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core enterprise architect concepts."
  },
  {
    "careerSlug": "enterprise-architect",
    "difficulty": "Basic",
    "questionNumber": 5,
    "question": "Basic level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core enterprise architect concepts."
  },
  {
    "careerSlug": "enterprise-architect",
    "difficulty": "Medium",
    "questionNumber": 1,
    "question": "Medium level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core enterprise architect concepts."
  },
  {
    "careerSlug": "enterprise-architect",
    "difficulty": "Medium",
    "questionNumber": 2,
    "question": "Medium level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core enterprise architect concepts."
  },
  {
    "careerSlug": "enterprise-architect",
    "difficulty": "Medium",
    "questionNumber": 3,
    "question": "Medium level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core enterprise architect concepts."
  },
  {
    "careerSlug": "enterprise-architect",
    "difficulty": "Medium",
    "questionNumber": 4,
    "question": "Medium level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core enterprise architect concepts."
  },
  {
    "careerSlug": "enterprise-architect",
    "difficulty": "Medium",
    "questionNumber": 5,
    "question": "Medium level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core enterprise architect concepts."
  },
  {
    "careerSlug": "enterprise-architect",
    "difficulty": "Hard",
    "questionNumber": 1,
    "question": "Hard level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core enterprise architect concepts."
  },
  {
    "careerSlug": "enterprise-architect",
    "difficulty": "Hard",
    "questionNumber": 2,
    "question": "Hard level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core enterprise architect concepts."
  },
  {
    "careerSlug": "enterprise-architect",
    "difficulty": "Hard",
    "questionNumber": 3,
    "question": "Hard level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core enterprise architect concepts."
  },
  {
    "careerSlug": "enterprise-architect",
    "difficulty": "Hard",
    "questionNumber": 4,
    "question": "Hard level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core enterprise architect concepts."
  },
  {
    "careerSlug": "enterprise-architect",
    "difficulty": "Hard",
    "questionNumber": 5,
    "question": "Hard level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core enterprise architect concepts."
  },
  {
    "careerSlug": "solutions-engineer",
    "difficulty": "Basic",
    "questionNumber": 1,
    "question": "Basic level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core solutions engineer concepts."
  },
  {
    "careerSlug": "solutions-engineer",
    "difficulty": "Basic",
    "questionNumber": 2,
    "question": "Basic level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core solutions engineer concepts."
  },
  {
    "careerSlug": "solutions-engineer",
    "difficulty": "Basic",
    "questionNumber": 3,
    "question": "Basic level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core solutions engineer concepts."
  },
  {
    "careerSlug": "solutions-engineer",
    "difficulty": "Basic",
    "questionNumber": 4,
    "question": "Basic level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core solutions engineer concepts."
  },
  {
    "careerSlug": "solutions-engineer",
    "difficulty": "Basic",
    "questionNumber": 5,
    "question": "Basic level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core solutions engineer concepts."
  },
  {
    "careerSlug": "solutions-engineer",
    "difficulty": "Medium",
    "questionNumber": 1,
    "question": "Medium level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core solutions engineer concepts."
  },
  {
    "careerSlug": "solutions-engineer",
    "difficulty": "Medium",
    "questionNumber": 2,
    "question": "Medium level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core solutions engineer concepts."
  },
  {
    "careerSlug": "solutions-engineer",
    "difficulty": "Medium",
    "questionNumber": 3,
    "question": "Medium level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core solutions engineer concepts."
  },
  {
    "careerSlug": "solutions-engineer",
    "difficulty": "Medium",
    "questionNumber": 4,
    "question": "Medium level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core solutions engineer concepts."
  },
  {
    "careerSlug": "solutions-engineer",
    "difficulty": "Medium",
    "questionNumber": 5,
    "question": "Medium level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core solutions engineer concepts."
  },
  {
    "careerSlug": "solutions-engineer",
    "difficulty": "Hard",
    "questionNumber": 1,
    "question": "Hard level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core solutions engineer concepts."
  },
  {
    "careerSlug": "solutions-engineer",
    "difficulty": "Hard",
    "questionNumber": 2,
    "question": "Hard level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core solutions engineer concepts."
  },
  {
    "careerSlug": "solutions-engineer",
    "difficulty": "Hard",
    "questionNumber": 3,
    "question": "Hard level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core solutions engineer concepts."
  },
  {
    "careerSlug": "solutions-engineer",
    "difficulty": "Hard",
    "questionNumber": 4,
    "question": "Hard level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core solutions engineer concepts."
  },
  {
    "careerSlug": "solutions-engineer",
    "difficulty": "Hard",
    "questionNumber": 5,
    "question": "Hard level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core solutions engineer concepts."
  },
  {
    "careerSlug": "integration-engineer",
    "difficulty": "Basic",
    "questionNumber": 1,
    "question": "Basic level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core integration engineer concepts."
  },
  {
    "careerSlug": "integration-engineer",
    "difficulty": "Basic",
    "questionNumber": 2,
    "question": "Basic level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core integration engineer concepts."
  },
  {
    "careerSlug": "integration-engineer",
    "difficulty": "Basic",
    "questionNumber": 3,
    "question": "Basic level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core integration engineer concepts."
  },
  {
    "careerSlug": "integration-engineer",
    "difficulty": "Basic",
    "questionNumber": 4,
    "question": "Basic level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core integration engineer concepts."
  },
  {
    "careerSlug": "integration-engineer",
    "difficulty": "Basic",
    "questionNumber": 5,
    "question": "Basic level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core integration engineer concepts."
  },
  {
    "careerSlug": "integration-engineer",
    "difficulty": "Medium",
    "questionNumber": 1,
    "question": "Medium level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core integration engineer concepts."
  },
  {
    "careerSlug": "integration-engineer",
    "difficulty": "Medium",
    "questionNumber": 2,
    "question": "Medium level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core integration engineer concepts."
  },
  {
    "careerSlug": "integration-engineer",
    "difficulty": "Medium",
    "questionNumber": 3,
    "question": "Medium level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core integration engineer concepts."
  },
  {
    "careerSlug": "integration-engineer",
    "difficulty": "Medium",
    "questionNumber": 4,
    "question": "Medium level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core integration engineer concepts."
  },
  {
    "careerSlug": "integration-engineer",
    "difficulty": "Medium",
    "questionNumber": 5,
    "question": "Medium level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core integration engineer concepts."
  },
  {
    "careerSlug": "integration-engineer",
    "difficulty": "Hard",
    "questionNumber": 1,
    "question": "Hard level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core integration engineer concepts."
  },
  {
    "careerSlug": "integration-engineer",
    "difficulty": "Hard",
    "questionNumber": 2,
    "question": "Hard level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core integration engineer concepts."
  },
  {
    "careerSlug": "integration-engineer",
    "difficulty": "Hard",
    "questionNumber": 3,
    "question": "Hard level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core integration engineer concepts."
  },
  {
    "careerSlug": "integration-engineer",
    "difficulty": "Hard",
    "questionNumber": 4,
    "question": "Hard level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core integration engineer concepts."
  },
  {
    "careerSlug": "integration-engineer",
    "difficulty": "Hard",
    "questionNumber": 5,
    "question": "Hard level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core integration engineer concepts."
  },
  {
    "careerSlug": "performance-engineer",
    "difficulty": "Basic",
    "questionNumber": 1,
    "question": "Basic level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core performance engineer concepts."
  },
  {
    "careerSlug": "performance-engineer",
    "difficulty": "Basic",
    "questionNumber": 2,
    "question": "Basic level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core performance engineer concepts."
  },
  {
    "careerSlug": "performance-engineer",
    "difficulty": "Basic",
    "questionNumber": 3,
    "question": "Basic level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core performance engineer concepts."
  },
  {
    "careerSlug": "performance-engineer",
    "difficulty": "Basic",
    "questionNumber": 4,
    "question": "Basic level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core performance engineer concepts."
  },
  {
    "careerSlug": "performance-engineer",
    "difficulty": "Basic",
    "questionNumber": 5,
    "question": "Basic level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core performance engineer concepts."
  },
  {
    "careerSlug": "performance-engineer",
    "difficulty": "Medium",
    "questionNumber": 1,
    "question": "Medium level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core performance engineer concepts."
  },
  {
    "careerSlug": "performance-engineer",
    "difficulty": "Medium",
    "questionNumber": 2,
    "question": "Medium level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core performance engineer concepts."
  },
  {
    "careerSlug": "performance-engineer",
    "difficulty": "Medium",
    "questionNumber": 3,
    "question": "Medium level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core performance engineer concepts."
  },
  {
    "careerSlug": "performance-engineer",
    "difficulty": "Medium",
    "questionNumber": 4,
    "question": "Medium level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core performance engineer concepts."
  },
  {
    "careerSlug": "performance-engineer",
    "difficulty": "Medium",
    "questionNumber": 5,
    "question": "Medium level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core performance engineer concepts."
  },
  {
    "careerSlug": "performance-engineer",
    "difficulty": "Hard",
    "questionNumber": 1,
    "question": "Hard level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core performance engineer concepts."
  },
  {
    "careerSlug": "performance-engineer",
    "difficulty": "Hard",
    "questionNumber": 2,
    "question": "Hard level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core performance engineer concepts."
  },
  {
    "careerSlug": "performance-engineer",
    "difficulty": "Hard",
    "questionNumber": 3,
    "question": "Hard level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core performance engineer concepts."
  },
  {
    "careerSlug": "performance-engineer",
    "difficulty": "Hard",
    "questionNumber": 4,
    "question": "Hard level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core performance engineer concepts."
  },
  {
    "careerSlug": "performance-engineer",
    "difficulty": "Hard",
    "questionNumber": 5,
    "question": "Hard level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core performance engineer concepts."
  },
  {
    "careerSlug": "release-engineer",
    "difficulty": "Basic",
    "questionNumber": 1,
    "question": "Basic level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core release engineer concepts."
  },
  {
    "careerSlug": "release-engineer",
    "difficulty": "Basic",
    "questionNumber": 2,
    "question": "Basic level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core release engineer concepts."
  },
  {
    "careerSlug": "release-engineer",
    "difficulty": "Basic",
    "questionNumber": 3,
    "question": "Basic level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core release engineer concepts."
  },
  {
    "careerSlug": "release-engineer",
    "difficulty": "Basic",
    "questionNumber": 4,
    "question": "Basic level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core release engineer concepts."
  },
  {
    "careerSlug": "release-engineer",
    "difficulty": "Basic",
    "questionNumber": 5,
    "question": "Basic level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core release engineer concepts."
  },
  {
    "careerSlug": "release-engineer",
    "difficulty": "Medium",
    "questionNumber": 1,
    "question": "Medium level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core release engineer concepts."
  },
  {
    "careerSlug": "release-engineer",
    "difficulty": "Medium",
    "questionNumber": 2,
    "question": "Medium level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core release engineer concepts."
  },
  {
    "careerSlug": "release-engineer",
    "difficulty": "Medium",
    "questionNumber": 3,
    "question": "Medium level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core release engineer concepts."
  },
  {
    "careerSlug": "release-engineer",
    "difficulty": "Medium",
    "questionNumber": 4,
    "question": "Medium level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core release engineer concepts."
  },
  {
    "careerSlug": "release-engineer",
    "difficulty": "Medium",
    "questionNumber": 5,
    "question": "Medium level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core release engineer concepts."
  },
  {
    "careerSlug": "release-engineer",
    "difficulty": "Hard",
    "questionNumber": 1,
    "question": "Hard level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core release engineer concepts."
  },
  {
    "careerSlug": "release-engineer",
    "difficulty": "Hard",
    "questionNumber": 2,
    "question": "Hard level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core release engineer concepts."
  },
  {
    "careerSlug": "release-engineer",
    "difficulty": "Hard",
    "questionNumber": 3,
    "question": "Hard level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core release engineer concepts."
  },
  {
    "careerSlug": "release-engineer",
    "difficulty": "Hard",
    "questionNumber": 4,
    "question": "Hard level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core release engineer concepts."
  },
  {
    "careerSlug": "release-engineer",
    "difficulty": "Hard",
    "questionNumber": 5,
    "question": "Hard level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core release engineer concepts."
  },
  {
    "careerSlug": "siem-analyst",
    "difficulty": "Basic",
    "questionNumber": 1,
    "question": "Basic level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core siem analyst concepts."
  },
  {
    "careerSlug": "siem-analyst",
    "difficulty": "Basic",
    "questionNumber": 2,
    "question": "Basic level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core siem analyst concepts."
  },
  {
    "careerSlug": "siem-analyst",
    "difficulty": "Basic",
    "questionNumber": 3,
    "question": "Basic level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core siem analyst concepts."
  },
  {
    "careerSlug": "siem-analyst",
    "difficulty": "Basic",
    "questionNumber": 4,
    "question": "Basic level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core siem analyst concepts."
  },
  {
    "careerSlug": "siem-analyst",
    "difficulty": "Basic",
    "questionNumber": 5,
    "question": "Basic level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core siem analyst concepts."
  },
  {
    "careerSlug": "siem-analyst",
    "difficulty": "Medium",
    "questionNumber": 1,
    "question": "Medium level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core siem analyst concepts."
  },
  {
    "careerSlug": "siem-analyst",
    "difficulty": "Medium",
    "questionNumber": 2,
    "question": "Medium level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core siem analyst concepts."
  },
  {
    "careerSlug": "siem-analyst",
    "difficulty": "Medium",
    "questionNumber": 3,
    "question": "Medium level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core siem analyst concepts."
  },
  {
    "careerSlug": "siem-analyst",
    "difficulty": "Medium",
    "questionNumber": 4,
    "question": "Medium level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core siem analyst concepts."
  },
  {
    "careerSlug": "siem-analyst",
    "difficulty": "Medium",
    "questionNumber": 5,
    "question": "Medium level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core siem analyst concepts."
  },
  {
    "careerSlug": "siem-analyst",
    "difficulty": "Hard",
    "questionNumber": 1,
    "question": "Hard level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core siem analyst concepts."
  },
  {
    "careerSlug": "siem-analyst",
    "difficulty": "Hard",
    "questionNumber": 2,
    "question": "Hard level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core siem analyst concepts."
  },
  {
    "careerSlug": "siem-analyst",
    "difficulty": "Hard",
    "questionNumber": 3,
    "question": "Hard level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core siem analyst concepts."
  },
  {
    "careerSlug": "siem-analyst",
    "difficulty": "Hard",
    "questionNumber": 4,
    "question": "Hard level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core siem analyst concepts."
  },
  {
    "careerSlug": "siem-analyst",
    "difficulty": "Hard",
    "questionNumber": 5,
    "question": "Hard level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core siem analyst concepts."
  },
  {
    "careerSlug": "systems-administrator",
    "difficulty": "Basic",
    "questionNumber": 1,
    "question": "Basic level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core systems administrator concepts."
  },
  {
    "careerSlug": "systems-administrator",
    "difficulty": "Basic",
    "questionNumber": 2,
    "question": "Basic level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core systems administrator concepts."
  },
  {
    "careerSlug": "systems-administrator",
    "difficulty": "Basic",
    "questionNumber": 3,
    "question": "Basic level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core systems administrator concepts."
  },
  {
    "careerSlug": "systems-administrator",
    "difficulty": "Basic",
    "questionNumber": 4,
    "question": "Basic level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core systems administrator concepts."
  },
  {
    "careerSlug": "systems-administrator",
    "difficulty": "Basic",
    "questionNumber": 5,
    "question": "Basic level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core systems administrator concepts."
  },
  {
    "careerSlug": "systems-administrator",
    "difficulty": "Medium",
    "questionNumber": 1,
    "question": "Medium level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core systems administrator concepts."
  },
  {
    "careerSlug": "systems-administrator",
    "difficulty": "Medium",
    "questionNumber": 2,
    "question": "Medium level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core systems administrator concepts."
  },
  {
    "careerSlug": "systems-administrator",
    "difficulty": "Medium",
    "questionNumber": 3,
    "question": "Medium level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core systems administrator concepts."
  },
  {
    "careerSlug": "systems-administrator",
    "difficulty": "Medium",
    "questionNumber": 4,
    "question": "Medium level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core systems administrator concepts."
  },
  {
    "careerSlug": "systems-administrator",
    "difficulty": "Medium",
    "questionNumber": 5,
    "question": "Medium level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core systems administrator concepts."
  },
  {
    "careerSlug": "systems-administrator",
    "difficulty": "Hard",
    "questionNumber": 1,
    "question": "Hard level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core systems administrator concepts."
  },
  {
    "careerSlug": "systems-administrator",
    "difficulty": "Hard",
    "questionNumber": 2,
    "question": "Hard level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core systems administrator concepts."
  },
  {
    "careerSlug": "systems-administrator",
    "difficulty": "Hard",
    "questionNumber": 3,
    "question": "Hard level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core systems administrator concepts."
  },
  {
    "careerSlug": "systems-administrator",
    "difficulty": "Hard",
    "questionNumber": 4,
    "question": "Hard level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core systems administrator concepts."
  },
  {
    "careerSlug": "systems-administrator",
    "difficulty": "Hard",
    "questionNumber": 5,
    "question": "Hard level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core systems administrator concepts."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "difficulty": "Basic",
    "questionNumber": 1,
    "question": "Basic level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core cloud security engineer concepts."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "difficulty": "Basic",
    "questionNumber": 2,
    "question": "Basic level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core cloud security engineer concepts."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "difficulty": "Basic",
    "questionNumber": 3,
    "question": "Basic level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core cloud security engineer concepts."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "difficulty": "Basic",
    "questionNumber": 4,
    "question": "Basic level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core cloud security engineer concepts."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "difficulty": "Basic",
    "questionNumber": 5,
    "question": "Basic level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core cloud security engineer concepts."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "difficulty": "Medium",
    "questionNumber": 1,
    "question": "Medium level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core cloud security engineer concepts."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "difficulty": "Medium",
    "questionNumber": 2,
    "question": "Medium level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core cloud security engineer concepts."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "difficulty": "Medium",
    "questionNumber": 3,
    "question": "Medium level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core cloud security engineer concepts."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "difficulty": "Medium",
    "questionNumber": 4,
    "question": "Medium level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core cloud security engineer concepts."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "difficulty": "Medium",
    "questionNumber": 5,
    "question": "Medium level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core cloud security engineer concepts."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "difficulty": "Hard",
    "questionNumber": 1,
    "question": "Hard level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core cloud security engineer concepts."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "difficulty": "Hard",
    "questionNumber": 2,
    "question": "Hard level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core cloud security engineer concepts."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "difficulty": "Hard",
    "questionNumber": 3,
    "question": "Hard level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core cloud security engineer concepts."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "difficulty": "Hard",
    "questionNumber": 4,
    "question": "Hard level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core cloud security engineer concepts."
  },
  {
    "careerSlug": "cloud-security-engineer",
    "difficulty": "Hard",
    "questionNumber": 5,
    "question": "Hard level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core cloud security engineer concepts."
  },
  {
    "careerSlug": "api-developer",
    "difficulty": "Basic",
    "questionNumber": 1,
    "question": "Basic level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core api developer concepts."
  },
  {
    "careerSlug": "api-developer",
    "difficulty": "Basic",
    "questionNumber": 2,
    "question": "Basic level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core api developer concepts."
  },
  {
    "careerSlug": "api-developer",
    "difficulty": "Basic",
    "questionNumber": 3,
    "question": "Basic level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core api developer concepts."
  },
  {
    "careerSlug": "api-developer",
    "difficulty": "Basic",
    "questionNumber": 4,
    "question": "Basic level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core api developer concepts."
  },
  {
    "careerSlug": "api-developer",
    "difficulty": "Basic",
    "questionNumber": 5,
    "question": "Basic level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core api developer concepts."
  },
  {
    "careerSlug": "api-developer",
    "difficulty": "Medium",
    "questionNumber": 1,
    "question": "Medium level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core api developer concepts."
  },
  {
    "careerSlug": "api-developer",
    "difficulty": "Medium",
    "questionNumber": 2,
    "question": "Medium level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core api developer concepts."
  },
  {
    "careerSlug": "api-developer",
    "difficulty": "Medium",
    "questionNumber": 3,
    "question": "Medium level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core api developer concepts."
  },
  {
    "careerSlug": "api-developer",
    "difficulty": "Medium",
    "questionNumber": 4,
    "question": "Medium level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core api developer concepts."
  },
  {
    "careerSlug": "api-developer",
    "difficulty": "Medium",
    "questionNumber": 5,
    "question": "Medium level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core api developer concepts."
  },
  {
    "careerSlug": "api-developer",
    "difficulty": "Hard",
    "questionNumber": 1,
    "question": "Hard level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core api developer concepts."
  },
  {
    "careerSlug": "api-developer",
    "difficulty": "Hard",
    "questionNumber": 2,
    "question": "Hard level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core api developer concepts."
  },
  {
    "careerSlug": "api-developer",
    "difficulty": "Hard",
    "questionNumber": 3,
    "question": "Hard level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core api developer concepts."
  },
  {
    "careerSlug": "api-developer",
    "difficulty": "Hard",
    "questionNumber": 4,
    "question": "Hard level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core api developer concepts."
  },
  {
    "careerSlug": "api-developer",
    "difficulty": "Hard",
    "questionNumber": 5,
    "question": "Hard level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core api developer concepts."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "difficulty": "Basic",
    "questionNumber": 1,
    "question": "Basic level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core technical sales engineer concepts."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "difficulty": "Basic",
    "questionNumber": 2,
    "question": "Basic level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core technical sales engineer concepts."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "difficulty": "Basic",
    "questionNumber": 3,
    "question": "Basic level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core technical sales engineer concepts."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "difficulty": "Basic",
    "questionNumber": 4,
    "question": "Basic level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core technical sales engineer concepts."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "difficulty": "Basic",
    "questionNumber": 5,
    "question": "Basic level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Basic level question tests understanding of core technical sales engineer concepts."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "difficulty": "Medium",
    "questionNumber": 1,
    "question": "Medium level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core technical sales engineer concepts."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "difficulty": "Medium",
    "questionNumber": 2,
    "question": "Medium level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core technical sales engineer concepts."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "difficulty": "Medium",
    "questionNumber": 3,
    "question": "Medium level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core technical sales engineer concepts."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "difficulty": "Medium",
    "questionNumber": 4,
    "question": "Medium level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core technical sales engineer concepts."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "difficulty": "Medium",
    "questionNumber": 5,
    "question": "Medium level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Medium level question tests understanding of core technical sales engineer concepts."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "difficulty": "Hard",
    "questionNumber": 1,
    "question": "Hard level quiz question 1 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core technical sales engineer concepts."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "difficulty": "Hard",
    "questionNumber": 2,
    "question": "Hard level quiz question 2 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core technical sales engineer concepts."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "difficulty": "Hard",
    "questionNumber": 3,
    "question": "Hard level quiz question 3 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core technical sales engineer concepts."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "difficulty": "Hard",
    "questionNumber": 4,
    "question": "Hard level quiz question 4 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core technical sales engineer concepts."
  },
  {
    "careerSlug": "technical-sales-engineer",
    "difficulty": "Hard",
    "questionNumber": 5,
    "question": "Hard level quiz question 5 for this career path. Multiple choice question testing practical knowledge.",
    "options": "[\"Option A - Correct answer explaining the concept\",\"Option B - Common misconception\",\"Option C - Related but incorrect concept\",\"Option D - Distracting similar-sounding answer\"]",
    "correctAnswer": 0,
    "explanation": "This Hard level question tests understanding of core technical sales engineer concepts."
  }
];
  
  for (const record of records) {
    await collection.create(record);
  }
  
  console.log(`Seeded ${records.length} careerQuizzes records.`);
}, (db) => {
  // This is a one-way migration
});