
import { useState, useEffect, useCallback } from 'react';
import { getQuestionsByCareer } from '@/lib/interviewQuestionsData.js';

export function useInterviewQuestions(careerSlug, initialQuestionNumber = 1) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const fetchedQuestions = getQuestionsByCareer(careerSlug);
    setQuestions(fetchedQuestions);
    
    const validIndex = Math.max(0, Math.min(initialQuestionNumber - 1, fetchedQuestions.length - 1));
    setCurrentIndex(validIndex);
    setShowAnswer(false);
  }, [careerSlug, initialQuestionNumber]);

  const currentQuestion = questions[currentIndex] || null;
  const totalQuestions = questions.length;
  const questionNumber = currentIndex + 1;

  const currentAnswer = userAnswers[questionNumber] || '';

  const setAnswer = useCallback((text) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionNumber]: text
    }));
  }, [questionNumber]);

  const toggleShowAnswer = useCallback(() => {
    setShowAnswer(prev => !prev);
  }, []);

  const clearAnswer = useCallback(() => {
    setUserAnswers(prev => {
      const newAnswers = { ...prev };
      delete newAnswers[questionNumber];
      return newAnswers;
    });
  }, [questionNumber]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowAnswer(false);
    }
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
    }
  }, [currentIndex, totalQuestions]);

  const jumpToQuestion = useCallback((num) => {
    const index = parseInt(num, 10) - 1;
    if (index >= 0 && index < totalQuestions) {
      setCurrentIndex(index);
      setShowAnswer(false);
      return true;
    }
    return false;
  }, [totalQuestions]);

  return {
    currentQuestion,
    questionNumber,
    totalQuestions,
    answer: currentAnswer,
    showAnswer,
    setAnswer,
    toggleShowAnswer,
    clearAnswer,
    goToPrevious,
    goToNext,
    jumpToQuestion
  };
}
