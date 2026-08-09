import Link from 'next/link'
import Image from 'next/image'
import { BoxingBackground } from '@/components/ui/BoxingBackground'

export function Hero() {
  // TODO: Replace '#' with your booking/calendar link (e.g. Calendly)
  const bookingUrl = 'tel:+17163986362'

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grain-overlay">
      {/* ── Boxing-themed ambient background animations ── */}
      <BoxingBackground intensity="normal" />

      {/* ── Background layers ──────────────────────────────────────── */}
      {/* Deep hero glow radiating from top-center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(201,168,76,0.10) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />
      {/* Subtle mid-screen ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 80% 60%, rgba(100,60,200,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      {/* Grid overlay — ultra subtle */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
        aria-hidden="true"
      />

      {/* ── Hero Content ───────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center pt-28 pb-20">
        {/* ── Brand logo ── */}
        <div className="flex justify-center mb-10 animate-fade-in">
          <Image
            src="/logo.png"
            alt="KO Media"
            width={480}
            height={160}
            className="h-36 sm:h-48 w-auto object-contain drop-shadow-[0_0_40px_rgba(201,168,76,0.30)]"
            priority
          />
        </div>

        {/* Pre-heading badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-accent-gold/30 bg-accent-gold/5 text-accent-gold text-xs font-semibold tracking-[0.15em] uppercase animate-fade-in"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
          Video Production · Social Media Content
        </div>

        {/* Main headline */}
        <h1
          className="text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[1.0] tracking-[-0.04em] text-text-primary mb-5 animate-fade-up"
          style={{ animationDelay: '80ms', animationFillMode: 'forwards' }}
        >
          Don&apos;t Just Compete.
          <br />
          <span className="text-gradient-gold">Knock Them Out.</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="max-w-2xl mx-auto text-[clamp(1rem,2.5vw,1.25rem)] text-text-secondary leading-relaxed font-light animate-fade-up opacity-0"
          style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
        >
          Scroll-stopping video production designed for{' '}
          <span className="text-text-primary font-medium">small businesses and brands</span>{' '}
          that are serious about growing their audience and driving real revenue.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-up opacity-0"
          style={{ animationDelay: '340ms', animationFillMode: 'forwards' }}
        >
          <Link
            href="/#portfolio"
            className="
              w-full sm:w-auto text-center
              px-8 py-3.5 rounded-full
              bg-accent-gold text-background font-bold text-sm tracking-wide
              hover:bg-accent-gold-hover shadow-glow-gold hover:shadow-[0_0_36px_rgba(201,168,76,0.4)]
              transition-all duration-200 btn-jab
            "
          >
            View Our Work
          </Link>
          <a
            href={bookingUrl}
            className="
              w-full sm:w-auto text-center
              px-8 py-3.5 rounded-full
              border border-surface-border text-text-primary font-semibold text-sm tracking-wide
              hover:border-accent-gold/50 hover:bg-surface
              transition-all duration-200
            "
          >
            📞 Call Us
          </a>
        </div>
        <p
          className="mt-10 text-xs text-text-muted tracking-widest uppercase animate-fade-in opacity-0"
          style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
        >
          Trusted by clubs, startups &amp; local brands
        </p>
      </div>

      {/* ── Scroll cue ─────────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
        <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted">Scroll</span>
        <svg
          className="w-4 h-4 text-text-muted animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
