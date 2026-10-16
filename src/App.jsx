import { useState, useEffect } from 'react'
<<<<<<< HEAD
import LeftSidebar from './components/LeftSidebar'
import CenterHero from './components/CenterHero'
import BaymaxDiagnostics from './components/BaymaxDiagnostics'
import DimensionCodex from './components/DimensionCodex'
import EscapeRadar from './components/EscapeRadar'
import TeamCommsModal from './components/TeamCommsModal'
import BottomBar from './components/BottomBar'
import TrailerModal from './components/TrailerModal'

const TOTAL_CHAPTERS = 6

=======
import TopBar from './components/TopBar'
import LeftSidebar from './components/LeftSidebar'
import CenterHero from './components/CenterHero'
import RightNav from './components/RightNav'
import BottomBar from './components/BottomBar'
import TrailerModal from './components/TrailerModal'

>>>>>>> 016e6b0778300797ef6fa6f1c0cd0a6f8839f4cf
const CHARS = [
  { id: 'baymax',      label: 'Baymax' },
  { id: 'hiro',        label: 'Hiro' },
  { id: 'honey-lemon', label: 'Honey Lemon' },
  { id: 'gogo',        label: 'Go Go' },
  { id: 'wasabi',      label: 'Wasabi' },
  { id: 'fred',        label: 'Fred' },
]

export default function App() {
<<<<<<< HEAD
  const [currentPage, setCurrentPage]   = useState('story')
  const [slide, setSlide]               = useState(0)
  const [activeChar, setActiveChar]     = useState(0)
  const [audioOn, setAudioOn]           = useState(true)
  const [trailerOpen, setTrailerOpen]   = useState(false)
  const [commsChar, setCommsChar]       = useState(null)

  const goNext = () => setSlide(s => Math.min(s + 1, TOTAL_CHAPTERS - 1))
  const goPrev = () => setSlide(s => Math.max(s - 1, 0))
=======
  const [activeChar, setActiveChar]   = useState(0)
  const [audioOn, setAudioOn]         = useState(true)
  const [trailerOpen, setTrailerOpen] = useState(false)
  const [slide, setSlide]             = useState(0)
  const [compassAngle, setCompassAngle] = useState(0)

  // Slowly rotate compass needle
  useEffect(() => {
    const id = setInterval(() => setCompassAngle(a => (a + 0.3) % 360), 30)
    return () => clearInterval(id)
  }, [])

  const goNext = () => setActiveChar(c => (c + 1) % CHARS.length)
  const goPrev = () => setActiveChar(c => (c - 1 + CHARS.length) % CHARS.length)
>>>>>>> 016e6b0778300797ef6fa6f1c0cd0a6f8839f4cf

  return (
    <div
      className="flex flex-col w-screen h-screen overflow-hidden font-cond select-none"
<<<<<<< HEAD
      style={{ background: 'radial-gradient(ellipse at 55% 45%, #c2d1dd 0%, #9cb0c0 45%, #768898 100%)' }}
    >
      <div className="flex flex-1 overflow-hidden relative">
=======
      style={{
        background: 'radial-gradient(ellipse at 55% 45%, #c2d1dd 0%, #9cb0c0 45%, #768898 100%)',
      }}
    >
      {/* ── MAIN WORKSPACE ROW ─────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden relative">

        {/* LEFT COLUMN: Red Disney BH6 Banner + Tickets / Countdown / Trailer */}
>>>>>>> 016e6b0778300797ef6fa6f1c0cd0a6f8839f4cf
        <LeftSidebar
          slide={slide}
          setSlide={setSlide}
          onTrailer={() => setTrailerOpen(true)}
<<<<<<< HEAD
          onAudioChange={setAudioOn}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        {/* Central Viewport with Futuristic Sub-Nav Bar */}
        <div className="flex flex-1 min-w-0 overflow-hidden relative flex-col">
          
          {/* Subtle Top HUD Navigation Bar for quick tab switching */}
          <div className="h-10 px-5 flex items-center justify-between border-b border-white/10 bg-black/30 backdrop-blur-md z-20 flex-shrink-0">
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
              {[
                { id: 'story', label: '01 · Story Chronicle', icon: '📖' },
                { id: 'diagnostics', label: '02 · Baymax Care Hub', icon: '🩺' },
                { id: 'codex', label: '03 · Dimension Codex', icon: '🌌' },
                { id: 'radar', label: '04 · Escape Radar', icon: '🧭' },
              ].map(page => (
                <button
                  key={page.id}
                  onClick={() => setCurrentPage(page.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded text-[10px] font-cond font-bold uppercase tracking-wider transition-all duration-150 ${
                    currentPage === page.id
                      ? 'bg-white/20 text-white shadow-sm border border-white/30'
                      : 'text-white/55 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-[11px]">{page.icon}</span>
                  <span className="whitespace-nowrap">{page.label}</span>
                </button>
              ))}
            </div>

            {/* Quick Comms trigger button on top right */}
            <button
              onClick={() => setCommsChar('hiro')}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 text-teal-300 text-[9.5px] font-cond font-bold uppercase tracking-widest transition-all ml-2 flex-shrink-0"
              title="Open Team Comms Link"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
              <span>Team Comms</span>
            </button>
          </div>

          {/* Active View Container */}
          <div className="flex-1 flex min-w-0 overflow-hidden relative">
            {currentPage === 'story' && (
              <CenterHero
                slide={slide}
                goNext={goNext}
                goPrev={goPrev}
                totalChapters={TOTAL_CHAPTERS}
              />
            )}

            {currentPage === 'diagnostics' && <BaymaxDiagnostics />}

            {currentPage === 'codex' && <DimensionCodex />}

            {currentPage === 'radar' && <EscapeRadar />}
          </div>

        </div>
      </div>

=======
        />

        {/* RIGHT AREA: TopBar + Center Hero Stage + Right Navigation */}
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden relative">
          {/* TopBar with scrolling ticker and social icons */}
          <TopBar />

          {/* Hero Stage and Compass */}
          <div className="flex flex-1 overflow-hidden relative">
            <CenterHero
              chars={CHARS}
              activeChar={activeChar}
              setActiveChar={setActiveChar}
              goNext={goNext}
              goPrev={goPrev}
            />
            <RightNav compassAngle={compassAngle} />
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR (Audio: On, 6 Character Icons, Legal) ── */}
>>>>>>> 016e6b0778300797ef6fa6f1c0cd0a6f8839f4cf
      <BottomBar
        audioOn={audioOn}
        toggle={() => setAudioOn(v => !v)}
        chars={CHARS}
        activeChar={activeChar}
        setActiveChar={setActiveChar}
<<<<<<< HEAD
        onOpenCharComms={(charId) => setCommsChar(charId)}
      />

      {trailerOpen && <TrailerModal onClose={() => setTrailerOpen(false)} />}
      
      {commsChar && (
        <TeamCommsModal
          charId={commsChar}
          onClose={() => setCommsChar(null)}
          onSelectChar={(id) => setCommsChar(id)}
        />
      )}
    </div>
  )
}
=======
      />

      {/* Trailer modal overlay */}
      {trailerOpen && <TrailerModal onClose={() => setTrailerOpen(false)} />}
    </div>
  )
}
>>>>>>> 016e6b0778300797ef6fa6f1c0cd0a6f8839f4cf
