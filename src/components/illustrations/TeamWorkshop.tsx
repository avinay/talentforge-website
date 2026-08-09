export function TeamWorkshop({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 720 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Live coding corporate workshop illustration"
    >
      <defs>
        <linearGradient id="room" x1="0" y1="0" x2="720" y2="480">
          <stop stopColor="#F4F7F9" />
          <stop offset="1" stopColor="#E8EEF2" />
        </linearGradient>
      </defs>
      <rect width="720" height="480" rx="28" fill="url(#room)" />
      <rect x="60" y="70" width="380" height="220" rx="18" fill="#0A1628" />
      <rect x="84" y="94" width="332" height="150" rx="10" fill="#132538" />
      <path d="M110 140 H380" stroke="#E85D04" strokeWidth="4" strokeLinecap="round" />
      <path d="M110 170 H300" stroke="#FFB703" strokeWidth="4" strokeLinecap="round" />
      <path d="M110 200 H340" stroke="#5C7A8A" strokeWidth="4" strokeLinecap="round" />
      <text x="110" y="250" fill="#E8EEF2" fontSize="14" fontFamily="monospace">
        live.ship(code)
      </text>

      {/* People silhouettes */}
      <g>
        <circle cx="140" cy="360" r="28" fill="#1A2D45" />
        <rect x="110" y="395" width="60" height="50" rx="16" fill="#1A2D45" />
        <circle cx="240" cy="350" r="28" fill="#E85D04" />
        <rect x="210" y="385" width="60" height="55" rx="16" fill="#E85D04" />
        <circle cx="340" cy="360" r="28" fill="#5C7A8A" />
        <rect x="310" y="395" width="60" height="50" rx="16" fill="#5C7A8A" />
      </g>

      {/* Side panel */}
      <rect x="480" y="90" width="180" height="280" rx="20" fill="#0A1628" />
      <circle cx="570" cy="170" r="36" fill="#FFB703" />
      <text x="570" y="176" textAnchor="middle" fill="#0A1628" fontSize="16" fontWeight="700">
        AI
      </text>
      <rect x="510" y="240" width="120" height="14" rx="7" fill="#E8EEF2" opacity="0.35" />
      <rect x="510" y="270" width="90" height="14" rx="7" fill="#E85D04" opacity="0.8" />
      <rect x="510" y="300" width="105" height="14" rx="7" fill="#E8EEF2" opacity="0.25" />
    </svg>
  );
}
