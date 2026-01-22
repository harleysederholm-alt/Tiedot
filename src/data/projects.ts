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
    id: 'pienhankintavahti',
    name: 'Pienhankintavahti',
    tagline: 'Löydä julkiset ja yksityiset urakat – ilman byrokratiaa',
    description: 'Suomen älykkäin markkinapaikka, joka yhdistää HILMA-ilmoitukset, ennakoidut budjettitiedot ja yritysten suorat tarjouspyynnöt. Rakennettu 100% orkestroimalla Claude Codea ja Antigravitya.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Groq/Llama 3', 'Stripe', 'Parallel Harvester'],
    achievements: ['98% AI-analyysin osumatarkkuus', 'Parallel Harvester Scaling', 'Early Bird Pricing + Stripe'],
    category: 'saas',
    isPrivate: true,
    isFlagship: true,
    githubUrl: 'https://github.com/harleysederholm-alt/Pienhankintavahti',
    liveUrl: 'https://pienhankintavahti.fi',
  },
  {
    id: 'resilientnav-ai',
    name: 'ResilientNav AI',
    tagline: 'GNSS-häirinnän tunnistus ja navigointi',
    description: 'Kriittinen navigointijärjestelmä, joka tunnistaa GPS-häirinnän koneoppimisella. Yhdistää LSTM + XGBoost -mallin ja 15-tilaisen Kalman-suodattimen GPS-riippumattomaan navigointiin.',
    techStack: ['Python', 'PyTorch', 'XGBoost', 'FastAPI', 'WebSocket', 'Docker'],
    achievements: ['96,8% simuloitu tunnistustarkkuus', '159 testiä läpäisty', 'Reaaliaikainen 3D-näkymä'],
    category: 'ai',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt/ResilientNav-AI',
  },
  {
    id: 'diamondcli',
    name: 'DiamondCLI',
    tagline: 'Autonominen koodin refaktorointiagentti',
    description: 'Python-pohjainen autonominen agentti, joka käyttää Gemini 2.0 Flashia suorittamaan laajamittaista koodin refaktorointia useissa repositoryissa samanaikaisesti.',
    techStack: ['Python', 'Gemini 2.0 Flash', 'GitHub CLI', 'AST-analyysi'],
    achievements: ['Multi-repo -käsittely', 'Itsekorjautuva koodi', 'Automaattiset Pull Requestit'],
    category: 'ai',
    isPrivate: false,
    githubUrl: 'https://github.com/harleysederholm-alt/DiamondCLI',
  },
  {
    id: 'promptmaster-slm',
    name: 'PromptMaster-SLM',
    tagline: 'Pienten kielimallien ohjausjärjestelmä',
    description: 'Neuraalinen käyttöliittymä pienten kielimallien potentiaalin maksimointiin visuaalisen topologian, tiedostojärjestelmän ja terminaalin kautta.',
    techStack: ['Next.js', 'React', 'Ollama', 'ReactFlow', 'TypeScript'],
    achievements: ['3B→70B suorituskykytaso', 'Reaaliaikainen työkalujen suoritus', 'Monolith-käyttöliittymä'],
    category: 'ai',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt/PromtEngineeringSLM',
  },
  {
    id: 'rekry-aly',
    name: 'RekryÄly 2026',
    tagline: 'Suomen älykkäin rekrytointialusta',
    description: 'AI-pohjainen rekrytointialusta, joka käyttää Groq/Llama 3:a luonnollisen kielen työnhakuun. Sisältää AI-avusteisen profiilin luonnin ja työnantajien hallintapaneelit.',
    techStack: ['Next.js 14', 'Supabase', 'Groq Cloud API', 'TypeScript', 'Tailwind CSS'],
    achievements: ['AI-kandidaattihaku', 'CV-profiili -automaatio', 'Mobiili-first -suunnittelu'],
    category: 'web',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt/rekry-aly',
  },
  {
    id: 'valo',
    name: 'VALO',
    tagline: 'Yhteiskunnallinen tilanneymmärrysjärjestelmä',
    description: 'Suomen johtava avoimen datan tilannekuvajärjestelmä, joka integroi yli 50 reaaliaikaista julkista API:a (liikenne, sää, energia, uutiset) älykkääksi ja eettiseksi alustaksi.',
    techStack: ['Python', 'Apache Kafka', 'Docker', 'WebSockets', 'Redis', 'LLM (RAG)'],
    achievements: ['50+ datalähdettä', 'Tapahtumapohjainen arkkitehtuuri', 'AI Co-Pilot -avustaja'],
    category: 'data',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt/VALO',
  },
  {
    id: 'repoblueprint-ai',
    name: 'Blueprint',
    tagline: 'Koodin arkkitehtuurivisualisointi',
    description: 'Muuntaa repositoryt kattaviksi arkkitehtuurimalleiksi käyttäen AST-parsintaa (Tree-sitter) ja paikallisia LLM:iä (Ollama). Generoi interaktiivisia C4-kaavioita.',
    techStack: ['Python', 'FastAPI', 'Next.js', 'Tree-sitter', 'Ollama', 'NetworkX'],
    achievements: ['Automaattiset C4-kaaviot', 'Luonnollisen kielen arkkitehtuurikyselyt', 'Premium UI/UX'],
    category: 'ai',
    isPrivate: false,
    githubUrl: 'https://github.com/harleysederholm-alt/Blueprint',
  },
  {
    id: 'phantomi-website',
    name: 'Phantomiverkkosivut',
    tagline: 'Elokuvallinen 3D-markkinointisivusto',
    description: 'Ultra-immersiivinen markkinointisivusto Phantomi-viestiprotokollalle. Sisältää scroll-ohjatut 3D-kohtaukset (Three.js), jälkikäsittelyefektit ja kaksikielisen tuen.',
    techStack: ['Next.js 15', 'React Three Fiber', 'Three.js', 'Framer Motion', 'TypeScript'],
    achievements: ['6 minuutin automaattinen matka', 'Terminal Brutalist -design', 'Täysi i18n-tuki'],
    category: 'web',
    isPrivate: false,
    githubUrl: 'https://github.com/harleysederholm-alt/Phantomiverkkosivut',
  },
  {
    id: 'phantomi-messenger',
    name: 'Phantomi',
    tagline: 'Jäljetön päästä päähän -salattu viestintä',
    description: 'Turvallinen häviävä viestintäalusta sotilasluokan salauksella (ECDH P-521 + AES-256-GCM). Palvelin toimii sokeana välittäjänä RAM-muistissa. Viestit tuhoutuvat 60 sekunnissa.',
    techStack: ['Node.js', 'Socket.io', 'Web Crypto API', 'Dart/Flutter', 'PWA'],
    achievements: ['Perfect Forward Secrecy', 'Kertakäyttölinkit', 'Post-Quantum -roadmap (Kyber)'],
    category: 'security',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt/Phantomi',
  },
  {
    id: 'verifiable-polymath',
    name: 'verifiable-polymath',
    tagline: 'Neuro-symbolinen fysiikan eheysjärjestelmä',
    description: 'Teollisuustason AI-verifiointijärjestelmä, joka yhdistää Lean 4 -formaaliset todistukset fysiikkatietoisiin neuroverkkoihin. Takaa matemaattisen eheyden turvallisuuskriittisissä sovelluksissa.',
    techStack: ['Python', 'PyTorch', 'Lean 4', 'Mamba-2 SSM', 'Streamlit', 'Z3'],
    achievements: ['1,59 ms keskimääräinen latenssi', '>600 Hz verifiointi', 'MHD-rikkomusten tunnistus'],
    category: 'ai',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt/verifiable-polymath',
  },
  {
    id: 'cvtekija',
    name: 'cvtekija',
    tagline: 'GDPR-yhteensopiva paikallinen AI-CV-rakentaja',
    description: 'Moderni CV-rakentaja 100% selainpuolen käsittelyllä käyttäen WebLLM:ää. Sisältää AI-tekstin optimoinnin, ATS-yhteensopivuusanalyysin ja ammattimaisen PDF-viennin.',
    techStack: ['Next.js 14', 'WebLLM', 'Zustand', 'PDF Renderer', 'TypeScript'],
    achievements: ['100% yksityisyys (ei palvelinta)', 'ATS-yhteensopivuustarkistus', 'WebGPU AI -päättely'],
    category: 'web',
    isPrivate: false,
    githubUrl: 'https://github.com/harleysederholm-alt/cvtekija',
  },
];

