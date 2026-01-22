export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  achievements: string[];
  category: 'ai' | 'security' | 'web' | 'data';
  isPrivate: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'resilientnav-ai',
    name: 'ResilientNav AI',
    tagline: 'GNSS Jamming Detection & Resilient Navigation',
    description: 'Mission-critical navigation system with ML-based jamming detection and multi-sensor fusion. Combines LSTM + XGBoost ensemble with 15-state Extended Kalman Filter for GPS-denied environments.',
    techStack: ['Python', 'PyTorch', 'XGBoost', 'FastAPI', 'WebSocket', 'Docker'],
    achievements: ['96.8% jamming detection accuracy', '159 tests passed', 'Real-time 3D dashboard'],
    category: 'ai',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt/ResilientNav-AI',
  },
  {
    id: 'diamondcli',
    name: 'DiamondCLI',
    tagline: 'Autonomous Code Refactoring Agent',
    description: 'Python-based autonomous agent powered by Gemini 2.0 Flash that orchestrates large-scale code refactoring across multiple repositories. Adds strict typing, JSDoc, and automated PR creation.',
    techStack: ['Python', 'Gemini 2.0 Flash', 'GitHub CLI', 'AST Analysis'],
    achievements: ['Multi-repo batch processing', 'Self-healing code', 'Automated Pull Requests'],
    category: 'ai',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt/DiamondCLI',
  },
  {
    id: 'promptmaster-slm',
    name: 'PromptMaster-SLM',
    tagline: 'The Cortex – Neural Control for Small Language Models',
    description: 'Neural interface for maximizing SLM potential through Visual Topology, Real-World Agency (filesystem + terminal access), and Precision Prompt Engineering. Achieves 70B-level performance from 3B models.',
    techStack: ['Next.js', 'React', 'Ollama', 'ReactFlow', 'TypeScript'],
    achievements: ['3B→70B performance scaling', 'Real-world tool execution', 'Monolith UI design system'],
    category: 'ai',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt/PromtEngineeringSLM',
  },
  {
    id: 'rekry-aly',
    name: 'RekryÄly 2026',
    tagline: 'Suomen Älykkäin Rekrytointialusta',
    description: 'AI-powered recruitment platform using Groq/Llama 3 for natural language job matching. Features AI-assisted profile creation, contextual job matching, and employer dashboards.',
    techStack: ['Next.js 14', 'Supabase', 'Groq Cloud API', 'TypeScript', 'Tailwind CSS'],
    achievements: ['AI candidate search', 'CV-to-profile automation', 'Mobile-first design'],
    category: 'web',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt/rekry-aly',
  },
  {
    id: 'valo',
    name: 'VALO',
    tagline: 'Yhteiskunnallinen Tilanneymmärrysjärjestelmä',
    description: 'Finland\'s leading open-data situational awareness system integrating 50+ real-time public APIs (traffic, weather, energy, news) into an intelligent, ethical, and scalable platform.',
    techStack: ['Python', 'Apache Kafka', 'Docker', 'WebSockets', 'Redis', 'LLM (RAG)'],
    achievements: ['50+ data source integration', 'Event-driven architecture', 'AI Co-Pilot assistant'],
    category: 'data',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt/VALO',
  },
  {
    id: 'repoblueprint-ai',
    name: 'RepoBlueprint AI',
    tagline: 'Architecture Engine for Any Codebase',
    description: 'Transforms repositories into comprehensive architecture models using AST parsing (Tree-sitter) and local LLMs (Ollama). Generates interactive C4 diagrams and natural language queries.',
    techStack: ['Python', 'FastAPI', 'Next.js', 'Tree-sitter', 'Ollama', 'NetworkX'],
    achievements: ['Automated C4 diagrams', 'Natural language architecture queries', 'Premium UI/UX'],
    category: 'ai',
    isPrivate: false,
    githubUrl: 'https://github.com/harleysederholm-alt/BluePrint',
  },
  {
    id: 'phantomi-website',
    name: 'Phantomi (Website)',
    tagline: 'Cinematic 3D Marketing for Zero-Trace Protocol',
    description: 'Ultra-immersive marketing website for the Phantomi encrypted messaging protocol. Features scroll-driven 3D scenes (Three.js), post-processing effects, and bilingual FI/EN support.',
    techStack: ['Next.js 15', 'React Three Fiber', 'Three.js', 'Framer Motion', 'TypeScript'],
    achievements: ['6-minute automated journey mode', 'Terminal Brutalist design', 'Full i18n support'],
    category: 'web',
    isPrivate: false,
    githubUrl: 'https://github.com/harleysederholm-alt/Phantomiverkkosivut',
  },
  {
    id: 'phantomi-messenger',
    name: 'Phantomi Messenger',
    tagline: 'Zero-Trace End-to-End Encrypted Messaging',
    description: 'Secure ephemeral messaging platform with military-grade encryption (ECDH P-521 + AES-256-GCM). Server acts as blind relay with RAM-only operation. Messages self-destruct after 60 seconds.',
    techStack: ['Node.js', 'Socket.io', 'Web Crypto API', 'Flutter', 'PWA'],
    achievements: ['Perfect Forward Secrecy', 'One-time invite links', 'Post-Quantum roadmap (Kyber)'],
    category: 'security',
    isPrivate: false,
    githubUrl: 'https://github.com/harleysederholm-alt/Viesti',
  },
  {
    id: 'verifiable-polymath',
    name: 'Verifiable Polymath',
    tagline: 'Neuro-Symbolic Physics Integrity Engine',
    description: 'Industrial-grade AI verification system combining Lean 4 formal proofs with Physics-Informed Neural Networks. Guarantees mathematical integrity for safety-critical applications.',
    techStack: ['PyTorch', 'Lean 4', 'Mamba-2 SSM', 'BitNet', 'Streamlit', 'Z3'],
    achievements: ['1.59ms avg latency', '>600 Hz verification', 'MHD violation detection'],
    category: 'ai',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt/verifiable-polymath',
  },
  {
    id: 'cvtekija',
    name: 'CV-Tekijä',
    tagline: 'GDPR-Compliant Local AI CV Builder',
    description: 'Modern CV builder with 100% client-side processing using WebLLM. Features AI text optimization, ATS compatibility analysis, and professional PDF export with Finnish localization.',
    techStack: ['Next.js 14', 'WebLLM', 'Zustand', 'PDF Renderer', 'TypeScript'],
    achievements: ['100% privacy (no server)', 'ATS compatibility checker', 'WebGPU AI inference'],
    category: 'web',
    isPrivate: false,
    githubUrl: 'https://github.com/harleysederholm-alt/cvtekija',
  },
];

