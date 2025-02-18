import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nicolo Ryne Porter | Portfolio',
  description:
    'A freelance web developer from Cebu City. Building sweet sites, one hive at a time.',
  keywords: ['ryne', 'ryne dev', 'website', 'web developer', 'web developer freelance'],
  icons: {
    icon: [{ url: 'favicon.ico', href: 'favicon.ico' }]
  },
  openGraph: {
    title: 'Nicolo Ryne Porter | Portfolio',
    description:
      'A freelance web developer from Cebu City. Building sweet sites, one hive at a time.',
    url: '',
    siteName: 'Nicolo Ryne Porter | Portfolio',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'RYNE.DEV Website Banner'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rynedevph',
    title: 'RYNE.DEV',
    description:
      'A freelance web developer from Cebu City. Building sweet sites, one hive at a time.',
    images: ['/banner.png']
  },
  alternates: {
    canonical: ''
  },
  robots: {
    index: true,
    follow: true
  }
};
