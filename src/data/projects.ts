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

];

export const skills = {
  languages: ['Python', 'TypeScript', 'C++', 'Rust', 'Go'],
  frameworks: ['Next.js 14', 'FastAPI', 'PyTorch', 'TensorFlow', 'React'],
  infrastructure: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Vercel'],
  specialized: ['Z3 Prover', 'LangChain', 'OpenAI API', 'Anthropic API'],
};

export const timeline = [
  {
    year: '2025–Nykyhetki',
    title: 'AI Solutions Specialist',
    company: 'Sovereign AI Infrastructure',
    description: 'Rakennan ja orkestroin itsenäisiä AI-agenttijärjestelmiä ja infrastruktuuria vaativiin käyttökohteisiin.',
  },
  {
    year: '2025–Nykyhetki',
    title: 'Markkinointijohtaja & Perustaja',
    company: 'Funkyscbdkauppa.com',
    description: 'Vastuussa markkinoinnista ja brändäyksestä. Saavutimme 4.7M näyttökertaa TikTokissa orgaanisella kasvulla.',
  },
  {
    year: '2019',
    title: 'Logistiikkatyöntekijä',
    company: 'Varastoalan toimijat',
    description: 'Logistiikkaprosessien suorittaminen ja varastonhallinta.',
  },
  {
    year: '2013–2014',
    title: 'Aliupseeri (Reservi)',
    company: 'Puolustusvoimat',
    description: 'Johtajakoulutus ja ryhmänjohtajan tehtävät.',
  },
  {
    year: '2010–2013',
    title: 'Datanomi',
    company: 'Turun Ammatti-instituutti',
    description: 'IT-alan perustutkinto, painottuen ohjelmistokehitykseen ja järjestelmiin.',
  },
];

export const contact = {
  email: 'harley.sederholm@gmail.com',
  phone: '0466560557',
  github: 'https://github.com/harleysederholm-alt',
  linkedin: 'https://linkedin.com/in/harley-sederholm',
  location: 'Turku, Finland',
};
