interface Props {
  number: string;
  title: string;
  className?: string;
}

export default function SectionHeading({ number, title, className = '' }: Props) {
  return (
    <div className={`flex items-center gap-4 mb-12 md:mb-16 ${className}`}>
      <span className="label" style={{ color: 'var(--color-silver)' }}>
        {number}
      </span>
      <div
        className="flex-1 h-px"
        style={{ backgroundColor: 'var(--color-border)' }}
      />
      <span className="label" style={{ color: 'var(--color-silver)' }}>
        {title}
      </span>
    </div>
  );
}
