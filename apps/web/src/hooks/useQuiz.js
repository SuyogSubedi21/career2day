
import { useState, useCallback } from 'react';

export function useQuiz(questions = []) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]); 
  const [selectedOption, setSelectedOption] = useState(null);

  const selectAnswer = useCallback((optionId) => {
    if (selectedOption || !questions[currentIndex]) return;
    
    const isCorrect = optionId === questions[currentIndex].correctAnswer;
    setSelectedOption(optionId);
    
    setAnswers(prev => [...prev, {
      question: questions[currentIndex],
      selectedOption: optionId,
      isCorrect
    }]);
  }, [currentIndex, questions, selectedOption]);

  const nextQuestion = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
    }
  }, [currentIndex, questions.length]);

  const resetQuiz = useCallback(() => {
    setCurrentIndex(0);
    setAnswers([]);
    setSelectedOption(null);
  }, []);

  const calculateScore = useCallback(() => {
    return answers.filter(a => a.isCorrect).length;
  }, [answers]);

  return {
    currentQuestion: questions[currentIndex],
    currentIndex,
    totalQuestions: questions.length,
    selectedOption,
    answers,
    score: calculateScore(),
    isFinished: answers.length > 0 && answers.length === questions.length && selectedOption !== null,
    selectAnswer,
    nextQuestion,
    resetQuiz
  };
}
