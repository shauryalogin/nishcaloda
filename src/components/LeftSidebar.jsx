import { useState, useEffect } from 'react'
import BigHero6Banner from './BigHero6Banner'

function pad(n) { return String(Math.max(0, n)).padStart(2, '0') }

const TARGET = new Date('2024-11-07T00:00:00').getTime()

function useCountdown() {
  const [t, setT] = useState({ days: 0, hours: 0, min: 0, sec: 0 })
  useEffect(() => {
    const tick = () => {
      const diff = TARGET - Date.now()
      if (diff <= 0) return
      setT({
        days:  Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        min:   Math.floor((diff % 3600000) / 60000),
        sec:   Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return t
}

export default function LeftSidebar({ slide, setSlide, onTrailer }) {
  const { days, hours, min, sec } = useCountdown()

  return (
    <aside
      id="left-sidebar"
      className="flex flex-col flex-shrink-0 bg-slate-900/30 backdrop-blur-md border-r border-white/10 overflow-y-auto overflow-x-hidden z-20"
      style={{ width: 200 }}
    >
      {/* ── SOLID RED DISNEY BIG HERO 6 BADGE ─────────────── */}
      <BigHero6Banner />

      {/* ── LOWER CONTROLS BLOCK ─────────────────────────── */}
      <div className="flex flex-col flex-1 justify-between px-3.5 py-4 gap-4">

        {/* GET TICKETS & COUNTDOWN */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <h3 className="text-white/80 text-[9.5px] font-cond font-bold tracking-[0.22em] uppercase whitespace-nowrap">
              Get Tickets
            </h3>
            <div className="flex-1 h-[1px] bg-white/15" />
          </div>

          {/* Zip input */}
          <div className="flex items-center border border-white/30 bg-black/20 h-8 rounded-[2px] overflow-hidden focus-within:border-white/60 transition-colors">
            <input
              id="zip-input"
              type="text"
              placeholder="ENTER YOUR ZIP CODE"
              maxLength={10}
              aria-label="Enter zip code"
              className="flex-1 bg-transparent text-white placeholder-white/40 text-[9px] font-cond tracking-widest uppercase px-2 outline-none min-w-0"
            />
            <button
              id="zip-submit"
              aria-label="Find tickets"
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-all bg-white/5 border-l border-white/20"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </button>
          </div>

          {/* Countdown Boxes */}
          <div id="countdown" className="grid grid-cols-4 gap-1 mt-1">
            {[
              { label: 'DAYS',  val: pad(days)  },
              { label: 'HOURS', val: pad(hours) },
              { label: 'MIN',   val: pad(min)   },
              { label: 'SEC',   val: pad(sec)   },
            ].map(({ label, val }) => (
              <div
                key={label}
                className="flex flex-col items-center bg-black/25 border border-white/15 py-1 rounded-[2px]"
              >
                <span className="text-white/50 text-[7px] font-cond tracking-wider uppercase font-semibold">
                  {label}
                </span>
                <span
                  id={`cd-${label.toLowerCase()}`}
                  className="text-white font-oswald font-bold text-[15px] leading-tight tabular-nums"
                >
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* WATCH THE TRAILER BUTTON */}
        <button
          id="trailer-btn"
          onClick={onTrailer}
          aria-label="Watch the trailer"
          className="flex items-center gap-2 bg-black/30 border border-white/20 hover:border-white/50 hover:bg-black/50 transition-all duration-200 group p-1.5 rounded-[2px]"
        >
          {/* thumbnail box */}
          <div className="w-11 h-11 flex-shrink-0 border border-white/30 flex items-center justify-center bg-black/40 group-hover:border-white/60 relative overflow-hidden rounded-[2px]">
            {/* Hiro thumbnail backdrop or play symbol */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border border-white/70 flex items-center justify-center bg-black/30 group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="white" className="ml-0.5">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
          <span className="text-white font-cond font-bold text-[10px] tracking-[0.16em] uppercase group-hover:text-white transition-colors text-left leading-tight">
            Watch the Trailer
          </span>
        </button>

        {/* Slide indicator dots */}
        <div className="flex items-center gap-1.5 self-center pt-1">
          {[0, 1, 2, 3].map(i => (
            <button
              key={i}
              id={`dot-${i}`}
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className={`transition-all duration-200 ${
                slide === i
                  ? 'w-4 h-2 rounded-full bg-white shadow-sm'
                  : 'w-2 h-2 rounded-full border border-white/40 bg-transparent hover:border-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </aside>
  )
}
