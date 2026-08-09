/**
 * BoxingBackground
 *
 * A purely CSS-animated decorative layer — no JS, no libraries.
 * Drop this inside any <section> that has `position: relative; overflow: hidden`.
 * It renders completely behind all content (z-index: 0 or below).
 *
 * What it shows:
 *  • Three softly drifting gold/silver glow orbs
 *  • A slowly rotating ring-corner diamond accent
 *  • Four pulsing dot corners (like a boxing ring)
 *  • A floating glove silhouette SVG accent
 *
 * Usage:
 *   <section className="relative overflow-hidden">
 *     <BoxingBackground />
 *     <div className="relative z-10">...your content...</div>
 *   </section>
 */
export function BoxingBackground({ intensity = 'normal' }: { intensity?: 'subtle' | 'normal' | 'strong' }) {
  const opacityMap = { subtle: 0.4, normal: 0.7, strong: 1 }
  const o = opacityMap[intensity]

  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      {/* ── Glow Orb 1 — top-left warm gold ── */}
      <div
        className="orb-1 absolute rounded-full"
        style={{
          width: 480,
          height: 480,
          top: '-120px',
          left: '-80px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 65%)',
          opacity: o,
          filter: 'blur(1px)',
        }}
      />

      {/* ── Glow Orb 2 — bottom-right cooler silver ── */}
      <div
        className="orb-2 absolute rounded-full"
        style={{
          width: 560,
          height: 560,
          bottom: '-180px',
          right: '-120px',
          background: 'radial-gradient(circle, rgba(192,192,192,0.10) 0%, transparent 65%)',
          opacity: o,
          filter: 'blur(2px)',
        }}
      />

      {/* ── Glow Orb 3 — center subtle accent ── */}
      <div
        className="orb-3 absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          top: '30%',
          left: '45%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
          opacity: o,
        }}
      />

      {/* ── Rotating Ring Diamond — top-right ── */}
      <div
        className="spin-slow absolute"
        style={{
          width: 120,
          height: 120,
          top: '8%',
          right: '6%',
          opacity: 0.08 * o,
        }}
      >
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
          <rect
            x="20" y="20" width="80" height="80"
            stroke="#c9a84c"
            strokeWidth="1"
            transform="rotate(45 60 60)"
            rx="2"
          />
          <rect
            x="32" y="32" width="56" height="56"
            stroke="#C0C0C0"
            strokeWidth="0.5"
            transform="rotate(45 60 60)"
            rx="1"
          />
        </svg>
      </div>

      {/* ── Boxing Ring Corner Posts — four pulsing dots ── */}
      {[
        { top: '4%',  left:  '4%'  },
        { top: '4%',  right: '4%'  },
        { bottom: '4%', left: '4%' },
        { bottom: '4%', right: '4%'},
      ].map((pos, i) => (
        <div
          key={i}
          className="pulse-gold absolute rounded-full"
          style={{
            width: 6,
            height: 6,
            background: '#c9a84c',
            opacity: 0.4 * o,
            animationDelay: `${i * 0.75}s`,
            ...pos,
          }}
        />
      ))}

      {/* ── Ring Rope Lines (3 horizontal lines, subtle) ── */}
      <div
        className="absolute inset-x-0"
        style={{ top: '12%', opacity: 0.03 * o }}
      >
        {[0, 18, 36].map((offset) => (
          <div
            key={offset}
            className="absolute w-full"
            style={{
              top: offset,
              height: '1px',
              background: 'linear-gradient(90deg, transparent 0%, #c9a84c 20%, #C0C0C0 50%, #c9a84c 80%, transparent 100%)',
            }}
          />
        ))}
      </div>

      {/* ── Floating Glove Silhouette — bottom-left accent ── */}
      <div
        className="float-accent absolute"
        style={{
          bottom: '8%',
          left: '3%',
          opacity: 0.05 * o,
          width: 80,
          height: 80,
          animationDuration: '7s',
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          {/* Simplified boxing glove silhouette */}
          <ellipse cx="52" cy="42" rx="28" ry="32" fill="#c9a84c" />
          <ellipse cx="52" cy="68" rx="22" ry="12" fill="#c9a84c" />
          <ellipse cx="30" cy="50" rx="10" ry="18" fill="#c9a84c" />
        </svg>
      </div>

      {/* ── Floating Star Burst — top-center accent ── */}
      <div
        className="float-accent absolute"
        style={{
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 0.04 * o,
          width: 60,
          height: 60,
          animationDuration: '9s',
          animationDelay: '1.5s',
        }}
      >
        <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
          {/* 6-pointed star burst (dizzy stars motif) */}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <line
              key={angle}
              x1="30" y1="30"
              x2={30 + 24 * Math.cos((angle * Math.PI) / 180)}
              y2={30 + 24 * Math.sin((angle * Math.PI) / 180)}
              stroke="#c9a84c"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          ))}
          <circle cx="30" cy="30" r="4" fill="#c9a84c" />
        </svg>
      </div>
    </div>
  )
}
