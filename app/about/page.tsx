import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/sections/Footer'
import { LottiePlayer } from '@/components/ui/LottiePlayer'
import { BoxingBackground } from '@/components/ui/BoxingBackground'
import { TeamPhoto } from '@/components/ui/TeamPhoto'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet the team behind KO Media — premium video production delivering scroll-stopping content for brands ready to compete.',
}

const COMPANY_STATS = [
  { value: '70+', label: 'Videos Produced' },
  { value: '1M+', label: 'Combined Views' },
  { value: '20+', label: 'Clients Served' },
  { value: '$200k+', label: 'Raised for Clients' },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="pt-[68px] bg-background text-text-primary min-h-screen">

        {/* ── Hero Band ─────────────────────────────────────────────────── */}
        <section className="relative py-24 px-5 sm:px-8 text-center overflow-hidden">
          {/* Boxing-themed ambient background */}
          <BoxingBackground intensity="subtle" />
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 65%)',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Boxing-themed Lottie accent — activate in LottiePlayer.tsx */}
            <div className="flex justify-center mb-8">
              <LottiePlayer className="w-36 h-36 sm:w-44 sm:h-44" />
            </div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-gold mb-4">
              The Team Behind the KO
            </p>
            <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-black leading-[1.05] tracking-[-0.04em] text-text-primary mb-6">
              We Don&apos;t Just Shoot Videos.
              <br />
              <span className="text-gradient-gold">We Build Brands.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-text-secondary text-lg leading-relaxed">
              KO Media is a results-driven video production studio built for brands that are ready to
              step into the ring, dominate their market, and leave a lasting impression.
            </p>
          </div>
        </section>

        {/* ── Company Stats ─────────────────────────────────────────────── */}
        <section className="border-y border-surface-border bg-surface/50 py-12">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {COMPANY_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1.5">
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-gradient-gold">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-text-secondary tracking-wider uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Launch Video Placeholder ───────────────────────────────────── */}
        <section className="py-20 px-5 sm:px-8 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-gold mb-3">
              Our Story
            </p>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-text-primary">
              Watch the Launch Video
            </h2>
          </div>

          {/* YouTube Short — vertical 9:16 centered */}
          <div className="flex justify-center">
            <div
              className="relative rounded-2xl overflow-hidden border border-surface-border bg-surface shadow-[0_0_60px_rgba(201,168,76,0.06)] w-full max-w-sm"
              style={{ aspectRatio: '9/16' }}
            >
              <iframe
                src="https://www.youtube.com/embed/deQ6I-mG2v0"
                title="KO Media Launch Video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* ── Meet the Team ─────────────────────────────────────────────── */}
        <section className="py-20 px-5 sm:px-8 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-gold mb-3">
              The Crew
            </p>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-text-primary">
              Meet the Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

            {/* ── Kareem ── */}
            <div className="bg-surface-elevated rounded-2xl border border-surface-border hover:border-accent-silver/30 transition-colors duration-300 overflow-hidden group">
              {/*
               * Drop your photo at public/team/kareem.jpg — it will appear automatically.
               * Supported formats: .jpg, .jpeg, .png, .webp
               */}
              <TeamPhoto src="/team/kareem.jpg" name="Kareem" />

              <div className="p-7">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-text-primary">Kareem</h3>
                    <p className="text-accent-gold text-sm font-semibold tracking-wide">Creative & Technical Lead</p>
                  </div>
                  {/*
                   * ── LINKEDIN PLACEHOLDER (Kareem) ─────────────────────
                   * Replace href="#" with your LinkedIn profile URL
                   * e.g. href="https://linkedin.com/in/yourname"
                   */}
                  <a
                    href="https://www.linkedin.com/in/kholaif/" // TODO: Replace with Kareem's LinkedIn URL
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kareem's LinkedIn"
                    className="mt-1 text-text-muted hover:text-accent-gold transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>

                <p className="text-[11px] text-text-muted uppercase tracking-widest font-semibold mb-3 border-t border-surface-border pt-3">
                  Video · Film · Engineering
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  Kareem is the creative and technical engine of KO Media. With countless hours behind the
                  lens and in the edit bay, he has served as <strong className="text-text-primary font-semibold">Head of Media for 5 different organizations</strong>,
                  building high-impact visual narratives from the ground up.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Academically grounded with a <strong className="text-text-primary font-semibold">B.S. in Computer Engineering</strong> and currently
                  pursuing a <strong className="text-text-primary font-semibold">Master&apos;s in Machine Learning</strong>, Kareem brings a rare blend
                  of technical precision and creative intuition to every project — ensuring your content
                  not only looks exceptional but is built to perform.
                </p>
              </div>
            </div>

            {/* ── Omer ── */}
            <div className="bg-surface-elevated rounded-2xl border border-surface-border hover:border-accent-silver/30 transition-colors duration-300 overflow-hidden group">
              {/*
               * Drop your photo at public/team/omer.jpg — it will appear automatically.
               * Supported formats: .jpg, .jpeg, .png, .webp
               */}
              <TeamPhoto src="/team/omer.jpg" name="Omer" />

              <div className="p-7">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-text-primary">Omer</h3>
                    <p className="text-accent-gold text-sm font-semibold tracking-wide">Head of Business Development</p>
                  </div>
                  {/*
                   * ── LINKEDIN PLACEHOLDER (Omer) ───────────────────────
                   * Replace href="#" with Omer's LinkedIn profile URL
                   * e.g. href="https://linkedin.com/in/omername"
                   */}
                  <a
                    href="https://www.linkedin.com/in/omer-eljitan/" // TODO: Replace with Omer's LinkedIn URL
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Omer's LinkedIn"
                    className="mt-1 text-text-muted hover:text-accent-gold transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>

                <p className="text-[11px] text-text-muted uppercase tracking-widest font-semibold mb-3 border-t border-surface-border pt-3">
                  Strategy · Finance · Growth
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  Omer drives the business side of KO Media with the precision of a seasoned strategist.
                  Holding a <strong className="text-text-primary font-semibold">B.S. in Finance &amp; Marketing from Rutgers Business School</strong>,
                  he brings deep analytical expertise gained through multiple roles as a{' '}
                  <strong className="text-text-primary font-semibold">Financial Analyst</strong> and{' '}
                  <strong className="text-text-primary font-semibold">Head Fundraising Chair</strong>.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Omer ensures every campaign KO Media produces is tied directly to strategic growth
                  and measurable ROI — because great content should do more than look good. It should
                  fill pipelines, build audiences, and convert.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── CTA Strip ─────────────────────────────────────────────────── */}
        <section className="py-20 px-5 sm:px-8 text-center border-t border-surface-border relative overflow-hidden">
          <BoxingBackground intensity="subtle" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(201,168,76,0.07) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-text-primary mb-4">
              Ready to Step Into the Ring?
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-8">
              Let&apos;s build something that actually hits. Give us a call and
              we&apos;ll map out exactly what your brand needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+17163986362"
                className="
                  w-full sm:w-auto text-center
                  px-8 py-3.5 rounded-full
                  bg-accent-gold text-background font-bold text-sm tracking-wide
                  hover:bg-accent-gold-hover shadow-glow-gold
                  transition-all duration-200 btn-jab
                "
              >
                📞 Call Us
              </a>
              <Link
                href="/portfolio"
                className="
                  w-full sm:w-auto text-center
                  px-8 py-3.5 rounded-full
                  border border-accent-silver/30 text-text-secondary font-semibold text-sm
                  hover:border-accent-gold hover:text-text-primary
                  transition-all duration-200
                "
              >
                View Our Work →
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
