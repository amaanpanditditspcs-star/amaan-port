interface Props {
  alt: string;
  src?: string;
  className?: string;
  aspectRatio?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

/**
 * Renders an editorial image placeholder or the WebP composition.
 * No human faces. Clean, editorial layout.
 */
export default function ImagePlaceholder({
  alt,
  src,
  className = '',
  aspectRatio = '4 / 5',
  width = 800,
  height = 1000,
  loading = 'lazy',
}: Props) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-sm ${className}`}
        style={{
          aspectRatio,
          backgroundColor: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border)',
        }}
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-sm ${className}`}
      style={{
        aspectRatio,
        backgroundColor: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-border)',
      }}
      role="img"
      aria-label={alt}
    >
      <svg
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        {/* Subtle grid lines */}
        <line x1="100" y1="0" x2="100" y2="500" stroke="var(--color-border)" strokeWidth="0.5" />
        <line x1="200" y1="0" x2="200" y2="500" stroke="var(--color-border)" strokeWidth="0.5" />
        <line x1="300" y1="0" x2="300" y2="500" stroke="var(--color-border)" strokeWidth="0.5" />
        <line x1="0" y1="125" x2="400" y2="125" stroke="var(--color-border)" strokeWidth="0.5" />
        <line x1="0" y1="250" x2="400" y2="250" stroke="var(--color-border)" strokeWidth="0.5" />
        <line x1="0" y1="375" x2="400" y2="375" stroke="var(--color-border)" strokeWidth="0.5" />

        {/* Central geometric shape */}
        <rect
          x="140"
          y="170"
          width="120"
          height="160"
          rx="2"
          stroke="var(--color-silver)"
          strokeWidth="1"
          fill="none"
        />
        <circle
          cx="200"
          cy="220"
          r="25"
          stroke="var(--color-silver)"
          strokeWidth="1"
          fill="none"
        />
        <line
          x1="200"
          y1="260"
          x2="200"
          y2="310"
          stroke="var(--color-silver)"
          strokeWidth="1"
        />

        {/* Corner marks */}
        <path d="M20 20 L20 50" stroke="var(--color-silver)" strokeWidth="0.75" />
        <path d="M20 20 L50 20" stroke="var(--color-silver)" strokeWidth="0.75" />
        <path d="M380 20 L380 50" stroke="var(--color-silver)" strokeWidth="0.75" />
        <path d="M380 20 L350 20" stroke="var(--color-silver)" strokeWidth="0.75" />
        <path d="M20 480 L20 450" stroke="var(--color-silver)" strokeWidth="0.75" />
        <path d="M20 480 L50 480" stroke="var(--color-silver)" strokeWidth="0.75" />
        <path d="M380 480 L380 450" stroke="var(--color-silver)" strokeWidth="0.75" />
        <path d="M380 480 L350 480" stroke="var(--color-silver)" strokeWidth="0.75" />

        {/* Label */}
        <text
          x="200"
          y="410"
          textAnchor="middle"
          fontSize="11"
          fontFamily="var(--font-sans)"
          letterSpacing="0.12em"
          fill="var(--color-silver)"
          style={{ textTransform: 'uppercase' }}
        >
          PHOTO
        </text>
      </svg>
    </div>
  );
}
