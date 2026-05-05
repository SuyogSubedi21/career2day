import { makeAiFamilyCareer } from './ai-family-career-builder.js';

export const generativeAiEngineerCareer = makeAiFamilyCareer({
  slug: 'generative-ai-engineer',
  name: 'Generative AI Engineer',
  tagline: 'Build useful LLM and multimodal applications with retrieval, evaluation, safety, and product-quality UX.',
  description: 'Generative AI Engineers design AI workflows around large language models, retrieval systems, agents, evaluation sets, guardrails, and product integration. The role is closer to applied software engineering than prompt tinkering.',
  demand: 'Very high',
  difficulty: 'Advanced',
  beginnerFit: 'Moderate',
  time: '24-34 weeks',
  salaryLabel: '$110k-$210k+',
  salary: [{ level: 'Entry', low: 110, high: 135 }, { level: 'Mid', low: 135, high: 175 }, { level: 'Senior', low: 175, high: 230 }, { level: 'Lead', low: 220, high: 280 }],
  responsibilities: ['Design LLM workflows with retrieval, tools, prompts, and fallback behavior.', 'Create evaluation datasets and measure answer quality, grounding, latency, and cost.', 'Integrate AI features into product interfaces and backend services.', 'Document limitations, safety boundaries, and monitoring requirements.'],
  core: ['LLM application design', 'prompt engineering', 'retrieval augmented generation', 'AI evaluation'],
  technical: ['API integration', 'vector search', 'agent workflows', 'guardrails and safety', 'cost and latency optimization'],
  tools: ['OpenAI API', 'LangChain', 'LlamaIndex', 'Pinecone', 'PostgreSQL', 'FastAPI', 'Vercel AI SDK', 'Python'],
  soft: ['product judgment', 'risk communication', 'technical writing'],
  biggestMistake: 'Treating the prompt as the whole product instead of designing retrieval, evaluation, monitoring, UX, and fallback behavior.',
  roadmap: [
    phase('Beginner', 5, ['LLM basics: tokens, context windows, temperature, system prompts, and hallucination risk', 'Prompt patterns for extraction, classification, summarization, and structured output', 'API calls, JSON schemas, error handling, and safe logging'], ['OpenAI API', 'Python', 'Postman'], 'Build a document summarizer with structured JSON output and clear failure states.', 'You can call models safely and explain prompt behavior.', 'Add evaluation examples before building larger workflows.'),
    phase('Intermediate', 7, ['Embeddings, chunking, metadata, retrieval quality, and citation design', 'RAG architecture with source grounding, refusal behavior, and confidence limits', 'Evaluation sets for factuality, relevance, completeness, and tone'], ['vector database', 'LlamaIndex', 'LangChain', 'PostgreSQL'], 'Build a support assistant that cites policy documents and refuses unsupported answers.', 'You can build grounded AI features with measurable answer quality.', 'Create a test set and measure failures by category.'),
    phase('Advanced', 8, ['Tool use, function calling, agent routing, and workflow state', 'Safety filters, prompt injection defense, PII handling, and audit logs', 'Latency, streaming UX, caching, cost controls, and production monitoring'], ['FastAPI', 'Vercel AI SDK', 'Redis', 'LangSmith'], 'Ship an AI workflow with tools, traces, cost dashboard, and prompt injection tests.', 'You can operate GenAI features like production software.', 'Document risk controls and fallback paths.'),
    phase('Job-ready', 6, ['Portfolio case studies with architecture, eval results, limitations, and demo videos', 'GenAI system design interviews and product tradeoffs', 'Role-aware CV and interview practice'], ['GitHub', 'Loom', 'Career2Day CV Builder'], 'Publish two GenAI apps with evaluations, architecture diagrams, and measurable quality notes.', 'You can prove practical GenAI engineering ability.', 'Practise the full interview set and apply with case studies.')
  ],
  projects: [
    project('RAG Support Assistant', 'Build a retrieval assistant that cites documents, refuses unsupported answers, and records evaluation results.', ['RAG', 'evaluation', 'source grounding'], ['OpenAI API', 'vector database', 'Python']),
    project('AI Meeting Brief Generator', 'Convert notes into structured summaries, action items, risks, and follow-up messages.', ['structured output', 'prompt design', 'UX'], ['OpenAI API', 'React', 'FastAPI']),
    project('Prompt Injection Test Harness', 'Create adversarial tests for an AI assistant and document mitigations.', ['security thinking', 'guardrails', 'testing'], ['LangSmith', 'Python', 'JSON']),
    project('Cost-Aware AI Workflow', 'Compare model choices, caching, streaming, and retry logic for a production feature.', ['latency', 'cost control', 'monitoring'], ['Redis', 'Vercel AI SDK', 'OpenAI API'])
  ],
  analytics: { learningCurve: [8, 20, 36, 52, 66, 78, 88, 95], skills: [['LLM', 90], ['RAG', 86], ['Eval', 82], ['APIs', 78], ['Safety', 76], ['UX', 72]] },
  topics: [
    t('prompt design', 'Prompt engineering', ['OpenAI API', 'JSON schemas'], 'Writing long prompts without examples, constraints, or evaluation cases.', 'Create extraction prompts with schema validation.', 'Use clear instructions, examples, constraints, and test cases.'),
    t('RAG architecture', 'Retrieval augmented generation', ['Pinecone', 'LlamaIndex'], 'Indexing documents without checking chunk quality or citation accuracy.', 'Answer HR policy questions with source citations.', 'Evaluate retrieval quality before judging final answers.'),
    t('LLM evaluation', 'AI quality measurement', ['LangSmith', 'spreadsheets'], 'Relying on vibes instead of a test set.', 'Score 100 support answers for groundedness and completeness.', 'Create representative test cases with pass/fail criteria.'),
    t('function calling', 'Tool use', ['OpenAI API', 'FastAPI'], 'Letting the model invent tool outputs instead of validating calls.', 'Route user requests to calendar, CRM, or search tools.', 'Validate tool inputs and outputs against schemas.'),
    t('prompt injection defense', 'AI security', ['guardrail libraries', 'logs'], 'Assuming hidden system prompts cannot be attacked.', 'Test malicious documents inside a RAG index.', 'Treat user and retrieved content as untrusted input.'),
    t('structured output', 'Reliable generation', ['JSON schema', 'Zod'], 'Parsing free-form text when the product needs reliable fields.', 'Generate task objects from meeting notes.', 'Use schemas, validation, and retry behavior.'),
    t('multimodal workflows', 'Text and image AI', ['vision models', 'OCR'], 'Ignoring image quality, OCR uncertainty, and privacy.', 'Extract invoice fields from uploaded screenshots.', 'Validate extracted fields and expose uncertainty.'),
    t('latency optimization', 'Performance', ['streaming', 'Redis'], 'Making users wait for full responses when streaming or caching would help.', 'Stream a long answer while retrieving sources.', 'Measure time to first token and total cost.'),
    t('AI product UX', 'Human-centered AI', ['React', 'analytics'], 'Hiding uncertainty and making AI output look more authoritative than it is.', 'Design answer states with citations and correction options.', 'Show limits, sources, and user control.'),
    t('AI observability', 'Production monitoring', ['traces', 'dashboards'], 'Logging nothing because the demo works locally.', 'Trace prompts, retrieval, model, latency, cost, and user feedback.', 'Monitor quality, latency, cost, and failures.')
  ]
});

function phase(phase, timelineWeeks, topics, tools, miniProject, expectedOutcome, nextAction) { return { phase, timelineWeeks, topics, tools, miniProject, expectedOutcome, nextAction }; }
function project(title, description, skillsUsed, toolsUsed) { return { title, description, skillsUsed, toolsUsed }; }
function t(name, skill, tools, mistake, example, correct) { return { name, skill, tools, mistake, example, correct }; }
