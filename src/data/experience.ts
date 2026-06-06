export interface Role {
  num: string;
  title: string;
  org: string;
  date: string;
  type: 'work' | 'education' | 'certification' | 'award';
}

export const roles: Role[] = [
  {
    num: '01',
    title: 'ServiceNow Developer',
    org: 'EY GDS Philippines',
    date: 'Jun 2026 – Present',
    type: 'work',
  },
  {
    num: '02',
    title: 'ServiceNow Intern',
    org: 'EY GDS Philippines',
    date: 'Feb – Apr 2026',
    type: 'work',
  },
  {
    num: '03',
    title: 'Cloud Engineering Intern',
    org: 'Help.NGO',
    date: 'Nov 2025 – Feb 2026',
    type: 'work',
  },
  {
    num: '04',
    title: 'CEL Website Head',
    org: 'CESAFI Esports League',
    date: 'Jan 2026 – Present',
    type: 'work',
  },
  {
    num: '05',
    title: 'CEL Production Head',
    org: 'CESAFI Esports League',
    date: 'Oct 2023 – Apr 2025',
    type: 'work',
  },
  {
    num: '06',
    title: 'Full Stack Developer',
    org: 'Freelance',
    date: 'Jan 2025 – Present',
    type: 'work',
  },
];

export const certifications: Role[] = [
  {
    num: '01',
    title: 'PhilNITS FE Certification',
    org: 'PhilNITS',
    date: 'May 2026',
    type: 'certification',
  },
  {
    num: '02',
    title: 'ServiceNow Certified Application Developer',
    org: 'ServiceNow / EY GDS',
    date: 'Apr 2026',
    type: 'certification',
  },
  {
    num: '03',
    title: 'ServiceNow Certified System Administrator',
    org: 'ServiceNow / EY GDS',
    date: 'Apr 2026',
    type: 'certification',
  },
  {
    num: '04',
    title: 'AWS Cloud Architecting',
    org: 'AWS Academy',
    date: 'Nov 2025',
    type: 'certification',
  },
  {
    num: '05',
    title: 'AWS Partner Accreditation — Technical',
    org: 'AWS Partner Network',
    date: 'Nov 2025',
    type: 'certification',
  },
  {
    num: '06',
    title: 'AWS Cloud Foundations',
    org: 'AWS Academy',
    date: 'Sep 2025',
    type: 'certification',
  },
  {
    num: '07',
    title: 'TOPCIT Level 3 (12th & 13th)',
    org: 'IITP Korea',
    date: '2025',
    type: 'certification',
  },
];

export const education = {
  degree: 'Bachelor of Science in Information Technology',
  school: 'Cebu Institute of Technology — University',
  year: 'May 2026',
  location: 'Cebu City, Philippines',
};
