export default function CenterHero({ chars, activeChar, setActiveChar, goNext, goPrev }) {
  const current = chars[activeChar]

  return (
    <div
      id="center-hero"
      className="flex-1 flex flex-col relative overflow-hidden select-none"
    >
      {/* ── CHARACTER STAGE ───────────────────────── */}
      <div className="flex-1 relative flex items-center justify-center p-4">

        {/* ── LEFT & RIGHT NAV ARROWS ────────────── */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-6 z-20 pointer-events-none">
          <button
            id="nav-prev"
            onClick={goPrev}
            aria-label="Previous character"
            className="pointer-events-auto w-10 h-10 rounded-full border border-white/30 bg-black/25 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/50 hover:border-white/60 transition-all duration-200 shadow-md group"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="group-hover:-translate-x-0.5 transition-transform">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          <button
            id="nav-next"
            onClick={goNext}
            aria-label="Next character"
            className="pointer-events-auto w-10 h-10 rounded-full border border-white/30 bg-black/25 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/50 hover:border-white/60 transition-all duration-200 shadow-md group"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>

        {/* ── CHARACTER MODEL SLOT ────────────────── */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[420px] h-full max-h-[500px]">
          {/*
            TO DISPLAY YOUR CHARACTER PNG:
            1. Put your image in /src/assets/characters/<id>.png (e.g. baymax.png, hiro.png)
            2. Or drop your model directly into:
               <img
                 src={`/src/assets/characters/${current.id}.png`}
                 alt={current.label}
                 className="h-full object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] animate-fadeUp"
               />
          */}
          <div className="w-full h-full border-2 border-dashed border-white/20 rounded-2xl flex flex-col items-center justify-center gap-3 text-white/40 text-center px-8 bg-black/10 backdrop-blur-[2px]">
            <div className="w-14 h-14 rounded-full border border-white/25 flex items-center justify-center bg-white/5 text-2xl text-white/60">
              ⊕
            </div>
            <div className="flex flex-col items-center">
              <span className="font-oswald font-bold text-white/90 text-lg uppercase tracking-wider">
                {current.label}
              </span>
              <span className="text-[11px] font-cond text-white/50 tracking-widest uppercase mt-0.5">
                Character Model Slot
              </span>
            </div>
            <p className="text-[10px] text-white/40 max-w-[240px] leading-relaxed">
              Upload your PNG to <code className="bg-white/10 px-1 py-0.5 rounded text-white/70">src/assets/</code> to display your model here.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