// VAHVISTETTU AIKAJANA (SUOMEKSI)
export const timeline = [
  { year: '2011–2013', title: 'Datanomi', description: 'Tieto- ja viestintätekniikan perustutkinto, Tredu' },
  { year: '2013–2014', title: 'Asepalvelus (Aliupseeri)', description: 'SM-mitali tulenavauksessa' },
  { year: '2019', title: 'Varastotyöntekijä', description: 'Helsingin Kierrätyskeskus, Espoo' },
  { year: 'Maaliskuu 2025 →', title: 'Markkinointijohtaja & Perustaja', description: 'Funkyscbdkauppa.com – 4,7M TikTok-näyttökertaa' },
  { year: '2025–2026', title: 'AI Builder & Technical Orchestrator', description: '11 AI-projektia orkestroimalla Claude Code & Antigravity' },
];

// PÄIVITETTY 2026 OSAAMINEN (SUOMEKSI + IT-INFRA)
export const skills = {
  aiModels: ['Gemini 3 Pro', 'Gemini 3 Flash', 'Claude 4.5 Sonnet (Thinking)', 'Claude 4.5 Opus', 'GPT-OSS 120B', 'Ollama'],
  orchestration: ['Claude Code', 'Google Antigravity', 'Agentic Workflows', 'Prompt Engineering'],
  languages: ['Python', 'TypeScript', 'JavaScript'],
  frontend: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  backend: ['FastAPI', 'Node.js', 'WebSocket', 'Supabase'],
  infra: ['Docker', 'GitHub Actions', 'Vercel', 'Stripe'],
  itInfra: ['Windows', 'Microsoft 365', 'Google Workspace', 'IT-tuki'],
};

export const contact = {
  email: 'harley.sederholm@gmail.com',
  phone: '0466560357',
  github: 'https://github.com/harleysederholm-alt',
  website: 'https://funkyscbdkauppa.com',
};
