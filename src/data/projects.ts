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
    tagline: 'Löydä julkiset ja yksityiset urakat ilman byrokratiaa',
    description: 'Suomen älykkäin markkinapaikka, joka yhdistää HILMA-ilmoitukset, ennakoidut budjettitiedot ja yritysten suorat tarjouspyynnöt. Rakennettu orkestroimalla Claude Codea ja Antigravitya.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Groq/Llama 3', 'Stripe'],
    achievements: ['98% AI-analyysin osumatarkkuus', 'Parallel Harvester Scaling', 'Stripe-integraatio'],
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
    description: 'Kriittinen navigointijärjestelmä, joka tunnistaa GPS-häirinnän koneoppimisella. Yhdistää LSTM + XGBoost -mallin ja 15-tilaisen Kalman-suodattimen.',
    techStack: ['Python', 'PyTorch', 'XGBoost', 'FastAPI', 'Docker'],
    achievements: ['96,8% simuloitu tunnistustarkkuus', '159 testiä läpäisty', 'Reaaliaikainen 3D-näkymä'],
    category: 'ai',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt/ResilientNav-AI',
  },
  {
    id: 'verifiable-polymath',
    name: 'verifiable-polymath',
    tagline: 'Neuro-symbolinen fysiikan eheysjärjestelmä',
    description: 'Teollisuustason AI-verifiointijärjestelmä, joka yhdistää Lean 4 -formaaliset todistukset fysiikkatietoisiin neuroverkkoihin turvallisuuskriittisiin sovelluksiin.',
    techStack: ['Python', 'PyTorch', 'Lean 4', 'Mamba-2 SSM', 'Z3'],
    achievements: ['1,59 ms keskimääräinen latenssi', 'Yli 600 Hz verifiointi', 'MHD-rikkomusten tunnistus'],
    category: 'ai',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt/verifiable-polymath',
  },
  {
    id: 'sovereign-climate',
    name: 'Sovereign Climate Intelligence',
    tagline: 'NASA-tasoinen ilmastosimulaatio ja Digital Twin',
    description: 'v8.0 "Elite Command" -standardin ilmastomallintaja. Yhdistää 1D-EBM fysiikkamoottorin (Numba), Z3-formaalin verifioinnin ja elokuvallisen "Halo" -maapallon (Plotly 3D) nollaviiveellä.',
    techStack: ['Python', 'Streamlit', 'Numba', 'Z3 Solver', 'Plotly'],
    achievements: ['Zero-Lag 100v simulaatio (<2ms)', 'Military-Grade "Command Center" UI', 'Formal Physics Verification (Z3)'],
    category: 'ai',
    isPrivate: false,
    isFlagship: true,
    githubUrl: 'https://github.com/harleysederholm-alt/Sovereign-Climate-1D-EBM',
  },
  {
    id: 'diamondcli',
    name: 'DiamondCLI',
    tagline: 'Autonominen koodin refaktorointiagentti',
    description: 'Python-pohjainen autonominen agentti, joka käyttää Gemini 2.0 Flashia suorittamaan laajamittaista koodin refaktorointia useissa repositoryissa.',
    techStack: ['Python', 'Gemini 2.0 Flash', 'GitHub CLI', 'AST-analyysi'],
    achievements: ['Multi-repo -käsittely', 'Itsekorjautuva koodi', 'Automaattiset Pull Requestit'],
    category: 'ai',
    isPrivate: false,
    githubUrl: 'https://github.com/harleysederholm-alt/DiamondCLI',
  },
  {
    id: 'rekry-aly',
    name: 'RekryÄly 2026',
    tagline: 'Suomen älykkäin rekrytointialusta',
    description: 'AI-pohjainen rekrytointialusta, joka käyttää Groq/Llama 3:a luonnollisen kielen työnhakuun ja profiilien luontiin.',
    techStack: ['Next.js 14', 'Supabase', 'Groq Cloud API', 'TypeScript'],
    achievements: ['AI-kandidaattihaku', 'CV-profiili -automaatio', 'Mobiili-first -suunnittelu'],
    category: 'web',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt/rekry-aly',
  },
  {
    id: 'valo',
    name: 'VALO',
    tagline: 'Yhteiskunnallinen tilanneymmärrysjärjestelmä',
    description: 'Avoimen datan tilannekuvajärjestelmä, joka integroi yli 50 reaaliaikaista julkista API:a älykkääksi alustaksi.',
    techStack: ['Python', 'Apache Kafka', 'Docker', 'WebSockets', 'Redis'],
    achievements: ['50+ reaaliaikaista datalähdettä', 'Tapahtumapohjainen arkkitehtuuri', 'AI-avustaja'],
    category: 'data',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt/VALO',
  },
  {
    id: 'repoblueprint-ai',
    name: 'Blueprint',
    tagline: 'Koodin arkkitehtuurivisualisointi',
    description: 'Muuntaa repositoryt arkkitehtuurimalleiksi käyttäen AST-parsintaa ja paikallisia LLM:iä. Generoi interaktiivisia C4-kaavioita.',
    techStack: ['Python', 'FastAPI', 'Next.js', 'Tree-sitter', 'Ollama'],
    achievements: ['Automaattiset C4-kaaviot', 'Luonnollisen kielen kyselyt', 'Premium-käyttöliittymä'],
    category: 'ai',
    isPrivate: false,
    githubUrl: 'https://github.com/harleysederholm-alt/Blueprint',
  },
  {
    id: 'phantomi-website',
    name: 'Phantomiverkkosivut',
    tagline: 'Elokuvallinen 3D-markkinointisivusto',
    description: 'Immersiivinen markkinointisivusto Phantomi-viestiprotokollalle. Sisältää scroll-ohjatut 3D-kohtaukset ja kaksikielisen tuen.',
    techStack: ['Next.js 15', 'React Three Fiber', 'Three.js', 'Framer Motion'],
    achievements: ['6 minuutin automaattinen matka', 'Terminal Brutalist -design', 'Täysi i18n-tuki'],
    category: 'web',
    isPrivate: false,
    githubUrl: 'https://github.com/harleysederholm-alt/Phantomiverkkosivut',
  },
  {
    id: 'phantomi-messenger',
    name: 'Phantomi',
    tagline: 'Jäljetön päästä päähän -salattu viestintä',
    description: 'Turvallinen viestintäalusta sotilasluokan salauksella (ECDH P-521 + AES-256-GCM). Viestit tuhoutuvat automaattisesti.',
    techStack: ['Node.js', 'Socket.io', 'Web Crypto API', 'Dart/Flutter'],
    achievements: ['Perfect Forward Secrecy', 'Kertakäyttölinkit', 'Post-Quantum -valmius'],
    category: 'security',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt/Phantomi',
  },
  {
    id: 'promptmaster-slm',
    name: 'PromptMaster-SLM',
    tagline: 'Pienten kielimallien ohjausjärjestelmä',
    description: 'Agenttiarkkitehtuuri pienten kielimallien potentiaalin maksimointiin visuaalisen topologian ja reaaliaikaisen agenttiohjauksen avulla.',
    techStack: ['Next.js', 'React', 'Ollama', 'ReactFlow', 'TypeScript'],
    achievements: ['3B-mallin nosto 70B-tasolle', 'Reaaliaikainen työkalujen suoritus', 'Monolith-käyttöliittymä'],
    category: 'ai',
    isPrivate: true,
    githubUrl: 'https://github.com/harleysederholm-alt/PromtEngineeringSLM',
  },
  {
    id: 'cvtekija',
    name: 'cvtekija',
    tagline: 'Paikallinen AI-CV-rakentaja',
    description: 'GDPR-yhteensopiva CV-rakentaja, joka toimii 100% selaimessa käyttäen WebLLM:ää. Sisältää ATS-yhteensopivuusanalyysin.',
    techStack: ['Next.js 14', 'WebLLM', 'Zustand', 'PDF Renderer'],
    achievements: ['100% yksityisyys', 'ATS-yhteensopivuustarkistus', 'WebGPU-päättely'],
    category: 'web',
    isPrivate: false,
    githubUrl: 'https://github.com/harleysederholm-alt/cvtekija',
  },
];

