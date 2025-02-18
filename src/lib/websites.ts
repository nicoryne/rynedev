import { WebsiteCardProps } from '@/components/website-card';

export const websites: WebsiteCardProps[] = [
  {
    imageUrl: '/img/wbs-cel.webp',
    title: 'CESAFI Esports League',
    description:
      'View real-time esports schedule, standings, and statistics from the biggest esports league in Cebu',

    href: 'https://www.cesafiesportsleague.com/'
  },
  {
    imageUrl: '/img/wbs-noted.webp',
    title: 'Noted Musical Instruments',
    description: 'Local musical instrument and accessories store based in Cebu',
    href: 'https://noted-cebu.vercel.app/'
  },
  {
    imageUrl: '/img/wbs-rowena.webp',
    title: 'QM Rowena Portfolio',
    description: 'Portfolio site with real-time data fetching for gold prices.',
    href: 'https://qm-rowena.vercel.app/'
  }
];
