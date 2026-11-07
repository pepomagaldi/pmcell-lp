type P = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const Whats = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5.1 5.2-1.4A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1 1 7 3.9Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
  </svg>
);

export const Arrow = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden>
    <path d="M9 6l6 6-6 6" />
  </svg>
);

export const Check = ({ className }: P) => (
  <svg {...base} strokeWidth={2.4} className={className} aria-hidden>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

const paths: Record<string, React.ReactNode> = {
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3Z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8Z" />,
  truck: (
    <>
      <path d="M3 6h11v10H3zM14 9h4l3 3.5V16h-7" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c.5-3.5 3-5.5 6-5.5s5.5 2 6 5.5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16 14.5c2.6.2 4.4 2 5 5" />
    </>
  ),
  badge: (
    <>
      <path d="M12 2.5l2.4 1.8 3 .1.9 2.9 2.4 1.8-1 2.9 1 2.9-2.4 1.8-.9 2.9-3 .1L12 21.5l-2.4-1.8-3-.1-.9-2.9L3.3 14.9l1-2.9-1-2.9 2.4-1.8.9-2.9 3-.1L12 2.5Z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11.5a7 7 0 1 0-14 0C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.6" />
    </>
  ),
};

export const Icon = ({ name, className }: P & { name: string }) => (
  <svg {...base} className={className} aria-hidden>
    {paths[name]}
  </svg>
);
