import { useState } from 'react'

const CODEX_ENTRIES = [
  {
    id: 'inverted-gravity',
    code: 'ANOMALY-01',
    name: 'Inverted Gravity Cascades',
    zone: 'Sector 02 · Inverted Canyon',
    danger: 'HIGH',
    dangerColor: 'text-amber-400 border-amber-400/40 bg-amber-400/10',
    desc: 'Spacetime inside the portal does not follow standard planetary curvature. Megaliths and shattered terrain float upside down. Objects accelerate toward localized phantom mass centers instead of downward.',
    hiroNotes: 'We have to test each floating rock with a thrown pebble before stepping onto it. Baymax’s mass makes him susceptible to sudden trajectory shifts, but his soft body acts like a giant airbag when we miss a ledge.',
    tactics: ['Baymax anchors using heavy magnetic boots', 'Hiro relies on tether cables anchored to Baymax', 'Never jump across open fissures during localized flare-ups'],
  },
  {
    id: 'glitch-storms',
    code: 'ANOMALY-02',
    name: 'Spacetime Glitch Storms',
    zone: 'Sector 04 · Glitch Bridge',
    danger: 'CRITICAL',
    dangerColor: 'text-red-400 border-red-400/40 bg-red-400/10',
    desc: 'Electromagnetic and quantum shearing creates visual tears in the environment. Solid rock turns intangible for seconds at a time, revealing purple dimensional static underneath.',
    hiroNotes: 'The glitches occur in a periodic rhythm: every 14.8 seconds, a shearing wave ripples across the bridge. If you step onto a platform during the cycle, you fall through into the void.',
    tactics: ['Calculate wave intervals before crossing', 'Baymax generates a localized electromagnetic damper', 'Combine tech scanning + armor shield'],
  },
  {
    id: 'dormant-microbots',
    code: 'ANOMALY-03',
    name: 'Callaghan Residue Microbots',
    zone: 'Sector 03 · Drift Field',
    danger: 'MODERATE',
    dangerColor: 'text-teal-400 border-teal-400/40 bg-teal-400/10',
    desc: 'Millions of inactive microbots from the Callaghan confrontation were sucked into the portal vortex. They drift in loose swarms without a transmitter headband signal.',
    hiroNotes: 'I can rewire several clusters! Using the transmitter antenna from my helmet, we can command small swarms of microbots to form emergency climbing rungs and structural supports.',
    tactics: ['Reprogram swarm frequencies with Hiro’s glove', 'Form temporary bridges and handholds', 'Avoid proximity to high-energy rifts that cause rogue surges'],
  },
  {
    id: 'exit-singularity',
    code: 'ANOMALY-04',
    name: 'The Closing Gate Singularity',
    zone: 'Sector 06 · The Horizon',
    danger: 'TIME SENSITIVE',
    dangerColor: 'text-purple-400 border-purple-400/40 bg-purple-400/10',
    desc: 'The original portal frame built by Krei Tech is destabilizing. The event horizon shrinks exponentially with every passing hour. When it collapses to zero radius, the gate will seal permanently.',
    hiroNotes: 'Baymax has enough remaining thruster propellant for one concentrated launch. But I am not letting him stay behind again. If we time our thrust curve correctly, we both punch through together.',
    tactics: ['Synchronize thruster launch with portal pulse peak', 'Maintain physical grapple grip', 'Do not look back once terminal burn begins'],
  },
]

