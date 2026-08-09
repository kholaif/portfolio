const SERVICES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
    title: 'Short-form & Reels',
    description:
      'High-retention vertical video for Instagram, TikTok, and YouTube Shorts. Optimised hooks, pacing, and CTAs.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
    title: 'Long-form Video',
    description:
      'Event recaps, brand documentaries, and promotional films that tell your story with cinematic depth.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Motion & Animation',
    description:
      '2D logo animations, kinetic text, and brand reveals that make your identity unforgettable.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-28 px-5 sm:px-8 border-t border-surface-border">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* ── Left: Text ── */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-gold mb-4">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text-primary mb-6 leading-tight">
            Your audience is scrolling.
            <br />
            <span className="text-gradient-gold">Make them stop.</span>
          </h2>
          <p className="text-text-secondary leading-relaxed mb-5">
            I&apos;m a video producer and content strategist based in New Jersey, working with small
            businesses, campus clubs, and emerging brands who want content that actually performs —
            not just looks good on a portfolio.
          </p>
          <p className="text-text-secondary leading-relaxed">
            From the first concept call to the final export, I handle every step of the production
            process so you can focus on running your business.
          </p>
        </div>

        {/* ── Right: Service cards ── */}
        <div className="flex flex-col gap-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="flex gap-4 p-5 rounded-xl bg-surface border border-surface-border hover:border-accent-gold/20 transition-colors duration-200 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-gold/10 flex items-center justify-center text-accent-gold group-hover:bg-accent-gold/15 transition-colors">
                {service.icon}
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-1 text-sm">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