export const timeline = [
  { year: '2013', title: 'Datanom', description: 'Valmistuminen ja uran alku' },
  { year: '2013-2018', title: 'Software Developer', description: 'IT-tuki, verkkosivut, ohjelmoinnin perusteet' },
  { year: '2018-2024', title: 'Full Stack Developer', description: 'Web-sovellukset, pilvi-infrastruktuuri, konsultointi' },
  { year: '2024-2026', title: 'AI Startup Founder', description: 'Autonomiset agentit, SLM-optimointi, tuotekehitys' },
];

export const skills = {
  ai: ['Gemini 3 Pro', 'Claude 4.5 Sonnet', 'GPT-OSS 120B', 'Ollama', 'LangChain', 'RAG'],
  languages: ['Python', 'TypeScript', 'Rust'],
  frontend: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  backend: ['FastAPI', 'Node.js', 'WebSocket', 'Kafka'],
  infra: ['Docker', 'Kubernetes', 'GitHub Actions', 'Vercel'],
  data: ['PostgreSQL', 'Supabase', 'Redis', 'Vector DBs'],
};

export const contact = {
  email: 'harley.sederholm@gmail.com',
  phone: '0466560357',
  github: 'https://github.com/harleysederholm-alt',
  linkedin: 'https://linkedin.com/in/harleysederholm',
};
