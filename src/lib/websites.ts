import { WebsiteCardProps } from '@/components/website-card';

export interface ExtendedWebsiteProps extends WebsiteCardProps {
  technologies?: string[];
}

export const websites: ExtendedWebsiteProps[] = [
  {
    imageUrl: '/img/wbs-elixir.webp',
    title: 'The Elixir Skin Clinic - Talisay and Minglanilla, Cebu',
    description: 'Browse services catalog, book appointment, and manage your own client portal.',
    href: 'https://www.theelixiraesthetics.skin/',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'React Query']
  },
  {
    imageUrl: '/img/wbs-sole.webp',
    title: 'Society of Language Enthusiasts (SOLE) University of San Carlos',
    description:
      'A management platform for the University of San Carlos Society of Language Enthusiasts (SOLE), where members can view CES activities, their points, and announcements.',
    href: 'https://www.sole.ryne.dev/',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'React Query',
      'Framer Motion'
    ]
  },
  {
    imageUrl: '/img/wbs-serialkittendashboard.webp',
    title: 'Serial Kitten GFX Dashboard',
    description:
      'A real-time data dashboard for Serial Kitten GFX, a major broadcasting company, used to send live data for their broadcasts.',
    href: 'https://www.serialkitten-dashboard.ryne.dev/',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'NoSQL']
  },
  {
    imageUrl: '/img/wbs-cel.webp',
    title: 'CESAFI Esports League',
    description:
      'View real-time esports schedule, standings, and statistics from the biggest esports league in Cebu.',
    href: 'https://www.cesafiesportsleague.com/',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL']
  },
  {
    imageUrl: '/img/wbs-noted.webp',
    title: 'Noted Musical Instruments',
    description: 'Local musical instrument and accessories store based in Cebu.',
    href: 'https://noted-cebu.vercel.app/',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion']
  },
  {
    imageUrl: '/img/wbs-rowena.webp',
    title: 'QM Rowena Portfolio',
    description: 'Portfolio site with real-time data fetching for gold prices.',
    href: 'https://qm-rowena.vercel.app/',
    technologies: ['Next.js', 'API Integration', 'Tailwind CSS', 'GSAP Animations']
  }
];
