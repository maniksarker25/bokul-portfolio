
export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
{
  title: 'Languages',
  description: 'Core languages I reach for across the stack.',
  skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL']
},
{
  title: 'Frontend',
  description: 'Building fast, accessible, delightful interfaces.',
  skills: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'HTML5', 'Material UI', 'Ant Design', 'Shadcn UI']
},
{
  title: 'Backend',
  description: 'Reliable services and well-designed APIs.',
  skills: ['Node.js', 'Express.js', 'NestJS', 'GraphQL', 'REST API', 'Socket.IO', 'Redis']
},
{
  title: 'AI Engineering',
  description: 'LLM integrations and retrieval systems in production.',
  skills: ['OpenAI API', 'Claude API', 'Gemini API', 'LangChain', 'LangGraph', 'RAG', 'Prompt Engineering']
},
{
  title: 'Database',
  description: 'Modeling data for scale and correctness.',
  skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Pinecone', 'Qdrant', 'Prisma', 'Mongoose']
},
{
  title: 'Cloud & DevOps',
  description: 'Shipping and operating software with confidence.',
  skills: ['AWS', 'Docker', 'GitHub Actions', 'DigitalOcean', 'Firebase', 'CI/CD']
},
{
  title: 'Authentication',
  description: 'Secure identity and access flows.',
  skills: ['JWT', 'OAuth']
},
{
  title: 'Tools',
  description: 'Everyday craft and collaboration.',
  skills: ['Git']
}];


export const heroTech = [
'TypeScript',
'Node.js',
'React',
'Next.js',
'PostgreSQL',
'Docker',
'AWS',
'LangChain',
'GraphQL',
'Redis'];