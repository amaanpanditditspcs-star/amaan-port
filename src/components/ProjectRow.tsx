import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';
import ScrollReveal from './ScrollReveal';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectRow({ project, index }: Props) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <ScrollReveal>
      <div
        className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10 md:py-14 border-t"
        style={{ borderColor: 'var(--color-border)' }}
      >
        {/* Image placeholder */}
        <div className="md:col-span-5">
          <div
            className="relative overflow-hidden rounded-sm"
            style={{
              aspectRatio: '16 / 10',
              backgroundColor: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
            }}
          >
            <svg
              viewBox="0 0 640 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            >
              {/* Browser chrome hint */}
              <rect x="0" y="0" width="640" height="32" fill="var(--color-border)" opacity="0.3" />
              <circle cx="20" cy="16" r="4" fill="var(--color-silver)" opacity="0.5" />
              <circle cx="36" cy="16" r="4" fill="var(--color-silver)" opacity="0.5" />
              <circle cx="52" cy="16" r="4" fill="var(--color-silver)" opacity="0.5" />

              {/* Content lines */}
              <rect x="40" y="60" width="200" height="12" rx="2" fill="var(--color-border)" opacity="0.5" />
              <rect x="40" y="88" width="560" height="8" rx="2" fill="var(--color-border)" opacity="0.3" />
              <rect x="40" y="108" width="480" height="8" rx="2" fill="var(--color-border)" opacity="0.3" />
              <rect x="40" y="128" width="520" height="8" rx="2" fill="var(--color-border)" opacity="0.3" />

              {/* Sample data block */}
              <rect x="40" y="168" width="560" height="180" rx="2" stroke="var(--color-border)" strokeWidth="1" fill="none" opacity="0.5" />
              <text x="320" y="264" textAnchor="middle" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="0.12em" fill="var(--color-silver)">
                SCREENSHOT
              </text>
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <span className="label mb-3" style={{ color: 'var(--color-silver)' }}>
            Project {num}
          </span>
          <h3 className="section-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            {project.title}
          </h3>
          <p className="mb-4" style={{ color: 'var(--color-muted)', maxWidth: '540px' }}>
            {project.summary}
          </p>
          <p className="text-sm mb-4" style={{ color: 'var(--color-muted)' }}>
            {project.role}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.builtWith.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-sm"
                style={{
                  color: 'var(--color-muted)',
                  border: '1px solid var(--color-border)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--color-accent)' }}
              >
                Live Demo <ArrowUpRight size={14} />
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--color-accent)' }}
              >
                Source Code <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
