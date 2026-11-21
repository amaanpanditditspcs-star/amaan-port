import type { Experience } from '../data/experience';
import ScrollReveal from './ScrollReveal';

interface Props {
  item: Experience;
}

export default function TimelineItem({ item }: Props) {
  return (
    <ScrollReveal>
      <div
        className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-14 border-t"
        style={{ borderColor: 'var(--color-border)' }}
      >
        {/* Left: meta */}
        <div className="md:col-span-4">
          <p className="label mb-2" style={{ color: 'var(--color-silver)' }}>
            {item.period}
          </p>
          <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
            {item.location}
          </p>
          {item.status === 'completed' && (
            <span
              className="inline-block mt-2 text-xs px-2.5 py-0.5 rounded-sm"
              style={{
                color: 'var(--color-accent)',
                border: '1px solid var(--color-border)',
              }}
            >
              Completed
            </span>
          )}
          {item.status === 'current' && (
            <span
              className="inline-block mt-2 text-xs px-2.5 py-0.5 rounded-sm"
              style={{
                color: 'var(--color-accent)',
                border: '1px solid var(--color-border)',
              }}
            >
              Current
            </span>
          )}
        </div>

        {/* Right: content */}
        <div className="md:col-span-8">
          <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--color-text)' }}>
            {item.role}
          </h3>
          <p className="text-sm mb-4" style={{ color: 'var(--color-muted)' }}>
            {item.company}
            {item.note && ` · ${item.note}`}
          </p>
          <ul className="flex flex-col gap-2.5">
            {item.description.map((point, i) => (
              <li
                key={i}
                className="text-sm pl-4 relative"
                style={{ color: 'var(--color-muted)' }}
              >
                <span
                  className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: 'var(--color-border)' }}
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
}
