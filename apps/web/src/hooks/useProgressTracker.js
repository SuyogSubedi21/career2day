
import { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';
import { toast } from 'sonner';

export function useProgressTracker(role, totalQuestions, currentUser) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { [questionId]: 'correct' | 'incorrect' | 'skipped' }
  const [reviewList, setReviewList] = useState(new Set());
  const [startTime, setStartTime] = useState(Date.now());
  const [timeSpent, setTimeSpent] = useState({}); // { [questionId]: seconds }

  // Load local session if available
  useEffect(() => {
    const saved = localStorage.getItem(`quiz_progress_${role}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setAnswers(parsed.answers || {});
        setCurrentIndex(parsed.currentIndex || 0);
        setReviewList(new Set(parsed.reviewList || []));
      } catch (e) {
        console.error("Failed to parse local progress", e);
      }
    }
  }, [role]);

  // Persist to local storage on change
  useEffect(() => {
    const toSave = {
      answers,
      currentIndex,
      reviewList: Array.from(reviewList)
    };
    localStorage.setItem(`quiz_progress_${role}`, JSON.stringify(toSave));
  }, [answers, currentIndex, reviewList, role]);

  const recordTime = (questionId) => {
    const now = Date.now();
    const elapsed = Math.floor((now - startTime) / 1000);
    setTimeSpent(prev => ({ ...prev, [questionId]: (prev[questionId] || 0) + elapsed }));
    setStartTime(Date.now());
  };

  const nextQuestion = (currentQuestionId) => {
    if (currentQuestionId) recordTime(currentQuestionId);
    if (currentIndex < totalQuestions - 1) setCurrentIndex(prev => prev + 1);
  };

  const previousQuestion = (currentQuestionId) => {
    if (currentQuestionId) recordTime(currentQuestionId);
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const skipQuestion = (questionId) => {
    setAnswers(prev => ({ ...prev, [questionId]: 'skipped' }));
    nextQuestion(questionId);
  };

  const markCorrect = (questionId) => {
    setAnswers(prev => ({ ...prev, [questionId]: 'correct' }));
  };

  const markIncorrect = (questionId) => {
    setAnswers(prev => ({ ...prev, [questionId]: 'incorrect' }));
  };

  const markForReview = (questionId) => {
    setReviewList(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) newSet.delete(questionId);
      else newSet.add(questionId);
      return newSet;
    });
  };

  const calculateAccuracy = () => {
    const attempted = Object.values(answers).filter(a => a === 'correct' || a === 'incorrect').length;
    const correct = Object.values(answers).filter(a => a === 'correct').length;
    return { attempted, correct, accuracy: attempted === 0 ? 0 : Math.round((correct / attempted) * 100) };
  };

  const saveProgress = async () => {
    if (!currentUser) return;
    const stats = calculateAccuracy();
    if (stats.attempted === 0) return;

    try {
      // Find existing progress for this role
      const existing = await pb.collection('userProgress').getList(1, 1, {
        filter: `userId="${currentUser.id}" && courseId="${role}"`,
        $autoCancel: false
      });

      if (existing.items.length > 0) {
        const record = existing.items[0];
        await pb.collection('userProgress').update(record.id, {
          questionsAttempted: record.questionsAttempted + stats.attempted,
          correctAnswers: record.correctAnswers + stats.correct,
          accuracy: Math.round(((record.correctAnswers + stats.correct) / (record.questionsAttempted + stats.attempted)) * 100)
        }, { $autoCancel: false });
      } else {
        await pb.collection('userProgress').create({
          userId: currentUser.id,
          courseId: role,
          questionsAttempted: stats.attempted,
          correctAnswers: stats.correct,
          accuracy: stats.accuracy
        }, { $autoCancel: false });
      }
      
      // Update readiness score
      const readinessExists = await pb.collection('userReadiness').getList(1, 1, {
        filter: `userId="${currentUser.id}"`,
        $autoCancel: false
      });

      if (readinessExists.items.length > 0) {
        const rRec = readinessExists.items[0];
        const newAttempted = (rRec.totalQuestionsAttempted || 0) + stats.attempted;
        const newCorrect = Math.round(((rRec.totalAccuracy || 0) / 100) * (rRec.totalQuestionsAttempted || 0)) + stats.correct;
        const newAccuracy = newAttempted === 0 ? 0 : Math.round((newCorrect / newAttempted) * 100);
        
        await pb.collection('userReadiness').update(rRec.id, {
          totalQuestionsAttempted: newAttempted,
          totalAccuracy: newAccuracy,
          overallScore: newAccuracy,
          lastUpdated: new Date().toISOString()
        }, { $autoCancel: false });
      } else {
        await pb.collection('userReadiness').create({
          userId: currentUser.id,
          totalQuestionsAttempted: stats.attempted,
          totalAccuracy: stats.accuracy,
          overallScore: stats.accuracy,
          readinessLevel: stats.accuracy > 60 ? 'Ready' : 'NeedsPractice',
          lastUpdated: new Date().toISOString()
        }, { $autoCancel: false });
      }

      toast.success("Progress saved successfully");
    } catch (err) {
      console.error("Error saving progress:", err);
      toast.error("Failed to save progress to cloud");
    }
  };

  return {
    currentIndex,
    answers,
    reviewList,
    nextQuestion,
    previousQuestion,
    skipQuestion,
    markCorrect,
    markIncorrect,
    markForReview,
    calculateAccuracy,
    saveProgress
  };
}
