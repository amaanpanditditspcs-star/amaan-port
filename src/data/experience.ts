export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  status?: 'current' | 'completed';
  description: string[];
  note?: string;
}

export const experience: Experience[] = [
  {
    id: 'trust-tours',
    role: 'Manager Member',
    company: 'Trust Tour and Travels (family business)',
    location: 'Rajbagh, Srinagar',
    period: 'March 2023 to Present',
    status: 'current',
    note: 'Alongside my studies',
    description: [
      'Oversee daily office operations including record-keeping, scheduling and staff coordination.',
      'Handle professional correspondence with corporate partners to arrange bookings, itineraries and logistics.',
      'Negotiate and customise service packages for clients and follow up on their requests.',
      'Prepare billing and GST invoices.',
      'Build small internal web tools to automate invoicing and itinerary work.',
    ],
  },
  {
    id: 'freelance',
    role: 'Freelance Remote Specialist',
    company: 'International Clients',
    location: 'Remote',
    period: 'October 2024 to April 2026',
    status: 'completed',
    description: [
      'Provided administrative support, data entry and billing services across different time zones.',
      'Managed remote workflows including communication, document processing and deadline tracking.',
      'Kept client data confidential and documents secure.',
    ],
  },
  {
    id: 'compix-intern',
    role: 'VFX and Graphic Design Intern',
    company: 'Compix Multimedia',
    location: 'Srinagar',
    period: 'October 2023 to March 2024',
    description: [
      'Produced marketing graphics, branding assets and motion graphics using Adobe Creative Suite.',
      'Edited and post-produced video projects using After Effects and Premiere Pro.',
      'Worked with the creative team from client brief to final delivery.',
    ],
  },
];
