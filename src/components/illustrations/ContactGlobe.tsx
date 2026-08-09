export function ContactGlobe({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of SE Asia remote and on-site availability"
    >
      <rect width="640" height="480" rx="28" fill="#0A1628" />
      <circle cx="320" cy="240" r="150" stroke="#5C7A8A" strokeWidth="2" opacity="0.5" />
      <ellipse cx="320" cy="240" rx="70" ry="150" stroke="#5C7A8A" strokeWidth="2" opacity="0.35" />
      <path d="M170 240 H470" stroke="#5C7A8A" strokeWidth="2" opacity="0.35" />
      <path d="M190 180 C260 160 380 160 450 180" stroke="#E85D04" strokeWidth="3" fill="none" />
      <path d="M200 300 C280 340 360 340 440 300" stroke="#FFB703" strokeWidth="3" fill="none" />
      <circle className="forge-glow" cx="390" cy="250" r="14" fill="#E85D04" />
      <circle cx="250" cy="210" r="10" fill="#FFB703" />
      <circle cx="300" cy="300" r="8" fill="#E8EEF2" />
      <text x="320" y="430" textAnchor="middle" fill="#E8EEF2" fontSize="16" opacity="0.85">
        India · Indonesia · Vietnam · Philippines
      </text>
    </svg>
  );
}
