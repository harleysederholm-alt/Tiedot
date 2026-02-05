export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  achievements: string[];
  category: 'ai' | 'security' | 'web' | 'data' | 'saas';
  isPrivate: boolean;
  isFlagship?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'chimera-1',
    name: 'Chimera-1',
    tagline: 'Neuro-symbolinen Hybridi-AGI',
    description: 'Suvereeni AGI-arkkitehtuuri, joka yhdistää Mamba-2 SSM:n (muisti), Liquid Neural Networksin (refleksit) ja MCTS:n (päättely).',
    techStack: ['Python', 'Mamba-2', 'Liquid Neural Networks', 'TenSEAL', 'YOLOv8'],
    achievements: ['Infinite Context Window', '<20ms latenssi', 'Homomorfinen salaus (TenSEAL)'],
    category: 'ai',
    isPrivate: true,
    isFlagship: false,
    githubUrl: 'https://github.com/harleysederholm-alt',
  },
  {
    id: 'aarni-ai',
    name: 'Aarni-ai',
    tagline: 'Tuotantotasoinen AI-työtila',
    description: 'Air-gapped AI-työtila puolustus- ja finanssialalle. Zero data egress, EU AI Act -yhteensopiva riskimallinnus ja kryptografinen allekirjoitus.',
    techStack: ['React 19', 'FastAPI', 'Phi-3.5', 'Whisper V3', 'Docker'],
    achievements: ['Hybrid RAG-haku', 'EU AI Act Risk Engine', 'One-click Docker deploy'],
    category: 'ai',
    isPrivate: true,
    isFlagship: false,
    githubUrl: 'https://github.com/harleysederholm-alt/Aarni-ai',
  },
  {
    id: 'the-century-project',
    name: 'The Century Project',
    tagline: '100 teknistä moduulia LLM:istä kvanttilaskentaan',
    description: 'Massiivinen kokoelma Z3-verifioituja moduuleja. Sisältää kaiken konenäöstä ja luonnollisen kielen käsittelystä kryptografiaan.',
    techStack: ['Python', 'Z3', 'Q#', 'PyTorch', 'OpenCV'],
    achievements: ['Z3-verifioitu matemaattinen oikeellisuus', 'EU AI Act -validointi', 'Modulaarinen arkkitehtuuri'],
    category: 'ai',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt',
  },
  {
    id: 'project-genesis',
    name: 'Project Genesis',
    tagline: 'Fuusioreaktorin autonominen ohjaus',
    description: 'Liquid Neural Networks -pohjainen ohjausjärjestelmä plasman vakauden ylläpitoon. Test-Time Training (TTT) mahdollistaa adaptaation.',
    techStack: ['Python', 'Liquid Neural Networks', 'Simulation', 'Reinforcement Learning'],
    achievements: ['400 simulaatioaskelta', 'Plasmavakauden optimointi', 'Reaaliaikainen adaptaatio'],
    category: 'ai',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt',
  },
  {
    id: 'p07-sovereign',
    name: 'P07: Sovereign Supply Chain Digital Twin',
    tagline: 'Suvereeni huoltovarmuuden digitaalinen kaksonen',
    description: 'Matemaattisesti verifioitu (Z3) autonominen logistiikkajärjestelmä. Reaaliaikainen tilannekuva, geneettiset algoritmit reititykseen ja kelirikkosimulaatiot.',
    techStack: ['Python', 'FastAPI', 'NetworkX', 'Z3 Solver', 'Shapely', 'Digiroad'],
    achievements: ['120 reittivalidointia/sekunti', 'Geneettinen konvergenssi <45 sukupolvea', 'Deep Reality -sijoittelu'],
    category: 'ai',
    isPrivate: true,
    isFlagship: false,
    githubUrl: 'https://github.com/harleysederholm-alt',
  },
  {
    id: 'pienhankintavahti',
    name: 'Pienhankintavahti',
    tagline: 'Löydä julkiset ja yksityiset urakat ilman byrokratiaa',
    description: 'Suomen älykkäin markkinapaikka (SaaS), joka orkestroi Claude Codea ja Antigravitya julkisten hankintojen analysointiin.',
    techStack: ['Next.js', 'Supabase', 'Stripe', 'Claude Code', 'Antigravity'],
    achievements: ['98% AI-analyysin tarkkuus', 'Automaattinen tarjouspyyntöjen tulkinta', 'Ilman byrokratiaa -lupaus'],
    category: 'saas',
    isPrivate: true,
    isFlagship: false,
    githubUrl: 'https://github.com/harleysederholm-alt/Pienhankintavahti',
    liveUrl: 'https://pienhankintavahti.fi',
  },
  {
    id: 'valo',
    name: 'VALO',
    tagline: 'Yhteiskunnallinen tilanneymmärrysjärjestelmä',
    description: 'Symbioottinen Event-Driven -arkkitehtuuri, joka integroi yli 50 julkista rajapintaa reaaliaikaiseen tilannekuvaan.',
    techStack: ['Apache Kafka', 'Docker', 'WebSockets', 'Redis', 'Python'],
    achievements: ['50+ julkista APIa', 'Reaaliaikainen RAG-assistentti', 'Mikro-palveluarkkitehtuuri'],
    category: 'data',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt/VALO',
  },
  {
    id: 'repoblueprint-ai',
    name: 'RepoBlueprint AI',
    tagline: 'Arkkitehtuurimoottori repositorioille',
    description: 'Yhdistää AST-parsinnan (Tree-sitter) ja paikalliset LLM:t (Ollama) repositorioiden syväanalyysiin ja visualisointiin.',
    techStack: ['Python', 'Tree-sitter', 'Ollama', 'Mermaid.js', 'FastAPI'],
    achievements: ['Architecture Knowledge Graph', 'Blueprint Diff', 'Natural Language Queries'],
    category: 'ai',
    isPrivate: false,
    githubUrl: 'https://github.com/harleysederholm-alt/RepoBlueprint-AI',
  },
  {
    id: 'phantomi',
    name: 'Phantomi',
    tagline: 'End-to-End Salattu Viestintä',
    description: 'Zero-Trace -arkkitehtuuriin perustuva viestintäalusta. ECDH P-521 + AES-256-GCM -salaus ja haihtuvat viestit.',
    techStack: ['Node.js', 'Socket.io', 'Web Crypto API', 'React'],
    achievements: ['Client-side encryption', 'Ephemeral messages (TTL 60s)', 'Zero-Trace Architecture'],
    category: 'security',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt/Phantomi',
  },
  {
    id: 'diamondcli',
    name: 'DiamondCLI',
    tagline: 'Autonomous Refactoring Agent',
    description: 'Orkestroi koodin refaktorointia Gemini 2.0 Flash -mallilla. Self-Healing Code ja automatisoidut Pull Requestit.',
    techStack: ['Python', 'Gemini 2.0 Flash', 'LangChain', 'GitPython'],
    achievements: ['Self-Healing Code', 'Strict Typing', 'Multi-Repo Processing'],
    category: 'ai',
    isPrivate: false,
    githubUrl: 'https://github.com/harleysederholm-alt/DiamondCLI',
  },
];

