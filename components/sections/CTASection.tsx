import { BoxingBackground } from '@/components/ui/BoxingBackground'

export function CTASection() {
  const phone = 'tel:+17163986362'
  const phoneDisplay = '+1 (716) 398-6362'

  return (
    <section
      id="contact"
      className="relative py-28 px-5 sm:px-8 border-t border-surface-border overflow-hidden"
    >
      <BoxingBackground intensity="subtle" />
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(201,168,76,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-gold mb-4">
          Let&apos;s Work Together
        </p>
        <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] text-text-primary leading-tight mb-6">
          Ready to grow your brand?
        </h2>
        <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Give us a call to get started. We&apos;ll map out exactly what content your brand needs
          to scale — no fluff, no pressure.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={phone}
            className="
              w-full sm:w-auto text-center
              px-9 py-4 rounded-full
              bg-accent-gold text-background font-bold text-sm tracking-wide
              hover:bg-accent-gold-hover shadow-glow-gold hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]
              transition-all duration-200 btn-jab
            "
          >
            📞 Call Us — {phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
