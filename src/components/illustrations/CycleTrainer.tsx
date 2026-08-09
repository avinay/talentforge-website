export function CycleTrainer({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 320, y: 70, label: "UX" },
    { x: 500, y: 150, label: "UI" },
    { x: 540, y: 320, label: "FE" },
    { x: 400, y: 430, label: "BE" },
    { x: 220, y: 400, label: "AI" },
    { x: 120, y: 250, label: "Ops" },
    { x: 180, y: 120, label: "Ship" },
  ];

  return (
    <svg
      className={className}
      viewBox="0 0 640 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Full-cycle training path from UX to shipping"
    >
      <rect width="640" height="520" rx="28" fill="#0A1628" />
      <circle cx="320" cy="260" r="150" stroke="#5C7A8A" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="8 10" />
      <circle className="forge-glow" cx="320" cy="260" r="58" fill="#E85D04" fillOpacity="0.2" />
      <circle cx="320" cy="260" r="42" fill="#E85D04" />
      <text x="320" y="255" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">
        FULL
      </text>
      <text x="320" y="275" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">
        CYCLE
      </text>
      {nodes.map((node, i) => (
        <g key={node.label}>
          <circle cx={node.x} cy={node.y} r="28" fill="#1A2D45" stroke={i % 2 ? "#FFB703" : "#E85D04"} strokeWidth="2" />
          <text x={node.x} y={node.y + 5} textAnchor="middle" fill="#E8EEF2" fontSize="13" fontWeight="700">
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
