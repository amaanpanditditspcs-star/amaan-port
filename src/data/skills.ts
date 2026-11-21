export interface SkillGroup {
  id: string;
  label: string;
  isLearning?: boolean;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'programming-web',
    label: 'Programming and Web',
    skills: [
      'Python',
      'C',
      'Object-Oriented Programming',
      'HTML',
      'CSS',
      'JavaScript',
      'WordPress',
      'Blogger',
    ],
  },
  {
    id: 'creative',
    label: 'Creative',
    skills: [
      'Adobe Photoshop',
      'Illustrator',
      'After Effects',
      'Premiere Pro',
      'Graphic Design',
      'Motion Graphics',
      'Video Editing',
    ],
  },
  {
    id: 'business-office',
    label: 'Business and Office',
    skills: [
      'MS Office (Word, Excel, PowerPoint)',
      'Billing and Invoicing',
      'Data Entry',
      'Documentation',
      'Client Relations',
      'Business Operations',
      'Team Coordination',
      'Logistics Management',
      'Travel Planning',
      'Itinerary Preparation',
      'Remote Work Management',
    ],
  },
  {
    id: 'interests-learning',
    label: 'Interests and Currently Learning',
    isLearning: true,
    skills: [
      'Workflow Automation',
      'n8n',
      'Artificial Intelligence',
      'Web Development',
      'Software Development',
      'Emerging Technologies',
    ],
  },
];
