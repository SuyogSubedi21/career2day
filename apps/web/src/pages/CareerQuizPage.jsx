
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import pb from '@/lib/pocketbaseClient';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';
import FeatureLockWrapper from '@/components/FeatureLockWrapper.jsx';
import { useSubscription } from '@/hooks/useSubscription.js';

const questions = [
  {
    question: "What type of tasks do you enjoy most?",
    options: [
      { text: "Analyzing numbers and finding patterns", career: "data-analyst" },
      { text: "Building logic and writing code", career: "software-engineer" },
      { text: "Automating processes and managing systems", career: "devops-engineer" }
    ]
  },
  {
    question: "How do you prefer to solve problems?",
    options: [
      { text: "Using data to prove a hypothesis", career: "data-analyst" },
      { text: "Creating a new tool or application", career: "software-engineer" },
      { text: "Optimizing existing infrastructure for speed", career: "devops-engineer" }
    ]
  },
  {
    question: "Which tool sounds most interesting to learn?",
    options: [
      { text: "SQL & Tableau", career: "data-analyst" },
      { text: "React & Node.js", career: "software-engineer" },
      { text: "Docker & Kubernetes", career: "devops-engineer" }
    ]
  }
];

const CareerQuizPage = () => {
  const { isPremium } = useSubscription();
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState({ 'data-analyst': 0, 'software-engineer': 0, 'devops-engineer': 0 });
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (career) => {
    const newScores = { ...scores, [career]: scores[career] + 1 };
    setScores(newScores);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      finishQuiz(newScores);
    }
  };

  const finishQuiz = async (finalScores) => {
    setShowResults(true);
    const topCareer = Object.keys(finalScores).reduce((a, b) => finalScores[a] > finalScores[b] ? a : b);
    
    try {
      await pb.collection('quizResults').create({
        userId: pb.authStore.model.id,
        scores: finalScores,
        topCareers: [topCareer]
      }, { $autoCancel: false });
      toast.success('Quiz results saved!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 space-y-8 min-h-screen pt-24">
      <Helmet><title>Career Quiz - CareerFlow</title></Helmet>
      
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold flex items-center justify-center gap-3">
          Career Quiz
          {!isPremium && <Lock className="w-8 h-8 text-amber-500" />}
        </h1>
        <p className="text-muted-foreground mt-2">Find out which tech career suits you best.</p>
      </div>

      <FeatureLockWrapper>
        {showResults ? (
          <div className="text-center space-y-8 py-8">
            <h2 className="text-4xl font-bold">Your Top Match</h2>
            <div className="bg-card border border-border/50 p-8 rounded-3xl shadow-lg">
              <h2 className="text-3xl font-bold text-primary mb-4">
                {Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b).replace('-', ' ').toUpperCase()}
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">Based on your answers, this career path aligns best with your interests and problem-solving style.</p>
              <Button asChild size="lg" className="rounded-xl px-8 shadow-lg shadow-primary/20">
                <Link to={`/career-roadmaps/${Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b)}`}>
                  View Roadmap
                </Link>
              </Button>
            </div>
            <Button variant="outline" onClick={() => { setCurrentQ(0); setScores({ 'data-analyst': 0, 'software-engineer': 0, 'devops-engineer': 0 }); setShowResults(false); }} className="rounded-full px-8">
              Retake Quiz
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex justify-between text-sm font-bold text-muted-foreground mb-2">
              <span>Question {currentQ + 1} of {questions.length}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 mb-8 overflow-hidden">
              <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: `${((currentQ) / questions.length) * 100}%` }} />
            </div>

            <motion.div 
              key={currentQ}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card border border-border/50 p-8 rounded-3xl space-y-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold leading-relaxed">{questions[currentQ].question}</h2>
              <div className="space-y-3">
                {questions[currentQ].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(opt.career)}
                    className="w-full text-left p-5 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 font-medium"
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </FeatureLockWrapper>
    </div>
  );
};

export default CareerQuizPage;
