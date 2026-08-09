import type { Metadata } from 'next'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/sections/Footer'
import { BoxingBackground } from '@/components/ui/BoxingBackground'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with KO Media. Call us or connect on Instagram.',
}

const PHONE = '+1 (716) 398-6362'
const PHONE_HREF = 'tel:+17163986362'
const INSTAGRAM_URL = 'https://www.instagram.com/mediabyko/'
const INSTAGRAM_HANDLE = '@mediabyko'

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="pt-[68px] bg-background text-text-primary min-h-screen">

        {/* ── Hero ── */}
        <section className="relative py-24 px-5 sm:px-8 text-center overflow-hidden">
          <BoxingBackground intensity="subtle" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 65%)',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-gold mb-4">
              Let&apos;s Work Together
            </p>
            <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-black leading-[1.05] tracking-[-0.04em] text-text-primary mb-6">
              Ready to Step<br />
              <span className="text-gradient-gold">Into the Ring?</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              Reach out directly — we respond fast.
            </p>
          </div>
        </section>

        {/* ── Contact Cards ── */}
        <section className="py-16 px-5 sm:px-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Phone */}
            <a
              href={PHONE_HREF}
              className="group flex flex-col gap-4 bg-surface-elevated border border-accent-gold/30 hover:border-accent-gold rounded-2xl p-8 transition-all duration-300 hover:shadow-glow-gold"
            >
              <div className="w-12 h-12 rounded-full bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors">
                <svg className="w-6 h-6 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-black text-text-primary mb-1">Call Us</h2>
                <p className="text-text-secondary text-sm leading-relaxed mb-2">
                  The fastest way to get started. Give us a ring and let&apos;s talk about your brand.
                </p>
                <p className="text-accent-gold text-base font-bold">{PHONE}</p>
              </div>
              <span className="mt-auto inline-flex items-center gap-2 text-accent-gold text-sm font-semibold group-hover:gap-3 transition-all">
                Tap to call →
              </span>
            </a>

            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 bg-surface-elevated border border-surface-border hover:border-pink-500/40 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.644 1.772 1.153.509.5.902 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-black text-text-primary mb-1">Instagram</h2>
                <p className="text-text-secondary text-sm leading-relaxed mb-2">
                  See our latest work, behind-the-scenes, and follow along.
                </p>
                <p className="text-pink-400 text-base font-bold">{INSTAGRAM_HANDLE}</p>
              </div>
              <span className="mt-auto inline-flex items-center gap-2 text-text-secondary text-sm font-semibold group-hover:text-pink-400 group-hover:gap-3 transition-all">
                Open Instagram →
              </span>
            </a>

          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="relative py-20 px-5 sm:px-8 text-center border-t border-surface-border overflow-hidden">
          <BoxingBackground intensity="subtle" />
          <div className="relative z-10 max-w-xl mx-auto">
            <p className="text-text-secondary text-base leading-relaxed mb-8">
              Not sure where to start? Give us a call — it&apos;s free, no strings attached. We&apos;ll tell you exactly what your brand needs.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent-gold text-background font-bold text-sm tracking-wide hover:bg-accent-gold-hover shadow-glow-gold transition-all duration-200 btn-jab"
            >
              📞 Call {PHONE}
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
