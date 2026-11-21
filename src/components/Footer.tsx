import { Link } from 'react-router-dom';
import { site, getEmail } from '../data/site';
import { socialLinks } from '../data/social';
import { useEffect, useState } from 'react';

const quickLinks = [
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const year = new Date().getFullYear();
  const activeSocials = socialLinks.filter((s) => s.url.length > 0);

  useEffect(() => {
    setEmail(getEmail());
  }, []);

  return (
    <footer
      className="border-t"
      style={{
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="container section" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="text-lg font-semibold tracking-tight"
              style={{ color: 'var(--color-text)' }}
            >
              {site.name}
            </Link>
            <p
              className="mt-2 text-sm"
              style={{ color: 'var(--color-muted)' }}
            >
              Personal Portfolio
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <p className="label mb-4">Pages</p>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'var(--color-muted)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-text)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-muted)';
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="md:col-span-5">
            <p className="label mb-4">Contact</p>
            <div className="flex flex-col gap-2">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'var(--color-muted)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-text)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-muted)';
                  }}
                >
                  {email}
                </a>
              )}
              <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                {site.location}
              </p>
              {activeSocials.length > 0 && (
                <div className="flex gap-4 mt-2">
                  {activeSocials.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="transition-colors duration-200"
                      style={{ color: 'var(--color-muted)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--color-text)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--color-muted)';
                      }}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              )}
              {site.resume.enabled && (
                <a
                  href={site.resume.path}
                  download={site.resume.filename}
                  className="text-sm mt-1 transition-colors duration-200"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Download Resume
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-16 pt-8 border-t text-sm"
          style={{
            borderColor: 'var(--color-border)',
            color: 'var(--color-muted)',
          }}
        >
          &copy; {year} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
