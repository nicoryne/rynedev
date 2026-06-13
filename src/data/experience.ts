export interface Role {
  num: string;
  title: string;
  org: string;
  date: string;
  type: 'work' | 'education' | 'certification' | 'award';
}

const roleData: Omit<Role, 'num'>[] = [
  {
    title: 'ServiceNow Developer',
    org: 'EY GDS Philippines',
    date: 'Jun 2026 – Present',
    type: 'work',
  },
  {
    title: 'ServiceNow Intern',
    org: 'EY GDS Philippines',
    date: 'Feb 2026 – May 2026',
    type: 'work',
  },
  {
    title: 'Cloud Engineering Intern',
    org: 'Help.NGO',
    date: 'Nov 2025 – Feb 2026',
    type: 'work',
  },
  {
    title: 'CEL Website Head',
    org: 'CESAFI Esports League',
    date: 'Jan 2026 – May 2026',
    type: 'work',
  },
  {
    title: 'CEL Production Head',
    org: 'CESAFI Esports League',
    date: 'Mar 2023 – Dec 2025',
    type: 'work',
  },
  {
    title: 'Full Stack Developer',
    org: 'Freelance',
    date: 'Jan 2025 – May 2026',
    type: 'work',
  },
];

const certData: Omit<Role, 'num'>[] = [
  {
    title: 'PhilNITS FE Certification',
    org: 'PhilNITS',
    date: 'May 2026',
    type: 'certification',
  },
  {
    title: 'ServiceNow Certified Application Developer',
    org: 'ServiceNow / EY GDS',
    date: 'Apr 2026',
    type: 'certification',
  },
  {
    title: 'ServiceNow Certified System Administrator',
    org: 'ServiceNow / EY GDS',
    date: 'Apr 2026',
    type: 'certification',
  },
  {
    title: 'AWS Cloud Architecting',
    org: 'AWS Academy',
    date: 'Nov 2025',
    type: 'certification',
  },
  {
    title: 'AWS Partner Accreditation — Technical',
    org: 'AWS Partner Network',
    date: 'Nov 2025',
    type: 'certification',
  },
  {
    title: 'AWS Cloud Foundations',
    org: 'AWS Academy',
    date: 'Sep 2025',
    type: 'certification',
  },
  {
    title: 'TOPCIT Level 3 (12th & 13th)',
    org: 'IITP Korea',
    date: '2025',
    type: 'certification',
  },
];

export const roles: Role[] = roleData.map((role, index) => ({ ...role, num: (index + 1).toString().padStart(2, '0') }));
export const certifications: Role[] = certData.map((cert, index) => ({ ...cert, num: (index + 1).toString().padStart(2, '0') }));

export const education = {
  degree: 'Bachelor of Science in Information Technology',
  school: 'Cebu Institute of Technology — University',
  year: 'May 2026',
  location: 'Cebu City, Philippines',
};
