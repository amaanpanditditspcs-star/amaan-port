// ============================================================
// site.ts: Central config for the entire portfolio.
// Edit the values below, never hard-code them in components.
// ============================================================

import profileHome from '../assets/images/profile-home.webp';
import profileAbout from '../assets/images/profile-about.webp';

export const site = {
  name: 'Amaan Javaid',
  title: 'IT Student and Designer',
  location: 'Srinagar, Jammu and Kashmir, India',

  // Email is assembled at runtime to reduce scraping.
  // Split into parts so it never appears as plain text in the bundle.
  email: {
    user: 'amaanpandit.ditspcs',
    domain: 'gmail.com',
  },

  // Replace with your actual domain when deploying.
  // Used for canonical URLs, Open Graph, and sitemap.
  siteUrl: 'https://YOUR-DOMAIN-HERE.com',

  // Image paths
  images: {
    profileHome,
    profileAbout,
  },

  // Resume PDF: set enabled to true once you place
  // your resume at public/resume/Amaan_Javaid_Resume.pdf
  resume: {
    enabled: false,
    path: '/resume/Amaan_Javaid_Resume.pdf',
    filename: 'Amaan_Javaid_Resume.pdf',
  },
} as const;

/** Build the full email at runtime. */
export function getEmail(): string {
  return `${site.email.user}@${site.email.domain}`;
}
