import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const colors = ['#2563eb', '#16a34a', '#f59e0b', '#dc2626', '#7c3aed'];

const chartConfigs = {
  'how-to-follow-a-career-roadmap-without-getting-overwhelmed': {
    title: 'Weekly roadmap balance',
    description: 'A practical roadmap works best when learning, building, review, and applications stay connected.',
    type: 'bar',
    data: [
      { label: 'Learn', value: 35 },
      { label: 'Build', value: 30 },
      { label: 'Review', value: 15 },
      { label: 'Apply', value: 20 }
    ]
  },
  'cv-mistakes-that-stop-good-candidates-getting-interviews': {
    title: 'CV clarity impact',
    description: 'Recruiter confidence rises when CV claims are tied to tools, outcomes, and readable project proof.',
    type: 'bar',
    data: [
      { label: 'Generic claims', value: 28 },
      { label: 'Tool evidence', value: 58 },
      { label: 'Project proof', value: 76 },
      { label: 'Outcome bullets', value: 88 }
    ]
  },
  'how-to-practice-interview-questions-so-answers-sound-real': {
    title: 'Interview practice improvement',
    description: 'Answers usually improve when candidates move from memorizing to project-based practice.',
    type: 'line',
    data: [
      { label: 'Session 1', value: 35 },
      { label: 'Session 2', value: 48 },
      { label: 'Session 3', value: 61 },
      { label: 'Session 4', value: 72 },
      { label: 'Session 5', value: 84 }
    ]
  },
  'how-to-become-an-ai-engineer-with-a-job-ready-portfolio': {
    title: 'AI portfolio evidence mix',
    description: 'A stronger AI portfolio shows more than notebooks: evaluation, API thinking, and product reliability matter.',
    type: 'bar',
    data: [
      { label: 'Notebook', value: 45 },
      { label: 'Evaluation', value: 70 },
      { label: 'API', value: 62 },
      { label: 'Monitoring', value: 54 },
      { label: 'Writeup', value: 80 }
    ]
  },
  'frontend-engineer-roadmap-from-html-to-production-ui': {
    title: 'Frontend readiness ladder',
    description: 'Frontend readiness grows as fundamentals become usable workflows with quality and polish.',
    type: 'line',
    data: [
      { label: 'HTML/CSS', value: 30 },
      { label: 'JS', value: 45 },
      { label: 'React', value: 62 },
      { label: 'APIs', value: 74 },
      { label: 'Quality', value: 86 }
    ]
  },
  'why-quizzes-improve-career-readiness-when-used-correctly': {
    title: 'Readiness score weighting',
    description: 'Quiz scores are useful when they are combined with roadmap progress and interview practice.',
    type: 'pie',
    data: [
      { label: 'Roadmap', value: 40 },
      { label: 'Quizzes', value: 35 },
      { label: 'Interview', value: 25 }
    ]
  },
  'portfolio-projects-that-make-a-cv-stronger': {
    title: 'Project strength signals',
    description: 'Projects become stronger when they show relevance, documentation, deployment, and interview stories.',
    type: 'bar',
    data: [
      { label: 'Role fit', value: 82 },
      { label: 'README', value: 72 },
      { label: 'Screenshots', value: 58 },
      { label: 'Deployed app', value: 68 },
      { label: 'CV bullet', value: 88 }
    ]
  },
  'ats-keywords-without-making-your-cv-sound-robotic': {
    title: 'ATS keyword quality',
    description: 'Keyword value increases when terms are placed inside honest, evidence-based CV bullets.',
    type: 'bar',
    data: [
      { label: 'Stuffed list', value: 35 },
      { label: 'Skills', value: 55 },
      { label: 'Projects', value: 78 },
      { label: 'Experience', value: 86 }
    ]
  },
  'what-job-ready-really-means-for-beginners': {
    title: 'Beginner readiness pillars',
    description: 'Job-ready beginners combine fundamentals, proof, communication, and application materials.',
    type: 'pie',
    data: [
      { label: 'Fundamentals', value: 30 },
      { label: 'Proof', value: 30 },
      { label: 'Communication', value: 20 },
      { label: 'Applications', value: 20 }
    ]
  },
  'how-to-prepare-for-your-first-90-days-in-a-tech-role': {
    title: 'First 90 days focus curve',
    description: 'The early ramp shifts from learning context to reliable contribution and visible ownership.',
    type: 'line',
    data: [
      { label: 'Day 1', value: 20 },
      { label: 'Day 15', value: 42 },
      { label: 'Day 30', value: 58 },
      { label: 'Day 60', value: 76 },
      { label: 'Day 90', value: 90 }
    ]
  }
};

export const getBlogInsightChart = (slug) => chartConfigs[slug] || null;

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-border bg-background px-3 py-2 text-sm shadow-lg">
      <div className="font-semibold text-foreground">{label || payload[0].name}</div>
      <div className="text-muted-foreground">{payload[0].value}%</div>
    </div>
  );
};

function renderChart(config) {
  if (config.type === 'pie') {
    return (
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={config.data}
            dataKey="value"
            nameKey="label"
            innerRadius={58}
            outerRadius={92}
            paddingAngle={3}
            label={({ label, value }) => `${label} ${value}%`}
          >
            {config.data.map((entry, index) => (
              <Cell key={entry.label} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  if (config.type === 'line') {
    return (
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={config.data} margin={{ top: 16, right: 16, bottom: 8, left: -16 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="label" tick={{ fontSize: 12 }} interval={0} />
          <YAxis tick={{ fontSize: 12 }} domain={[0, 100]} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 7 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={config.data} margin={{ top: 16, right: 16, bottom: 8, left: -16 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="label" tick={{ fontSize: 12 }} interval={0} />
        <YAxis tick={{ fontSize: 12 }} domain={[0, 100]} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
          {config.data.map((entry, index) => (
            <Cell key={entry.label} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default function BlogInsightCharts({ slug }) {
  const config = getBlogInsightChart(slug);

  if (!config) return null;

  return (
    <section className="mt-12" aria-labelledby="blog-insight-chart-title">
      <Card className="overflow-hidden rounded-xl border-border bg-card shadow-sm">
        <CardHeader className="border-b border-border bg-muted/30">
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <BarChart3 className="h-5 w-5" />
            </div>
            <div>
              <CardTitle id="blog-insight-chart-title" className="text-xl font-bold text-foreground">
                {config.title}
              </CardTitle>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{config.description}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="min-w-0 overflow-hidden">{renderChart(config)}</div>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {config.data.map((item, index) => (
              <div key={item.label} className="rounded-lg border border-border bg-background p-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: colors[index % colors.length] }} />
                  <span className="text-xs font-semibold text-muted-foreground">{item.label}</span>
                </div>
                <div className="mt-1 text-lg font-bold text-foreground">{item.value}%</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
