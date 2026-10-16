import { useState, useEffect } from 'react'
import TopBar from './components/TopBar'
import LeftSidebar from './components/LeftSidebar'
import CenterHero from './components/CenterHero'
import RightNav from './components/RightNav'
import BottomBar from './components/BottomBar'
import TrailerModal from './components/TrailerModal'

const CHARS = [
  { id: 'baymax',      label: 'Baymax' },
  { id: 'hiro',        label: 'Hiro' },
  { id: 'honey-lemon', label: 'Honey Lemon' },
  { id: 'gogo',        label: 'Go Go' },
  { id: 'wasabi',      label: 'Wasabi' },
  { id: 'fred',        label: 'Fred' },
]

export default function App() {
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

  return (
    <div
      className="flex flex-col w-screen h-screen overflow-hidden font-cond select-none"
      style={{
        background: 'radial-gradient(ellipse at 55% 45%, #c2d1dd 0%, #9cb0c0 45%, #768898 100%)',
      }}
    >
      {/* ── MAIN WORKSPACE ROW ─────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden relative">

        {/* LEFT COLUMN: Red Disney BH6 Banner + Tickets / Countdown / Trailer */}
        <LeftSidebar
          slide={slide}
          setSlide={setSlide}
          onTrailer={() => setTrailerOpen(true)}
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
      <BottomBar
        audioOn={audioOn}
        toggle={() => setAudioOn(v => !v)}
        chars={CHARS}
        activeChar={activeChar}
        setActiveChar={setActiveChar}
      />

      {/* Trailer modal overlay */}
      {trailerOpen && <TrailerModal onClose={() => setTrailerOpen(false)} />}
    </div>
  )
}
