export function CrisisMap({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of Indonesia's digital talent gap"
    >
      <defs>
        <linearGradient id="mapBg" x1="0" y1="0" x2="640" y2="480">
          <stop stopColor="#F4F7F9" />
          <stop offset="1" stopColor="#E8EEF2" />
        </linearGradient>
        <linearGradient id="gapFill" x1="200" y1="120" x2="480" y2="360">
          <stop stopColor="#E85D04" stopOpacity="0.18" />
          <stop offset="1" stopColor="#FFB703" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect width="640" height="480" rx="28" fill="url(#mapBg)" />
      <path
        d="M70 180 C140 120 220 140 300 170 C380 200 470 150 560 190 C520 250 430 280 350 270 C270 260 180 300 90 250 Z"
        fill="url(#gapFill)"
        stroke="#5C7A8A"
        strokeWidth="2"
      />
      <path
        d="M120 300 C190 270 260 310 330 300 C400 290 470 330 540 310"
        stroke="#0A1628"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.35"
      />
      {/* Gap markers */}
      <g>
        <circle cx="210" cy="200" r="10" fill="#E85D04" />
        <circle cx="320" cy="230" r="8" fill="#FFB703" />
        <circle cx="430" cy="210" r="12" fill="#E85D04" opacity="0.85" />
        <circle cx="500" cy="250" r="7" fill="#0A1628" />
      </g>
      <g fontFamily="sans-serif">
        <text x="64" y="86" fill="#0A1628" fontSize="28" fontWeight="700">
          9M
        </text>
        <text x="64" y="116" fill="#5C7A8A" fontSize="15">
          talent gap by 2030
        </text>
        <text x="400" y="400" fill="#0A1628" fontSize="22" fontWeight="700">
          0.8%
        </text>
        <text x="400" y="428" fill="#5C7A8A" fontSize="14">
          ICT-qualified workforce
        </text>
      </g>
      <path d="M80 360 L180 360 L160 400 L200 400" stroke="#E85D04" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}
