
export interface Project {
  title: string;
  description: string;
  stack: string[];
  architecture: string;
  challenge: string;
  github: string;
  demo: string;
  image: string;
}

export const projects: Project[] = [
{
  title: 'Atlas — RAG Knowledge Platform',
  description:
  'An enterprise knowledge assistant that answers questions over private documents with grounded citations, streaming responses, and role-based access.',
  stack: ['Next.js', 'LangGraph', 'OpenAI', 'Qdrant', 'PostgreSQL'],
  architecture:
  'Hybrid retrieval (vector + keyword) with a LangGraph orchestration layer, streaming SSE responses and a Postgres metadata store.',
  challenge:
  'Cut hallucinations to near-zero by enforcing citation-grounded answers and a re-ranking pass before generation.',
  github: 'https://github.com',
  demo: 'https://example.com',
  image:
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80'
},
{
  title: 'Pulse — Realtime Analytics',
  description:
  'A high-throughput analytics dashboard delivering sub-second live metrics for thousands of concurrent users.',
  stack: ['React', 'Node.js', 'Socket.IO', 'Redis', 'ClickHouse'],
  architecture:
  'Event ingestion pipeline with Redis streams, WebSocket fan-out, and incrementally aggregated materialized views.',
  challenge:
  'Sustained 50k events/sec while keeping p95 dashboard latency under 400ms through batched writes and back-pressure.',
  github: 'https://github.com',
  demo: 'https://example.com',
  image:
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'
},
{
  title: 'Ledger — Payments API',
  description:
  'A production-grade payments and billing service with idempotent transactions, webhooks, and audit-grade traceability.',
  stack: ['NestJS', 'PostgreSQL', 'Prisma', 'Docker', 'AWS'],
  architecture:
  'Double-entry ledger with idempotency keys, an outbox pattern for reliable webhooks, and blue-green deploys on AWS.',
  challenge:
  'Guaranteed exactly-once financial writes under retries using idempotency keys and transactional outbox delivery.',
  github: 'https://github.com',
  demo: 'https://example.com',
  image:
  'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1200&q=80'
}];


export const aiCapabilities = [
{
  title: 'LLM Integrations',
  description: 'Production integrations across OpenAI, Claude, and Gemini with graceful fallbacks and cost controls.'
},
{
  title: 'RAG Systems',
  description: 'Citation-grounded retrieval pipelines with hybrid search, re-ranking, and evaluation harnesses.'
},
{
  title: 'Agent Orchestration',
  description: 'Stateful multi-step agents built with LangChain and LangGraph for reliable tool use.'
},
{
  title: 'Prompt Engineering',
  description: 'Structured prompting, output schemas, and guardrails for deterministic, testable behavior.'
},
{
  title: 'Vector Databases',
  description: 'Embedding pipelines and vector stores with Pinecone and Qdrant tuned for recall and latency.'
},
{
  title: 'Production Reliability',
  description: 'Streaming, observability, and safety layers that make AI systems dependable at scale.'
}];


export const stats = [
{ value: 5, suffix: '+', label: 'Years Experience' },
{ value: 20, suffix: '+', label: 'Technologies' },
{ value: 50, suffix: '+', label: 'Completed Projects' },
{ value: 100, suffix: '%', label: 'Client Satisfaction' }];