export default function RightNav({ compassAngle }) {
  return (
    <div className="flex flex-col items-center justify-between flex-shrink-0 border-l border-white/10 bg-black/15 py-5 px-3"
      style={{ width: 58 }}>

      {/* ── COMPASS ────────────────────────────────── */}
      <div className="flex flex-col items-center gap-2">
        <svg viewBox="0 0 80 80" width="52" height="52">
          {/* Outer ring */}
          <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5"/>
          {/* Inner ring */}
          <circle cx="40" cy="40" r="24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
          {/* Cardinal tick marks */}
          <line x1="40" y1="6" x2="40" y2="14" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
          <line x1="40" y1="66" x2="40" y2="74" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
          <line x1="6"  y1="40" x2="14" y2="40" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
          <line x1="66" y1="40" x2="74" y2="40" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
          {/* Needle — rotates via compassAngle */}
          <g transform={`rotate(${compassAngle}, 40, 40)`}>
            <line x1="40" y1="40" x2="40" y2="18" stroke="rgba(255,255,255,0.75)" strokeWidth="2"/>
            <polygon points="40,14 37.5,22 40,19.5 42.5,22" fill="rgba(255,255,255,0.75)"/>
            <line x1="40" y1="40" x2="40" y2="62" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
          </g>
          {/* Center dot */}
          <circle cx="40" cy="40" r="3.5" fill="rgba(255,255,255,0.55)"/>
        </svg>

        {/* Horizontal separator line extending left */}
        <div className="w-full h-px bg-white/20 mt-1"/>
      </div>

      {/* ── VERTICAL LABEL ─────────────────────────── */}
      <div
        className="text-white/35 text-[8.5px] font-cond font-semibold tracking-[0.28em] uppercase select-none"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        Navigation
      </div>
    </div>
  )
}