export default function DimensionCodex() {
  const [selected, setSelected] = useState(CODEX_ENTRIES[0])
  const [activeTab, setActiveTab] = useState('notes')

  return (
    <div className="flex-1 flex flex-col p-6 overflow-y-auto no-scrollbar select-none text-white">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-white/10 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="font-cond text-[10px] font-bold uppercase tracking-[0.28em] text-purple-300">
              Dimensional Reconnaissance Archive
            </span>
          </div>
          <h2 className="font-oswald text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white mt-0.5">
            Strange World Field Codex
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-cond text-white/50">
          <span>PORTAL FREQUENCY: 432.18 GHz</span>
          <span className="text-white/20">|</span>
          <span className="text-teal-300">PHYSICS: NON-EUCLIDEAN</span>
        </div>
      </div>

      {/* Main Layout: Left Selector, Right Detailed Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 min-h-0">
        
        {/* Left: Codex List (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-2">
          <span className="font-cond text-[9px] font-bold uppercase tracking-[0.24em] text-white/50 px-1">
            Logged Phenomena ({CODEX_ENTRIES.length})
          </span>

          {CODEX_ENTRIES.map(entry => (
            <button
              key={entry.id}
              onClick={() => setSelected(entry)}
              className={`p-3 rounded text-left border transition-all flex flex-col gap-1 ${
                selected.id === entry.id
                  ? 'bg-purple-950/40 border-purple-500/50 shadow-md'
                  : 'bg-black/30 border-white/10 hover:border-white/30 hover:bg-black/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-oswald text-xs text-purple-300 tracking-wider">
                  {entry.code}
                </span>
                <span className={`text-[8px] font-cond font-bold uppercase px-1.5 py-0.2 rounded border ${entry.dangerColor}`}>
                  {entry.danger}
                </span>
              </div>
              <h4 className="font-cond font-bold text-sm text-white tracking-wide">
                {entry.name}
              </h4>
              <span className="font-cond text-[9px] text-white/40">
                {entry.zone}
              </span>
            </button>
          ))}

          {/* Quick Scanner Telemetry Widget */}
          <div className="p-3.5 mt-2 rounded border border-white/10 bg-black/40">
            <span className="font-cond text-[8.5px] font-bold uppercase tracking-widest text-teal-400 block mb-2">
              Sensor Audio Log Tuner
            </span>
            <div className="flex items-center gap-1 h-6 px-2 bg-black/50 border border-white/10 rounded">
              {[40, 85, 60, 30, 95, 45, 70, 55, 80, 25, 65, 90, 40, 75, 50].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-teal-400/80 rounded-t-sm animate-pulse"
                  style={{
                    height: `${h}%`,
                    animationDelay: `${i * 90}ms`,
                  }}
                />
              ))}
            </div>
            <span className="font-cond text-[8px] text-white/40 block mt-1.5">
              Listening to gravitational micro-echos in Sector 04...
            </span>
          </div>
        </div>

        {/* Right: Detailed Analysis (8 cols) */}
        <div className="lg:col-span-8 flex flex-col p-5 rounded border border-white/10 bg-black/30 backdrop-blur-md">
          {/* Header info */}
          <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/10 gap-2">
            <div>
              <span className="font-oswald text-xs text-purple-300 tracking-widest block">
                {selected.code} // {selected.zone}
              </span>
              <h3 className="font-oswald text-xl lg:text-2xl font-bold uppercase text-white mt-0.5">
                {selected.name}
              </h3>
            </div>
            <span className={`px-2.5 py-1 rounded text-[9.5px] font-cond font-bold uppercase tracking-widest border ${selected.dangerColor}`}>
              Threat: {selected.danger}
            </span>
          </div>

          {/* Tab bar */}
          <div className="flex gap-2 my-3">
            {[
              { id: 'notes', label: 'Hiro’s Field Log' },
              { id: 'tactics', label: 'Survival Protocols' },
              { id: 'phenomenon', label: 'Scientific Breakdown' },
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-3 py-1 rounded text-[10px] font-cond font-bold uppercase tracking-wider transition-all ${
                  activeTab === t.id
                    ? 'bg-white/20 text-white border border-white/30'
                    : 'text-white/50 hover:text-white bg-transparent'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-between">
            {activeTab === 'notes' && (
              <div className="p-4 rounded border border-white/10 bg-black/40 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-hero" />
                  <span className="font-cond text-xs font-bold uppercase tracking-wider text-red-hero">
                    Hiro Hamada — Audio Transcription #087
                  </span>
                </div>
                <p className="font-cond text-sm text-white/90 leading-relaxed italic border-l-2 border-red-hero pl-3">
                  "{selected.hiroNotes}"
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9px] font-cond text-white/40">
                  <span>RECORDED ON HIRO’S GAUNTLET DATA-LOG</span>
                  <span>TIME STAMP: T+03:42:19 INSIDE RIFT</span>
                </div>
              </div>
            )}

            {activeTab === 'tactics' && (
              <div className="flex flex-col gap-2.5 p-4 rounded border border-white/10 bg-black/40">
                <span className="font-cond text-xs font-bold uppercase tracking-wider text-teal-300">
                  Standard Operating Procedures (Hiro & Baymax)
                </span>
                <div className="space-y-2 mt-1">
                  {selected.tactics.map((tac, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="font-oswald text-xs font-bold text-teal-400 mt-0.5">0{i+1}.</span>
                      <p className="font-cond text-xs text-white/80 leading-snug">{tac}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'phenomenon' && (
              <div className="p-4 rounded border border-white/10 bg-black/40 flex flex-col gap-2">
                <span className="font-cond text-xs font-bold uppercase tracking-wider text-purple-300">
                  Physical and Spatial Dynamics
                </span>
                <p className="font-cond text-xs text-white/80 leading-relaxed">
                  {selected.desc}
                </p>
              </div>
            )}

            {/* Bottom Insight Card */}
            <div className="mt-4 p-3 rounded bg-purple-900/20 border border-purple-500/20 flex items-center justify-between">
              <div>
                <span className="font-cond text-[8.5px] uppercase tracking-widest text-purple-300 block">
                  Hiro & Baymax Synergy Index
                </span>
                <span className="font-oswald text-sm font-bold text-white">
                  Engineering Genius + Caregiver Strength = 98.4% Escape Probability
                </span>
              </div>
              <span className="px-2 py-1 rounded bg-purple-500/30 text-purple-200 text-[9px] font-cond font-bold uppercase">
                COOPERATIVE OVERRIDE ACTIVE
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
