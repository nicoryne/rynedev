import { TimelineItemProps } from '@/components/timeline-item';

export const timelineData: TimelineItemProps[] = [
  // Experience
  {
    type: 'experience',
    title: 'Full Stack Developer',
    organization: 'Freelance',
    date: '2025 - Present',
    location: 'Cebu, Philippines',
    description:
      'Developing modern web applications for various clients including healthcare, education, and entertainment industries. Specializing in React, Next.js, and Node.js solutions.',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
  },

  // Education
  {
    type: 'education',
    title: 'Bachelor of Science in Information Technology',
    organization: 'Cebu Institute of Technology - University',
    date: 'Expected 2026',
    location: 'Cebu City, Philippines',
    description:
      'Focused on information systems, web development, project management, and cybersecurity.',
    skills: [
      'Java',
      'C',
      'C++',
      'Python',
      'Database Design',
      'Software Engineering',
      'Data Structures',
      'Project Management',
      'Cybersecurity'
    ]
  },

  // Certifications
  {
    type: 'certification',
    title: 'Level 3 TOPCIT (Test of Practical Competency in ICT)',
    organization:
      '정보통신기획평가원 (Korea Information and Communication Technology Planning and Evaluation Agency)',
    date: '2025',
    description:
      'Certification exam that demonstrates a high level of practical competency in various ICT fields.',
    skills: [
      'Software Development',
      'Database Management and Design',
      'Network and Information Security',
      'Project Management',
      'Problem-Solving and Critical Thinking'
    ]
  },

  // Awards
  {
    type: 'award',
    title: 'Champion of HackNow Cebu Institute of Technology - University Edition',
    organization: 'EY GDS Philippines & Cebu Institute of Technology - University',
    date: '2025',
    location: 'Cebu Institute of Technology - University',
    description:
      'Won the ServiceNow Hackathon, with Outbound. Leveraging the ServiceNow platform with AI integration to streamline how doctors secure and manage healthcare plans for patients after they are discharged.',
    skills: [
      'ServiceNow',
      'AI Integration',
      'Problem Solving',
      'Team Collaboration',
      'Pitching',
      'Innovation'
    ]
  },

  {
    type: 'award',
    title: 'Certificate of Achievement in ServiceNow Fundamentals',
    organization: 'EY GDS Philippines & Cebu Institute of Technology - University',
    date: '2025',
    description:
      'Recognized for outstanding performance and exemplary achievement during the ServiceNow Fundamentals training program.',
    skills: [
      'ServiceNow',
      'IT Service Management',
      'Problem Solving',
      'Collaboration',
      'Innovation'
    ]
  }
];
