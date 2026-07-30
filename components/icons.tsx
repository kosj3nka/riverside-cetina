export function WaveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path
        d="M4 30c4 0 4-6 8-6s4 6 8 6 4-6 8-6 4 6 8 6 4-6 8-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M4 38c4 0 4-6 8-6s4 6 8 6 4-6 8-6 4 6 8 6 4-6 8-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function HorseshoeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path
        d="M14 40V24a10 10 0 0 1 20 0v16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="14" cy="40" r="2.2" fill="currentColor" />
      <circle cx="34" cy="40" r="2.2" fill="currentColor" />
      <circle cx="14" cy="32" r="2.2" fill="currentColor" />
      <circle cx="34" cy="32" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2.5" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x1 = 24 + Math.cos(angle) * 14;
        const y1 = 24 + Math.sin(angle) * 14;
        const x2 = 24 + Math.cos(angle) * 19;
        const y2 = 24 + Math.sin(angle) * 19;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path
        d="M24 6c-7.2 0-13 5.8-13 13 0 9.7 13 23 13 23s13-13.3 13-23c0-7.2-5.8-13-13-13Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="19" r="4.5" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect
        x="6"
        y="6"
        width="36"
        height="36"
        rx="10"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="24" cy="24" r="9" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="34" cy="14" r="1.8" fill="currentColor" />
    </svg>
  );
}
