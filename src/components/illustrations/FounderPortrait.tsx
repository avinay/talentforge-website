export function FounderPortrait({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stylized portrait illustration of the TalentForge founder"
    >
      <defs>
        <linearGradient id="portraitBg" x1="80" y1="40" x2="460" y2="580">
          <stop stopColor="#132538" />
          <stop offset="1" stopColor="#0A1628" />
        </linearGradient>
        <linearGradient id="skinTone" x1="200" y1="140" x2="340" y2="360">
          <stop stopColor="#E8B892" />
          <stop offset="1" stopColor="#C98A5B" />
        </linearGradient>
      </defs>
      <rect width="520" height="620" rx="32" fill="url(#portraitBg)" />
      <circle className="forge-glow" cx="260" cy="250" r="140" fill="#E85D04" fillOpacity="0.18" />
      <ellipse cx="260" cy="470" rx="150" ry="110" fill="#1A2D45" />
      <circle cx="260" cy="230" r="110" fill="url(#skinTone)" />
      <path d="M160 200 C180 120 340 110 360 210 C300 170 220 170 160 200 Z" fill="#1E293B" />
      <path d="M190 230 C220 250 300 250 330 230" stroke="#0A1628" strokeWidth="4" strokeLinecap="round" opacity="0.25" />
      <circle cx="225" cy="235" r="6" fill="#0A1628" />
      <circle cx="295" cy="235" r="6" fill="#0A1628" />
      <path d="M240 280 C255 292 275 292 290 280" stroke="#0A1628" strokeWidth="4" strokeLinecap="round" />
      <rect x="180" y="360" width="160" height="140" rx="28" fill="#E85D04" />
      <text x="260" y="430" textAnchor="middle" fill="white" fontSize="18" fontWeight="700">
        18 Years
      </text>
      <text x="260" y="458" textAnchor="middle" fill="#FFB703" fontSize="14">
        Production
      </text>
      <g opacity="0.7">
        <rect x="56" y="80" width="88" height="36" rx="10" fill="#1A2D45" stroke="#5C7A8A" />
        <text x="70" y="103" fill="#E8EEF2" fontSize="13">
          GenAI
        </text>
        <rect x="380" y="110" width="88" height="36" rx="10" fill="#1A2D45" stroke="#FFB703" />
        <text x="396" y="133" fill="#FFB703" fontSize="13">
          Ship
        </text>
      </g>
    </svg>
  );
}