// Aikajana (2011–2026)
export const timeline = [
  { year: '2010–2013', title: 'Datanomi', description: 'Tieto- ja viestintätekniikan perustutkinto, Tredu' },
  { year: '2011', title: 'Mikrotukihenkilö (harjoittelu)', description: 'Hopea Aurinko os: Verkkokaupan ylläpito, tuotekuvaus ja -editointi.' },
  { year: '2013', title: 'Mikrotukihenkilö', description: 'Tietokonepaja: IT-tuki, laiteasennukset ja tietoturva.' },
  { year: '2013–2014', title: 'Aliupseeri', description: 'Puolustusvoimat: Ryhmänjohtaja, SM-mitali tulenavauksessa.' },
  { year: '2019–2020', title: 'Varastotyöntekijä', description: 'Pääkaupunkiseudun Kierrätyskeskus Oy: Logistiikka ja laadunvarmistus.' },
  { year: '2022', title: 'Työkokeilu', description: 'Silta-Valmennusyhdistys ry: Työelämävalmiuksien kehittäminen.' },
  { year: '2025–Nykyhetki', title: 'Tekninen orkestroija & Perustaja', description: 'Funkyscbdkauppa.com: Tekninen arkkitehtuuri, digitaalinen strategia, 4.7M TikTok-näyttökertaa.' },
  { year: '2025–Nykyhetki', title: 'AI-rakentaja', description: 'P07, Chimera-1, Aarni-ai ja muut sovereign AI -hankkeet.' },
];

// Tekninen osaaminen
export const skills = {
  aiOrchestration: ['Claude Code', 'Google Antigravity', 'Agentic Workflows', 'Physics-Informed Neural Networks (PINNs)', 'Genetic Algorithms'],
  aiModels: ['Gemini', 'Claude', 'GPT', 'Mamba-2 SSM', 'Liquid Neural Networks', 'YOLOv8', 'Whisper V3'],
  development: ['Python (FastAPI, NetworkX)', 'Next.js', 'React 19', 'TypeScript', 'Docker', 'Z3 Solver'],
  securityData: ['Homomorphic Encryption (TenSEAL)', 'Web Crypto API', 'Apache Kafka', 'Redis', 'WebSockets', 'GDPR', 'EU AI Act'],
};

export const contact = {
  email: 'harley.sederholm@gmail.com',
  phone: '046 656 0357',
  github: 'https://github.com/harleysederholm-alt',
  linkedin: 'https://linkedin.com/in/harley-christian-sederholm-625966364',
  website: 'https://funkyscbdkauppa.com',
};
