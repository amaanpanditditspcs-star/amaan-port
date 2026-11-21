export interface Education {
  id: string;
  degree: string;
  institution: string;
  affiliation?: string;
  location: string;
  period: string;
  status?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: 'bsc-it',
    degree: 'B.Sc. in Information Technology',
    institution: 'Government S.P. College, Srinagar',
    affiliation: 'Cluster University of Srinagar',
    location: 'Srinagar',
    period: 'June 2024 to May 2027',
    status: 'Currently in the 5th semester',
  },
  {
    id: 'nilet',
    degree: 'Fundamentals of Information Security',
    institution: 'NILET',
    location: 'India',
    period: '1 December 2025 to 1 February 2026',
    description: 'Course and training.',
  },
  {
    id: 'vfx-diploma',
    degree: 'Diploma in VFX and Graphic Design',
    institution: 'Compix Multimedia, Srinagar',
    location: 'Srinagar',
    period: 'July 2021 to September 2023',
    description:
      'Specialisation in digital design, motion graphics and professional video editing workflows.',
  },
];
