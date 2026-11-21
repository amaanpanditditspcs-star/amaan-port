export interface Language {
  name: string;
  proficiency: string;
}

export const aboutData = {
  title: 'About',
  subtitle: 'Information Technology student and designer based in Srinagar.',
  openingText:
    'My name is Amaan Javaid, and I am pursuing a Bachelor of Science in Information Technology at Government S.P. College, Srinagar, affiliated with Cluster University of Srinagar. I have an interest in understanding technology beyond the classroom, including programming, web development, automation and digital tools. Before my degree I completed a diploma in VFX and graphic design, and I have worked in graphic design, video editing, documentation, billing and travel coordination. I believe in continuous learning and in building skills that solve real problems.',

  sections: {
    academicJourney: {
      label: 'Academic Journey',
      content:
        'Currently pursuing a B.Sc. in Information Technology at Government S.P. College, Srinagar (affiliated with Cluster University of Srinagar), enrolled from June 2024 to May 2027 and currently in the 5th semester. In addition to degree coursework, completed specialised training in Fundamentals of Information Security through NILET.',
    },
    creativeBackground: {
      label: 'Creative Background',
      content:
        'Prior to university, completed a two-year Diploma in VFX and Graphic Design at Compix Multimedia, Srinagar (July 2021 to September 2023), specialising in digital design, motion graphics and professional video editing workflows using Adobe Creative Suite.',
    },
    workAlongsideStudies: {
      label: 'Work Alongside Studies',
      content:
        'Since March 2023, active involvement as a Manager Member at Trust Tour and Travels, a family business in Rajbagh, Srinagar. Responsibilities include office operations, corporate correspondence, service package customization, billing and GST invoicing, alongside designing and building internal web tools to automate itinerary preparation and invoicing.',
    },
    interests: {
      label: 'Interests',
      content:
        'Core technical interests center on workflow automation, n8n, artificial intelligence, modern web development, software engineering, and emerging practical technologies.',
    },
  },

  languages: [
    { name: 'Kashmiri', proficiency: 'Native' },
    { name: 'Urdu', proficiency: 'Fluent' },
    { name: 'Hindi', proficiency: 'Fluent' },
    { name: 'English', proficiency: 'Professional' },
  ] as Language[],
} as const;
