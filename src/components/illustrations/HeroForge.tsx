export function HeroForge({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 960 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of forging digital talent from code into a glowing product"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="960" y2="720" gradientUnits="userSpaceOnUse">
          <stop stopColor="#132538" />
          <stop offset="0.55" stopColor="#0A1628" />
          <stop offset="1" stopColor="#1A2D45" />
        </linearGradient>
        <linearGradient id="emberCore" x1="480" y1="280" x2="480" y2="560" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB703" />
          <stop offset="0.45" stopColor="#E85D04" />
          <stop offset="1" stopColor="#9A3412" />
        </linearGradient>
        <linearGradient id="anvilMetal" x1="250" y1="430" x2="710" y2="620" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8AA0B0" />
          <stop offset="0.5" stopColor="#5C7A8A" />
          <stop offset="1" stopColor="#334155" />
        </linearGradient>
        <linearGradient id="screenGlow" x1="620" y1="120" x2="860" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB703" stopOpacity="0.9" />
          <stop offset="1" stopColor="#E85D04" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="hearth" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(480 470) rotate(90) scale(180 220)">
          <stop stopColor="#E85D04" stopOpacity="0.55" />
          <stop offset="1" stopColor="#E85D04" stopOpacity="0" />
        </radialGradient>
        <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      <rect width="960" height="720" fill="url(#sky)" />

      {/* Distant skyline / lattice */}
      <g opacity="0.22" stroke="#E8EEF2" strokeWidth="1.2">
        <path d="M40 210 H920" />
        <path d="M80 160 V420" />
        <path d="M180 120 V420" />
        <path d="M280 150 V420" />
        <path d="M680 130 V420" />
        <path d="M780 170 V420" />
        <path d="M880 140 V420" />
        <circle cx="180" cy="120" r="4" fill="#FFB703" stroke="none" />
        <circle cx="680" cy="130" r="4" fill="#E85D04" stroke="none" />
      </g>

      {/* Floating code shards */}
      <g className="reveal" opacity="0.85">
        <rect x="86" y="250" width="150" height="54" rx="10" fill="#1A2D45" stroke="#5C7A8A" />
        <text x="106" y="283" fill="#FFB703" fontFamily="monospace" fontSize="16">
          {"<AI />"}
        </text>
        <rect x="720" y="230" width="170" height="54" rx="10" fill="#1A2D45" stroke="#5C7A8A" />
        <text x="740" y="263" fill="#E8EEF2" fontFamily="monospace" fontSize="15">
          ship()
        </text>
      </g>

      {/* Forge glow */}
      <ellipse className="forge-glow" cx="480" cy="470" rx="220" ry="120" fill="url(#hearth)" filter="url(#softBlur)" />

      {/* Anvil */}
      <path
        d="M250 470 C300 430 360 415 480 415 C600 415 660 430 710 470 L690 520 C640 545 540 560 480 560 C420 560 320 545 270 520 Z"
        fill="url(#anvilMetal)"
      />
      <path d="M300 520 V610 H660 V520" fill="#334155" opacity="0.85" />
      <path d="M330 610 H630 L650 660 H310 Z" fill="#1E293B" />

      {/* Glowing product being forged */}
      <g transform="translate(390 300)">
        <rect x="0" y="20" width="180" height="120" rx="18" fill="url(#emberCore)" />
        <rect x="18" y="38" width="144" height="70" rx="10" fill="#0A1628" opacity="0.55" />
        <path d="M40 70 H160" stroke="#FFB703" strokeWidth="3" strokeLinecap="round" />
        <path d="M40 88 H130" stroke="#E8EEF2" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        <circle cx="150" cy="88" r="6" fill="#FFB703" />
      </g>

      {/* Hammer */}
      <g transform="translate(560 180) rotate(28)">
        <rect x="0" y="70" width="18" height="170" rx="8" fill="#8B5E3C" />
        <rect x="-28" y="40" width="74" height="42" rx="8" fill="#94A3B8" />
        <rect x="-18" y="48" width="54" height="26" rx="6" fill="#CBD5E1" />
      </g>

      {/* Sparks */}
      <circle className="spark" cx="470" cy="360" r="4" fill="#FFB703" />
      <circle className="spark spark-delay-1" cx="510" cy="340" r="3" fill="#E85D04" />
      <circle className="spark spark-delay-2" cx="440" cy="350" r="3.5" fill="#FFB703" />
      <circle className="spark spark-delay-3" cx="525" cy="370" r="2.5" fill="#FFF7ED" />

      {/* Secondary workstation / global window */}
      <g transform="translate(650 360)">
        <rect width="220" height="150" rx="16" fill="#1A2D45" stroke="url(#screenGlow)" strokeWidth="2" />
        <rect x="16" y="18" width="188" height="96" rx="10" fill="#0A1628" />
        <path d="M40 50 C70 30 110 30 140 50 C170 70 190 70 200 55" stroke="#E85D04" strokeWidth="3" fill="none" />
        <circle cx="70" cy="78" r="8" fill="#FFB703" opacity="0.85" />
        <circle cx="110" cy="68" r="6" fill="#5C7A8A" />
        <circle cx="150" cy="82" r="7" fill="#E85D04" opacity="0.8" />
        <text x="24" y="138" fill="#E8EEF2" fontSize="13" fontFamily="sans-serif" opacity="0.8">
          Global Remote Ready
        </text>
      </g>

      {/* Ground plane */}
      <path d="M0 640 C220 600 420 690 960 620 V720 H0 Z" fill="#0F1D2E" opacity="0.9" />
      <path d="M0 670 H960" stroke="#5C7A8A" strokeOpacity="0.35" />
    </svg>
  );
}
