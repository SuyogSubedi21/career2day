
import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Search, ChevronRight, BookOpen, Loader2, Sparkles, Target, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import pb from '@/lib/pocketbaseClient.js';
import { getAllCareersWithQuestions } from '@/lib/interviewQuestionsData.js';

export default function InterviewQuestionsListPage() {
  return (
    <div className="min-h-[100dvh] bg-background py-16 flex flex-col items-center justify-center">
      <Helmet>
        <title>Interview Questions | Career2Day</title>
      </Helmet>
      <div className="max-w-xl mx-auto text-center py-24">
        <h1 className="text-4xl font-bold mb-4">Interview Questions</h1>
        <p className="text-muted-foreground mb-8 text-lg">Coming Soon</p>
      </div>
    </div>
  );
}
