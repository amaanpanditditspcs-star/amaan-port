interface Props {
  label: string;
  isLearning?: boolean;
}

export default function SkillTag({ label, isLearning }: Props) {
  return (
    <span
      className="inline-flex items-center gap-2 text-sm px-3.5 py-1.5 rounded-sm transition-colors duration-200"
      style={{
        color: isLearning ? 'var(--color-accent)' : 'var(--color-text)',
        backgroundColor: isLearning ? 'transparent' : 'var(--color-bg-secondary)',
        border: isLearning
          ? '1px dashed var(--color-accent)'
          : '1px solid var(--color-border)',
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{
          backgroundColor: isLearning ? 'var(--color-accent)' : 'var(--color-silver)',
        }}
      />
      {label}
    </span>
  );
}
