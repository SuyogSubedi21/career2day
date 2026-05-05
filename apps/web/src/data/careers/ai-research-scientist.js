import { makeAiFamilyCareer } from './ai-family-career-builder.js';

export const aiResearchScientistCareer = makeAiFamilyCareer({
  slug: 'ai-research-scientist',
  name: 'AI Research Scientist',
  tagline: 'Advance machine learning methods through rigorous experiments, papers, prototypes, and scientific communication.',
  description: 'AI Research Scientists investigate new algorithms, architectures, training methods, evaluation techniques, and theoretical questions. The role requires strong math, experimentation, literature review, and communication.',
  demand: 'High',
  difficulty: 'Expert',
  beginnerFit: 'Low',
  time: '52-96 weeks',
  salaryLabel: '$120k-$240k+',
  salary: [{ level: 'Entry', low: 120, high: 155 }, { level: 'Mid', low: 155, high: 205 }, { level: 'Senior', low: 205, high: 280 }, { level: 'Lead', low: 260, high: 350 }],
  responsibilities: ['Read and critique research papers.', 'Design controlled experiments and ablations.', 'Prototype new model architectures or training methods.', 'Publish findings, write technical reports, and collaborate with engineering teams.'],
  core: ['linear algebra', 'probability', 'optimization', 'research methodology'],
  technical: ['deep learning architectures', 'experiment design', 'ablation studies', 'paper reproduction', 'statistical evaluation'],
  tools: ['PyTorch', 'JAX', 'Weights & Biases', 'LaTeX', 'Hugging Face', 'CUDA', 'Python'],
  soft: ['scientific writing', 'peer feedback', 'research judgment'],
  biggestMistake: 'Running impressive experiments without a clear hypothesis, baseline, ablation plan, or statistical interpretation.',
  roadmap: [
    phase('Beginner', 10, ['Linear algebra for vectors, matrices, gradients, and embeddings', 'Probability, distributions, expectation, variance, and maximum likelihood', 'Python research code with reproducible notebooks and clean plots'], ['Python', 'NumPy', 'PyTorch', 'Jupyter'], 'Reproduce a classic neural network experiment and explain every metric.', 'You understand the math and code behind basic ML experiments.', 'Write a short technical report for each reproduced result.'),
    phase('Intermediate', 14, ['Deep learning architectures: CNNs, RNNs, transformers, normalization, attention', 'Optimization: SGD, Adam, learning rate schedules, regularization, and loss surfaces', 'Reading papers with claims, assumptions, baselines, and limitations'], ['PyTorch', 'Hugging Face', 'Weights & Biases'], 'Reproduce a transformer paper result on a smaller dataset with tracked experiments.', 'You can read papers and reproduce core ideas responsibly.', 'Add ablations that isolate one design choice at a time.'),
    phase('Advanced', 18, ['Ablation studies, significance, robustness, and error analysis', 'Scaling behavior, data quality, compute constraints, and benchmark design', 'Research communication through figures, tables, and clear claims'], ['JAX optional', 'LaTeX', 'Weights & Biases'], 'Run an ablation study on a model architecture and write a paper-style report.', 'You can produce research-quality evidence instead of isolated demos.', 'Share the report with peers and revise based on critique.'),
    phase('Job-ready', 14, ['Research portfolio, preprint-style writing, code release, and presentation', 'Research scientist interviews: math, ML theory, paper critique, and experimental design', 'Collaboration with applied engineering teams'], ['GitHub', 'arXiv style template', 'Loom'], 'Publish one rigorous research reproduction and one original extension with code.', 'You can demonstrate research taste, rigor, and communication.', 'Prepare a research talk and practise paper critique questions.')
  ],
  projects: [
    project('Transformer Paper Reproduction', 'Reproduce a transformer result on a constrained dataset and document differences from the original.', ['paper reading', 'reproducibility', 'evaluation'], ['PyTorch', 'Hugging Face']),
    project('Ablation Study Report', 'Test how architecture, data size, learning rate, and regularization affect model behavior.', ['experiment design', 'statistics', 'visualization'], ['Weights & Biases', 'Python']),
    project('Benchmark Audit', 'Analyze a public benchmark for leakage, class imbalance, and metric limitations.', ['evaluation', 'critical thinking', 'research writing'], ['Python', 'LaTeX']),
    project('Original Method Extension', 'Modify a known model method and compare it against strong baselines.', ['model design', 'ablation', 'technical reporting'], ['PyTorch', 'CUDA optional'])
  ],
  analytics: { learningCurve: [3, 8, 16, 30, 46, 62, 78, 90], skills: [['Math', 94], ['DL', 90], ['Research', 92], ['Writing', 82], ['Code', 80], ['Eval', 88]] },
  topics: [
    t('linear algebra for ML', 'Mathematical foundations', ['NumPy', 'PyTorch'], 'Memorizing formulas without connecting them to model operations.', 'Explain attention as matrix operations.', 'Connect matrix operations to model behavior.'),
    t('optimization', 'Training dynamics', ['PyTorch', 'JAX'], 'Changing many hyperparameters at once.', 'Compare Adam and SGD on the same architecture.', 'Isolate variables in controlled experiments.'),
    t('paper critique', 'Research reading', ['papers', 'notes'], 'Accepting claims without checking baselines and limitations.', 'Review a paper method section and identify missing controls.', 'Evaluate claims against evidence, assumptions, and baselines.'),
    t('ablation design', 'Experimental rigor', ['Weights & Biases'], 'Calling a result causal without isolating factors.', 'Remove one architecture component and compare results.', 'Change one variable at a time and document the effect.'),
    t('transformer architecture', 'Deep learning systems', ['Hugging Face', 'PyTorch'], 'Using transformer libraries without understanding attention, masks, and embeddings.', 'Fine-tune a small transformer and inspect errors.', 'Understand architecture behavior before modifying it.'),
    t('benchmark validity', 'Evaluation science', ['Python', 'datasets'], 'Optimizing benchmark scores while ignoring leakage or distribution shift.', 'Audit a classification benchmark for label imbalance.', 'Check data quality and benchmark assumptions.'),
    t('statistical significance', 'Result interpretation', ['SciPy', 'R'], 'Overclaiming from one lucky run.', 'Run multiple seeds and report variance.', 'Use repeated runs and confidence intervals where practical.'),
    t('research code quality', 'Reproducibility', ['Git', 'Docker'], 'Publishing code that cannot reproduce figures.', 'Create scripts that regenerate tables from raw results.', 'Make experiments rerunnable and documented.'),
    t('scientific visualization', 'Communication', ['Matplotlib', 'LaTeX'], 'Making plots that look good but obscure uncertainty.', 'Plot learning curves with variance bands.', 'Make figures support a precise claim.'),
    t('research ethics', 'Responsible AI', ['model cards', 'data sheets'], 'Ignoring downstream misuse or subgroup failures.', 'Document risks for a generated text model.', 'State intended use, limits, and risk controls.')
  ]
});

function phase(phase, timelineWeeks, topics, tools, miniProject, expectedOutcome, nextAction) { return { phase, timelineWeeks, topics, tools, miniProject, expectedOutcome, nextAction }; }
function project(title, description, skillsUsed, toolsUsed) { return { title, description, skillsUsed, toolsUsed }; }
function t(name, skill, tools, mistake, example, correct) { return { name, skill, tools, mistake, example, correct }; }