// Aikajana (2011–2026)
export const timeline = [
  { year: '2011–2013', title: 'Datanomi', description: 'Tieto- ja viestintätekniikan perustutkinto, Tredu' },
  { year: '2013–2014', title: 'Aliupseeri', description: 'SM-mitali tulenavauksessa' },
  { year: '2019', title: 'Varastotyöntekijä', description: 'Helsingin Kierrätyskeskus' },
  { year: '2025', title: 'Markkinointijohtaja', description: 'Funkyscbdkauppa.com – 4,7M TikTok-näyttökertaa' },
  { year: '2025–2026', title: 'Tekoälyrakentaja', description: '11 AI-projektia orkestroimalla' },
];

// Tekninen osaaminen (minimalistinen jaottelu)
export const skills = {
  aiOrchestration: ['Claude Code', 'Google Antigravity', 'Agentic Workflows', 'Prompt Engineering'],
  aiModels: ['Gemini 3 Pro', 'Gemini 3 Flash', 'Claude 4.5 Sonnet', 'Claude 4.5 Opus', 'GPT-OSS 120B'],
  development: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'Supabase', 'Tailwind CSS', 'Stripe'],
  itFoundation: ['Windows', 'Microsoft 365', 'Google Workspace'],
};

export const contact = {
  email: 'harley.sederholm@gmail.com',
  phone: '0466560357',
  github: 'https://github.com/harleysederholm-alt',
  linkedin: 'https://www.linkedin.com/in/harley-christian-sederholm-625966364/',
  website: 'https://funkyscbdkauppa.com',
};
