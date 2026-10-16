<<<<<<< HEAD
export default function TopBar() {
  return null
=======
const SOCIALS = [
  {
    id: 'twitter',
    label: 'Twitter',
    bg: 'bg-[#1da1f2]',
    icon: (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="white">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
      </svg>
    ),
  },
  {
    id: 'facebook',
    label: 'Facebook',
    bg: 'bg-[#1877f2]',
    icon: (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="white">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    id: 'tumblr',
    label: 'Tumblr',
    bg: 'bg-[#35465c]',
    icon: (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="white">
        <path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.228 2.371h.08c.66-.004 1.621-.229 2.088-.427l1.086 3.489c-.609.316-2.029.771-3.416.75z"/>
      </svg>
    ),
  },
  {
    id: 'youtube',
    label: 'YouTube',
    bg: 'bg-[#ff0000]',
    icon: (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="white">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.945-1.962C18.88 4 12 4 12 4s-6.88 0-8.595.458A2.78 2.78 0 0 0 1.46 6.42 29.13 29.13 0 0 0 1 12a29.13 29.13 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.945 1.962C5.12 20 12 20 12 20s6.88 0 8.595-.458a2.78 2.78 0 0 0 1.945-1.962A29.13 29.13 0 0 0 23 12a29.13 29.13 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
      </svg>
    ),
  },
]

const TICKER = "BIG HERO 6'S HIRO AND BAYMAX GET DISNEY INFINITY FIGURES — NINTENDO WORLD REPORT     ✦     WATCH THE NEW TRAILER NOW     ✦     MEET THE TEAM: HONEY LEMON, GO GO, WASABI, FRED     ✦     "

export default function TopBar() {
  return (
    <div
      id="top-bar"
      className="flex items-center h-10 flex-shrink-0 border-b border-white/10 bg-black/25 backdrop-blur-sm px-4 gap-3 z-10 select-none"
    >
      {/* Twitter bird icon */}
      <div className="w-5 h-5 rounded-full bg-[#1da1f2]/20 flex items-center justify-center flex-shrink-0 border border-[#1da1f2]/40">
        <svg viewBox="0 0 24 24" width="11" height="11" fill="#4a9eda">
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
        </svg>
      </div>

      {/* Scrolling ticker */}
      <div className="flex-1 overflow-hidden min-w-0 relative">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/30 to-transparent z-10 pointer-events-none" />
        <div className="flex whitespace-nowrap" style={{ animation: 'ticker 32s linear infinite' }}>
          <span className="text-[10px] font-cond font-normal tracking-[0.16em] text-white/70 uppercase pr-0">
            {TICKER}
          </span>
          <span className="text-[10px] font-cond font-normal tracking-[0.16em] text-white/70 uppercase pr-0">
            {TICKER}
          </span>
        </div>
      </div>

      {/* Social icons */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <span className="text-[9px] font-cond font-bold tracking-[0.2em] text-white/50 uppercase mr-1">
          Social
        </span>
        {SOCIALS.map(s => (
          <a
            key={s.id}
            href="#"
            id={`social-${s.id}`}
            aria-label={s.label}
            className={`${s.bg} flex items-center justify-center w-5 h-5 rounded-[2px] opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-150 shadow-sm`}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  )
>>>>>>> 016e6b0778300797ef6fa6f1c0cd0a6f8839f4cf
}
