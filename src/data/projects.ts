export interface Project {
  num: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  stack: string;
  year: string;
  href: string;
}

export const projects: Project[] = [
  {
    num: '01',
    title: 'CESAFI Esports League',
    description: 'Real-time esports schedule, standings, and statistics platform for the biggest esports league in Cebu.',
    longDescription: 'Architected and launched a full-scale website revamp generating ~100,000 viewers within the first 30 days. Developed a custom Production Hub bridging web data with live broadcasts for vMix software with single-click functionality.',
    image: '/img/wbs-cel.webp',
    stack: 'Next.js / TS / PostgreSQL',
    year: '2026',
    href: 'https://www.cesafiesportsleague.com/',
  },
  {
    num: '02',
    title: 'The Elixir Skin Clinic',
    description: 'Services catalog, appointment booking, and client portal for an aesthetics clinic in Cebu.',
    longDescription: 'Built and deployed the clinic\'s first-ever commercial site, achieving a 92 Lighthouse SEO score, #1 in search ranking, and enabling online booking capabilities for the first time.',
    image: '/img/wbs-elixir.webp',
    stack: 'Next.js / TS / PostgreSQL',
    year: '2025',
    href: 'https://www.theelixiraesthetics.skin/',
  },
   {
    num: '03',
    title: 'STATHIS (AI-Powered Health System)',
    description: 'Privacy-first 1D CNN posture validation engine leveraging Google Pose Detection for biomechanical correction.',
    longDescription: 'Engineered a privacy-first 1D CNN (24.4M parameters) that processes spatio-temporal landmarks via Google Pose Detection ML Kit. Architected a hybrid posture validation engine combining ML with rule-based kinematic tracking. Led cross-platform mobile development using Spring Boot and Android Health Connect. Co-authored an international research paper (ICDTE 2025, Japan).',
    image: '/img/wbs-stathis.webp',
    stack: 'ONNX / Spring Boot / Android / ML Kit',
    year: '2025',
    href: '',
  },
  {
    num: '04',
    title: 'Alaga.ai',
    description: 'Offline-First AI Health Diagnostic & Triage App combining Decision Tree and Transformer hybrid architectures.',
    longDescription: 'Top 25 Finalist in the Philippine Startup Challenge (PSC). Integrates a hybrid Symptom Analysis Engine, CNN for image diagnosis, and MarianMT for localized translation. Designed to empower barangay health workers in low-connectivity areas through TFLite on-device inference.',
    image: '/img/wbs-alaga.webp',
    stack: 'TFLite / MobileNet / DistilBERT',
    year: '2025',
    href: '',
  },
  {
    num: '05',
    title: 'EYntern Arena',
    description: 'Gamified learning platform for ServiceNow certification exam preparation.',
    longDescription: 'A gamified platform designed to help EY GDS interns prepare for their ServiceNow certifications through interactive challenges and a competitive leaderboard.',
    image: '/img/wbs-eyntern-arena.webp',
    stack: 'Next.js / TS / PostgreSQL',
    year: '2026',
    href: 'https://eyntern-arena.ryne.dev/',
  },
  {
    num: '06',
    title: 'SOLE — University of San Carlos',
    description: 'Management platform for the Society of Language Enthusiasts with CES activities and points tracking.',
    longDescription: 'A custom management portal designed to streamline operations for the Society of Language Enthusiasts, tracking student CES activities and points systematically.',
    image: '/img/wbs-sole.webp',
    stack: 'Next.js / TS / PostgreSQL',
    year: '2025',
    href: 'https://sole.ryne.dev/',
  },
  {
    num: '07',
    title: 'Serial Kitten GFX Dashboard',
    description: 'Real-time data dashboard for a broadcasting company, used to send live data for broadcasts.',
    longDescription: 'A mission-critical dashboard utilized by a broadcasting company to feed live scores, stats, and match updates to broadcast graphics in real time.',
    image: '/img/wbs-serialkittendashboard.webp',
    stack: 'Next.js / TS / NoSQL',
    year: '2025',
    href: 'https://serialkitten-dashboard.ryne.dev/',
  },
  {
    num: '08',
    title: 'Noted Musical Instruments',
    description: 'E-commerce storefront for a local musical instrument and accessories store in Cebu.',
    longDescription: 'A sleek, fast-loading e-commerce platform built for a local musical instrument shop, providing a seamless browsing and shopping experience for local musicians.',
    image: '/img/wbs-noted.webp',
    stack: 'Next.js / Tailwind',
    year: '2025',
    href: 'https://noted-cebu.vercel.app/',
  },
  {
    num: '09',
    title: 'QM Rowena Portfolio',
    description: 'Portfolio site with real-time API data fetching for gold prices and GSAP animations.',
    longDescription: 'A uniquely crafted portfolio site leveraging GSAP for fluid, stunning micro-animations, integrated with a live API to fetch real-time gold prices dynamically.',
    image: '/img/wbs-rowena.webp',
    stack: 'Next.js / GSAP / API',
    year: '2025',
    href: 'https://qm-rowena.vercel.app/',
  },
];
