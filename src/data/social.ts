import { Github, Linkedin, Instagram, Globe, type LucideIcon } from 'lucide-react';

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: LucideIcon;
}

// Fill in the URLs when you have confirmed accounts.
// An empty string hides the card entirely. No "Coming soon" placeholders.

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    url: '',
    icon: Github,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: '',
    icon: Linkedin,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: '',
    icon: Instagram,
  },
  {
    id: 'other',
    label: 'Other',
    url: '',
    icon: Globe,
  },
];
