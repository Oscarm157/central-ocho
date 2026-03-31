interface CopperIconProps {
  name: string;
  size?: number;
  className?: string;
}

const icons: Record<string, React.ReactNode> = {
  building: (
    <path d="M3 21V3h8v4h10v14H3Zm2-2h4v-3H5v3Zm0-5h4v-3H5v3Zm0-5h4V6H5v3Zm6 10h4v-3h-4v3Zm0-5h4v-3h-4v3Zm0-5h4V6h-4v3Zm6 10h2v-3h-2v3Zm0-5h2v-3h-2v3Z" />
  ),
  design: (
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM7.35 18.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5s-3.34-.56-4.65-1.5ZM12 14a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
  ),
  profile: (
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" />
  ),
  shield: (
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4Zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8Z" />
  ),
  chart: (
    <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
  ),
  roofing: (
    <path d="M13 18h-2v-6h2v6Zm2-8H9l3-6 3 6ZM3 21h18v-2H3v2Zm0-4h18v-2H3v2Zm18-6L12 2 3 11h18Z" />
  ),
  location: (
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z" />
  ),
  trending: (
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
  ),
  check: (
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" />
  ),
  inventory: (
    <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm-8 12H8v-2h4v2Zm4-4H8V8h8v2Z" />
  ),
  home: (
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  ),
  connect: (
    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1ZM8 13h8v-2H8v2Zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5Z" />
  ),
  absorption: (
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2ZM9 17H7v-7h2v7Zm4 0h-2V7h2v10Zm4 0h-2v-4h2v4Z" />
  ),
};

export function CopperIcon({ name, size = 32, className = "" }: CopperIconProps) {
  const icon = icons[name];
  if (!icon) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={`text-primary ${className}`}
    >
      {icon}
    </svg>
  );
}
