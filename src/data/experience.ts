
export interface ExperienceItem {
  role: string;
  duration: string;
  current: boolean;
  summary: string;
  responsibilities: string[];
  stack: string[];
}

export const experience: ExperienceItem[] = [
{
  role: 'Senior Full Stack Engineer',
  duration: '2 Years – Present',
  current: true,
  summary:
  'Leading the design of scalable backend systems and AI-powered products end to end, while mentoring engineers and raising the quality bar across the team.',
  responsibilities: [
  'Design scalable backend architectures',
  'Build production-ready REST APIs',
  'Develop modern React & Next.js applications',
  'Design AI-powered applications',
  'Integrate OpenAI, Claude and Gemini APIs',
  'Build RAG systems using LangChain and LangGraph',
  'Optimize application performance',
  'Deploy applications using Docker and AWS',
  'Mentor developers and review code'],

  stack: ['TypeScript', 'Node.js', 'Next.js', 'React', 'LangChain', 'AWS', 'Docker', 'PostgreSQL']
},
{
  role: 'Full Stack Engineer',
  duration: '3 Years',
  current: false,
  summary:
  'Shipped modern web applications and resilient backend services, partnering closely with design to translate product intent into polished, performant experiences.',
  responsibilities: [
  'Built modern web applications',
  'Developed backend services',
  'Integrated third-party APIs',
  'Designed scalable databases',
  'Implemented authentication systems',
  'Improved application performance',
  'Worked closely with UI/UX teams'],

  stack: ['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'JWT']
}];


export const education = [
{
  degree: 'Bachelor of Science (BSc)',
  field: 'Computer Science & Engineering',
  school: 'Northern University Bangladesh',
  year: '2020'
}];